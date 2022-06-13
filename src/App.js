import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mint from "./pages/Mint";
import Launchpad from "./pages/Launchpad";
import Navigation from "./components/Navigation";
import "./App.css";
import background from "./images/background.png";
import "./fonts/CloisterBlack.ttf";
import Roadmap from "./pages/Roadmap";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
