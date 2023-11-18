import logo from "./logo.svg";
import "./App.css";
import React from "react";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Token from "./components/Token";

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

function App() {
  return (
    <div className="">
      <Header />
      {
        tokenData.map((token) => (
            <Token tokenData={token} />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
