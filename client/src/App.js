//Import packages
import React, { useState, useRef, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import assets
import "./assets/global.css";

//Import pages
import HomePage from "./pages/HomePage";
import SocialTrackerPage from "./pages/SocialTrackerPage";
import TDSPage from "./pages/TDSPage";
import ReliabilityTestPage from "./pages/ReliabilityTestPage";
import NEUCapstonePage from "./pages/NEUCapstonePage";
import BVEPage from "./pages/BVEPage";
import PortfolioSitePage from "./pages/PortfolioSitePage";

//Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Import context
import { GlobalStateContext } from "./context/globalState";
import FootStretcherPage from "./pages/FootStretcherPage";

function App() {
  const [scrollDynamicOffset, setScrollDynamicOffset] = useState(0);

  return (
    <div className="App">
      <GlobalStateContext.Provider
        value={{ scrollDynamicOffset, setScrollDynamicOffset }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/social-tracker" element={<SocialTrackerPage />} />
            <Route path="/tds-web-dev" element={<TDSPage />} />
            <Route path="/reliability-test" element={<ReliabilityTestPage />} />
            <Route path="/foot-stretcher" element={<FootStretcherPage />} />
            <Route path="/neu-capstone" element={<NEUCapstonePage />} />
            <Route path="/bve" element={<BVEPage />} />
            <Route path="/portfolio" element={<PortfolioSitePage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </GlobalStateContext.Provider>
    </div>
  );
}

export default App;
