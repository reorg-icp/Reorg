#!/bin/bash
set -e

# Define the file path
FILE_PATH=".dfx/local/canisters/Quillo_frontend/assetstorage.did"

# Define the text data to write to the file
TEXT_DATA=$(cat <<EOF
type BatchId = nat;
type ChunkId = nat;
type Key = text;
type Time = int;

type CreateAssetArguments = record {
  key: Key;
  content_type: text;
  max_age: opt nat64;
  headers: opt vec HeaderField;
  enable_aliasing: opt bool;
  allow_raw_access: opt bool;
};

// Add or change content for an asset, by content encoding
type SetAssetContentArguments = record {
  key: Key;
  content_encoding: text;
  chunk_ids: vec ChunkId;
  sha256: opt blob;
};

// Remove content for an asset, by content encoding
type UnsetAssetContentArguments = record {
  key: Key;
  content_encoding: text;
};

// Delete an asset
type DeleteAssetArguments = record {
  key: Key;
};

// Reset everything
type ClearArguments = record {};

type BatchOperationKind = variant {
  CreateAsset: CreateAssetArguments;
  SetAssetContent: SetAssetContentArguments;

  SetAssetProperties: SetAssetPropertiesArguments;

  UnsetAssetContent: UnsetAssetContentArguments;
  DeleteAsset: DeleteAssetArguments;

  Clear: ClearArguments;
};

type CommitBatchArguments = record {
  batch_id: BatchId;
  operations: vec BatchOperationKind
};

type CommitProposedBatchArguments = record {
  batch_id: BatchId;
  evidence: blob;
};

type ComputeEvidenceArguments = record {
  batch_id: BatchId;
  max_iterations: opt nat16
};

type DeleteBatchArguments = record {
  batch_id: BatchId;
};

type HeaderField = record { text; text; };

type HttpRequest = record {
  method: text;
  url: text;
  headers: vec HeaderField;
  body: blob;
  certificate_version: opt nat16;
};

type HttpResponse = record {
  status_code: nat16;
  headers: vec HeaderField;
  body: blob;
  streaming_strategy: opt StreamingStrategy;
};

type StreamingCallbackHttpResponse = record {
  body: blob;
  token: opt StreamingCallbackToken;
};

type StreamingCallbackToken = record {
  key: Key;
  content_encoding: text;
  index: nat;
  sha256: opt blob;
};

type StreamingStrategy = variant {
  Callback: record {
    callback: func (StreamingCallbackToken) -> (opt StreamingCallbackHttpResponse) query;
    token: StreamingCallbackToken;
  };
};

type SetAssetPropertiesArguments = record {
  key: Key;
  max_age: opt opt nat64;
  headers: opt opt vec HeaderField;
  allow_raw_access: opt opt bool;
  is_aliased: opt opt bool;
};

type ConfigurationResponse = record {
  max_batches: opt nat64;
  max_chunks: opt nat64;
  max_bytes: opt nat64;
};

type ConfigureArguments = record {
  max_batches: opt opt nat64;
  max_chunks: opt opt nat64;
  max_bytes: opt opt nat64;
};

type Permission = variant {
  Commit;
  ManagePermissions;
  Prepare;
};

type GrantPermission = record {
  to_principal: principal;
  permission: Permission;
};
type RevokePermission = record {
  of_principal: principal;
  permission: Permission;
};
type ListPermitted = record { permission: Permission };

type ValidationResult = variant { Ok : text; Err : text };

type AssetCanisterArgs = variant {
  Init: InitArgs;
  Upgrade: UpgradeArgs;
};

type InitArgs = record {};

type UpgradeArgs = record {
  set_permissions: opt SetPermissions;
};

/// Sets the list of principals granted each permission.
type SetPermissions = record {
  prepare: vec principal;
  commit: vec principal;
  manage_permissions: vec principal;
};

service: (asset_canister_args: opt AssetCanisterArgs) -> {
  api_version: () -> (nat16) query;

  get: (record {
    key: Key;
    accept_encodings: vec text;
  }) -> (record {
    content: blob; // may be the entirety of the content, or just chunk index 0
    content_type: text;
    content_encoding: text;
    sha256: opt blob; // sha256 of entire asset encoding, calculated by dfx and passed in SetAssetContentArguments
    total_length: nat; // all chunks except last have size == content.size()
  }) query;

  // if get() returned chunks > 1, call this to retrieve them.
  // chunks may or may not be split up at the same boundaries as presented to create_chunk().
  get_chunk: (record {
    key: Key;
    content_encoding: text;
    index: nat;
    sha256: opt blob;  // sha256 of entire asset encoding, calculated by dfx and passed in SetAssetContentArguments
  }) -> (record { content: blob }) query;

  list : (record {}) -> (vec record {
    key: Key;
    content_type: text;
    encodings: vec record {
      content_encoding: text;
      sha256: opt blob; // sha256 of entire asset encoding, calculated by dfx and passed in SetAssetContentArguments
      length: nat; // Size of this encoding's blob. Calculated when uploading assets.
      modified: Time;
    };
  }) query;

  certified_tree : (record {}) -> (record {
    certificate: blob;
    tree: blob;
  }) query;

  create_batch : (record {}) -> (record { batch_id: BatchId });

  create_chunk: (record { batch_id: BatchId; content: blob }) -> (record { chunk_id: ChunkId });

  // Perform all operations successfully, or reject
  commit_batch: (CommitBatchArguments) -> ();

  // Save the batch operations for later commit
  propose_commit_batch: (CommitBatchArguments) -> ();

  // Given a batch already proposed, perform all operations successfully, or reject
  commit_proposed_batch: (CommitProposedBatchArguments) -> ();

  // Compute a hash over the CommitBatchArguments.  Call until it returns Some(evidence).
  compute_evidence: (ComputeEvidenceArguments) -> (opt blob);

  // Delete a batch that has been created, or proposed for commit, but not yet committed
  delete_batch: (DeleteBatchArguments) -> ();

  create_asset: (CreateAssetArguments) -> ();
  set_asset_content: (SetAssetContentArguments) -> ();
  unset_asset_content: (UnsetAssetContentArguments) -> ();

  delete_asset: (DeleteAssetArguments) -> ();

  clear: (ClearArguments) -> ();

  // Single call to create an asset with content for a single content encoding that
  // fits within the message ingress limit.
  store: (record {
    key: Key;
    content_type: text;
    content_encoding: text;
    content: blob;
    sha256: opt blob
  }) -> ();

  http_request: (request: HttpRequest) -> (HttpResponse) query;
  http_request_streaming_callback: (token: StreamingCallbackToken) -> (opt StreamingCallbackHttpResponse) query;

  authorize: (principal) -> ();
  deauthorize: (principal) -> ();
  list_authorized: () -> (vec principal);
  grant_permission: (GrantPermission) -> ();
  revoke_permission: (RevokePermission) -> ();
  list_permitted: (ListPermitted) -> (vec principal);
  take_ownership: () -> ();

  get_asset_properties : (key: Key) -> (record {
    max_age: opt nat64;
    headers: opt vec HeaderField;
    allow_raw_access: opt bool;
    is_aliased: opt bool; } ) query;
  set_asset_properties: (SetAssetPropertiesArguments) -> ();

  get_configuration: () -> (ConfigurationResponse);
  configure: (ConfigureArguments) -> ();

  validate_grant_permission: (GrantPermission) -> (ValidationResult);
  validate_revoke_permission: (RevokePermission) -> (ValidationResult);
  validate_take_ownership: () -> (ValidationResult);
  validate_commit_proposed_batch: (CommitProposedBatchArguments) -> (ValidationResult);
  validate_configure: (ConfigureArguments) -> (ValidationResult);
}

EOF
)

# Check if the file exists
if [ -e "$FILE_PATH" ]; then
    echo "File '$FILE_PATH' already exists."
else
    # Create the directory structure if it does not exist
    mkdir -p "$(dirname "$FILE_PATH")"
    
    # Write the text data to the file
    echo "$TEXT_DATA" > "$FILE_PATH"
    echo "File '$FILE_PATH' has been created and data has been written."
fi