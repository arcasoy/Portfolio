//Import packages
import React, { useState, useRef, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import assets
import "./assets/global.css";

//Import pages
import HomePage from "./pages/HomePage";
import SocialTrackerPage from "./pages/SocialTrackerPage";

//Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Import context
import { GlobalStateContext } from "./context/globalState";

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
          </Routes>
        </BrowserRouter>
        <Footer />
      </GlobalStateContext.Provider>
    </div>
  );
}

export default App;
