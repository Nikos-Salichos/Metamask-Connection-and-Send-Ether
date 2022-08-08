// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hardhat = require("hardhat");

// Npm commands
// npx hardhat clean
// npx hardhat compile
// npx hardhat node --> let it open and use new terminal
// npx hardhat run scripts/deploy.js ή npx hardhat run --network rinkeby scripts/deploy.js

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    const LotterySmartContract = await hardhat.ethers.getContractFactory("Lottery");
    console.log('wallet address ' + process.env.REACT_APP_WALLET_ADDRESS)
    const lotteryContructor = await LotterySmartContract.deploy(process.env.REACT_APP_WALLET_ADDRESS);

    await lotteryContructor.deployed();

    console.log("Lottery deployed to:", lotteryContructor.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });