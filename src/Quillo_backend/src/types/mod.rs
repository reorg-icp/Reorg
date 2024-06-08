use candid::{CandidType, Deserialize, Principal};
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
}

#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct UpdateSystemParamsPayload {
    pub transfer_fee: Option<Tokens>,
    pub proposal_vote_threshold: Option<Tokens>,
    pub proposal_submission_deposit: Option<Tokens>,
}
//company details go into system params
