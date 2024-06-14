use candid::CandidType;

use candid::Nat;
use candid::Principal;

use icrc_ledger_types::icrc::generic_value::Value;
use icrc_ledger_types::icrc1::account::Account;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, CandidType, Clone, PartialEq, Eq)]

pub struct FeatureFlags {
    pub icrc2: bool,
}

#[derive(Deserialize, CandidType, Clone, Debug, PartialEq, Eq, Serialize)]
pub struct InitArgs {
    pub minting_account: Account,
    pub fee_collector_account: Option<Account>,
    pub initial_balances: Vec<(Account, Nat)>,
    pub transfer_fee: Nat,
    pub decimals: Option<u8>,
    pub token_name: String,
    pub token_symbol: String,
    pub metadata: Vec<(String, Value)>,
    pub archive_options: ArchiveOptions,
    pub max_memo_length: Option<u16>,
    pub feature_flags: Option<FeatureFlags>,
    pub maximum_number_of_accounts: Option<u64>,
    pub accounts_overflow_trim_quantity: Option<u64>,
}

#[derive(Serialize, Deserialize, CandidType, Clone, Debug, PartialEq, Eq)]
pub struct ArchiveOptions {
    /// The number of blocks which, when exceeded, will trigger an archiving
    /// operation.
    pub trigger_threshold: usize,
    /// The number of blocks to archive when trigger threshold is exceeded.
    pub num_blocks_to_archive: usize,
    pub node_max_memory_size_bytes: Option<u64>,
    pub max_message_size_bytes: Option<u64>,
    pub controller_id: Principal,
    // More principals to add as controller of the archive.
    #[serde(default)]
    pub more_controller_ids: Option<Vec<Principal>>,
    // cycles to use for the call to create a new archive canister.
    #[serde(default)]
    pub cycles_for_archive_creation: Option<u64>,
    // Max transactions returned by the [get_transactions] endpoint.
    #[serde(default)]
    pub max_transactions_per_response: Option<u64>,
}

#[derive(Debug, Serialize, Deserialize, CandidType)]

pub struct UpgradeArgs {}

#[derive(Debug, Serialize, Deserialize, CandidType)]
pub enum LedgerArg {
    Init(InitArgs),
    Upgrade(Option<UpgradeArgs>),
}