mod dao_methods;

use crate::company::RegistrationDetails;
use candid::{CandidType, Decode, Deserialize, Encode, Principal};

use ic_ledger_types::Tokens;
use ic_stable_structures::{BoundedStorable, Storable};
use std::borrow::Cow;
use std::default::Default;

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
pub struct BasicDaoStableStorage {
    pub accounts: Vec<Account>,
    pub proposals: Vec<Proposal>,
    pub system_params: SystemParams,
}

#[derive(Clone, Debug, CandidType, Deserialize, PartialEq)]
pub enum ProposalState {
    Open,
    Accepted,
    Rejected,
    Executing,
    Succeeded,
    Failed(String),
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Proposal {
    pub id: u64,
    pub timestamp: u64,
    pub proposer: Principal,
    pub payload: ProposalPayload,
    pub state: ProposalState,
    pub votes_yes: Tokens,
    pub votes_no: Tokens,
    pub voters: Vec<Principal>,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct ProposalPayload {
    // canister id not needed since we are calling this canister, each dao has its own canister
    pub method: String,
    pub main_param: Vec<u8>,
    pub extra_info: Vec<u8>,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub enum Vote {
    Yes,
    No,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Account {
    pub owner: Principal,
    pub tokens: Tokens,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct VoteArgs {
    pub proposal_id: u64,
    pub vote: Vote,
}

#[derive(Clone, Default, Debug, CandidType, Deserialize)]
pub struct SystemParams {
    pub transfer_fee: Option<Tokens>,
    pub proposal_vote_threshold: Option<Tokens>,
    pub proposal_submission_deposit: Option<Tokens>,
    pub total_token_supply: Option<Tokens>,
    pub registration_details: RegistrationDetails,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct UpdateSystemParamsPayload {
    pub transfer_fee: Option<Tokens>,
    pub proposal_vote_threshold: Option<Tokens>,
    pub proposal_submission_deposit: Option<Tokens>,
    pub total_token_supply: Option<Tokens>,
    pub registration_details: Option<RegistrationDetails>,
    pub token_canister: Option<Principal>,
}

//implement Storable and BoundedStorable
impl Storable for BasicDaoStableStorage {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for BasicDaoStableStorage {
    const MAX_SIZE: u32 = 102400;
    const IS_FIXED_SIZE: bool = false;
}
