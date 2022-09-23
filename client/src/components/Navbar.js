// Import packages
import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactModal from "react-modal";

//Import Components
import StyledButton from "../components/Button";
import HamburgerButton from "./HamburgerButton";

//Import Context
import { globalState, GlobalStateContext } from "../context/globalState";

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

  // #nav-links {
  //   display: flex;
  // }
  .nav-links-class {
    display: flex;
  }

  .nav-item {
    font-family: "Lulo-Clean";
    white-space: nowrap;
    width: 180px;
    height: 100%;
    text-align: center;
    border: none;
    background: transparent;
    font-size: 16px;
    text-decoration: none;
    margin: auto;
  }

  button.nav-item {
    padding: 8px;
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

  #nav-hamburger {
    display: none;
  }

  @media all and (max-width: 1140px) {
    #nav-flex-elements {
      flex-direction: column;
      width: 100%;
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
    #nav-hamburger {
      display: inline;
    }
    .hamburgerHide {
      display: none;
    }
    #nav-mobile-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 100%;
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
    //aspectRatio: "16/9",
    maxHeight: "40%",
    overflow: "auto",
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
  const [modalOpen, setModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Global State Context
  const { scrollDynamicOffset, setScrollDynamicOffset } =
    useContext(GlobalStateContext);

  // Scroll states
  const [scrollToHome, setScrollToHome] = useState(false);
  const [scrollToResume, setScrollToResume] = useState(false);
  const [scrollToPortfolio, setScrollToPortfolio] = useState(false);
  const [scrollToContact, setScrollToContact] = useState(false);

  // Get navbar height
  useEffect(() => {
    //function for running state setting
    const getNavbarHeight = () => {
      let nav = document.getElementById("main-nav");
      //setDynamicOffset in global state context
      setScrollDynamicOffset(-nav.clientHeight);
    };
    //function to get window width
    const getWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    // run on window resize
    window.addEventListener("resize", () => {
      getNavbarHeight();
      getWindowWidth();
    });
    // run on window load
    window.addEventListener("load", () => {
      getNavbarHeight();
      getWindowWidth();
    });
  }, [scrollDynamicOffset, setScrollDynamicOffset]);

  // Scroll to specific sub element
  useEffect(() => {
    //handle Scrolling
    const handleScroll = (ele) => {
      let scrollDest =
        ele.getBoundingClientRect().top + window.scrollY + scrollDynamicOffset;
      window.scrollTo(0, scrollDest);
    };

    // Timeout 200ms to ensure screen paints
    setTimeout(() => {
      if (scrollToHome) {
        handleScroll(document.getElementsByClassName("App")[0]);
        setScrollToHome(false);
      } else if (scrollToResume) {
        handleScroll(document.getElementById("resumePanel"));
        setScrollToResume(false);
      } else if (scrollToPortfolio) {
        handleScroll(document.getElementById("portfolioPanel"));
        setScrollToPortfolio(false);
      } else if (scrollToContact) {
        handleScroll(document.getElementById("contactPanel"));
        setScrollToContact(false);
      }
    }, 200);
  }, [
    scrollToHome,
    scrollToResume,
    scrollToPortfolio,
    scrollToContact,
    scrollDynamicOffset,
  ]);

  useEffect(() => {
    if (windowWidth > 1140) {
      let navItems = document.getElementById("nav-links");
      navItems.classList.add("hamburgerHide");
    }
  }, [windowWidth]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <StyledNavbar id="main-nav">
      <div id="nav-flex-elements">
        <div id="nav-mobile-top">
          <a href="/" id="nav-logo-link">
            <img
              src={logo}
              id="nav-logo"
              alt="Alex's Logo, two sideways A's formatted similar to HTML tags"
            ></img>
          </a>
          <HamburgerButton />
        </div>
        <div id="nav-links" className="nav-links-class hamburgerHide">
          <Link to="/" className={"nav-item"}>
            <p className={"nav-item"} onClick={() => setScrollToHome(true)}>
              Home
            </p>
          </Link>

          <Link to="/" className={"nav-item"}>
            <p className={"nav-item"} onClick={() => setScrollToResume(true)}>
              Resume
            </p>
          </Link>

          <Link to="/" className={"nav-item"}>
            <p
              className={"nav-item"}
              onClick={() => setScrollToPortfolio(true)}
            >
              Portfolio
            </p>
          </Link>

          <Link to="/" className={"nav-item"}>
            <p className={"nav-item"} onClick={() => setScrollToContact(true)}>
              Contact
            </p>
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
        <h4 style={{ color: "white", zIndex: 10, textAlign: "center" }}>
          Stay Updated
        </h4>
        <p style={{ color: "white", textAlign: "center", zIndex: 10 }}>
          Add your email to hear about Alex's project and website updates!
        </p>
        <form style={{ display: "block", zIndex: 10, textAlign: "center" }}>
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
