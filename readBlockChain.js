const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/70a56eb7550a404383ee8c7c6ed7dc96`
);
//0x0C51CDC55e0eD32D8265e36E5C2DF52Bc88c8E52
const querryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log("Current Block Number:", block);

  const balance = await provider.getBalance(
    "0x0C51CDC55e0eD32D8265e36E5C2DF52Bc88c8E52"
  );
  console.log("Account Balance In BN:", balance);

  const balanceEther = ethers.utils.formatEther(balance);
  console.log("Account Balance In Ether:", balanceEther);

  const balanceWei = ethers.utils.parseEther(balanceEther);
  console.log(balanceWei);
};
querryBlockchain();