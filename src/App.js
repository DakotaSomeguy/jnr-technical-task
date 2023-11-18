import logo from "./logo.svg";
import "./App.css";
import React from "react";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Token from "./components/Token";



function App() {
  return (
    <div className="">
      <Header />
      <Token index={"#1"} ticker={"BTC"} sharesTraded={"510.21 Bn"} priceTraded={"$26,123.21"} change={"1.50%"}/>
      <Footer />
    </div>
  );
}

export default App;
