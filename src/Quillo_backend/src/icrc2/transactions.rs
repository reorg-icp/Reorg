use super::cmc::CMC;
use crate::{
    error_handler::TokenError, icrc2::create_and_deploy_canister,
    rust_declarations::types::TransactionData,
};
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    BoundedStorable, DefaultMemoryImpl, StableBTreeMap, Storable,
};

use crate::icrc2::ledger::Ledger;
use candid::{CandidType, Decode, Encode, Nat, Principal};
use ic_cdk::id;
use ic_ledger_types::{
    account_balance, AccountBalanceArgs, AccountIdentifier, Memo, Subaccount, Tokens, TransferArgs,
    DEFAULT_SUBACCOUNT, MAINNET_CYCLES_MINTING_CANISTER_ID, MAINNET_LEDGER_CANISTER_ID,
};

use std::{borrow::Cow, cell::RefCell, convert::TryFrom, ops::Sub};
type Memory = VirtualMemory<DefaultMemoryImpl>;
#[derive(Debug, Serialize, Deserialize, CandidType, Clone, PartialEq, Eq, PartialOrd, Ord)]
pub struct Balance {
    amount: String,
}
// thread_local! {
//     static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
//         RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

//     pub static TRANSACTIONS: RefCell<StableBTreeMap<u64, TransactionData, Memory>> = RefCell::new(
//         StableBTreeMap::init(
//             MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),
//         )
//     );

//     pub static CALLER_ICP_BALANCE: RefCell<StableBTreeMap<Balance, u64, Memory>> = RefCell::new(
//         StableBTreeMap::init(
//             MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(2))),
//         )
//     );
// }

pub static MEMO_TOP_UP_CANISTER: Memo = Memo(1347768404_u64);
pub static MEMO_CREATE_CANISTER: Memo = Memo(1095062083_u64);
pub static ICP_TRANSACTION_FEE: Tokens = Tokens::from_e8s(10000);

// pub struct TokenOffering;

// impl TokenOffering {
//     pub async fn get_icp_balance(caller: Principal) -> Result<u64, String> {
//         let result = account_balance(
//             MAINNET_LEDGER_CANISTER_ID,
//             AccountBalanceArgs {
//                 account: AccountIdentifier::new(&caller, &DEFAULT_SUBACCOUNT),
//             },
//         )
//         .await;

//         match result {
//             Ok(balance) => Ok(balance.e8s()),
//             Err((_, err)) => Err(err),
//         }
//     }
//     pub fn get_cycles() -> u64 {
//         ic_cdk::api::canister_balance()
//     }

//     pub async fn top_up_self(
//         caller: Principal,
//         icp_block_index: u64,
//         amount: Tokens,
//         fee: Tokens,
//     ) -> Result<Nat, String> {
//         let multig_spinup_ledger_args = TransferArgs {
//             memo: MEMO_TOP_UP_CANISTER,
//             amount,
//             fee: ICP_TRANSACTION_FEE,
//             from_subaccount: Some(Subaccount::from(
//                 Principal::from_text(
//                     "owu57-ix3tx-4pgh7-pmu7n-dzlor-tqljq-wui5j-g5b2g-mtnfa-yklry-mae",
//                 )
//                 .unwrap(),
//             )),
//             to: AccountIdentifier::new(
//                 &MAINNET_CYCLES_MINTING_CANISTER_ID,
//                 &Subaccount::from(id()),
//             ),
//             created_at_time: None,
//         };

//         // Pass the amount received from the user, from this canister to the cycles management canister (minus the fee)
//         match Ledger::transfer_icp(multig_spinup_ledger_args).await {
//             // If the transaction is successfull, return the block index of the transaction
//             Ok(cmc_block_index) => match CMC::top_up_self(cmc_block_index).await {
//                 Ok(cycles) => Ok(cycles),
//                 Err(err) => Err(err),
//             },
//             Err(err) => Err(err.to_string()),
//         }
//     }

//     pub async fn spawn_token(
//         caller: Principal,
//         icp_block_index: u64,
//         amount: Tokens,
//         fee: Tokens,
//         token_name: String,
//         token_symbol: String,
//         token_image: String,
//         total_supply: Nat,
//         transfer_fee: Nat,
//     ) {
//         let spin_up_result = Self::top_up_self(caller, icp_block_index, amount, fee).await;
//         match spin_up_result {
//             Ok(cycles) => {
//                 let canister_id = create_and_deploy_canister(
//                     token_name,
//                     token_symbol,
//                     transfer_fee,
//                     total_supply,
//                     token_image,
//                     cycles.0.to_u128().unwrap(),
//                 )
//                 .await
//                 .unwrap();
//                 //spin up a canister token
//             }
//             Err(e) => {}
//         }
//     }
// }
// impl Storable for Balance {
//     fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
//         Cow::Owned(Encode!(self).unwrap())
//     }

//     fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
//         Decode!(bytes.as_ref(), Self).unwrap()
//     }
// }

// impl BoundedStorable for Balance {
//     const MAX_SIZE: u32 = 102400;
//     const IS_FIXED_SIZE: bool = false;
// }
pub async fn mint_cycles(amount: Tokens) -> Result<candid::Nat, TokenError> {
    ic_cdk::print(&MAINNET_CYCLES_MINTING_CANISTER_ID.to_string());
    let transfer_args = TransferArgs {
        memo: MEMO_TOP_UP_CANISTER,
        amount,
        fee: ICP_TRANSACTION_FEE,
        from_subaccount: Some(Subaccount::from(
            Principal::from_text("owu57-ix3tx-4pgh7-pmu7n-dzlor-tqljq-wui5j-g5b2g-mtnfa-yklry-mae")
                .unwrap(),
        )),
        to: AccountIdentifier::new(
            &Principal::from_text("rkp4c-7iaaa-aaaaa-aaaca-cai").unwrap(),
            &Subaccount::from(id()),
        ),
        created_at_time: None,
    };

    match Ledger::transfer_icp(transfer_args).await {
        // If the transaction is successfull, return the block index of the transaction
        Ok(cmc_block_index) => match CMC::top_up_self(cmc_block_index).await {
            Ok(cycles) => Ok(cycles),
            Err(err) => Err(err)
                .map_err(|e| TokenError::custom(format!("Failed to create canister: {:?}", e))),
        },
        Err(err) => {
            Err(err).map_err(|e| TokenError::custom(format!("Failed to create canister: {:?}", e)))
        }
    }
}
