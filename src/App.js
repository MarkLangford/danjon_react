import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mint from "./pages/Mint";
import Launchpad from "./pages/Launchpad";
import Navigation from "./components/Navigation";
import Roadmap from "./pages/Roadmap";
import Contact from "./pages/Contact";
import "./App.css";
import "./fonts/CloisterBlack.ttf";

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
