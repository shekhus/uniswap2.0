import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./TokenList.module.css";
import images from "../../assets";

// A component to display a list of tokens
const TokenList = ({ tokenData, setOpenTokenBox }) => {
  // const data = [1, 2, 3, 4, 5, 6, 7];

  //A function to prvent repeatation of the tokenList in the menu 
  let tokenList = [];
  for (let i = 0; i < tokenData.length; i++) {
    if (i % 2 == 1) tokenList.push(tokenData[i]);
  }

  // Render the component
  return (
    <div className={Style.TokenList}>
    {/* Create a p element to close the token list */}
      <p
        className={Style.TokenList_close}
        onClick={() => setOpenTokenBox(false)}
      >
        <Image src={images.close} alt="close" width={50} height={50} />
      </p>
        {/* Create a title for the token list */}
      <div className={Style.TokenList_title}>
        <h2>Your Token List</h2>
      </div>

  {/* Map through the tokenList array and create a box for each token */}
      {tokenList.map((el, i) => (
        <div className={Style.TokenList_box}>
          <div className={Style.TokenList_box_info}>
                  {/* Display the name of the token */}
            <p className={Style.TokenList_box_info_symbol}>{el.name}</p>
            <p>
                    {/* Display the balance and symbol of the token */}
              <span>{el.tokenBalance}</span> {el.symbol}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TokenList