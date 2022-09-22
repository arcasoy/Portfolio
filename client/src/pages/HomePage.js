import React, { useState, forwardRef, useContext } from "react";
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

//Import Context
import { GlobalStateContext } from "../context/globalState";

// Styled Components
const StyledHeadshot = styled.img`
  border-radius: 100%;
  border: solid;
  border-color: #ffd801;
  border-width: 7.5px;

  width: 40%;
`;

const StyledPanelP = styled.p`
  font-size: clamp(14px, 5vw, 25px);
`;

const StyledLearnMoreDiv = styled.div`
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const HomePage = forwardRef((props, ref) => {
  // get Global State Context
  const { scrollDynamicOffset, setScrollDynamicOffset } =
    useContext(GlobalStateContext);

  // component level State declaration
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
        aspectRatio="2.5"
        name="true"
      />
      <HomePanel id="aboutPanel">
        <div
          id="about-panel-wrapper"
          style={{ maxWidth: "1000px", margin: "auto" }}
        >
          <h4>
            Nice to meet you. I'm an <br />
            Engineer based in Boston.
          </h4>
          <StyledHeadshot
            src={headshot}
            id="homepageHeadshot"
            alt="Headshot of Alex"
            style={{ aspectRatio: "1 / 1" }}
          ></StyledHeadshot>
          <h4>
            I'm passionate about optimizing systems, automated processes, and
            project-based learning.
          </h4>
          <StyledLearnMoreDiv
            id="learn-more-content"
            style={{
              display: learnMoreToggle ? "flex" : "none",
            }}
          >
            <p style={{ textAlign: "left" }}>
              Thank you for viewing my portfolio! I graduated from Northeastern
              University in 2021 with degrees in Mechanical Engineering (B.S.) &
              Engineering Management (M.S.). I currently live in Boston while
              working as a controls engineer for Advent Technologies in the
              automation group. <br /> <br />I chose to study mechanical
              engineering because it is a broad field that would give me the
              problems solving skills and tools for any scenario, from medical
              devices to fitness equipment to automated test and manufacturing
              equipment. My background in design, controls, and test & systems
              provides me with the skill set to develop, automate, and validate
              new and existing products. <br /> <br />
              As I've widdened my breadth of skills throughout my career, I've
              developed a deep interest in software, finding myself working on a
              myriad of related projects in my free time. My goal is to work as
              a software engineer, applying my experience programming automated
              manufacturing equipment and personal projects. <br />
              <br />
              When I'm not working, I enjoy competitive rowing, cycling,
              camping, cooking, photography, and taking on personal projects to
              learn more! Drop me a line if you have any exciting projects you'd
              like to collaborate on!
            </p>
            <div style={{ maxWidth: "100%" }}>
              <img
                src={rowing}
                alt="Alex racing an 8+ for CRI at US Rowing Club Nationals 2021"
                style={{
                  maxWidth: "200px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "5px",
                }}
              ></img>
              <figcaption>
                Racing an 8+ at US Rowing Club Nationals 2021
              </figcaption>
            </div>
          </StyledLearnMoreDiv>
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
          <h4>Software</h4>
          <Toggle icons={false} onChange={handlePortPanelToggle} />
          <h4>Hardware</h4>
        </div>
        <PortPanelCardViewer toggle={portPanelToggle} />
      </HomePanel>
      <Parallax imgPath="meritt-thomas-PWA7RiUBBIo-unsplash.jpg" />
      <HomePanel id="contactPanel">
        <h2>Contact</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            className="contact-input"
            aria-label="Name input"
          />
          <input
            type="text"
            placeholder="Email"
            className="contact-input"
            aria-label="Email input"
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact-input"
            aria-label="Subject input"
          />
          <textarea
            type="text"
            placeholder="Type your message here..."
            rows="5"
            className="contact-input"
            aria-label="Message input"
          ></textarea>
          <StyledButton
            type="submit"
            style={{ maxWidth: "200px", alignSelf: "center" }}
          >
            Submit
          </StyledButton>
        </form>
      </HomePanel>
    </>
  );
});

export default HomePage;
