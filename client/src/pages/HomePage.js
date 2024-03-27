import React, { useState, forwardRef, useContext } from "react";
import Toggle from "react-toggle";
import styled from "styled-components";

//Import assets
import headshot from "../assets/images/headshot.jpg";
import resume from "../assets/Alexander Arcasoy Resume 2024.pdf";
import snowboarding from "../assets/images/snowboarding.jpg";
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

  width: 45%;
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

  // contact form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMsg, setFormMsg] = useState("");

  const handlePortPanelToggle = () => {
    setPortPanelToggle(!portPanelToggle);
  };

  const handleLearnMoreClick = () => {
    setLearnMoreToggle(!learnMoreToggle);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    try {
      let res = await fetch(
        "https://saozakhsz5.execute-api.us-east-1.amazonaws.com/PortfolioContact",
        {
          method: "POST",
          body: JSON.stringify({
            name: formName,
            email: formEmail,
            subject: formSubject,
            message: formMsg,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setFormName("");
        setFormEmail("");
        setFormSubject("");
        setFormMsg("Message Sent!");
      } else {
        setFormMsg("An error occured");
      }
    } catch (err) {
      console.log(err);
    }
    document.forms["contactForm"].reset();
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
              Engineering Management (M.S.). I currently live in Cambridge, MA
              while working as a software engineer for Dover Corporation in the
              3D Platform group. <br /> <br />I chose to study mechanical
              engineering because of it's wide range of applications, skills,
              and tools that have equipt me to problem solve in any scenario,
              from medical devices to fitness equipment to automated test and
              manufacturing equipment. My background in provides me with the
              skill set to develop, automate, and validate new and existing
              products, working best at the intersection of the physical and
              digital world. <br /> <br />
              As I've widened my breadth of skills throughout my career, I've
              also deepened my skillset in software, honing in on 3D web
              development. My goal is to continue to sharpen my software skills
              and apply my unique background to as many exciting challenges as
              possible. <br />
              <br />
              When I'm not working, I enjoy weightlifting, cycling, cooking,
              electronic music, snowboarding, and taking on personal projects to
              learn more! Drop me a line if you have any exciting projects you'd
              like to collaborate on!
            </p>
            <div style={{ maxWidth: "100%" }}>
              <img
                src={snowboarding}
                alt="Snow day in Killington, VT 2024"
                style={{
                  maxWidth: "200px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  borderRadius: "5px",
                }}
              ></img>
              <figcaption>Snow day in Killington, VT 2024</figcaption>
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
          name="contactForm"
          id="contact-form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          //action="https://saozakhsz5.execute-api.us-east-1.amazonaws.com/PortfolioContact"
          //method="POST"
          target="contactPanel"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            className="contact-input"
            aria-label="Name input"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="contact-input"
            aria-label="Email input"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact-input"
            aria-label="Subject input"
            value={formSubject}
            onChange={(e) => setFormSubject(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Type your message here..."
            rows="5"
            className="contact-input"
            aria-label="Message input"
            value={formMsg}
            onChange={(e) => setFormMsg(e.target.value)}
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
