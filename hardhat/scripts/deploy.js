const {ethers} = require("hardhat");

async function main() {

  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  // 10 is the Maximum number of whitelisted addresses allowed
  await deployedWhitelistContract.deployed();

  console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
