import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  .visuallyHidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  .hamburger {
    margin: 0 auto;
    width: 30px;
    height: 30px;
    position: relative;
  }

  .hamburger .bar {
    padding: 0;
    width: 30px;
    height: 4px;
    background-color: #000000;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute;
  }

  .bar1 {
    top: 0;
  }

  .bar2,
  .bar3 {
    top: 13.5px;
  }

  .bar3 {
    right: 0;
  }

  .bar4 {
    bottom: 0;
  }

  /* HAMBURGER 1 */
  .checkbox1:checked + label > .hamburger1 > .bar1 {
    transform: rotate(45deg);
    transform-origin: 5%;
    width: 41px;
  }

  .checkbox1:checked + label > .hamburger1 > .bar2 {
    transform: translateX(-40px);
    background-color: transparent;
  }

  .checkbox1:checked + label > .hamburger1 > .bar3 {
    transform: translateX(40px);
    background-color: transparent;
  }

  .checkbox1:checked + label > .hamburger1 > .bar4 {
    transform-origin: 5%;
    transform: rotate(-45deg);
    width: 41px;
  }
`;

export default function HamburgerButton() {
  const handleHamburgerToggle = () => {
    let navItems = document.getElementById("nav-links");
    navItems.classList.toggle("hamburgerHide");
  };

  return (
    <StyledDiv id="nav-hamburger">
      <input
        type="checkbox"
        id="checkbox1"
        className="checkbox1 visuallyHidden"
        onClick={handleHamburgerToggle}
      />
      <label htmlFor="checkbox1">
        <div className="hamburger hamburger1">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
    </StyledDiv>
  );
}
