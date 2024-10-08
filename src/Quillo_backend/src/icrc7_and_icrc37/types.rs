use candid::{ CandidType, Principal };
use icrc_ledger_types::icrc1::account::Account;

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct InitArg {
    pub minting_account: Option<Account>,
    pub icrc7_symbol: String,
    pub icrc7_name: String,
    pub icrc7_description: Option<String>,
    pub icrc7_logo: Option<String>,
    pub icrc7_supply_cap: Option<u128>,
    pub icrc7_max_query_batch_size: Option<u16>,
    pub icrc7_max_update_batch_size: Option<u16>,
    pub icrc7_max_take_value: Option<u128>,
    pub icrc7_default_take_value: Option<u128>,
    pub icrc7_max_memo_size: Option<u32>,
    pub icrc7_atomic_batch_transfers: Option<bool>,
    pub tx_window: Option<u64>,
    pub permitted_drift: Option<u64>,
    pub approval_init: Option<InitApprovalsArg>,
    // pub archive_init: Option<InitArchiveArg>,
}
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct InitApprovalsArg {
    pub max_approvals: Option<u16>,
    pub max_approvals_per_token_or_collection: Option<u16>,
    pub settle_to_approvals: Option<u16>,
    pub max_revoke_approvals: Option<u16>,
    pub collection_approval_requires_token: Option<bool>,
}
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Nft {
    pub minting_principal: Principal,
    pub symbol: String,
    pub name: String,
    pub description: Option<String>,
    pub logo: Option<String>,
    pub supply_cap: Option<u128>,
}

// #[derive(Clone, Debug, CandidType, Deserialize)]
// pub struct InitArchiveArg {
//     //  archive-related fields
// }