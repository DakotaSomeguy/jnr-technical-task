import React, { useState, useEffect } from "react";
import MyToken from "./MyToken";

const MyTokens = () => {
  const [myTokens, setMyTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch tokens from the server when the component mounts
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

  // Function to handle token deletion
  const handleDeleteToken = async (id) => {
    try {
      // Send a DELETE request to the server
      const response = await fetch(`http://127.0.0.1:3001/api/my-tokens/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Remove the deleted token from the local state
      setMyTokens((prevTokens) => prevTokens.filter((token) => token._id !== id));
    } catch (error) {
      console.error('Error deleting token:', error);
      // Handle error gracefully, show a notification, etc.
    }
  };

  return (
    <div className="grid justify-items-center">
      <h1 className="text-3xl font-bold mt-10">My Tokens Page</h1>
      <div className="h-56 grid grid-cols-3 gap-4 content-start m-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          myTokens.map((token) => (
            <MyToken
              key={token._id}
              tokenData={token}
              onDelete={() => handleDeleteToken(token._id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyTokens;
