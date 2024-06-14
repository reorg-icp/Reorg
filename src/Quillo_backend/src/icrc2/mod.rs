use candid::Encode;
use candid::Nat;
use candid::Principal;
use ic_cdk::api::management_canister::main::{
    create_canister, install_code, CanisterSettings, CreateCanisterArgument, InstallCodeArgument,
};

use ic_ledger_types::Tokens;
use icrc_ledger_types::icrc1::account::Account;
use ledger_types::ArchiveOptions;
use ledger_types::FeatureFlags;
use ledger_types::InitArgs;
use transactions::mint_cycles;

use crate::error_handler::CustomError;
use crate::icrc2::ledger_types::LedgerArg;

use crate::ICRC1_LEDGER_WASM;

use icrc_ledger_types::icrc::generic_value::Value::Text;

pub mod cmc;
pub mod ledger;
mod ledger_types;
mod transactions;
pub async fn create_and_deploy_canister(
    token_name: String,
    token_symbol: String,
    transfer_fee: Nat,
    total_supply: Nat,
    token_image: String,
    dao_id: Principal,
) -> Result<Principal, CustomError> {
    let minted_cycles = mint_cycles(Tokens::from_e8s(1000)).await?;
    let minting_account = Account {
        owner: dao_id,
        subaccount: None,
    };

    //the dao collects the fee
    let fee_collector_account = Some(Account {
        owner: dao_id,
        subaccount: None,
    });

    let decimals = Some(8);
    let max_memo_length = Some(256);

    let metadata = vec![
        ("icrc1_name".to_string(), Text("REORG".to_string())),
        ("icrc1_logo".to_string(), Text(token_image)),
    ];

    //distribute tokens to accounts you want
    let initial_balances = vec![(
        Account {
            owner: dao_id,
            subaccount: None,
            // Initialize the Account fields as needed
        },
        total_supply.clone(),
    )];

    let feature_flags = Some(FeatureFlags { icrc2: true });
    let maximum_number_of_accounts = Some(1000);
    let accounts_overflow_trim_quantity = Some(100);

    let archive_options = ArchiveOptions {
        num_blocks_to_archive: 500usize,
        max_transactions_per_response: Some(200),
        trigger_threshold: 1000usize,
        max_message_size_bytes: Some(1024),
        cycles_for_archive_creation: Some(100),
        node_max_memory_size_bytes: Some(200),
        controller_id: Principal::anonymous(),
        more_controller_ids: Some(vec![Principal::anonymous()]),
    };

    let init_args = InitArgs {
        minting_account,
        fee_collector_account,
        transfer_fee,
        decimals,
        max_memo_length,
        token_symbol,
        token_name,
        metadata,
        initial_balances,
        feature_flags,
        maximum_number_of_accounts,
        accounts_overflow_trim_quantity,
        archive_options,
    };

    // Create a new token instance using LedgerArgs with UpgradeArgs as None

    let token = LedgerArg::Init(init_args);
    let serialized_args = Encode!(&token).expect(" ledger args serialization failed");

    let wasm_module = ICRC1_LEDGER_WASM.to_vec();

    let default_canister_settings: CanisterSettings = CanisterSettings::default();

    let create_args = CreateCanisterArgument {
        settings: Some(default_canister_settings),
    };

    let create_response = create_canister(create_args, nat_to_u128(minted_cycles))
        .await
        .map_err(|e| CustomError::custom(format!("Failed to create canister: {:?}", e)))?;

    let new_canister_id = create_response.0;

    // Step 2: Install code to the new canister
    let install_args = InstallCodeArgument {
        canister_id: new_canister_id.canister_id, //b77ix-eeaaa-aaaaa-qaada-cai or replace with the created canister id
        wasm_module,
        arg: serialized_args, // here is where we pass argurments for our token but serialized as bytes encoded in candid
        mode: ic_cdk::api::management_canister::main::CanisterInstallMode::Install,
    };

    install_code(install_args)
        .await
        .map_err(|e| CustomError::custom(format!("Failed to install code: {:?},{:?}", e.0, e.1)))?;

    Ok(new_canister_id.canister_id)
}
fn nat_to_u128(value: Nat) -> u128 {
    TryFrom::try_from(value.0).unwrap()
}
