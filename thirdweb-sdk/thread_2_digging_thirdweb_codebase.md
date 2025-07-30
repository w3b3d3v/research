# Thread: Digging Into Thirdweb's Codebase to Solve PolkaVM Deployment

🧵 Thread: Reverse-engineering thirdweb's deployment magic to build better PolkaVM tooling

Spent the week diving deep into thirdweb's monorepo, exploring how to adapt their battle-tested deployment patterns for Asset Hub's PolkaVM. What I found is both brilliant and concerning for PolkaVM compatibility. Here's my journey... 1/15

## Starting Point: The Black Box

When you click "Deploy" in thirdweb, a TokenERC20 appears on-chain in seconds for less than $1. How?

I needed to understand this flow completely to build equivalent tooling for PolkaVM. Time to read some code 📚 2/15

## Discovery 1: The IPFS Registry

First surprise: thirdweb doesn't store contract bytecode locally.

```typescript
// packages/thirdweb/src/contract/deployment/publisher.ts
export const CONTRACT_PUBLISHER_ADDRESS =
  "0xf5b896Ddb5146D5dA77efF4efBb3Eae36E300808"; // Polygon only
```

Everything lives in a smart contract registry pointing to IPFS. Clever! 3/15

## Discovery 2: The Three-Step Dance

Thirdweb's deployment isn't one transaction - it's a coordinated process:

1. **Fetch metadata** from Polygon registry
2. **Download bytecode** from IPFS
3. **Deploy infrastructure** (if needed)
4. **Create proxy clone** via TWCloneFactory

Each step has fascinating complexity 4/15

## Discovery 3: Generated Code Everywhere

Most impressive finding: extensive code generation

```
packages/thirdweb/src/extensions/
├── prebuilts/
│   ├── deploy-erc20.ts         # 👨‍💻 Human-written
│   └── __generated__/
│       └── TokenERC20/
│           └── write/
│               └── initialize.ts # 🤖 Auto-generated
```

ABI files become TypeScript. Brilliant DX! 5/15

## Discovery 4: The Bootstrap Problem

Found this gem in `bootstrap.ts`:

```typescript
const { cloneFactoryContract, implementationContract } =
  await getOrDeployInfraForPublishedContract({
    contractId: "TokenERC20",
    // downloads IPFS bytecode here!
  });
```

Infrastructure deployed on-demand, per chain 6/15

## Discovery 5: IPFS Dependency Chain

The data flow is wild:

```
"TokenERC20" → Polygon Registry → publishMetadataUri
  ↓
IPFS Metadata → metadataUri + bytecodeUri
  ↓
Compiler Data + Deploy Bytecode → Implementation Contract
```

Three IPFS downloads per deployment! 7/15

## Discovery 6: The Proxy Magic

TWCloneFactory creates minimal proxies:

```typescript
// Only ~45 bytes of bytecode
return deployProxyByImplementationV2({
  implementation: implementationAddress,
  data: await encode(initializeTransaction),
  salt: deterministic_salt,
});
```

Your "contract" is just a delegator 8/15

## The PolkaVM Problem

Here's where it gets concerning. Thirdweb's architecture is deeply EVM-coupled:

- EIP-1167 proxy bytecode (won't work on RISC-V)
- DELEGATECALL semantics (doesn't exist in PolkaVM)
- Gas metering assumptions (different in PolkaVM)

We need a ground-up reimplementation 9/15

## Research Insights

What thirdweb got right:
✅ IPFS for decentralized bytecode storage
✅ Deterministic deployment addresses  
✅ Cost optimization through proxies
✅ Infrastructure bootstrapping
✅ Developer experience

What won't work on PolkaVM:
❌ EIP-1167 minimal proxies
❌ TWCloneFactory pattern
❌ EVM-specific gas assumptions 10/15

## The PolkaVM Opportunity

But here's the exciting part - PolkaVM's on-chain constructors could be BETTER:

Instead of:

```
Proxy → DELEGATECALL → Implementation
```

We get:

```
VM Constructor Call → Direct Instance
```

Simpler, faster, cleaner! 11/15

## Code Organization Lessons

Thirdweb's structure taught me valuable patterns:

- **Layered abstraction**: Generated → Extensions → Prebuilts
- **Modular compilation**: ABI → TypeScript at build time
- **Infrastructure management**: Bootstrap dependencies automatically
- **Developer ergonomics**: Hide complexity behind simple APIs 12/15

## What I'm Building Next

Based on these findings, my PolkaVM deployment library needs:

1. **Template registry** (equivalent to IPFS storage)
2. **Constructor calling infrastructure** (replaces proxies)
3. **Code generation pipeline** (ABI → PolkaVM bindings)
4. **Cost optimization** (match thirdweb's economics)
5. **Migration tools** (EVM → PolkaVM) 13/15

## Open Questions

Still researching:

- How to version on-chain constructors?
- Can we match proxy deployment costs?
- What's the developer migration path?
- How to handle complex initialization?
- Storage optimization strategies? 14/15

## Why This Matters

If we can replicate thirdweb's deployment UX on PolkaVM while eliminating proxy complexity, we'll have:

- Better performance (no DELEGATECALL overhead)
- Simpler architecture (true contract instances)
- Future-proof patterns (RISC-V native)

Sharing these architectural insights with Parity as we advance the Asset Hub integration. The research continues! 🔬 15/15
