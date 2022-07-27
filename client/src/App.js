//Import packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import assets
import "./assets/global.css";

//Import pages
import HomePage from "./pages/HomePage";
import SocialTrackerPage from "./pages/SocialTrackerPage";

//Import components
import Navbar from "./components/Navbar";

function App() {
  return (
    // TODO: Configure Prettier
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/social-tracker" element={<SocialTrackerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
