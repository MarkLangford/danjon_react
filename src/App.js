import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mint from "./pages/Mint";
import Launchpad from "./pages/Launchpad";
import Navigation from "./components/Navigation";
import "./App.css";
import background from "./images/background.png";
import './fonts/CloisterBlack.ttf';

export default function App() {
  return (
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/launchpad" element={<Launchpad />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
