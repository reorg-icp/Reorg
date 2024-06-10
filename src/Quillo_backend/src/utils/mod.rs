use flate2::read::GzDecoder;
use std::fs::File;
use std::io::{self, Read};

use crate::error_handler::TokenError;

pub fn decompress_wasm(file_path: &str) -> Result<Vec<u8>, TokenError> {
    // Open the compressed file
    let file = File::open(file_path).map_err(|e| TokenError::IO(e))?;
    let mut buffer = Vec::new();
    let mut decoder = GzDecoder::new(file);

    // Decompress the gzip data
    decoder
        .read_to_end(&mut buffer)
        .map_err(|e| TokenError::IO(e))?;

    // Return the decompressed buffer containing the wasm module
    Ok(buffer).map_err(|e| TokenError::IO(e))
}
