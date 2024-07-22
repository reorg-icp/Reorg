#[macro_use]
extern crate serde;


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
use ic_cdk::api::call::call;
use ic_ledger_types::DEFAULT_SUBACCOUNT;
use icrc2::create_and_deploy_canister;
use daoservice::BasicDaoStableStorage as Dao;
use daoservice::UpdateSystemParamsPayload;

use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    BTreeMap, Cell, DefaultMemoryImpl,
};
use icrc_ledger_types::icrc1::account::Account;
use icrc_ledger_types::icrc2::approve;
use icrc_ledger_types::icrc2::approve::ApproveArgs;
use icrc_ledger_types::icrc2::approve::ApproveError;
use icrc_ledger_types::icrc2::transfer_from;
use icrc_ledger_types::icrc2::transfer_from::TransferFromArgs;
use icrc_ledger_types::icrc2::transfer_from::TransferFromError;

use std::cell::RefCell;

mod company;
mod error_handler;
mod icrc2;
mod daoservice;
mod utils;
pub mod rust_declarations {
    pub mod cmc_service;
    pub mod icp_ledger_service;
    pub mod types;
}
type Memory = VirtualMemory<DefaultMemoryImpl>;

type IdCell = Cell<u64, Memory>;

const ICRC1_LEDGER_WASM: &[u8] = include_bytes!("./assets/icrc1_ledger.wasm.gz");

thread_local! {

    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));



   static DAOS: RefCell<BTreeMap< u64,Dao,Memory>> = RefCell::new(
        BTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
        )
    );


    static DAO_ID_COUNTER: RefCell<IdCell> = RefCell::new(
        IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))), 0)
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
fn register_dao(payload: UpdateSystemParamsPayload) -> Result<Dao, CustomError> {
    match _register_dao(payload) {
        Ok(mut dao) => {
            //construct the id
            let id = DAO_ID_COUNTER.with(|counter| {
                let counter_value = *counter.borrow().get();
                let _ = counter.borrow_mut().set(counter_value + 1);
                counter_value
            });
            dao.id=id;
            //Update the storage
            DAOS.with(|service| service.borrow_mut().insert(id, dao.clone()));
            Ok(dao)
        }
        Err(error) => Err(error),
    }
}
#[ic_cdk::update]
async fn launch_token(
   
    id: u64
) -> Result<Principal, String> {
  
    let dao = match match_get_dao(&id).ok_or_else(|| format!("DAO with id={} not found", id)) {
        Ok(dao) => dao,
        Err(e) => return Err(e),
    };


    let token_details = match dao.system_params.project_details.clone().and_then(|details| details.tokenomics) {
        Some(tokenomics) => tokenomics,
        None => return Err(String::from("Tokenomics details not found for the DAO")),
    };
let owner=dao.system_params.project_details.unwrap().project_principal.unwrap();
   
    match create_and_deploy_canister(
        token_details.token_name,
        token_details.token_symbol,
        token_details.transfer_fee,
        token_details.total_supply,
        token_details.token_image,
      Principal::from_text(owner).unwrap()
    ).await {
        Ok(canister_id) => Ok(canister_id),
        Err(e) => match e {
            CustomError::MissingField(_) => Err(String::from("A missing field was found when registering the DAO")),
            CustomError::custom(custom) => Err(custom),
        },
    }
}

#[ic_cdk::query]

fn greet(name:String)->String{
    name
}

fn match_get_dao(id: &u64) -> Option<Dao> {
    DAOS.with(|service| service.borrow().get(id))
}


#[ic_cdk::update]
async fn get_icp_balance(principal_id: String) -> Tokens {

    ic_cdk::println!("Fetching balance for Principal ID: {}", principal_id);

  
    let account_identifier = AccountIdentifier::new(
        &Principal::from_text(principal_id.clone()).unwrap(),
        &DEFAULT_SUBACCOUNT
    );

    ic_cdk::println!("Account Identifier: {:?}", account_identifier);

    let balance_args: AccountBalanceArgs = AccountBalanceArgs {
        account: account_identifier,
    };

 
    ic_cdk::println!("Balance Arguments: {:?}", balance_args);

  
    let ic_balance = account_balance(Principal::from_text("ryjl3-tyaaa-aaaaa-aaaba-cai").unwrap(), balance_args)
        .await;

    match ic_balance {
        Ok(balance) => {
          
            ic_cdk::println!("Balance in e8s: {}", balance.e8s());

         
            balance
        },
        Err(e) => {
        
            ic_cdk::println!("Error fetching balance: {:?}", e);

            Tokens::from_e8s(0)
        }
    }
}


#[ic_cdk::update]
async fn approve_transfer() -> Result<BlockIndex, String> {

    let approve_args = ApproveArgs {
        spender:Account::from(Principal::from_text("ircua-hiaaa-aaaap-qhkvq-cai").unwrap()),
        from_subaccount:None,
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
        .0.map_err(|e| format!("ledger transfer error {:?}", e))


  

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



ic_cdk::export_candid!();
