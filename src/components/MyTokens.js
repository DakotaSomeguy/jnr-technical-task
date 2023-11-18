// MyTokens.js

import React from "react";
import Token from "./Token";
import useTokenStore from "./tokenStore"; // Adjust the path accordingly

const MyTokens = () => {
  const { selectedTokens } = useTokenStore();

  return (
    <div>
      <h1>My Tokens Page</h1>
      <ul>
        {selectedTokens.map((token) => (
          <Token
            key={token.index}
            tokenData={token}
          />
        ))}
      </ul>
    </div>
  );
};

export default MyTokens;
