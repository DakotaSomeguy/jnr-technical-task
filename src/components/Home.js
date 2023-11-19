import React, { useState, useEffect } from "react";
import Token from "./Token";
import useTokenStore from "./tokenStore";
import numeral from 'numeral';
import currencyFormatter from 'currency-formatter';

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
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "0cb61b43-fe49-42ce-8e3a-e030fb104f24";

    fetch("/api-proxy/v1/cryptocurrency/listings/latest?limit=20", {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((rsp) => {
        // Process the data from the API response
        console.log(rsp.data);
        return rsp.data;
      })
      .then((listings) => {
        console.log(
            numeral(listings[2].quote.USD.percent_change_24h).format('0.00%')
        );
        // Return the mapped values
        let id = 0
        return listings.map((listing) => {
            id = id + 1
          return {
            index:id,
            ticker: listing.symbol,
            sharesTraded: numeral(listing.quote.USD.volume_24h).format('0.[0]a'),
            priceTraded: currencyFormatter.format(listing.quote.USD.price, {code: 'USD'}),
            changeDirectionUp: listing.quote.USD.percent_change_24h * 100 >= 0 ? true : false,
            change: numeral(listing.quote.USD.percent_change_24h).format('0.00%')
          };
        });
      })
      .then((listings) => setTokens(listings))
      .catch((error) => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

//   const handleTokenSelect = (token) => {
//     addToken(token);
//   };

const handleTokenSelect = async (token) => {
    try {
      const response = await fetch('http://127.0.0.1:3001/api/my-tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token),
      });
  
      if (!response.ok) {
        if (response.status === 409) {
          console.error('Token already exists');
          // Handle the case where the token already exists (show a notification, etc.)
        } else {
          throw new Error('Network response was not ok');
        }
      } else {
        const newToken = await response.json();
        console.log('Token added:', newToken);
        // You can perform additional actions here if needed
      }
    } catch (error) {
      console.error('Error adding token:', error);
      // Handle error gracefully, show a notification, etc.
    }
  };
  
  

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="h-56 grid grid-cols-3 gap-4 content-start m-10">
      {tokens.map((token) => (
        <Token
          key={token.index}
          tokenData={token}
          onSelect={() => handleTokenSelect(token)}
        />
      ))}
    </div>
  );
}
