# Passet Hub Research - Comprehensive Analysis

## Key Information from Polkadot Forum Post

### What is Passet Hub?
- **Passet Hub** = a temporary second instance of the Asset Hub system chain on the Polkadot testnet (Paseo)
- Contains a preview of **pallet-revive** (PolkaVM smart contracts)
- Preview Asset Hub = Passet Hub
- Spun up on the testnet (Paseo) by the Paseo core and Parity infra teams

### Purpose and Goals
- Provides an environment for testing smart contracts in anticipation of pallet-revive landing on Polkadot
- Will be regularly updated from Westend Asset Hub, as and when features are ready for wider user testing
- Designed specifically for smart contract development and testing

### Testnet Ecosystem Overview

#### Polkadot Testnet (Paseo)
- **Maintained by**: Paseo core group (R0GUE, Portico and Zondax)
- **Purpose**: Stable testnet with current Polkadot relay chain runtime
- **Use Case**: Testing smart contracts and parachains before deploying to Polkadot mainnet
- **Status**: "The" official Polkadot testnet
- **Runtime Updates**: Updated as soon as a Polkadot runtime referendum passes, usually ~1 week before being enacted on Polkadot

#### Parity Testnet (Westend)
- **Maintained by**: Parity's SRE team
- **Purpose**: Unstable environment for core protocol developers
- **Use Case**: Preview upgrades and changes to the main protocol
- **Status**: May still be needed for some integrations testing, validators, and as a testnet for Kusama, but not promoted widely
- **Target Audience**: Core protocol developers (i.e. Parity) and partners

### Key Changes in Testnet Strategy

1. **Simplifying Developer Journey**: testnet → mainnet
   - Addressing BD and developer feedback that current setup with various test- and live-nets is confusing
   - Hurting onboarding efforts

2. **Paseo as "The" Polkadot Testnet**
   - Vast majority of developers (dApp, parachain, end-user focused) will only need this testnet
   - Can now simply refer to it as "the testnet" in user-facing material

3. **Passet Hub Timeline**
   - Will be regularly updated from Westend Asset Hub
   - Will be decommissioned once Polkadot testnet (Paseo) Asset Hub system chain is updated with pallet-revive
   - Expected timeline: probably Q4 2025
   - **Important**: Any contract deployed on Passet Hub will NOT be migrated when Passet Hub is decommissioned

4. **Westend's Role**
   - Still exists but aimed at core protocol developers (Parity) and partners
   - Used to test and preview updates to the protocol
   - Not promoted widely to general developers

### Documentation Updates
- Documentation, faucets, Wikis, hackathon guides, etc. have been (or are being) updated to reflect the above changes

## Technical Details

### Passet Hub Features
- Second instance of Asset Hub system chain
- Contains pallet-revive for PolkaVM smart contracts
- Regularly updated from Westend Asset Hub
- Temporary nature - will be decommissioned in Q4 2025

### Integration with PolkaVM Ecosystem
- Direct connection to pallet-revive development
- Testing environment for smart contracts before mainnet deployment
- Bridge between Westend development and Polkadot mainnet deployment

