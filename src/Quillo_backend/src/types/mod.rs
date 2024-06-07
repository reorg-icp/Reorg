pub struct Dao {
    accounts: Vec<Account>,

    proposals: Vec<Proposal>,
    params: Params,
}
pub struct Account {}
pub struct Proposal {}
pub struct Params {}
pub struct Account {
    pub owner: Principal,
    pub tokens: Tokens,
}

pub struct Tokens {}
