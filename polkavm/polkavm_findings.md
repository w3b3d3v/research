# PolkaVM Research - Initial Findings

## Project Overview
- **Repository**: https://github.com/paritytech/polkavm
- **Description**: A fast and secure RISC-V based virtual machine
- **Organization**: Parity Technologies (paritytech)
- **Status**: Work in progress, not production ready
- **Stars**: 363
- **Forks**: 72
- **Contributors**: 17
- **Commits**: 916

## Key Features
- General purpose user-level RISC-V based virtual machine
- Designed for smart contracts and possibly more
- Fast execution competitive with WebAssembly VMs
- Fast compilation with guaranteed single-pass O(n) compilation
- Low memory footprint (baseline 128KB per instance)
- Fully deterministic execution
- Cross-platform support
- Built-in debugging and profiling tools

## Initial Contributors Identified (from GitHub avatars)
1. **@koute** - Primary contributor (first avatar shown)
2. **@aman4150** - Recent contributor (latest commit author)
3. **@jarkkojs** - Contributor
4. **@xermicus** - Contributor
5. **@subotic** - Contributor
6. **@athei** - Contributor
7. **@zerosnacks** - Contributor

## Recent Activity
- Latest commit by aman4150: "sandbox: Some more fixes to aux data handling and program..."
- Active development with recent commits
- 56 open issues
- 11 open pull requests

## Next Steps
- Research individual contributors' profiles
- Find pallet-revive information
- Research Westend network connection
- Gather social media profiles



## Pallet-Revive Information

### Repository Details
- **Location**: https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive
- **Parent Repository**: polkadot-sdk (2.3k stars, 956 forks)
- **Description**: Experimental module for deploying and executing PolkaVM smart-contracts
- **Status**: Heavily modified pallet_contracts fork

### Key Features
- Deploys and executes PolkaVM smart contracts
- Supports Solidity (via revive) and Rust
- Smart-contract code stored once, retrievable via code_hash
- Weight-based execution limits
- Non-cascading call failures
- Unstable interface support for experimental features

### Recent Contributors (from commits)
1. **@ggwpez** - Recent commit author
2. **@athei** - Recent commit author (also seen in PolkaVM repo)

### Recent Activity
- "Fix revive-fixtures build script (#8980)" - 1 hour ago
- "[pallet-revive] dev-node (#8746)" - 2 weeks ago
- "renamed wasm module in pallet-revive to vm (#8794)" - 2 weeks ago
- "[pallet-revive] Make Runtime call dispatchable as eth transaction" - 4 days ago
- "Bump PolkaVM to 0.25.0 (#8962)" - yesterday

### Connection to PolkaVM
- Executes PolkaVM smart contracts
- Recently bumped PolkaVM to version 0.25.0
- Supports RISC-V compiled languages
- Part of Polkadot 2.0 smart contract execution environment


## Westend Network Information

### Network Details
- **Type**: Polkadot's primary permanent testnet
- **Purpose**: Testing environment for infrastructure partners
- **Status**: Not reset to genesis block (ongoing testnet)
- **Token**: WND (Westend tokens)
- **Faucet**: https://faucet.polkadot.io/westend

### Connection to PolkaVM and pallet-revive
- **Deployment**: pallet-revive is deployed to Westend AssetHub
- **Testing Environment**: Primary testnet for PolkaVM smart contracts
- **Development**: Allows developers to experiment with PolkaVM contracts
- **REMIX Integration**: Hosted REMIX instance for Solidity development
- **ink! v6 Support**: Transitioning to pallet-revive and PolkaVM

### Key Features for PolkaVM Development
- Testing ground for smart contract deployment
- EVM compatibility through pallet-revive
- Supports both Solidity and Rust smart contracts
- AssetHub parachain integration
- Free testnet tokens for development

### Roadmap
- Current focus: Deploy pallet_revive to Westend AssetHub
- Future: Launch on Kusama (Polkadot's canary network)
- Integration with Polkadot 2.0 smart contract execution

## Summary of Connections
1. **PolkaVM** → Core RISC-V virtual machine
2. **pallet-revive** → Runtime module for executing PolkaVM contracts
3. **Westend** → Primary testnet for PolkaVM/pallet-revive development
4. **Parity Technologies** → Main development organization
5. **Web3 Foundation** → Supporting organization (need to research W3F members)

