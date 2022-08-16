import React, { useEffect, useState } from "react";
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

const logo = require("../assets/images/nav-logo.webp");

const StyledNavbar = styled.div`
  z-index: 10;
  position: fixed;
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

  #nav-links > a {
    font-family: "Lulo-Clean";
    white-space: nowrap;
    width: 180px;
    text-align: center;
  }

  #nav-links a:hover {
    color: #ffd801;
    transition: color 500ms;
  }

  #nav-links a:not(:hover) {
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

export default function Navbar() {
  const scrollDuration = 2;

  const [dynamicOffset, setDynamicOffset] = useState(5);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    handleOnClick();
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });

  const handleOnClick = () => {
    let nav = document.getElementById("main-nav");
    setDynamicOffset(-nav.clientHeight);
    console.log(dynamicOffset);
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
          <Link
            activeClass="active"
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
            to="contactPanel"
            //onClick={handleOnClick}
            offset={dynamicOffset}
            spy={true}
            smooth={true}
            duration={scrollDuration}
          >
            Contact
          </Link>
          <Link
            to="stay-updated"
            onClick={handleOnClick}
            offset={dynamicOffset}
            spy={true}
            smooth={true}
            duration={scrollDuration}
          >
            Stay Updated
          </Link>
        </div>
        <img
          src={logo}
          id="nav-balance-logo"
          alt="Alex's Logo, two sideways A's formatted similar to HTML tags"
        ></img>
      </div>
      <div id="nav-yellow-bar"></div>
    </StyledNavbar>
  );
}
