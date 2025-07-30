import { createThirdwebClient } from "../packages/thirdweb/dist/esm/client/client.js";
import { getAllPublishedContracts } from "../packages/thirdweb/dist/esm/extensions/thirdweb/__generated__/IContractPublisher/read/getAllPublishedContracts.js";
import { getContractPublisher } from "../packages/thirdweb/dist/esm/extensions/thirdweb/write/publish.js";
import { fetchPublishedContractMetadata } from "../packages/thirdweb/dist/esm/contract/deployment/publisher.js";
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Create a basic client for the script
// Get a free client ID from https://thirdweb.com 
const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID || "79cc435a6e636c6a94cbd8adfadf60c3"
});

async function getAllPrebuiltContractURIs() {
  const allContracts = await getAllPublishedContracts({
    contract: getContractPublisher(client),
    publisher: "0xdd99b75f095d0c4d5112aCe938e4e6ed962fb024", // thirdweb deployer
  });
  
  // Process contracts in batches to avoid rate limitsz
  const contractURIs = [];
  const batchSize = 5; // Process 5 contracts at a time
  const delay = 1000; // 1 second delay between batches
  
  for (let i = 0; i < allContracts.length; i += batchSize) {
    const batch = allContracts.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(allContracts.length/batchSize)} (${batch.length} contracts)...`);
    
    const batchResults = await Promise.all(
      batch.map(async (contract) => {
        try {
          const metadata = await fetchPublishedContractMetadata({
            client,
            contractId: contract.contractId,
            publisher: "0xdd99b75f095d0c4d5112aCe938e4e6ed962fb024",
          });
          
          return {
            contractId: contract.contractId,
            metadataUri: `ipfs://${contract.contractId}`, // The contract ID IS the IPFS hash
            bytecodeUri: metadata.bytecodeUri,
            publishMetadataUri: contract.publishMetadataUri,
          };
        } catch (error) {
          console.warn(`Failed to fetch metadata for contract ${contract.contractId}:`, error.message);
          return {
            contractId: contract.contractId,
            metadataUri: `ipfs://${contract.contractId}`,
            bytecodeUri: null,
            publishMetadataUri: contract.publishMetadataUri,
            error: error.message,
          };
        }
      })
    );
    
    contractURIs.push(...batchResults);
    
    // Add delay between batches (except for the last batch)
    if (i + batchSize < allContracts.length) {
      console.log(`Waiting ${delay}ms before next batch...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  return contractURIs;
}

// Execute and save results to file
getAllPrebuiltContractURIs()
  .then(contracts => {
    const successful = contracts.filter(c => !c.error);
    const failed = contracts.filter(c => c.error);
    
    console.log(`\n✅ Successfully processed ${successful.length} contracts`);
    if (failed.length > 0) {
      console.log(`❌ Failed to process ${failed.length} contracts`);
    }
    console.log(`📦 Total contracts found: ${contracts.length}`);
    
    // Create timestamp for filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filename = join(__dirname, `prebuilt_contracts_${timestamp}.txt`);
    
    // Create file content
    const fileContent = `Thirdweb Prebuilt Contracts
Generated: ${new Date().toISOString()}
Total Contracts: ${contracts.length}
Successful: ${successful.length}
Failed: ${failed.length}

${'='.repeat(80)}

JSON Data:
${JSON.stringify(contracts, null, 2)}

${'='.repeat(80)}

Human Readable Summary:
${contracts.map((contract, index) => `
${index + 1}. Contract ID: ${contract.contractId}
   Metadata URI: ${contract.metadataUri}
   Bytecode URI: ${contract.bytecodeUri || 'N/A'}
   Publish Metadata URI: ${contract.publishMetadataUri}
   ${contract.error ? `❌ Error: ${contract.error}` : '✅ Success'}
`).join('')}
`;
    
    // Write to file
    try {
      writeFileSync(filename, fileContent);
      console.log(`\n💾 Results saved to: ${filename}`);
      console.log(`📄 File size: ${(fileContent.length / 1024).toFixed(1)} KB`);
    } catch (error) {
      console.error(`❌ Failed to write file: ${error.message}`);
      console.log('\n📋 Results (console fallback):');
      console.log(JSON.stringify(contracts, null, 2));
    }
  })
  .catch(error => {
    console.error("Error fetching contracts:", error);
  });