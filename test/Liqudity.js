//Line 1: It imports the Chai library's expect function for making assertions in the test.
//Line 2: It imports the Hardhat library's ethers object, which is used for interacting with smart contracts.
const { expect } = require("chai");
const { ethers } = require("hardhat");

// These addresses are  used as test accounts with a large balance of the corresponding tokens.
const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const DAI_WHALE = "0x97f991971a37D4Ca58064e6a98FC563F03A71E5c";
const USDC_WHALE = "0x97f991971a37D4Ca58064e6a98FC563F03A71E5c";

// It starts a describe block for the overall test suite named "LiquidityExamples"
describe("LiquidityExamples", () => {
  //declares let variables for the deployed contract instance, the test accounts, and the DAI and USDC contracts.
  let liquidityExamples;
  let accounts;
  let dai;
  let usdc;

  //starts the "before" hook, which is run before any of the test cases.
  before(async () => {
    //It assigns the accounts variable to an array of signers returned by the getSigners method of the ethers object. This array contains the addresses of the test accounts that can sign and send transactions.
    accounts = await ethers.getSigners(1);

    // It retrieves the contract factory for the "LiquidityExamples" contract and deploys an instance of it. The deployed() method is called to ensure that the contract deployment is successful.
    const LiquidityExamples = await ethers.getContractFactory("LiquidityExamples");
    liquidityExamples = await LiquidityExamples.deploy();
    await liquidityExamples.deployed();

    // It retrieves the DAI and USDC contracts at their respective addresses using the getContractAt method of the ethers object.
    dai = await ethers.getContractAt("IERC20", DAI);
    usdc = await ethers.getContractAt("IERC20", USDC);

    // It unlocks the DAI and USDC "whale" accounts by sending a request to the hardhat_impersonateAccount method of the provider, and then retrieves the signers for these accounts.
    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [DAI_WHALE],
    });
    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [USDC_WHALE],
    });

    const daiWhale = await ethers.getSigner(DAI_WHALE);
    const usdcWhale = await ethers.getSigner(USDC_WHALE);

    // Send DAI and USDC to accounts[0]
    const daiAmount = 1000n * 10n ** 18n;
    const usdcAmount = 1000n * 10n ** 6n;

    const daiBal = await dai.balanceOf(daiWhale.address);
    const usdcBal = await dai.balanceOf(usdcWhale.address);
    console.log(daiBal, usdcBal, daiAmount, usdcAmount);

// It asserts that the balance of the DAI and USDC "whale" accounts is greater than or equal to the specified amounts, and then sends these amounts from the "whale" accounts to the first test account.
    expect(await dai.balanceOf(daiWhale.address)).to.gte(daiAmount);
    expect(await usdc.balanceOf(usdcWhale.address)).to.gte(usdcAmount);

    await dai.connect(daiWhale).transfer(accounts[0].address, daiAmount);
    await usdc.connect(usdcWhale).transfer(accounts[0].address, usdcAmount);
  });

  it("mintNewPosition", async () => {
    const daiAmount = 100n * 10n ** 18n;
    const usdcAmount = 100n * 10n ** 6n;

    //It sends the DAI and USDC amounts to the liquidityExamples contract from the first test account.
    await dai
      .connect(accounts[0])
      .transfer(liquidityExamples.address, daiAmount);
    await usdc
      .connect(accounts[0])
      .transfer(liquidityExamples.address, usdcAmount);

      //It calls the mintNewPosition function on the liquidityExamples contract.
    await liquidityExamples.mintNewPosition();

    console.log(
      "DAI balance after add liquidity",
      await dai.balanceOf(accounts[0].address)
    );
    console.log(
      "USDC balance after add liquidity",
      await usdc.balanceOf(accounts[0].address)
    );
  });
});
