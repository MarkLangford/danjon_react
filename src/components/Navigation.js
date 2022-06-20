import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import transparentLogo from "./../images/transparentLogoWhite.png";
import backgroundImage from "../images/background.png";

export default function Navigation() {
  const [solPrice, setSolPrice] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function getSolPrice() {
      document.body.style.background = `url(${backgroundImage})`;
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
        <Link to="/">
          <img
            src={transparentLogo}
            class="Logo"
            alt="Logo"
            style={{ color: "white" }}
          />
        </Link>
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
