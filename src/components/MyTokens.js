import React from "react";
import Token from "./Token";
import useTokenStore from "./tokenStore"; // Adjust the path accordingly

const MyTokens = () => {
  const { selectedTokens } = useTokenStore();

  return (
    <div className="grid justify-items-center" >
      <h1 className="text-3xl font-bold mt-10">My Tokens Page</h1>
      <div className="h-56 grid grid-cols-3 gap-4 content-start m-10">
        {selectedTokens.map((token) => (
          <Token
            key={token.index}
            tokenData={token}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTokens;
