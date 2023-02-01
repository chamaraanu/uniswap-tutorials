const { ethers } = require("hardhat");

async function main() {
    const provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.alchemyapi.io/v2/HlV6pIzIK1ZHKm_bIeznnMpYEiXzVomY')

    const signer1 = new ethers.Wallet("ecb054e0114cc4b80c43ccef9b962d2468bc217cc42d08d24313c0648a697312", provider);
    const swapAddress = "0xe61e0B7C5562f21267421Dd746677EBb5771458c";

    const SingleSwap = await hre.ethers.getContractFactory("SingleSwap");
    const singleSwap = SingleSwap.attach(swapAddress);

    const abusdt = "0xa3f3d8c3754CF6Aa25A0d2315F9ed4aE2A48E9c7";
    const abwbtc = "0x7AFd8dEA4CCD6d26222920b428a6feB6d4AA8E60";
    const Token = await hre.ethers.getContractFactory("Token");
    const wantToken = await Token.attach(abusdt);
    const wcoin = await Token.attach(abwbtc);

    amount1 = ethers.utils.parseUnits('0.08', 18);
    await wcoin.connect(signer1).approve(singleSwap.address, amount1);
    await singleSwap.connect(signer1).swapExactInputSingle(amount1, wcoin.address, wantToken.address, {gasLimit: 3000000});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});