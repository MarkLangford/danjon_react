import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import transparentLogo from './../images/transparentLogo.png';

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
    const interval = setInterval(() => getSolPrice(), 10000);
  }, []);

  return (
    <div className="Navigation">
      <img src={transparentLogo} class="logo" alt="Logo"/>
      <Link to="/">Danjon Reborn</Link>
      {/*<Link to="/mint">Mint</Link>
      <Link to="/launchpad">Launchpad</Link>*/}
      {isLoaded && <p className="SOL_Price">SOL: {solPrice}</p>}
    </div>
  );
}
