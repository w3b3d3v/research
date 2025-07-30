# Thread: How I Mapped Thirdweb's IPFS Bytecode Network

🧵 Thread: Reverse-engineering thirdweb's "invisible" contract storage system

Spent days tracking down where thirdweb actually stores contract bytecode while researching how to bring their audited contract ecosystem to Asset Hub. What I found is a sophisticated decentralized registry most developers never see. Here's how I mapped it... 1/14

## The Mystery: Where's the Code?

First clue: thirdweb's codebase has almost NO Solidity files. Yet it deploys complex contracts like TokenERC20, NFT drops, etc.

The monorepo is pure TypeScript. So where does the actual contract bytecode come from? 🕵️ 2/14

## Following the Trail

Started with a simple question: what happens when you deploy TokenERC20?

```typescript
await deployERC20Contract({
  type: "TokenERC20",
  params: { name: "MyToken", symbol: "MTK" },
});
```

This contractId "TokenERC20" had to resolve somewhere... 3/14

## Discovery 1: The Polygon Registry

Found this hidden gem:

```typescript
export const CONTRACT_PUBLISHER_ADDRESS =
  "0xf5b896Ddb5146D5dA77efF4efBb3Eae36E300808";
```

ALL prebuilt contracts are registered in a single smart contract on Polygon. This is thirdweb's source of truth. 4/14

## Discovery 2: IPFS URI Chain

The registry doesn't store bytecode directly. Instead:

```
contractId → publishMetadataUri (IPFS)
  ↓
IPFS metadata → metadataUri + bytecodeUri (more IPFS)
  ↓
Final bytecode (IPFS again!)
```

Three-layer IPFS architecture! 5/14

## Building the Mapping Script

To understand this fully, I wrote a script to extract ALL prebuilt contracts:

```javascript
// get_prebuilt_ipfs.js
const contracts = await getAllPublishedContracts({
  publisher: THIRDWEB_DEPLOYER,
  contract: publisherContract,
});

for (const contract of contracts) {
  console.log(`${contract.contractId} → ${contract.publishMetadataUri}`);
}
```

6/14

## The Data Structure

What I found in the IPFS metadata:

```json
{
  "name": "TokenERC20",
  "metadataUri": "ipfs://QmDef456...", // Compiler data
  "bytecodeUri": "ipfs://QmGhi789...", // Actual bytecode
  "version": "1.0.0",
  "deployType": "autoFactory"
}
```

Clean separation of concerns! 7/14

## Mapping Results

Found 50+ prebuilt contracts:

- TokenERC20, TokenERC721, TokenERC1155
- DropERC20, DropERC721, DropERC1155
- MarketplaceV3, Split, VoteERC20
- AccountFactory, Forwarder, TWCloneFactory
- And many more infrastructure contracts 8/14

## The Economics

Why this architecture is brilliant:

✅ Compile once, deploy everywhere
✅ Bytecode shared across all chains
✅ Deterministic addresses possible
✅ Version management built-in
✅ Decentralized storage (IPFS)

No wonder deployments are so cheap! 9/14

## IPFS Pinning Reality

But here's the catch - IPFS isn't automatically permanent:

- Files need active pinning
- Popular contracts (like TokenERC20) likely well-pinned
- Newer/experimental contracts at risk
- No SLA guarantees

This concerns me for production use 10/14

## The Download Process

When you deploy, thirdweb:

1. Queries Polygon registry for IPFS URI
2. Downloads metadata JSON from IPFS
3. Downloads bytecode from nested IPFS URI
4. Deploys implementation (if not exists)
5. Creates your proxy

Three network calls per deployment! 11/14

## PolkaVM Implications

For PolkaVM tooling, I need to solve:

- How to store RISC-V bytecode equivalently
- Whether to reuse IPFS or build new registry
- How to handle IPFS reliability concerns
- Migration path from existing contracts
- Cost optimization strategies 12/14

## Research Artifacts

Generated complete mapping:

- 1553 lines of contract data
- IPFS URIs for all prebuilts
- Metadata structure documentation
- Publisher address registry

All in my research folder for analysis 📊 13/14

## Next Steps

This IPFS mapping enables me to:

1. Understand thirdweb's cost model
2. Plan PolkaVM equivalent architecture
3. Build migration tooling
4. Optimize for RISC-V deployment patterns

Reporting these findings to Parity and will continue sharing updates on the Asset Hub integration progress. The real work starts now! 🚀 14/14
