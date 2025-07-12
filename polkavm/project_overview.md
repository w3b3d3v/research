# PolkaVM Ecosystem - Complete Project Overview

## Project Ecosystem Overview

### Core Projects

#### 1. PolkaVM
- **Repository**: https://github.com/paritytech/polkavm
- **Description**: A fast and secure RISC-V based virtual machine
- **Status**: Work in progress, not production ready
- **Stars**: 363 | **Forks**: 72 | **Contributors**: 17
- **Primary Maintainer**: Jan Bujak (@koute)

#### 2. pallet-revive
- **Repository**: https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive
- **Description**: Experimental module for deploying and executing PolkaVM smart-contracts
- **Status**: Heavily modified pallet_contracts fork
- **Key Contributors**: Alexander Theißen (@athei), Oliver Tale-Yazdi (@ggwpez)

#### 3. Westend Network
- **Type**: Polkadot's primary permanent testnet
- **Purpose**: Testing environment for PolkaVM and pallet-revive
- **Deployment**: pallet-revive is deployed to Westend AssetHub
- **Token**: WND (Westend tokens)

## Key Organizations

### Parity Technologies
- **Role**: Primary development organization
- **Focus**: Core PolkaVM development, pallet-revive implementation
- **Key Team Members**: 4 identified core contributors
- **Location**: Global (Tokyo, Berlin, Darmstadt)

### Web3 Foundation
- **Role**: Research and ecosystem support
- **Focus**: Decentralized systems research
- **Key Team Members**: 9 research team members
- **Research Areas**: Protocols, economics, security

## Technology Stack

### PolkaVM Features
- RISC-V based virtual machine
- Fast execution competitive with WebAssembly VMs
- Single-pass O(n) compilation
- Low memory footprint (128KB baseline)
- Fully deterministic execution
- Cross-platform support
- Built-in debugging and profiling

### pallet-revive Features
- Executes PolkaVM smart contracts
- Supports Solidity (via revive) and Rust
- Smart-contract code stored once via code_hash
- Weight-based execution limits
- Non-cascading call failures
- Experimental unstable interface support

### Westend Integration
- Primary testnet for PolkaVM development
- AssetHub parachain deployment
- Free testnet tokens for development
- REMIX instance for Solidity development
- ink! v6 support

## Development Timeline

### Recent Activity (2025)
- **June 2025**: Active development on sandbox fixes (aman4150)
- **June 2025**: PolkaVM version 0.25.0 release
- **June 2025**: pallet-revive runtime improvements
- **May 2025**: Westend AssetHub deployment focus

### Key Milestones
- **August 2023**: PolkaVM 0.1 tech preview announcement
- **2024**: pallet-revive development and testing
- **2025**: Westend deployment and ecosystem integration

## Social Media and Contact Information

### Primary Contacts
- **Jan Bujak**: GitHub @koute, Twitter @janxbujak, LinkedIn
- **Alexander Theißen**: GitHub @athei, LinkedIn
- **Oliver Tale-Yazdi**: GitHub @ggwpez, Twitter @OliverTaleYazdi, LinkedIn

### Web3 Foundation Contacts
- All research team members: @web3.foundation email addresses
- 9 core research team members identified

## Repository Statistics
- **PolkaVM**: 916 commits, 17 contributors, very active
- **polkadot-sdk**: 2.3k stars, 956 forks, massive ecosystem
- **Combined Activity**: Thousands of contributions across projects

## Geographic Distribution
- **Tokyo, Japan**: Jan Bujak (koute)
- **Berlin, Germany**: Alexander Theißen (athei)
- **Darmstadt, Germany**: Oliver Tale-Yazdi (ggwpez)
- **Global**: Web3 Foundation research team

## Cryptocurrency Addresses
- **Jan Bujak (KSM)**: HTk3eccL7WBkiyxz1gBcqQRghsJigoDMD7mnQaz1UAbMpQV
- **Alexander Theißen (DOT)**: 15db5ksZqmhWF9U8MDq4wLKUdFivLVByztWV8nmaJv3NU1
- **Oliver Tale-Yazdi (DOT)**: 16a357f5Sxab3V2ne4emGQvqjaCLeYpTMx3TCjnQhmJQ71DX

## Future Roadmap
1. **Immediate**: Complete Westend AssetHub deployment
2. **Short-term**: Kusama network deployment
3. **Long-term**: Polkadot mainnet integration
4. **Ongoing**: PolkaVM optimization and feature development

