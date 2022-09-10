//Import packages
import React, { useRef } from "react";
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

function App() {
  const refs = useRef(null);

  const goToGreen = () => {
    console.log("running goToGreen from App...");
    //console.log(refs);
    refs.current.scrollIntoView();
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar greenRef={refs} />
        <button onClick={() => goToGreen()}>Go To Green</button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/social-tracker" element={<SocialTrackerPage />} />
          <Route path="/test" element={<TestPage ref={refs} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
