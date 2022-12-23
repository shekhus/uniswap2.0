import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";


// BOO deployed to 0xc3023a2c9f7B92d1dd19F488AF6Ee107a78Df9DB
// LIfe deployed to 0x124dDf9BdD2DdaD012ef1D5bBd77c00F05C610DA
// SingleSwapToken deployed to 0xe044814c9eD1e6442Af956a817c161192cBaE98F
// swapMultiHop deployed to 0xaB837301d12cDc4b97f1E910FC56C9179894d9cf

//BOOTOKEN
export const BooTokenAddress = "0xc3023a2c9f7B92d1dd19F488AF6Ee107a78Df9DB";
export const BooTokenABI = booToken.abi;

//LIFE TOken
export const LifeTokenAddress = "0x124dDf9BdD2DdaD012ef1D5bBd77c00F05C610DA";
export const LifeTokenABI = lifeToken.abi;

//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0xe044814c9eD1e6442Af956a817c161192cBaE98F";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0xaB837301d12cDc4b97f1E910FC56C9179894d9cf";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
//from contracts\SwapToken.sol
export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const IWETHABI = IWETH.abi;
