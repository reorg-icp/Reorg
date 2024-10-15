#[macro_use]
extern crate serde;

use application::Application;
use articles::Article;
use candid::types::principal;
use candid::Nat;
use candid::Principal;
use error_handler::CustomError;
use ic_cdk::api::call::RejectionCode;
use ic_ledger_types::account_balance;
use ic_ledger_types::AccountBalanceArgs;
use ic_ledger_types::AccountIdentifier;
use ic_ledger_types::BlockIndex;
use ic_ledger_types::Subaccount;
use ic_ledger_types::Tokens;
// use ic_cdk::api::call::call;
use daoservice::BasicDaoStableStorage as Dao;
use daoservice::UpdateSystemParamsPayload;
use ic_ledger_types::DEFAULT_SUBACCOUNT;
use icrc2::create_and_deploy_canister;

use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    BTreeMap, Cell, DefaultMemoryImpl,
};

use icrc7_and_icrc37::create_and_deploy_nft::create_and_deploy_canister_nft;
use icrc7_and_icrc37::types::Nft;
use icrc_ledger_types::icrc1::account::Account;
// use icrc_ledger_types::icrc2::approve;
use icrc_ledger_types::icrc2::approve::ApproveArgs;
use icrc_ledger_types::icrc2::approve::ApproveError;
// use icrc_ledger_types::icrc2::transfer_from;
// use icrc_ledger_types::icrc2::transfer_from::TransferFromArgs;
// use icrc_ledger_types::icrc2::transfer_from::TransferFromError;
use ic_ledger_types::{TransferArgs, TransferError};
use icrc_ledger_types::icrc2::transfer_from::TransferFromArgs;
use icrc_ledger_types::icrc2::transfer_from::TransferFromError;
use std::cell::RefCell;

mod application;
mod articles;
mod company;
mod daoservice;
mod error_handler;
mod icrc2;
mod utils;

pub mod rust_declarations {
    pub mod cmc_service;
    pub mod icp_ledger_service;
    pub mod types;
}
pub mod icrc7_and_icrc37{
    pub mod types;
    pub mod create_and_deploy_nft;
    

}
type Memory = VirtualMemory<DefaultMemoryImpl>;

type IdCell = Cell<u64, Memory>;

const ICRC1_LEDGER_WASM: &[u8] = include_bytes!("./assets/icrc1_ledger.wasm.gz");
const ICRC7_LEDGER_WASM: &[u8] = include_bytes!("./assets/icrc1_ledger.wasm.gz");

thread_local! {

    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));



   static DAOS: RefCell<BTreeMap< u64,Dao,Memory>> = RefCell::new(
        BTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
        )
    );
static APPLICATIONS: RefCell<BTreeMap<u64, Application,Memory>>= RefCell::new(
    BTreeMap::init(   MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),)
);

    static DAO_ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(2))), 0)
            .expect("Cannot create a  DAO counter")
    );
     static APPLICATION_ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(3))), 0)
            .expect("Cannot create a  DAO counter")
    );
   static ARTICLES: RefCell<BTreeMap< u64,Article,Memory>> = RefCell::new(
        BTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(4))),
        )
    );
     static ARTICALS_ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(5))), 0)
            .expect("Cannot create a  DAO counter")
    );



}

fn _register_dao(payload: UpdateSystemParamsPayload) -> Result<Dao, CustomError> {
    let mut dao = Dao::default();

    if let Some(transfer_fee) = payload.transfer_fee {
        dao.system_params.transfer_fee = Some(transfer_fee);
    }

    if let Some(project_details) = payload.project_details {
        dao.system_params.project_details = Some(project_details);
    }

    if let Some(proposal_submission_deposit) = payload.proposal_submission_deposit {
        dao.system_params.proposal_submission_deposit = Some(proposal_submission_deposit);
    }

    if let Some(proposal_vote_threshold) = payload.proposal_vote_threshold {
        dao.system_params.proposal_vote_threshold = Some(proposal_vote_threshold);
    }

    if let Some(total_token_supply) = payload.total_token_supply {
        dao.system_params.total_token_supply = Some(total_token_supply);
    }

    // we need to create an icrc2 token here

    Ok(dao)
}


#[ic_cdk::update]
async fn launch_nft(
    Nft { 
        minting_principal, symbol, name, description, logo, supply_cap 
    }: Nft
) -> Result<Principal, String> {
    let nft = Nft {
        minting_principal,
        symbol,
        name,
        description,
        logo,
        supply_cap,
    };

    match create_and_deploy_canister_nft(nft).await {
        Ok(canister_id) => {
            ic_cdk::println!("Token created successfully");
            Ok(canister_id)
        },
        Err(e) => {
            ic_cdk::println!("Failed to create token: {:?}", e);
            Err(e.to_string())
        }
    }
}



#[ic_cdk::update]
async fn launch_token(id: u64) -> Result<Principal, String> {
    let dao = match match_get_dao(&id).ok_or_else(|| format!("DAO with id={} not found", id)) {
        Ok(dao) => dao,
        Err(e) => return Err(e),
    };

    let token_details = match dao
        .system_params
        .project_details
        .clone()
        .and_then(|details| details.tokenomics)
    {
        Some(tokenomics) => tokenomics,
        None => return Err(String::from("Tokenomics details not found for the DAO")),
    };
    let owner = dao
        .system_params
        .project_details
        .unwrap()
        .project_principal
        .unwrap();

    match create_and_deploy_canister(
        token_details.token_name,
        token_details.token_symbol,
        token_details.transfer_fee,
        token_details.total_supply,
        token_details.token_image,
        Principal::from_text(owner).unwrap(),
    )
    .await
    {
        Ok(canister_id) => {
            //do sth else

            let mut project =
                match match_get_dao(&id).ok_or_else(|| format!("DAO with id={} not found", id)) {
                    Ok(dao) => dao,
                    Err(e) => return Err(e),
                };
            project.token_id = Some(canister_id);

            DAOS.with(|service| service.borrow_mut().insert(id, project.clone()));

            Ok(canister_id)
        }
        Err(e) => match e {
            CustomError::MissingField(_) => Err(String::from(
                "A missing field was found when registering the DAO",
            )),
            CustomError::custom(custom) => Err(custom),
        },
    }
    //add token_id in that particular
}

#[ic_cdk::update]
async fn get_icp_balance(principal_id: String) -> Tokens {
    ic_cdk::println!("Fetching balance for Principal ID: {}", principal_id);

    let account_identifier = AccountIdentifier::new(
        &Principal::from_text(principal_id.clone()).unwrap(),
        &DEFAULT_SUBACCOUNT,
    );

    ic_cdk::println!("Account Identifier: {:?}", account_identifier);

    let balance_args: AccountBalanceArgs = AccountBalanceArgs {
        account: account_identifier,
    };

    ic_cdk::println!("Balance Arguments: {:?}", balance_args);

    let ic_balance = account_balance(
        Principal::from_text("ryjl3-tyaaa-aaaaa-aaaba-cai").unwrap(),
        balance_args,
    )
    .await;

    match ic_balance {
        Ok(balance) => {
            ic_cdk::println!("Balance in e8s: {}", balance.e8s());

            balance
        }
        Err(e) => {
            ic_cdk::println!("Error fetching balance: {:?}", e);

            Tokens::from_e8s(0)
        }
    }
}

#[ic_cdk::update]
async fn approve_transfer() -> Result<BlockIndex, String> {
    let approve_args = ApproveArgs {
        spender: Account::from(Principal::from_text("ircua-hiaaa-aaaap-qhkvq-cai").unwrap()),
        from_subaccount: None,
        amount: Nat::from(20000000u64),
        created_at_time: None,
        expected_allowance: None,
        expires_at: None,
        fee: None,
        memo: None,
    };

    ic_cdk::call::<(ApproveArgs,), (Result<BlockIndex, ApproveError>,)>(
        Principal::from_text("ryjl3-tyaaa-aaaaa-aaaba-cai")
            .expect("Could not decode the principal."),
        "icrc2_approve",
        (approve_args,),
    )
    .await
    .map_err(|e| format!("failed to call ledger: {:?}", e))?
    .0
    .map_err(|e| format!("ledger transfer error {:?}", e))
}
// #[ic_cdk::update]

// async fn transfer_icp() -> Result<BlockIndex, String> {

//     let transfer_from_args = TransferFromArgs {
//         spender_subaccount: None,
//         amount: Nat::from(20000000u64),
//         created_at_time: None,
//         fee: None,
//         from:Account::from(ic_cdk::caller()),
//         to:Account::from(Principal::from_text("ircua-hiaaa-aaaap-qhkvq-cai").unwrap()),
//         memo: None,
//     };

//         ic_cdk::call::<(TransferFromArgs,), (Result<BlockIndex, TransferFromError>,)>(
//             Principal::from_text("ryjl3-tyaaa-aaaaa-aaaba-cai")
//                 .expect("Could not decode the principal."),
//             "icrc2_transfer_from",
//             (transfer_from_args,),
//         )
//         .await
//         .map_err(|e| format!("failed to call ledger: {:?}", e))?
//         .0 .map_err(|e| format!("ledger transfer error {:?}", e))

// }

#[ic_cdk::query]
async fn get_projects() -> Vec<(u64, Dao)> {
    let projects: Vec<_> = DAOS.with(|storage| storage.borrow().iter().collect());

    projects
}
#[ic_cdk::query]
async fn get_single_project(id: u64) -> Result<Dao, String> {
    match_get_dao(&id).ok_or_else(|| format!("Project with id={} not found", id))
}

fn match_get_dao(id: &u64) -> Option<Dao> {
    DAOS.with(|service| service.borrow().get(id))
}

#[ic_cdk::update]
async fn delete_all_daos() -> Result<String, String> {
    DAOS.with(|projects| {
        let mut projects = projects.borrow_mut();
        let keys: Vec<u64> = projects.iter().map(|(k, _)| k).collect();
        for key in keys {
            projects.remove(&key);
        }
    });
    Ok(String::from("All projects deleted successfully"))
}
#[ic_cdk::update]
fn apply(application_payload: Application) -> String {
    let id = APPLICATION_ID_COUNTER.with(|counter| {
        let counter_value = *counter.borrow().get();
        let _ = counter.borrow_mut().set(counter_value + 1);
        counter_value
    });

    APPLICATIONS.with(|service| service.borrow_mut().insert(id, application_payload));
    format!("Application was saved succesfully")
}
#[ic_cdk::query]
fn get_applications() -> Vec<(u64, Application)> {
    let applications: Vec<_> = APPLICATIONS.with(|storage| storage.borrow().iter().collect());

    applications
}
#[ic_cdk::query]
fn get_single_application(id: u64) -> Result<Application, String> {
    match_get_application(&id).ok_or_else(|| format!("Application  with id={} not found", id))
}
fn match_get_application(id: &u64) -> Option<Application> {
    APPLICATIONS.with(|service| service.borrow().get(id))
}

#[ic_cdk::update]
async fn publish_article(content: String, title: String) -> Result<String, String> {
    let id = ARTICALS_ID_COUNTER.with(|counter| {
        let counter_value = *counter.borrow().get();
        let _ = counter.borrow_mut().set(counter_value + 1);
        counter_value
    });
    let dust = Article { content, title, id };

    match do_insert_article(&dust, id) {
        Some(e) => Ok(String::from("Posted succesfully")),
        None => Ok(String::from("Posted succesfully")),
    }
}
fn do_insert_article(artical: &Article, id: u64) -> Option<Article> {
    ARTICLES.with(|service| service.borrow_mut().insert(id, artical.clone()))
}
#[ic_cdk::update]
async fn delete_all_articles() -> Result<String, String> {
    ARTICLES.with(|articles| {
        let mut articles = articles.borrow_mut();
        let keys: Vec<u64> = articles.iter().map(|(k, _)| k).collect();
        for key in keys {
            articles.remove(&key);
        }
    });
    Ok(String::from("All articles deleted successfully"))
}
#[ic_cdk::query]
async fn get_articles() -> Vec<(u64, Article)> {
    let articles: Vec<_> = ARTICLES.with(|storage| storage.borrow().iter().collect());

    articles
}
#[ic_cdk::query]
async fn get_single_article(id: u64) -> Result<Article, String> {
    match_get_article(&id).ok_or_else(|| format!("Article with id={} not found", id))
}

fn match_get_article(id: &u64) -> Option<Article> {
    ARTICLES.with(|service| service.borrow().get(id))
}
#[ic_cdk::update]

async fn buy_tokens(token_id: String, amount: Nat, token_owner: String) -> Result<Nat, String> {
    let approve_result = _approve_spending(
        Principal::from_text("ryjl3-tyaaa-aaaaa-aaaba-cai").unwrap(),
        amount.clone(),
        Principal::from_text(token_id.clone()).unwrap(),
    )
    .await;

    match approve_result {
        Ok(_) => {
            //First the user needs to transfer some ICP to the token owner, where we cut a transaction cost then the token owner sends some Tokens to the caller
            let caller_acc = Account::from(ic_cdk::caller());
            let transfer_from_args = TransferFromArgs {
                from: caller_acc,
                to: Account::from(Principal::from_text(token_owner.clone()).unwrap()),
                amount: amount.clone(),
                fee: None,
                memo: None,
                spender_subaccount: None,
                created_at_time: None,
            };
            let transfer_result =
                ic_cdk::call::<(TransferFromArgs,), (Result<BlockIndex, TransferFromError>,)>(
                    Principal::from_text("ryjl3-tyaaa-aaaaa-aaaba-cai")
                        .expect("Could not decode the principal"),
                    "icrc2_transfer_from",
                    (transfer_from_args,),
                )
                .await
                .map_err(|e| format!("Failed to call ledger :{:?}", e))?
                .0;

            match transfer_result {
                Ok(_) => {
                    //do more here like teransgerring tokens in to the user and cutting a transaction
                    let _token_approve_result = _approve_spending(
                        Principal::from_text(token_id.clone()).unwrap(),
                        amount.clone(),
                        Principal::from_text("ircua-hiaaa-aaaap-qhkvq-cai").unwrap(),
                    )
                    .await?;

                    let transfer_from_args = TransferFromArgs {
                        from: Account::from(Principal::from_text(token_owner.clone()).unwrap()),
                        to: caller_acc,
                        amount: amount.clone(),
                        fee: None,
                        memo: None,
                        spender_subaccount: None,
                        created_at_time: None,
                    };
                    let transfer_result2 = ic_cdk::call::<
                        (TransferFromArgs,),
                        (Result<BlockIndex, TransferFromError>,),
                    >(
                        Principal::from_text(token_id).expect("Could not decode the principal"),
                        "icrc2_transfer_from",
                        (transfer_from_args,),
                    )
                    .await
                    .map_err(|e| format!("Failed to call ledger :{:?}", e))?
                    .0;
                    match transfer_result2 {
                        Ok(index) => Ok(index.into()),
                        Err(e) => Err(format!("ledger transfer error: {:?}", e)),
                    }
                }
                Err(e) => Err(format!("ledger transfer error: {:?}", e)),
            }
        }
        Err(e) => Err(format!("ledger transfer error: {:?}", e)),
    }
}

async fn _approve_spending(
    token_id: Principal,
    amount: Nat,
    spender: Principal,
) -> Result<Nat, String> {
    //we need to approve our backend to spend on behalf of the user
    let approve_args = ApproveArgs {
        from_subaccount: None,
        spender: Account::from(spender),
        amount,
        expected_allowance: None,
        expires_at: None,
        fee: None,
        memo: None,
        created_at_time: None,
    };
    let approve_result = ic_cdk::call::<(ApproveArgs,), (Result<Nat, ApproveError>,)>(
        token_id,
        "icrc2_approve",
        (approve_args,),
    )
    .await
    .map_err(|e| format!("Failed to call ledger :{:?}", e))?
    .0;
    match approve_result {
        Ok(block) => Ok(block),
        Err(e) => Err(format!("There was an approve error !! {:?}", e)),
    }
}

#[ic_cdk::update]
async fn register_dao(payload: UpdateSystemParamsPayload) -> Result<Dao, CustomError> {
    match _register_dao(payload) {
        Ok(mut dao) => {
            //construct the id
            let id = DAO_ID_COUNTER.with(|counter| {
                let counter_value = *counter.borrow().get();
                let _ = counter.borrow_mut().set(counter_value + 1);
                counter_value
            });
            dao.id = id;
            //Update the storage
            DAOS.with(|service| service.borrow_mut().insert(id, dao.clone()));
            Ok(dao)
        }
        Err(error) => Err(error),
    }
}

ic_cdk::export_candid!();
