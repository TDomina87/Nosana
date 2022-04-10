
version: 2
updates:
- package-ecosystem: gomod
  directory: "/"
  schedule:
    interval: daily
  open-pull-requests-limit: 10
  ignore:
  - dependency-name: github.com/CosmWasm/wasmvm
    versions:
    - 0.14.0-beta2
    - 0.14.0-beta3
    - 0.14.0-beta4
    - 0.14.0-beta5
    - 0.14.0-rc1
  - dependency-name: github.com/tendermint/tendermint
    versions:
    - 0.34.10
    - 0.34.4
    - 0.34.7
    - 0.34.8
    - 0.34.9
  - dependency-name: github.com/cosmos/cosmos-sdk
    versions:
    - 0.41.4
    - 0.42.0
    - 0.42.1
    - 0.42.2
    - 0.42.4
  - dependency-name: google.golang.org/grpc
    versions:
    - 1.36.0
    - 1.36.1
    - 1.37.0
  - dependency-name: github.com/spf13/cobra
    versions:
    - 1.1.2
