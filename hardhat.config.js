require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    sepolia: {
      url: "YOUR_ALCHEMY_OR_INFURA_RPC_URL",
      accounts: ["YOUR_WALLET_PRIVATE_KEY"]
    }
  }
};
