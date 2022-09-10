// Import packages
import React, { useEffect, useState, useRef } from "react";
import { Link as DomLink } from "react-router-dom";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import styled from "styled-components";
import ReactModal from "react-modal";

//Import Components
import StyledButton from "../components/Button";

// Import assets
const logo = require("../assets/images/nav-logo.webp");
const StayUpdatedLogo = require("../assets/images/AA.png");

// Styled Components
const StyledNavbar = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.pureWhite};
  width: 100%;
  min-height: 82px;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, 0.7);

  #nav-flex-elements {
    display: inline-flex;
    flex-wrap: nowrap;
    flex-direction: row;
    flex: 0 0;
    margin: 0 auto;
    min-height: 50px;
    justify-content: center;
    align-items: center;
    padding: 0.25em;
  }

  #nav-balance-logo {
    visibility: hidden;
  }

  #nav-links {
    display: flex;
  }

  .nav-item {
    font-family: "Lulo-Clean";
    white-space: nowrap;
    width: 180px;
    text-align: center;
    border: none;
    background: transparent;
    font-size: 16px;
  }

  .nav-item:hover {
    color: #ffd801;
    transition: color 500ms;
  }

  .nav-item:not(:hover) {
    color: #000;
    transition: color 500ms;
  }

  #nav-yellow-bar {
    position: absolute;
    background: #ffd801;
    width: 100%;
    height: 6px;
    bottom: 0;
  }

  @media all and (max-width: 1112px) {
    #nav-flex-elements {
      flex-direction: column;
    }
    #nav-links {
      flex-direction: column;
    }
    #nav-links > a {
      padding: 0.5em;
    }
    #nav-balance-logo {
      display: none;
    }
  }
`;

// React Modal
const ReactModalStyles = {
  overlay: {
    zIndex: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    width: "90%",
    maxWidth: "500px",
    aspectRatio: "16/9",
    borderWidth: "10px",
    borderColor: "#ffd801",
    margin: "auto",
    padding: "0px",
    backgroundColor: "#161616",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 25,
  },
};

const StayUpdatedEmailStyle = {
  background: "transparent",
  color: "#ffffff",
  border: "solid",
  borderColor: "white",
  padding: "0.5rem",
  margin: "5px 0px",
  borderWidth: "3px",
  maxWidth: "50%",
  fontFamily: "Futura",
  fontSize: "18px",
};

export default function Navbar(props) {
  const scrollDuration = 2;

  const [dynamicOffset, setDynamicOffset] = useState(5);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    handleOnClick();
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });

  // Scroll to specific sub element
  useEffect(() => {
    console.log("rerendered");
  });

  //use effect here?
  const elementRendered = () => {
    if (typeof props.greenRef.current != "undefined") return true;
    else console.log("not rendered");
  };

  const goToGreen = async () => {
    await elementRendered();
    props.greenRef.current.scrollIntoView();
  };

  const handleOnClick = () => {
    let nav = document.getElementById("main-nav");
    setDynamicOffset(-nav.clientHeight);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    // TODO: Replace scrolling Link with window.scrollTo and scroll-behavior: smooth
    <StyledNavbar id="main-nav">
      <div id="nav-flex-elements">
        <a href="/" id="nav-logo-link">
          <img
            src={logo}
            id="nav-logo"
            alt="Alex's Logo, two sideways A's formatted similar to HTML tags"
          ></img>
        </a>
        <div id="nav-links">
          <DomLink to={{ pathname: "/test", state: { fromNavBar: true } }}>
            testpage
          </DomLink>
          <div onClick={() => goToGreen()}>
            <DomLink to={{ pathname: "/test", state: { fromNavBar: true } }}>
              testpage Green
            </DomLink>
          </div>
          <Link
            activeClass="active"
            className="nav-item"
            to="App"
            //onClick={handleOnClick}
            offset={dynamicOffset}
            spy={true}
            smooth={true}
            duration={scrollDuration}
          >
            Home
          </Link>
          <Link
            className="nav-item"
            to="resumePanel"
            //={handleOnClick}
            offset={dynamicOffset}
            spy={true}
            smooth={true}
            duration={scrollDuration}
          >
            Resume
          </Link>
          <Link
            className="nav-item"
            to="portfolioPanel"
            onClick={handleOnClick}
            offset={dynamicOffset}
            spy={true}
            smooth={true}
            duration={scrollDuration}
          >
            Portfolio
          </Link>
          <Link
            className="nav-item"
            to="contactPanel"
            //onClick={handleOnClick}
            offset={dynamicOffset}
            spy={true}
            smooth={true}
            duration={scrollDuration}
          >
            Contact
          </Link>
          <button onClick={handleModalOpen} className="nav-item">
            Stay Updated
          </button>
        </div>
        <img
          src={logo}
          id="nav-balance-logo"
          alt="Alex's Logo, two sideways A's formatted similar to HTML tags"
        ></img>
      </div>
      <div id="nav-yellow-bar"></div>
      <ReactModal
        isOpen={modalOpen}
        appElement={document.getElementsByClassName("App")}
        onRequestClose={handleModalClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        closeTimeoutMS={1000}
        style={ReactModalStyles}
      >
        <img
          src={StayUpdatedLogo}
          alt="Alex's logo"
          style={{
            position: "absolute",
            margin: "auto",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: "0.5",
          }}
        ></img>
        <h4 style={{ color: "white", zIndex: 10 }}>Stay Updated</h4>
        <p style={{ color: "white", textAlign: "center", zIndex: 10 }}>
          Add your email to hear about Alex's project and website updates!
        </p>
        <form style={{ display: "block", zIndex: 10 }}>
          <input
            type="text"
            placeholder="Email"
            style={StayUpdatedEmailStyle}
          ></input>
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </ReactModal>
    </StyledNavbar>
  );
}
