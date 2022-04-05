import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [solPrice, setSolPrice] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function getSolPrice() {
      fetch("https://api1.binance.com/api/v3/ticker/price?symbol=SOLUSDT")
        .then((res) => res.json())
        .then((price) => {
          setSolPrice(price.price);
          setIsLoaded(true);
          console.log("ran");
        });
    }
    getSolPrice();
    const interval = setInterval(() => getSolPrice(), 10000);
  }, []);

  return (
    <div className="Navigation">
      <Link to="/">Home</Link>
      <Link to="/mint">Mint</Link>
      <Link to="/launchpad">Launchpad</Link>
      {isLoaded && <p className="SOL_Price">SOL: {solPrice}</p>}
    </div>
  );
}
