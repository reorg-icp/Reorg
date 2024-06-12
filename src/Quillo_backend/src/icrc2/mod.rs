use candid::Encode;
use candid::Nat;
use candid::Principal;
use ic_cdk::api::management_canister::main::{
    create_canister, install_code, CanisterSettings, CreateCanisterArgument, InstallCodeArgument,
};

use icrc_ledger_types::icrc1::account::Account;
use ledger_types::ArchiveOptions;
use ledger_types::FeatureFlags;
use ledger_types::InitArgs;

use crate::error_handler::TokenError;
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
    cycles: u128,
) -> Result<String, TokenError> {
    let minting_account = Account {
        owner: Principal::from_text(
            "owu57-ix3tx-4pgh7-pmu7n-dzlor-tqljq-wui5j-g5b2g-mtnfa-yklry-mae",
        )
        .unwrap(),
        subaccount: None,
    };

    let fee_collector_account = Some(Account {
        owner: Principal::from_text(
            "owu57-ix3tx-4pgh7-pmu7n-dzlor-tqljq-wui5j-g5b2g-mtnfa-yklry-mae",
        )
        .unwrap(),
        subaccount: None,
    });

    let decimals = Some(8);
    let max_memo_length = Some(256);

    let metadata = vec![
        ("icrc1_name".to_string(), Text("REORG".to_string())),
        ("icrc1_logo".to_string(), Text(token_image)),
    ];

    let initial_balances = vec![(
        Account {
            owner: Principal::from_text(
                "owu57-ix3tx-4pgh7-pmu7n-dzlor-tqljq-wui5j-g5b2g-mtnfa-yklry-mae",
            )
            .unwrap(),
            subaccount: None,
            // Initialize the Account fields as needed
        },
        total_supply,
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
    let serialized_args = Encode!(&token).expect("Serialization failed");

    let wasm_module = ICRC1_LEDGER_WASM.to_vec();

    let default_canister_settings: CanisterSettings = CanisterSettings::default();

    let create_args = CreateCanisterArgument {
        settings: Some(default_canister_settings),
    };

    let create_response = create_canister(create_args, cycles)
        .await
        .map_err(|e| TokenError::custom(format!("Failed to create canister: {:?}", e)))?;

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
        .map_err(|e| TokenError::custom(format!("Failed to install code: {:?},{:?}", e.0, e.1)))?;

    Ok(new_canister_id.canister_id.to_string())
}
