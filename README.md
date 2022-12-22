npx create-next-app@latest

delete pages/api folder 
delete index page content 
rafce =Home 
_app.js =make arrow function 
delete Home.module

create folders 
 -Components
    -HeroSection 
        -HeroSection.jsx =rafce
        -HeroSection.modules.css
    -Model
    -NavBar
    -SearchToken
    -Toggle
    -TokenList
    index.js
delete eslint 

styles/global.css =import font 


to run  Desktop\uniswap2.0\uniswap2.0> npm run dev  
-npm run dev 
http://localhost:3000

import { NavBar } from "../Components/index";
<NavBar/>
NavBar moule.css 

Model section to connect with metamask and other wallets
const Model = ({ setOpenModel, connectWallet }) => {

TokenList ({ tokenDate, setOpenTokenBox }) => { } 

make necessary changes in \pages\index.js

HeroSection jsx & CSS with media control 
const HeroSection = ({accounts,tokenData}) => { } 

add Token folder to Components 
Token jsx & CSS 
const Token = ({ setOpenSetting }) => { }
.Token{ ...} 

Toggle switch for SWAP Settings
const Toggle = ({ label }) => { }

SearchToken 
const SearchToken = ({ openToken, tokens, tokenData }) => { }

#fd0151;

SMART CONTRACT DEVELOPEMENT
npx hardhat
yarn add --save-dev "hardhat@^2.12.4 
yarn add @nomicfoundation/hardhat-toolbox@^2.0.0

yarn add @uniswap/v3-periphery

yarn add @openzeppelin/contracts

yarn add ether

yarn add web3modal

SwapToken.sol

IWETH.sol

SingleSwap.js write tests 

SwapMultiHop.sol

SwapMultiHop.js

npx hardhat test test/SwapMultiHop.js