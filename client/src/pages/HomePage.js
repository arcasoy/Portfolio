import React, { useState } from "react";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import styled from "styled-components";

//Import assets
import headshot from "../assets/images/headshot.jpg";
import resume from "../assets/Alexander Arcasoy Resume 2021.pdf";
import rowing from "../assets/images/ClubNats.jpg";
//import "react-toggle/style.css";

//Import components
import Parallax from "../components/Parallax";
import HomePanel from "../components/HomePanel";
import StyledButton from "../components/Button";
import PortPanelCardViewer from "../components/PortPanelCardViewer";

// Styled Components
const StyledHeadshot = styled.img`
  border-radius: 100%;
  border: solid;
  border-color: #ffd801;
  border-width: 7.5px;
  max-width: 400px;
`;

const StyledPanelP = styled.p`
  font-size: 25px;
`;

export default function HomePage() {
  const [portPanelToggle, setPortPanelToggle] = useState(true);
  const [learnMoreToggle, setLearnMoreToggle] = useState(false);

  const handlePortPanelToggle = () => {
    setPortPanelToggle(!portPanelToggle);
  };

  const handleLearnMoreClick = () => {
    setLearnMoreToggle(!learnMoreToggle);
  };

  return (
    <>
      <Parallax
        imgPath="wenhao-ryan-zGx9P250WaE-unsplash.jpg"
        aspectRatio="3"
      />
      <HomePanel id="aboutPanel">
        <div
          id="about-panel-wrapper"
          style={{ maxWidth: "1000px", margin: "auto" }}
        >
          <h3>Nice to meet you. I'm a Mechanical Engineer based in Boston.</h3>
          <StyledHeadshot
            src={headshot}
            id="homepageHeadshot"
            alt="Headshot of Alex"
          ></StyledHeadshot>
          <h3>
            I'm passionate about optimizing systems, automated processes, and
            project-based learning.
          </h3>
          <div
            id="learn-more-content"
            style={{
              display: learnMoreToggle ? "flex" : "none",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p style={{ textAlign: "left" }}>
              Thank you for viewing my portfolio! I graduated from Northeastern
              University in 2021 with degrees in Mechanical Engineering (B.S.) &
              Engineering Management (M.S.). I currently live in Boston while
              working as a mechanical engineer for Advent Technologies in the
              automation group. <br /> <br />
              I chose to study mechanical engineering because it is a broad
              field that would give me the tools to solve any problem, from
              medical devices at Fresenius Medical, to fitness equipment at
              Hydrow, to automated test and manufacturing systems at Blackstone
              Valley Engineering. My background in design, controls, and test &
              systems provides me with the skill set to develop, automate, and
              validate new and existing products. <br /> <br />
              My goal is to work on projects where I can apply my breadth of
              mechanical and programming knowledge to create or improve upon
              electro-mechanical systems. I value being a well-rounded engineer
              to apply my problem-solving skills to interdisciplinary fields.
              For this reason I have been developing programming and management
              skills beyond the classroom by incorporating them into my personal
              projects. <br /> <br />
              I, in fact, value being well-rounded in all aspects of my life.
              When I'm not working, I enjoy competitive rowing, working out,
              camping, cooking, photography, and taking on personal projects to
              learn more! Drop me a line if you have any exciting projects you'd
              like to collaborate on!
            </p>
            <div style={{ maxWidth: "100%" }}>
              <img
                src={rowing}
                alt="Alex racing an 8+ for CRI at US Rowing Club Nationals 2021"
                style={{ maxWidth: "100%" }}
              ></img>
              <figcaption>
                Racing an 8+ at US Rowing Club Nationals 2021
              </figcaption>
            </div>
          </div>
          <StyledButton onClick={handleLearnMoreClick}>
            {learnMoreToggle ? "See Less" : "Learn More"}
          </StyledButton>
        </div>
      </HomePanel>
      <Parallax imgPath="maarten-deckers-T5nXYXCf50I-unsplash.jpg" />
      <HomePanel id="resumePanel">
        <h2>Resume</h2>
        <StyledPanelP>
          To view my resume, please click the button below.
        </StyledPanelP>
        <StyledButton
          onClick={() => window.open(resume, "_blank", "noopener,noreferrer")}
        >
          View
        </StyledButton>
      </HomePanel>
      <Parallax />
      <HomePanel id="portfolioPanel">
        <h2>Portfolio</h2>
        <StyledPanelP>
          Click the images below to learn about each project.
        </StyledPanelP>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          <h3>Software</h3>
          <Toggle icons={false} onChange={handlePortPanelToggle} />
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
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </HomePanel>
      <h1 id="stay-updated">Stay Updated</h1>
    </>
  );
}
