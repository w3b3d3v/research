# Thread: EIP-1167 Proxies vs PolkaVM On-Chain Constructors

🧵 Thread: Why I'm studying EIP-1167 to understand how PolkaVM could revolutionize contract deployment

Currently researching how thirdweb's proxy magic works to understand how we could bring their extensive prebuilt contract library to PolkaVM on Asset Hub. Here's what I've discovered about why PolkaVM's approach might be superior... 1/12

## The EIP-1167 Pattern (Current State)

EIP-1167 "Minimal Proxy" is pure genius for EVM:

- 45 bytes of bytecode that delegates ALL calls to an implementation
- Deploy once, clone forever
- 90% gas savings vs full contract deployment

But here's the thing - it's also a hack around EVM's limitations 2/12

## How Thirdweb Makes It Work

Thirdweb's deployment flow is surprisingly complex:

1. Implementation contract deployed (full bytecode from IPFS)
2. TWCloneFactory creates minimal proxy
3. Proxy delegates every call to implementation
4. Initialization happens through proxy layer

It works, but there's a lot of indirection 3/12

## The Code Reality

```solidity
// EIP-1167 proxy bytecode (actual)
0x363d3d373d3d3d363d73[implementation]5af43d82803e903d91602b57fd5bf3

// Every function call goes through this:
DELEGATECALL to implementation
```

Your "contract" is actually just a tiny delegator. The real logic lives elsewhere. 4/12

## PolkaVM's Different Approach

PolkaVM introduces "on-chain constructors" - a fundamentally different pattern:

- Constructor logic stays permanently available
- VM can directly instantiate contracts
- No proxy layer needed
- Each instance is a real, independent contract 5/12

## Why This Matters

Current EVM pattern:

```
User Contract → Proxy (45 bytes) → Implementation (24KB)
                   ↑ indirection overhead
```

PolkaVM pattern:

```
User Contract ← VM Constructor Call ← Template
              ↑ direct instantiation
```

No indirection = better performance 6/12

## The RISC-V Problem

Here's why I'm doing this research: EIP-1167 won't work on PolkaVM

The proxy bytecode uses EVM opcodes:

- `DELEGATECALL` (doesn't exist in RISC-V)
- `CALLDATASIZE` (EVM-specific)
- `RETURNDATASIZE` (EVM-specific)

We need a completely different approach 7/12

## On-Chain Constructors Explained

Instead of proxy delegation, PolkaVM can:

```rust
// Constructor stays available on-chain
fn new_token(name: String, symbol: String) -> TokenContract {
    TokenContract { name, symbol, supply: 0 }
}

// VM calls constructor directly for each instance
let instance = vm.instantiate("TokenTemplate", args);
```

Much cleaner! 8/12

## Research Questions

What I'm still figuring out:

- How to replicate thirdweb's cost efficiency
- Constructor versioning and upgrades
- Gas metering for instantiation
- Storage pattern optimization
- Developer experience parity 9/12

## Early Findings

PolkaVM advantages I've identified:
✅ No proxy indirection overhead
✅ Simpler mental model
✅ True contract instances
✅ Better composability
✅ Cleaner architecture

But we need to prove the economics work 10/12

## Why This Research Matters

If PolkaVM can match EIP-1167's cost efficiency while providing better performance and simplicity, it could become the preferred deployment pattern for:

- NFT drops
- Token launches
- DeFi protocols
- Any multi-instance contracts 11/12

## Next Steps

Continuing to dig into:

- Thirdweb's exact cost breakdown
- IPFS integration patterns
- Constructor parameter optimization
- Migration path from EVM patterns

Coordinating with Parity on these findings as we work toward full Asset Hub integration. This could be a game-changer for Web3 deployment UX 🚀 12/12
