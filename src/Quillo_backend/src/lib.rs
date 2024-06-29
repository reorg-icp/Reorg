#[macro_use]
extern crate serde;
use candid::Nat;

use candid::Principal;
use error_handler::CustomError;

use icrc2::create_and_deploy_canister;
use daoservice::BasicDaoStableStorage as Dao;
use daoservice::UpdateSystemParamsPayload;

use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    BTreeMap, Cell, DefaultMemoryImpl,
};

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
    dao.system_params.transfer_fee = Some(
        payload
            .transfer_fee
            .ok_or(CustomError::MissingField("transfer_fee"))?,
    );

    dao.system_params.project_details = Some(payload
        .project_details
        .ok_or(CustomError::MissingField("project details"))?);

    dao.system_params.proposal_submission_deposit = Some(
        payload
            .proposal_submission_deposit
            .ok_or(CustomError::MissingField("proposal_submission_deposit"))?,
    );

    dao.system_params.proposal_vote_threshold = Some(
        payload
            .proposal_vote_threshold
            .ok_or(CustomError::MissingField("proposal_vote_threshold"))?,
    );

    dao.system_params.total_token_supply = Some(
        payload
            .total_token_supply
            .ok_or(CustomError::MissingField("total_token_supply"))?,
    );

    //we need to create an icrc2 token here

    Ok(dao)
}

#[ic_cdk::update]
fn register_dao(payload: UpdateSystemParamsPayload) -> Result<Dao, CustomError> {
    match _register_dao(payload) {
        Ok(dao) => {
            //construct the id
            let id = DAO_ID_COUNTER.with(|counter| {
                let counter_value = *counter.borrow().get();
                let _ = counter.borrow_mut().set(counter_value + 1);
                counter_value
            });
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
       owner
    ).await {
        Ok(canister_id) => Ok(canister_id),
        Err(e) => match e {
            CustomError::MissingField(_) => Err(String::from("A missing field was found when registering the DAO")),
            CustomError::custom(custom) => Err(custom),
        },
    }
}



fn match_get_dao(id: &u64) -> Option<Dao> {
    DAOS.with(|service| service.borrow().get(id))
}
ic_cdk::export_candid!();
