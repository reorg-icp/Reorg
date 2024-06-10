use flate2::read::GzDecoder;
use std::fs::File;
use std::io::{self, Read};

pub fn decompress_wasm(file_path: &str) -> io::Result<Vec<u8>> {
    // Open the compressed file
    let file = File::open(file_path)?;
    let mut buffer = Vec::new();
    let mut decoder = GzDecoder::new(file);

    // Decompress the gzip data
    decoder.read_to_end(&mut buffer)?;

    // Return the decompressed buffer containing the wasm module
    Ok(buffer)
}
