# Passet Hub vs Westend: Comprehensive Testnet Comparison

## Executive Summary

**Recommendation**: Use **Passet Hub** for smart contract development and testing. Use **Westend** only if you need bleeding-edge protocol features or are doing core protocol development.

## Detailed Comparison

### Passet Hub (Recommended for Smart Contracts)

#### What is it?
- **Temporary** second instance of Asset Hub system chain on Polkadot testnet (Paseo)
- Contains **pallet-revive** (PolkaVM smart contracts)
- Specifically designed for smart contract development and testing
- Part of the official Polkadot testnet ecosystem

#### Key Advantages
✅ **Designed for Smart Contracts**: Built specifically for pallet-revive/PolkaVM testing
✅ **Stable Environment**: Community-managed, stable testnet
✅ **Production-Like**: Mirrors Asset Hub's runtime
✅ **Regular Updates**: Updated from Westend Asset Hub when features are ready
✅ **Community Support**: Maintained by experienced teams (Portico, R0GUE, Zondax)
✅ **Clear Path to Production**: Direct pathway from Passet Hub → Polkadot mainnet
✅ **Fast Sync**: New testnet, fast syncing (unlike old testnets)

#### Key Disadvantages
❌ **Temporary Nature**: Will be decommissioned in Q4 2025
❌ **No Migration**: Contracts deployed here won't be migrated when decommissioned
❌ **Limited History**: New testnet, less historical data

#### Technical Specifications
- **Network**: Paseo (Polkadot testnet)
- **Runtime**: Asset Hub + pallet-revive
- **Consensus**: nPOS (same as Polkadot)
- **Smart Contracts**: PolkaVM (Solidity compatible)
- **Faucet**: Available via Polkadot testnet faucet
- **RPC Endpoints**: Updated to point to Asset Hub

### Westend (For Protocol Development Only)

#### What is it?
- **Unstable** environment for core protocol developers
- Maintained by Parity's SRE team
- Used for previewing upgrades and changes to main protocol

#### Key Advantages
✅ **Bleeding Edge Features**: Access to newest protocol features before they hit mainnet
✅ **Protocol Testing**: Ideal for testing new Polkadot protocol changes
✅ **Established**: Longer history and established infrastructure
✅ **Parity Maintained**: Direct support from Parity Technologies

#### Key Disadvantages
❌ **Unstable**: Designed to be unstable, frequent breaking changes
❌ **Not for dApps**: Not recommended for dApp or smart contract development
❌ **Complex Setup**: More complex for general developers
❌ **Slow Sync**: Older testnet, slower syncing times
❌ **Protocol Focus**: Optimized for protocol development, not application development

#### Technical Specifications
- **Network**: Westend
- **Runtime**: Latest protocol changes (often unstable)
- **Consensus**: nPOS
- **Smart Contracts**: May have experimental features
- **Target Audience**: Core protocol developers, validators

## Use Case Recommendations

### Choose Passet Hub If You Are:
1. **Smart Contract Developer** - Building Solidity contracts for PolkaVM
2. **dApp Developer** - Creating decentralized applications
3. **Parachain Team** - Testing parachain integration with smart contracts
4. **End-User Focused Developer** - Building user-facing applications
5. **New to Polkadot** - Learning the ecosystem
6. **Testing pallet-revive** - Specifically working with PolkaVM features

### Choose Westend If You Are:
1. **Core Protocol Developer** - Working on Polkadot protocol itself
2. **Validator** - Testing validator setup and operations
3. **Infrastructure Provider** - Testing infrastructure changes
4. **Parity Partner** - Collaborating on protocol development
5. **Need Bleeding Edge** - Require access to unreleased protocol features

## Migration Timeline

### Current Status (June 2025)
- **Passet Hub**: Active and recommended for smart contracts
- **Westend**: Still active but not promoted for general development

### Future Timeline
- **Q4 2025**: Passet Hub will be decommissioned
- **Q4 2025**: Polkadot testnet (Paseo) Asset Hub will be updated with pallet-revive
- **Post Q4 2025**: Use Paseo Asset Hub directly for smart contract testing

## Technical Comparison

| Feature | Passet Hub | Westend |
|---------|------------|---------|
| **Stability** | Stable | Unstable |
| **Purpose** | Smart Contracts | Protocol Development |
| **Runtime** | Asset Hub + pallet-revive | Latest Protocol Changes |
| **Sync Speed** | Fast | Slow |
| **Community Support** | High | Limited |
| **Documentation** | Comprehensive | Technical |
| **Faucet Access** | Easy | Available |
| **Breaking Changes** | Minimal | Frequent |
| **Production Similarity** | High | Variable |

## Development Workflow Recommendations

### For Smart Contract Development (Recommended Path)
1. **Development**: Local development environment
2. **Testing**: Passet Hub (current recommendation)
3. **Pre-Production**: Paseo Asset Hub (post Q4 2025)
4. **Production**: Polkadot Asset Hub

### For Protocol Development
1. **Development**: Local development environment
2. **Testing**: Westend
3. **Pre-Production**: Paseo
4. **Production**: Polkadot

## Key Contributors and Teams

### Passet Hub Team
- **Paseo Core Group**: R0GUE, Portico, Zondax
- **Key Contributors**:
  - porticodotlabs (Portico)
  - al3mart (Alejandro Martinez)
  - JulianToledano (Julián Toledano)
  - pgherveou (PG Herveou) - 889 contributions in last year

### Westend Team
- **Maintained by**: Parity Technologies SRE team
- **Target Users**: Core protocol developers and Parity partners

## Conclusion

**For PolkaVM/Smart Contract Development: Choose Passet Hub**

Passet Hub is specifically designed for your use case, offers a stable environment, and provides a clear path to production deployment. While it's temporary, it's the best current option for smart contract development and testing.

**Migration Strategy**: Start with Passet Hub now, and plan to migrate to Paseo Asset Hub when pallet-revive is integrated (Q4 2025).

