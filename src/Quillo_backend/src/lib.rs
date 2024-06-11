#[macro_use]
extern crate serde;
use error_handler::DaoError;
use error_handler::TokenError;
use icrc2::create_and_deploy_canister;
use types::BasicDaoStableStorage as Dao;
use types::UpdateSystemParamsPayload;

use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    BTreeMap, Cell, DefaultMemoryImpl,
};

use std::cell::RefCell;
use std::fmt::Debug;
mod dao;
mod error_handler;
mod icrc2;
mod types;
mod utils;

type Memory = VirtualMemory<DefaultMemoryImpl>;

type IdCell = Cell<u64, Memory>;
use ic_cdk_macros::init;

// Embed the file at compile time
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

fn _register_dao(payload: UpdateSystemParamsPayload) -> Result<Dao, DaoError> {
    let mut dao = Dao::default();
    dao.system_params.transfer_fee = payload
        .transfer_fee
        .ok_or(DaoError::MissingField("transfer_fee"))?;

    dao.system_params.registration_details = payload
        .registration_details
        .ok_or(DaoError::MissingField("registration_details"))?;

    dao.system_params.proposal_submission_deposit = payload
        .proposal_submission_deposit
        .ok_or(DaoError::MissingField("proposal_submission_deposit"))?;

    dao.system_params.proposal_vote_threshold = payload
        .proposal_vote_threshold
        .ok_or(DaoError::MissingField("proposal_vote_threshold"))?;

    dao.system_params.total_token_supply = payload
        .total_token_supply
        .ok_or(DaoError::MissingField("total_token_supply"))?;

    //we need to create an icrc2 token here

    Ok(dao)
}

#[ic_cdk::update]
fn register_dao(payload: UpdateSystemParamsPayload) -> Result<Dao, DaoError> {
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
async fn create_icrc2_token() -> Result<String, String> {
    let result = create_and_deploy_canister().await;
    match result {
        Ok(canister_id) => Ok(canister_id),
        Err(e) => match e {
            TokenError::IO(err) => Err(String::from("Could not decompress the wasm")),
            TokenError::custom(custom) => Err(custom),
        },
    }
}
ic_cdk::export_candid!();
