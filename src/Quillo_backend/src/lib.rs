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

    dao.system_params.registration_details = payload
        .registration_details
        .ok_or(CustomError::MissingField("registration_details"))?;

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
async fn create_icrc2_token(
    token_name: String,
    token_symbol: String,
    transfer_fee: Nat,
    total_supply: Nat,
    token_image: String,
    dao_id: Principal,
) -> Result<Principal, String> {
    let result = create_and_deploy_canister(
        token_name,
        token_symbol,
        transfer_fee,
        total_supply,
        token_image,
        dao_id,
    )
    .await;
    match result {
        Ok(canister_id) => Ok(canister_id),
        Err(e) => match e {
            CustomError::MissingField(_) => Err(String::from(
                "A missing field was found when registering the DAO",
            )),
            CustomError::custom(custom) => Err(custom),
        },
    }
}
ic_cdk::export_candid!();
