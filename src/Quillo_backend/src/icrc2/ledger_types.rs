use candid::CandidType;

use candid::Nat;
use candid::Principal;
use icrc_ledger_types::icrc::generic_metadata_value::MetadataValue;

use icrc_ledger_types::icrc::generic_value::Value;
use icrc_ledger_types::icrc1::account::{Account, Subaccount};
use serde::{Deserialize, Serialize};
#[derive(Debug, Serialize, Deserialize, CandidType)]

pub struct FeatureFlags {
    pub icrc2: bool,
}

#[derive(Debug, Serialize, Deserialize, CandidType)]
pub struct InitArgs {
    pub minting_account: Account,
    pub fee_collector_account: Option<Account>,
    pub transfer_fee: Value,
    pub decimals: Option<Value>,
    pub max_memo_length: Option<Value>,
    pub token_symbol: Value,
    pub token_name: Value,
    pub metadata: Vec<(String, MetadataValue)>,
    pub initial_balances: Vec<(Account, Value)>,
    pub feature_flags: Option<FeatureFlags>,
    pub maximum_number_of_accounts: Option<Value>,
    pub accounts_overflow_trim_quantity: Option<Value>,
    pub archive_options: ArchiveOptions,
}

#[derive(Debug, Serialize, Deserialize, CandidType)]
pub struct ArchiveOptions {
    pub num_blocks_to_archive: Value,
    pub max_transactions_per_response: Option<Value>,
    pub trigger_threshold: Value,
    pub max_message_size_bytes: Option<Value>,
    pub cycles_for_archive_creation: Option<Value>,
    pub node_max_memory_size_bytes: Option<Value>,
    pub controller_id: Principal,
    pub more_controller_ids: Option<Vec<Principal>>,
}

#[derive(Debug, Serialize, Deserialize, CandidType)]

pub struct UpgradeArgs {}

#[derive(Debug, Serialize, Deserialize, CandidType)]
pub enum LedgerArg {
    Init(InitArgs),
    Upgrade(Option<UpgradeArgs>),
}
