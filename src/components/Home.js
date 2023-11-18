import React, { useState } from "react";
import Token from "./Token";
import useTokenStore from "./tokenStore";

const tokenData = [
  {
    index: "#1",
    ticker: "BTC",
    sharesTraded: "510.21 Bn",
    priceTraded: "$26,123.21",
    changeDirectionUp: true,
    change: "1.50%",
  },
  {
    index: "#2",
    ticker: "BCH",
    sharesTraded: "510.21 Bn",
    priceTraded: "$26,123.21",
    changeDirectionUp: false,
    change: "1.50%",
  },
];

export default function Home() {
    const { addToken } = useTokenStore();

    const handleTokenSelect = (token) => {
        addToken(token);
      };

  return (
    <div className="">
      {tokenData.map((token) => (
        <Token
          key={token.index}
          tokenData={token}
          onSelect={() => handleTokenSelect(token)}
        />
      ))}
    </div>
  );
}
