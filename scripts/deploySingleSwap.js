const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const SingleSwap = await hre.ethers.getContractFactory("SingleSwap");
  const singleSwap = await SingleSwap.deploy(
    /*{gasPrice: 30000000000, gasLimit: 1000000, nonce: 1311}*/
  );

  await singleSwap.deployed();

  console.log("Single Swap contract deployed: ", singleSwap.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
