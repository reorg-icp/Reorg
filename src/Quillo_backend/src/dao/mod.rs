use candid::{CandidType, Deserialize, Principal};
use std::collections::HashMap;

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
pub struct Address {
    pub street: String,
    pub city: String,
    pub state: String,
    pub country: String,
    pub postal_code: String,
}

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
pub struct ContactInfo {
    pub email: String,
    pub phone: String,
}

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
pub struct Founder {
    pub first_name: String,
    pub last_name: String,
    pub date_of_birth: String,
    pub contact_info: ContactInfo,
    pub address: Address,
    pub kyc_document: String, // Link to the KYC document
}

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
pub struct Valuation {
    pub pre_money_valuation: f64,
    pub post_money_valuation: f64,
    pub valuation_date: String,
}

impl Valuation {
    pub fn new(
        pre_money_valuation: f64,
        post_money_valuation: f64,
        valuation_date: String,
    ) -> Self {
        Self {
            pre_money_valuation,
            post_money_valuation,
            valuation_date,
        }
    }
}

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
pub struct TokenizationDetails {
    pub token_name: String,
    pub token_symbol: String,
    pub total_supply: u64,
}

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
pub struct RegistrationDetails {
    pub company_name: String,
    pub registration_number: String,
    pub incorporation_date: String,
    pub jurisdiction: String,
    pub address: Address,
    pub contact_info: ContactInfo,
    pub founders: Vec<Founder>,
    pub valuation: Valuation,
    pub tokenization_details: TokenizationDetails,
    pub terms_and_conditions_accepted: bool,
}

impl RegistrationDetails {
    pub fn new(
        company_name: String,
        registration_number: String,
        incorporation_date: String,
        jurisdiction: String,
        address: Address,
        contact_info: ContactInfo,
        founders: Vec<Founder>,
        valuation: Valuation,
        tokenization_details: TokenizationDetails,
        terms_and_conditions_accepted: bool,
    ) -> Self {
        Self {
            company_name,
            registration_number,
            incorporation_date,
            jurisdiction,
            address,
            contact_info,
            founders,
            valuation,
            tokenization_details,
            terms_and_conditions_accepted,
        }
    }

    pub fn add_founder(&mut self, founder: Founder) {
        self.founders.push(founder);
    }
}

// Struct for a generic proposal payload
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct ProposalPayload {
    pub canister_id: Principal,
    pub method: String,
    pub message: Vec<u8>,
}
