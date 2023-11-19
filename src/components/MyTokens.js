import React, { useState, useEffect } from "react";
import Token from "./Token";

const MyTokens = () => {
  const [myTokens, setMyTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch tokens from the server
    fetch('http://127.0.0.1:3001/api/my-tokens')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((tokens) => {
        setMyTokens(tokens);
      })
      .catch((error) => {
        console.error('Error fetching tokens:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid justify-items-center">
      <h1 className="text-3xl font-bold mt-10">My Tokens Page</h1>
      <div className="h-56 grid grid-cols-3 gap-4 content-start m-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          myTokens.map((token) => (
            <Token key={token.index} tokenData={token} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyTokens;
