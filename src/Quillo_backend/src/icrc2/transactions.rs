use super::cmc::CMC;
use crate::error_handler::CustomError;

use crate::icrc2::ledger::Ledger;
use candid::Principal;
use ic_cdk::id;
use ic_ledger_types::{
    AccountIdentifier, Memo, Subaccount, Tokens, TransferArgs, MAINNET_CYCLES_MINTING_CANISTER_ID,
};

pub static MEMO_TOP_UP_CANISTER: Memo = Memo(1347768404_u64);
pub static MEMO_CREATE_CANISTER: Memo = Memo(1095062083_u64);
pub static ICP_TRANSACTION_FEE: Tokens = Tokens::from_e8s(10000);

pub async fn mint_cycles(amount: Tokens) -> Result<candid::Nat, CustomError> {
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
                .map_err(|e| CustomError::custom(format!("Failed to create canister: {:?}", e))),
        },
        Err(err) => {
            Err(err).map_err(|e| CustomError::custom(format!("Failed to create canister: {:?}", e)))
        }
    }
}
