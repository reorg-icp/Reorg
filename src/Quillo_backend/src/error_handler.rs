use std::error::Error;
use std::fmt;

// Define custom error type
#[derive(Debug, candid::CandidType, Deserialize, Serialize)]
pub enum DaoError {
    MissingField(&'static str),
}

impl fmt::Display for DaoError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            DaoError::MissingField(field) => write!(f, "Missing required field: {}", field),
        }
    }
}
impl Error for DaoError {}
