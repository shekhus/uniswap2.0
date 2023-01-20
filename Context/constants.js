import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
// import userStorgeData from "./UserStorageData.json";

// BOO deployed to 0x666432Ccb747B2220875cE185f487Ed53677faC9
// LIfe deployed to 0xeC1BB74f5799811c0c1Bff94Ef76Fb40abccbE4a
// SingleSwapToken deployed to 0xF6a8aD553b265405526030c2102fda2bDcdDC177
// swapMultiHop deployed to 0x09120eAED8e4cD86D85a616680151DAA653880F2
//BOOTOKEN
export const BooTokenAddress = "0x666432Ccb747B2220875cE185f487Ed53677faC9";
export const BooTokenABI = booToken.abi;

//LIFE TOken
export const LifeTokenAddress = "0xeC1BB74f5799811c0c1Bff94Ef76Fb40abccbE4a";
export const LifeTokenABI = lifeToken.abi;

//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0xF6a8aD553b265405526030c2102fda2bDcdDC177";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0x09120eAED8e4cD86D85a616680151DAA653880F2";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4";
export const IWETHABI = IWETH.abi;

//USER STORAGE DAta

// export const userStorageDataAddrss =
//   "0xFCFE742e19790Dd67a627875ef8b45F17DB1DaC6";
// export const userStorageDataABI = userStorgeData.abi;
