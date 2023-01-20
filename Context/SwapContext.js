import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";
// import { Token, CurrencyAmount, TradeType, Percent } from "@uniswap/sdk-core";
// import axios from "axios";

//INTERNAL IMPORT
// Import various functions for connecting to and interacting with tokens and smart contracts
import {
  checkIfWalletConnected,
  connectWallet,
  connectingWithBooToken,
  connectingWithLIfeToken,
  connectingWithSingleSwapToken,
  connectingWithIWTHToken,
  connectingWithDAIToken,
  // connectingWithUserStorageContract,
  connectingWithMultiHopContract,
} from "../Utils/appFeatures";

// import { getPrice } from "../Utils/fetchingPrice";
// import { swapUpdatePrice } from "../Utils/swapUpdatePrice";
// import { addLiquidityExternal } from "../Utils/addLiquidity";
// import { getLiquidityData } from "../Utils/checkLiquidity";
// import { connectingWithPoolContract } from "../Utils/deployPool";

import { IWETHABI } from "./constants";
import ERC20 from "./ERC20.json";

// Create a context for the token swap feature
export const SwapTokenContext = React.createContext();

// Define a functional component that serves as a context provider
export const SwapTokenContextProvider = ({ children }) => {
  
  //USSTATE
    // State variables to store user's account, ether balance, network, and token data
  const [account, setAccount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnect, setNetworkConnect] = useState("");
  const [weth9, setWeth9] = useState("");
  const [dai, setDai] = useState("");

  const [tokenData, setTokenData] = useState([]);
  const [getAllLiquidity, setGetAllLiquidity] = useState([]);
  //TOP TOKENS
  const [topTokensList, setTopTokensList] = useState([]);

  const addToken = [
   //IWETH 
    // "0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4",
    //BOO
    "0x666432Ccb747B2220875cE185f487Ed53677faC9",
    //lifeToken
    "0xeC1BB74f5799811c0c1Bff94Ef76Fb40abccbE4a",
    // "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    // "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    // "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    // "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    // "0xe044814c9eD1e6442Af956a817c161192cBaE98F",
    // "0xaB837301d12cDc4b97f1E910FC56C9179894d9cf",
    // "0x4ff1f64683785E0460c24A4EF78D582C2488704f",
  ];

  //FETCH DATA
    // Function to fetch data about the user's account and token information
  const fetchingData = async () => {
    try {
      //GET USER ACCOUNT
      const userAccount = await checkIfWalletConnected();
      setAccount(userAccount);
      //CREATE PROVIDER
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      //CHECK Balance
      const balance = await provider.getBalance(userAccount);
      //convert balance into readable format
      const convertBal = BigNumber.from(balance).toString();
      //converts balance into ethers 
      const ethValue = ethers.utils.formatEther(convertBal);
      // console.log(ethValue)
      // setEther(ethValue);

      //GET NETWORK
      const newtork = await provider.getNetwork();
      setNetworkConnect(newtork.name);
      // console.log(newtork);

      // Get balance and data of all tokens
      addToken.map(async (el, i) => {
      // Get the contract
      //el variable, which is the current element in the addToken array, as the address of the contract, ERC20 as the ABI for the contract, and provider as the provider for the contract to provide name & symbol . 
       const contract = new ethers.Contract(el, ERC20, provider);
      //  console.log(contract);

      // Get the balance of the token for the user
        const userBalance = await contract.balanceOf(userAccount);
        const tokenLeft = BigNumber.from(userBalance).toString();
        const convertTokenBal = ethers.utils.formatEther(tokenLeft);
        console.log(convertTokenBal)

        // GET NAME AND SYMBOL
        const symbol = await contract.symbol();
        const name = await contract.name();
        console.log(name)


    // Add the token data to the tokenData state
        tokenData.push({
          name: name,
          symbol: symbol,
          tokenBalance: convertTokenBal,
          tokenAddress: el,
        });
        // console.log(tokenData);
      });
      }catch (error) {
        console.log(error);
      }
    };

      // //GET LIQUDITY
  //     const userStorageData = await connectingWithUserStorageContract();
  //     const userLiquidity = await userStorageData.getAllTransactions();
  //     console.log(userLiquidity);

  //     userLiquidity.map(async (el, i) => {
  //       const liquidityData = await getLiquidityData(
  //         el.poolAddress,
  //         el.tokenAddress0,
  //         el.tokenAddress1
  //       );

  //       getAllLiquidity.push(liquidityData);
  //       console.log(getAllLiquidity);
  //     });

  //     const URL = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";

  //     const query = `
  //     {
  //       tokens(orderBy: volumeUSD, orderDirection: desc, first:20){
  //         id
  //         name
  //         symbol
  //          decimals
  //         volume
  //         volumeUSD
  //          totalSupply
  //          feesUSD
  //          txCount
  //          poolCount
  //          totalValueLockedUSD
  //          totalValueLocked
  //          derivedETH
  //       }
  //     }
  //     `;

  //     const axiosData = await axios.post(URL, { query: query });
  //     console.log(axiosData.data.data.tokens);
  //     setTopTokensList(axiosData.data.data.tokens);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Call the fetchingData function when the component is rendered
  useEffect(() => {
    fetchingData();
  }, []);

  // //CREATE AND ADD LIQUIDITY
  // const createLiquidityAndPool = async ({
  //   tokenAddress0,
  //   tokenAddress1,
  //   fee,
  //   tokenPrice1,
  //   tokenPrice2,
  //   slippage,
  //   deadline,
  //   tokenAmmountOne,
  //   tokenAmmountTwo,
  // }) => {
  //   try {
  //     console.log(
  //       tokenAddress0,
  //       tokenAddress1,
  //       fee,
  //       tokenPrice1,
  //       tokenPrice2,
  //       slippage,
  //       deadline,
  //       tokenAmmountOne,
  //       tokenAmmountTwo
  //     );
  //     //CREATE POOL
  //     const createPool = await connectingWithPoolContract(
  //       tokenAddress0,
  //       tokenAddress1,
  //       fee,
  //       tokenPrice1,
  //       tokenPrice2,
  //       {
  //         gasLimit: 500000,
  //       }
  //     );

  //     const poolAddress = createPool;
  //     console.log(poolAddress);

  //     //CREATE LIQUIDITY
  //     const info = await addLiquidityExternal(
  //       tokenAddress0,
  //       tokenAddress1,
  //       poolAddress,
  //       fee,
  //       tokenAmmountOne,
  //       tokenAmmountTwo
  //     );
  //     console.log(info);

  //     //ADD DATA
  //     const userStorageData = await connectingWithUserStorageContract();

  //     const userLiqudity = await userStorageData.addToBlockchain(
  //       poolAddress,
  //       tokenAddress0,
  //       tokenAddress1
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //SINGL SWAP TOKEN
  const singleSwapToken = async ({ token1, token2, swapAmount }) => {
    console.log(
      token1.tokenAddress.tokenAddress,
      token2.tokenAddress.tokenAddress,
      swapAmount
    );
    try {
      // Call the connectingWithSingleSwapToken function from the imported appFeatures file
      let singleSwapToken;
      let weth;
      let dai;
      singleSwapToken = await connectingWithSingleSwapToken();
      weth = await connectingWithIWTHToken();
      dai = await connectingWithDAIToken();

      console.log(singleSwapToken);
      const decimals0 = 18;
      const inputAmount = swapAmount;
      const amountIn = ethers.utils.parseUnits(
        inputAmount.toString(),
        decimals0
      );

      await weth.deposit({ value: amountIn });
      console.log(amountIn);
      await weth.approve(singleSwapToken.address, amountIn);
      //SWAP
      const transaction = await singleSwapToken.swapExactInputSingle(
        token1.tokenAddress.tokenAddress,
        token2.tokenAddress.tokenAddress,
        amountIn,
        {
          gasLimit: 300000,
        }
      );
      await transaction.wait();
      console.log(transaction);
      const balance = await dai.balanceOf(account);
      const transferAmount = BigNumber.from(balance).toString();
      const ethValue = ethers.utils.formatEther(transferAmount);
      setDai(ethValue);
      console.log("DAI balance:", ethValue);
    } catch (error) {
      console.log(error);
    }
  };

  // Return the context provider with the state variables and functions passed as values
  return (
    <SwapTokenContext.Provider
      value={{ 
        account,
        singleSwapToken,
        // connectWallet,
        // getPrice,
        // swapUpdatePrice,
        // createLiquidityAndPool,
        // getAllLiquidity,
        // account,
        weth9,
        dai,
        networkConnect,
        ether,
        // tokenData,
        // topTokensList,
      }}
    >
      {children}
    </SwapTokenContext.Provider>
  );
};
