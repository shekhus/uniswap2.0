const hre = require("hardhat");

async function main() {
  //ERC20 BOO TOKEN
  const BooToken = await hre.ethers.getContractFactory("BooToken");
  const booToken = await BooToken.deploy();
  await booToken.deployed();
  console.log(`BOO deployed to ${booToken.address}`);

  //ERC20 LIFE TOKEN
  const LifeToken = await hre.ethers.getContractFactory("LifeToken");
  const lifeToken = await LifeToken.deploy();
  await lifeToken.deployed();
  console.log(`LIfe deployed to ${lifeToken.address}`);

  //SingleSwapToken
  // using the getContractFactory() function to create an instance of the "SingleSwapToken" contract factory. This factory can be used to deploy new instances of the "SingleSwapToken" contract to the blockchain.
  const SingleSwapToken = await hre.ethers.getContractFactory("SingleSwapToken");
  //deploys a new instance of the "SingleSwapToken" contract using the contract factory instance created in the first line. The returned object is assigned to the singleSwapToken variable.
  const singleSwapToken = await SingleSwapToken.deploy();
  //The third line is an asynchronous call to singleSwapToken.deployed() which is a promise that will resolve once the contract deployment is confirmed on the blockchain.
  await singleSwapToken.deployed();
  // a console log statement that prints out the address of the deployed contract, the singleSwapToken.address field, which is the address on the blockchain where the contract has been deployed.
  console.log(`SingleSwapToken deployed to ${singleSwapToken.address}`);

  //SwapMultiHop
  const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
  const swapMultiHop = await SwapMultiHop.deploy();
  await swapMultiHop.deployed();
  console.log(`swapMultiHop deployed to ${swapMultiHop.address}`);
}

//main() function call is wrapped in a try-catch block, this way, any errors that occur in the execution of the main() function will be caught by the catch() block.
main().catch((error) => {
  //Inside the catch() block, the console.error() function is used to log the error message. This will print the error message in the console, making it easier to diagnose and fix any issues that may occur.
  console.error(error);
  //process.exitCode = 1 is used to set the exit code of the process. When the process exits successfully, the exit code is 0 by default. However, when an error occurs, it is often useful to set the exit code to a non-zero value to indicate that an error has occurred. In this case, the code is setting the exit code to 1 to indicate that an error has occurred during the execution of the main() function.

  process.exitCode = 1;
});
