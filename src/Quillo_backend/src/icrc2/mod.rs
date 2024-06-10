use std::default;

use candid::Principal;
use ic_cdk::api::management_canister::main::{
    create_canister, install_code, CanisterSettings, CreateCanisterArgument, InstallCodeArgument,
};

use crate::error_handler::TokenError;
use crate::utils::decompress_wasm;
use ic_cdk::trap;
use ic_cdk_macros::{init, update};

pub struct TokenDetailsPayload {
    name: String,
    symbol: String,
    image: String,
    minter: Principal,
    transfer_fee: u128,
}

pub struct TokenDetails {
    name: String,
    symbol: String,
    image: String,
    minter: Principal,
    transfer_fee: u128,
    pre_minted_tokens: u128,
    archive_controller: Principal,
    trigger_threshhold: u128,
    blocks_to_archive: u128,
    cycle_for_archive_creation: u128,
    feature_flags: bool,
}

pub async fn create_and_deploy_canister() -> Result<String, TokenError> {
    let wasm_module = decompress_wasm("icrc1_ledger.wasm.gz")?;
    let cycles = 40_000_000_000_000;
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
        canister_id: new_canister_id.canister_id,
        wasm_module,
        arg: vec![],
        mode: ic_cdk::api::management_canister::main::CanisterInstallMode::Install,
    };

    install_code(install_args)
        .await
        .map_err(|e| TokenError::custom(format!("Failed to install code: {:?}", e)))?;

    Ok(new_canister_id.canister_id.to_string())
}
