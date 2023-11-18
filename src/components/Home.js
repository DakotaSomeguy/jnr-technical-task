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

    fetch("/api/v1/cryptocurrency/listings/latest?limit=20", {
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
            listings[2].quote.USD.percent_change_24h * 100 >= 0 ? true : false
        );
        // Return the mapped values
        return listings.map((listing) => {
          return {
            index: listing.id,
            ticker: listing.symbol,
            sharesTraded: numeral(listing.quote.USD.volume_24h).format('0.[0]a'),
            priceTraded: currencyFormatter.format(listing.quote.USD.price, {code: 'USD'}),
            changeDirectionUp: listing.quote.USD.percent_change_24h * 100 >= 0 ? true : false,
            change: listing.quote.USD.percent_change_24h * 100,
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

  const handleTokenSelect = (token) => {
    addToken(token);
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
