use std::borrow::Cow;

use candid::{CandidType, Decode, Encode, Nat, Principal};
use ic_stable_structures::{BoundedStorable, Storable};
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Application {
    pub projectName: String,
    pub contactName: String,
    pub contactTelegramHandle: String,
    pub email: String,
    pub website: String,
    pub x: String,
    pub pitch: String,
    pub tokenomics: String,
    pub otherLinks: String,
    pub projectStartDate: String,
    pub projectDescription: String,
    pub ecosystem: String,
    pub teamDescription: String,
    pub amountOfTeamMembers: u32,
    pub community: String,
    pub existingUsers: String,
    pub investmentRounds: String,
    pub amountToBeRaised: u128,
    pub fdv: u128,
}
impl Storable for Application {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for Application {
    const MAX_SIZE: u32 = 429496;
    const IS_FIXED_SIZE: bool = false;
}
