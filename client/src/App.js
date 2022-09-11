//Import packages
import React, { useState, useRef, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import assets
import "./assets/global.css";

//Import pages
import HomePage from "./pages/HomePage";
import SocialTrackerPage from "./pages/SocialTrackerPage";
import TestPage from "./pages/TestPage.js";

//Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Import context
import { GlobalStateContext } from "./context/globalState";

function App() {
  const refs = useRef(null);

  const [scrollDynamicOffset, setScrollDynamicOffset] = useState(0);

  return (
    <div className="App">
      <GlobalStateContext.Provider
        value={{ scrollDynamicOffset, setScrollDynamicOffset }}
      >
        <BrowserRouter>
          <Navbar greenRef={refs} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/social-tracker" element={<SocialTrackerPage />} />
            <Route path="/test" element={<TestPage ref={refs} />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </GlobalStateContext.Provider>
    </div>
  );
}

export default App;
