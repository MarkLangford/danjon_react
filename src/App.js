import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mint from "./pages/Mint";
import Launchpad from "./pages/Launchpad";
import Navigation from "./components/Navigation";
import "./App.css";

export default function App() {
  return (
    <div className="App">
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
