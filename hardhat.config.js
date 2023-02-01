require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_GOERLI_API_KEY = "HlV6pIzIK1ZHKm_bIeznnMpYEiXzVomY";
const PRIVATE_KEY =  "ecb054e0114cc4b80c43ccef9b962d2468bc217cc42d08d24313c0648a697312"; // A.Block Admin private key

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.7.6",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_GOERLI_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
  },
};
