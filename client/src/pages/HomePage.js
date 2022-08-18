import React, { useState } from "react";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";

//Import assets
import headshot from "../assets/images/headshot.jpg";
import resume from "../assets/Alexander Arcasoy Resume 2021.pdf";
//import "react-toggle/style.css";

//Import components
import Parallax from "../components/Parallax";
import HomePanel from "../components/HomePanel";
import StyledButton from "../components/Button";
import PortPanelCardViewer from "../components/PortPanelCardViewer";

export default function HomePage() {
  const [portPanelToggle, setPortPanelToggle] = useState(true);

  const handleToggle = () => {
    setPortPanelToggle(!portPanelToggle);
  };

  return (
    <>
      <Parallax
        imgPath="wenhao-ryan-zGx9P250WaE-unsplash.jpg"
        aspectRatio="3"
      />
      <HomePanel id="aboutPanel">
        <h3>Nice to meet you. I'm a Mechanical Engineer based in Boston.</h3>
        <img src={headshot} id="homepageHeadshot" alt="Headshot of Alex"></img>
        <h3>
          I'm passionate about optimizing systems, automated processes, and
          project-based learning.
        </h3>
      </HomePanel>
      <Parallax imgPath="maarten-deckers-T5nXYXCf50I-unsplash.jpg" />
      <HomePanel id="resumePanel">
        <h2>Resume</h2>
        <p>To view my resume, please click the button below.</p>
        <StyledButton
          onClick={() => window.open(resume, "_blank", "noopener,noreferrer")}
        >
          View
        </StyledButton>
      </HomePanel>
      <Parallax />
      <HomePanel id="portfolioPanel">
        <h2>Portfolio</h2>
        <p>Click the images below to learn about each project.</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          <h3>Software</h3>
          <Toggle icons={false} onChange={handleToggle} />
          <h3>Hardware</h3>
        </div>
        <PortPanelCardViewer toggle={portPanelToggle} />
        {/* <Link to="/social-tracker">Social Tracker</Link> */}
      </HomePanel>
      <Parallax imgPath="meritt-thomas-PWA7RiUBBIo-unsplash.jpg" />
      <HomePanel id="contactPanel">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" className="textInput" />
          <input type="text" placeholder="Email" className="textInput" />
          <input type="text" placeholder="Subject" className="textInput" />
          <input
            type="text"
            placeholder="Type your message here..."
            className="textInput"
          />
          <input type="submit" value="Submit" />
        </form>
      </HomePanel>
      <h1 id="stay-updated">Stay Updated</h1>
    </>
  );
}
