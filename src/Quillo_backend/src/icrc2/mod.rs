use candid::CandidType;
use candid::Encode;
use candid::Principal;
use ic_cdk::api::management_canister::main::{
    create_canister, install_code, CanisterSettings, CreateCanisterArgument, InstallCodeArgument,
};
use std::default;
use std::env;

use crate::error_handler::TokenError;
use crate::utils::decompress_wasm;
use crate::ICRC1_LEDGER_WASM;
use ic_cdk::trap;
use ic_cdk_macros::{init, update};

#[derive(Serialize, Deserialize, CandidType)]
struct MintingAccount {
    owner: Principal,
}

#[derive(Serialize, Deserialize, CandidType)]
struct MetadataRecord {
    key: String,
    value: MetadataValue,
}

#[derive(Serialize, Deserialize, CandidType)]
#[serde(rename_all = "camelCase")]
enum MetadataValue {
    Text(String),
}

#[derive(Serialize, Deserialize, CandidType)]
struct TokenDetails {
    token_symbol: String,
    token_name: String,
    minting_account: MintingAccount,
    transfer_fee: u64,
    metadata: Vec<MetadataRecord>,
}

pub async fn create_and_deploy_canister() -> Result<String, TokenError> {
    //example token
    let my_token = TokenDetails {
        token_name: "Reorg".to_string(),
        token_symbol: "REO".to_string(),
        transfer_fee: 1000,
        minting_account: MintingAccount {
            owner: Principal::from_text("aaaaa-aa").unwrap(), // Replace with a valid principal
        },
        metadata: vec![],
    };
    let serialized_args = Encode!(&my_token).expect("Serialization failed");
    let wasm_module = ICRC1_LEDGER_WASM.to_vec();
    let cycles = 8_093_982_275;
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
        canister_id: new_canister_id.canister_id, //b77ix-eeaaa-aaaaa-qaada-cai
        wasm_module,
        arg: serialized_args, // here is where we pass argurments for our token but serialized as bytes encoded in candid
        mode: ic_cdk::api::management_canister::main::CanisterInstallMode::Install,
    };

    install_code(install_args)
        .await
        .map_err(|e| TokenError::custom(format!("Failed to install code: {:?}", e)))?;

    Ok(new_canister_id.canister_id.to_string())
}
