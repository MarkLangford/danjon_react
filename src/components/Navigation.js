import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import transparentLogo from "./../images/transparentLogo.png";

export default function Navigation() {
  const [solPrice, setSolPrice] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function getSolPrice() {
      fetch("https://api1.binance.com/api/v3/ticker/price?symbol=SOLUSDT")
        .then((res) => res.json())
        .then((price) => {
          let finalPrice = parseFloat(price.price);
          setSolPrice(finalPrice.toFixed(2));
          setIsLoaded(true);
        });
    }
    getSolPrice();
    setInterval(() => getSolPrice(), 10000);
  }, []);

  return (
    <div className="Navigation">
      <div className="Header">
        <img src={transparentLogo} class="Logo" alt="Logo" />
        <Link to="/">Danjon Reborn</Link>
      </div>
      <div>
        <Link to="/roadmap">Roadmap</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      {isLoaded && <p className="SOL_Price">SOL: {solPrice}</p>}
    </div>
  );
}
