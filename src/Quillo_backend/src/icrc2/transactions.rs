use super::cmc::CMC;
use crate::icrc2::create_and_deploy_canister;
use crate::icrc2::ledger::Ledger;
use candid::{Nat, Principal};
use ic_cdk::id;
use ic_ledger_types::{
    account_balance, AccountBalanceArgs, AccountIdentifier, Memo, Subaccount, Tokens, TransferArgs,
    DEFAULT_SUBACCOUNT, MAINNET_CYCLES_MINTING_CANISTER_ID, MAINNET_LEDGER_CANISTER_ID,
};
use rust_decimal::prelude::ToPrimitive;
pub static MEMO_TOP_UP_CANISTER: Memo = Memo(1347768404_u64);
pub static MEMO_CREATE_CANISTER: Memo = Memo(1095062083_u64);
pub static ICP_TRANSACTION_FEE: Tokens = Tokens::from_e8s(10000);

pub struct TokenOffering;

impl TokenOffering {
    pub async fn get_icp_balance(caller: Principal) -> Result<u64, String> {
        let result = account_balance(
            MAINNET_LEDGER_CANISTER_ID,
            AccountBalanceArgs {
                account: AccountIdentifier::new(&caller, &DEFAULT_SUBACCOUNT),
            },
        )
        .await;

        match result {
            Ok(balance) => Ok(balance.e8s()),
            Err((_, err)) => Err(err),
        }
    }
    pub fn get_cycles() -> u64 {
        ic_cdk::api::canister_balance()
    }

    pub async fn top_up_self(
        caller: Principal,
        icp_block_index: u64,
        amount: Tokens,
        fee: Tokens,
    ) -> Result<Nat, String> {
        let multig_spinup_ledger_args = TransferArgs {
            memo: MEMO_TOP_UP_CANISTER,
            amount,
            fee: ICP_TRANSACTION_FEE,
            from_subaccount: None,
            to: AccountIdentifier::new(
                &MAINNET_CYCLES_MINTING_CANISTER_ID,
                &Subaccount::from(id()),
            ),
            created_at_time: None,
        };

        // Pass the amount received from the user, from this canister to the cycles management canister (minus the fee)
        match Ledger::transfer_icp(multig_spinup_ledger_args).await {
            // If the transaction is successfull, return the block index of the transaction
            Ok(cmc_block_index) => match CMC::top_up_self(cmc_block_index).await {
                Ok(cycles) => Ok(cycles),
                Err(err) => Err(err),
            },
            Err(err) => Err(err.to_string()),
        }
    }

    pub async fn spawn_token(
        caller: Principal,
        icp_block_index: u64,
        amount: Tokens,
        fee: Tokens,
        token_name: String,
        token_symbol: String,
        token_image: String,
        total_supply: Nat,
        transfer_fee: Nat,
    ) {
        let spin_up_result = Self::top_up_self(caller, icp_block_index, amount, fee).await;
        match spin_up_result {
            Ok(cycles) => {
                let canister_id = create_and_deploy_canister(
                    token_name,
                    token_symbol,
                    transfer_fee,
                    total_supply,
                    token_image,
                    cycles.0.to_u128().unwrap(),
                )
                .await
                .unwrap();
                //spin up a canister token
            }
            Err(e) => {}
        }
    }
}
