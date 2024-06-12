use flate2::read::GzDecoder;
use std::fs::File;
use std::io::{self, Read};
use std::path::Path;

use crate::error_handler::TokenError;

pub fn decompress_wasm(file_path: &str) -> Result<Vec<u8>, TokenError> {
    // Resolve the path relative to the current directory
    let path = Path::new(file_path);

    // Open the compressed file
    let file = File::open(&path).map_err(TokenError::IO)?;
    let mut buffer = Vec::new();
    let mut decoder = GzDecoder::new(file);

    // Decompress the gzip data
    decoder.read_to_end(&mut buffer).map_err(TokenError::IO)?;

    // Return the decompressed buffer containing the wasm module
    Ok(buffer)
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::env;

    #[test]
    fn decompress_wasm_works() {
        // Resolve the relative path from the current directory
        let current_dir = env::current_dir().unwrap();
        let file_path = current_dir.join("src/assets/icrc1_ledger.wasm.gz");
        dbg!(&file_path);
        let bytes = decompress_wasm(file_path.to_str().unwrap()).unwrap();
        dbg!(bytes);
    }
}
