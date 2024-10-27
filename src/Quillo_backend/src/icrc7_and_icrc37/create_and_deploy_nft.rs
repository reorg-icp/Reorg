use candid::Principal;
use ic_cdk::api::management_canister::main::{
    create_canister,
    install_code,
    CanisterSettings,
    CreateCanisterArgument,
    InstallCodeArgument,
};
use ic_ledger_types::Tokens;

use icrc_ledger_types::icrc1::account::Account;
use mint_cycles::mint_cycles;
use candid::*;
use crate::{ error_handler::CustomError, ICRC7_LEDGER_WASM };

use super::types::{ InitApprovalsArg, InitArg, Nft };

pub type CustomResult<T = ()> = std::result::Result<T, CustomError>;

pub async fn create_and_deploy_canister_nft(Nft {
    minting_principal,
    symbol,
    name,
    description,
    logo,
    supply_cap,
}: Nft) -> CustomResult<Principal> {
    //buy cycles worth 0.7 icp
    let minted_cycles = mint_cycles(Tokens::from_e8s(70000000))
    .await
    .map_err(|e| CustomError::custom(format!("Minting cycles error: {:?}", e)))?;

    let minting_account = Account {
        owner: minting_principal,
        subaccount: None,
    };
    // let fee_collector_account = Some(Account {
    //     owner: minting_principal,
    //     subaccount: None,
    // });

    let init_args = InitArg {
        minting_account: Some(minting_account),
        icrc7_symbol: symbol,
        icrc7_name: name,
        icrc7_description: description,
        icrc7_logo: logo,
        icrc7_supply_cap: supply_cap,
        approval_init: Some(InitApprovalsArg {
            max_approvals: Some(10),
            max_approvals_per_token_or_collection: Some(5),
            settle_to_approvals: Some(2),
            max_revoke_approvals: Some(1),
            collection_approval_requires_token: Some(true),
        }),
        icrc7_max_query_batch_size: Some(100),
        icrc7_max_update_batch_size: Some(100),
        icrc7_max_take_value: Some(1), // For NFT collections, set a higher value
        icrc7_default_take_value: Some(1), // Default take value per transfer
        icrc7_max_memo_size: Some(256), // For small memos
        icrc7_atomic_batch_transfers: Some(true), // All-or-nothing transfer behavior
        tx_window: Some(600), // 10 minutes transaction window
        permitted_drift: Some(30), // 30 seconds time drift tolerance
    };
    let wasm_module = ICRC7_LEDGER_WASM.to_vec();
    let default_canister_settings: CanisterSettings = CanisterSettings::default();

    let create_args = CreateCanisterArgument {
        settings: Some(default_canister_settings),
    };

    let serialized_args = Encode!(&init_args).map_err(|e|
        CustomError::custom(format!("Failed to serialize ledger args: {:?}", e))
    )?;

    let create_response = create_canister(create_args, nat_to_u128(minted_cycles)).await.map_err(
        |(_, e)| CustomError::custom(format!("Failed to create canister: {:?}", e))
    )?;

    let new_canister_id = create_response.0;

    // Step 2: Install code to the new canister
    let install_args = InstallCodeArgument {
        canister_id: new_canister_id.canister_id, //b77ix-eeaaa-aaaaa-qaada-cai or replace with the created canister id
        wasm_module,
        arg: serialized_args, // here is where we pass argurments for our token but serialized as bytes encoded in candid
        mode: ic_cdk::api::management_canister::main::CanisterInstallMode::Install,
    };

    install_code(install_args).await.map_err(|(_, e)|
        CustomError::custom(format!("Failed to install code: {:?}", e))
    )?;

    Ok(new_canister_id.canister_id)
}

fn nat_to_u128(value: Nat) -> u128 {
    value.0.try_into().unwrap_or(0)
}
