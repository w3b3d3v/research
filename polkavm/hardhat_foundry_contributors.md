# Hardhat-Polkadot and Foundry-Polkadot Contributors Research

## Hardhat-Polkadot Project Information

### Repository Details
- **Repository**: https://github.com/paritytech/hardhat-polkadot
- **Description**: Plugin for using Hardhat with Polkadot - provides plugins that integrate with the Hardhat environment for developing and deploying Ethereum-compatible smart contracts on the Polkadot network
- **Stars**: 10
- **Forks**: 5
- **Issues**: 28
- **Pull Requests**: 5
- **License**: AGPL-3.0
- **Latest Release**: v0.1.7 (June 25, 2025)
- **Total Releases**: 8

### Project Structure
The repository provides several plugins:
1. **hardhat-polkadot** - Umbrella plugin that provides full functionality and a convenient CLI
2. **hardhat-polkadot-resolc** - Compiles Solidity smart contracts for the Polkadot network, creating PolkaVM compatible hardhat artifacts
3. **hardhat-polkadot-node** - Run a Polkadot node locally

### Contributors Identified (6 total)
From the repository overview, I can see 6 contributors:
1. **bee344** - Most recent commits, appears to be lead contributor
2. **BigTava** 
3. **Brianspha**
4. **dependabot[bot]** - Automated dependency updates
5. **marshacb**
6. **nhussein11**

### Recent Activity (June 2025)
- chore(release): v0.1.7 (#199) - bee344
- chore(hardhat-polkadot-resolc): bump @parity/revive (#173)
- Various test improvements and CI fixes
- Active development with commits from multiple contributors

### Key Features
- Integration with Hardhat development environment
- PolkaVM compatibility
- Solidity smart contract compilation for Polkadot
- Local Polkadot node support
- E2E and unit testing framework

## Next Steps
1. Research individual contributor profiles
2. Find foundry-polkadot project
3. Identify Polkadot-specific contributors (not original Hardhat/Foundry team)
4. Gather social media and contact information



## Foundry-Polkadot Project Information

### Repository Details
- **Repository**: https://github.com/paritytech/foundry-polkadot
- **Description**: Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust - Polkadot fork
- **Fork Status**: 60 commits ahead, 179 commits behind foundry-rs/foundry:master
- **Stars**: 12
- **Forks**: 2
- **Issues**: 43
- **Pull Requests**: 4
- **License**: Apache-2.0, MIT
- **Languages**: Rust (99.4%), Solidity (0.1%)
- **Total Commits**: 4,759

### Key Differences from Original Foundry
- **Resolc Compiler Support**: Uses Resolc compiler instead of Solc for PolkaVM-compatible bytecode
- **Polkadot Integration**: Specifically adapted for Polkadot blockchain development
- **Command Line Flag**: `--resolc` flag for Resolc compilation
- **Configuration**: `resolc_compile = true` in foundry.toml
- **Unsupported Features**: Anvil and Chisel not available, which means `forge test`, `forge snapshot`, and `forge script` are not supported

### Contributors Identified (Polkadot-specific)
Based on commits since the fork, focusing on Polkadot-specific development:

1. **smiasojed** - MOST ACTIVE CONTRIBUTOR
   - Recent commits: "Update the RPC urls to point to PassetHub", "Update compilers version", "Separate polkadot versions", "Readme update"
   - Very active with multiple commits across different areas

2. **filip-parity** - RELEASE & DOCUMENTATION LEAD
   - Recent commits: "Updated known issues in README.md", "Updated CHANGELOG.md for v.1.1.0", "Added release.sh for easy release automation", "Added cast & forge .sh and Dockerfile for release"
   - Focus on documentation and release management

3. **pkhry** - COMPILER INTEGRATION SPECIALIST
   - Recent commits: "update docs", "update foundry-compilers", "Fix forge compiler resolc to accept ResolcArgs"
   - Focus on compiler integration and technical implementation

4. **coul02** - TESTING SPECIALIST
   - Recent commits: "Add cast serial tests on kittchensink node"
   - Focus on testing infrastructure

### Related Repositories
- **paritytech/revive**: Hosts the Resolc compiler
- **paritytech/foundry-compilers-polkadot**: Utilities for working with compilers
- **paritytech/foundry-book-polkadot**: Documentation

### Installation & Usage
```bash
curl -L https://raw.githubusercontent.com/paritytech/foundry-polkadot/refs/heads/master/foundryup/install | bash
foundryup-polkadot
```

### Key Features
- PolkaVM-compatible bytecode generation
- Resolc compiler integration
- Polkadot-specific RPC endpoints
- Custom optimization modes for Resolc
- Heap and stack size configuration for contracts

