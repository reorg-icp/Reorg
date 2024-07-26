use std::borrow::Cow;

use candid::{CandidType, Decode, Encode, Nat, Principal};
use ic_stable_structures::{BoundedStorable, Storable};
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct ProjectInfo{

    pub project_name:String,
    pub project_description:String,
    pub socials:Option<Socials>,
  
    pub tokenomics:Option<Tokenomics>,
  
    pub project_principal:Option<String>,

   

}

impl Default for ProjectInfo{
    fn default() -> Self {
        Self { project_name: String::new(), project_description: String::new(), socials: None,  tokenomics:None, project_principal:None }
    }
}
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Socials{

    pub website:Option<String>,
 
  pub github:Option<String>,
}
#[derive(Clone, Debug, CandidType, Deserialize)]
pub enum ProjectCategory{
    Tokenization,
    Defi,
    NFT,
    Dapp,
    Gaming
}
#[derive(Clone, Debug, CandidType, Deserialize)]
pub enum Platform{
    Web,
    Mobile,
    Desktop
}
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Member{
    pub name:String,
    pub role:String,
    pub socials:Socials,
    pub email:Option<String>,
    pub kyc:Option<KYC>
}
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct KYC{
    pub front_document:Option<Vec<u8>>,
    pub back_document:Option<Vec<u8>>,
    pub face:Option<Vec<u8>>
}
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Technical{
    pub whitepaper:Option<Vec<u8>>,
    pub github:Option<String>
}
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Tokenomics{
    pub token_name:String,
    pub token_symbol:String,
    pub total_supply:Nat,
pub transfer_fee:Nat,
pub token_image:String


}
#[derive(Clone, Debug, CandidType, Deserialize)]
pub struct Legal{
    pub entity:String,
    pub compliance_documents:Vec<Vec<u8>>
}


//implement Storable and BoundedStorable
impl Storable for ProjectInfo{
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

impl BoundedStorable for ProjectInfo {
    const MAX_SIZE: u32 = 429496;
    const IS_FIXED_SIZE: bool = false;
}
