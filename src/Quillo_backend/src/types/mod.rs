mod dao_methods;

use crate::dao::RegistrationDetails;
use candid::{CandidType, Decode, Deserialize, Encode, Principal};

use ic_stable_structures::{BoundedStorable, Storable};
use std::borrow::Cow;
use std::default::Default;
use std::ops::{Add, AddAssign, Mul, SubAssign};

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
pub struct BasicDaoStableStorage {
    pub accounts: Vec<Account>,
    pub proposals: Vec<Proposal>,
    pub system_params: SystemParams,
}

#[derive(Clone, Copy, Debug, Default, CandidType, Deserialize, PartialEq, PartialOrd)]
pub struct Tokens {
    pub amount_e8s: u64,
}

impl Add for Tokens {
    type Output = Self;

    fn add(self, other: Self) -> Self {
        Tokens {
            amount_e8s: self.amount_e8s + other.amount_e8s,
        }
    }
}

impl AddAssign for Tokens {
    fn add_assign(&mut self, other: Self) {
        self.amount_e8s += other.amount_e8s;
    }
}

impl SubAssign for Tokens {
    fn sub_assign(&mut self, other: Self) {
        self.amount_e8s -= other.amount_e8s;
    }
}

impl Mul<u64> for Tokens {
    type Output = Tokens;
    fn mul(self, rhs: u64) -> Self {
        Tokens {
            amount_e8s: self.amount_e8s * rhs,
        }
    }
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
    pub canister_id: Principal,
    pub method: String,
    pub message: Vec<u8>,
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
pub struct TransferArgs {
    pub to: Principal,
    pub amount: Tokens,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct VoteArgs {
    pub proposal_id: u64,
    pub vote: Vote,
}

#[derive(Clone, Default, Debug, CandidType, Deserialize)]
pub struct SystemParams {
    pub transfer_fee: Tokens,
    pub proposal_vote_threshold: Tokens,
    pub proposal_submission_deposit: Tokens,
    pub total_token_supply: Tokens,
    pub registration_details: RegistrationDetails,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct UpdateSystemParamsPayload {
    pub transfer_fee: Option<Tokens>,
    pub proposal_vote_threshold: Option<Tokens>,
    pub proposal_submission_deposit: Option<Tokens>,
    pub total_token_supply: Option<Tokens>,
    pub registration_details: Option<RegistrationDetails>,
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
