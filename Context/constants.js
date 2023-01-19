import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
// import userStorgeData from "./UserStorageData.json";

// BOO deployed to 0xbe18A1B61ceaF59aEB6A9bC81AB4FB87D56Ba167
// LIfe deployed to 0x25C0a2F0A077F537Bd11897F04946794c2f6f1Ef
// SingleSwapToken deployed to 0x01cf58e264d7578D4C67022c58A24CbC4C4a304E
// swapMultiHop deployed to 0xd038A2EE73b64F30d65802Ad188F27921656f28F
//BOOTOKEN
export const BooTokenAddress = "0xbe18A1B61ceaF59aEB6A9bC81AB4FB87D56Ba167";
export const BooTokenABI = booToken.abi;

//LIFE TOken
export const LifeTokenAddress = "0x25C0a2F0A077F537Bd11897F04946794c2f6f1Ef";
export const LifeTokenABI = lifeToken.abi;

//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0x01cf58e264d7578D4C67022c58A24CbC4C4a304E";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0xd038A2EE73b64F30d65802Ad188F27921656f28F";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4";
export const IWETHABI = IWETH.abi;

//USER STORAGE DAta

// export const userStorageDataAddrss =
//   "0xFCFE742e19790Dd67a627875ef8b45F17DB1DaC6";
// export const userStorageDataABI = userStorgeData.abi;
