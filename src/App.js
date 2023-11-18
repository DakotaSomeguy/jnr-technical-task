import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Token from './components/Token';
import MyTokens from './components/MyTokens';
import Home from './components/Home'

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
      <div>
        <Router>
          <Header />
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/my-tokens" element={<MyTokens/>} />
          </Routes>
          
          <Footer />
        </Router>
      </div>
    );
  }

export default App;
