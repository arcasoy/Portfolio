// Import packages
import React from "react";
import styled from "styled-components";

// Import assets
import defaultImage from "../assets/images/portfolioItems/marvin-meyer-SYTO3xs06fU-unsplash.jpg";

const StyledDiv = styled.div`
  diplay: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;

  :not(:hover) > div {
    visibility: hidden;
    opacity: 0;
  }

  :hover > div {
    visibility: visible;
    opacity: 1;
  }
`;

const HoverTextStyledDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
`;

export default function PortPanelCard(props) {
  let imageData = {};
  let skillsContent = "";

  if (typeof props.content.skills != "undefined")
    skillsContent = props.content.skills.join(" | ");

  if (typeof props.content.image != "undefined") {
    imageData = props.content.image;
  } else {
    imageData.src = defaultImage;
    imageData.alt = "Default project image";
  }

  return (
    <StyledDiv className="port-panel-card">
      <img
        src={imageData.src}
        alt={imageData.alt}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          display: "block",
          zIndex: "0",
        }}
      ></img>
      <HoverTextStyledDiv>
        <h5>{props.content.title}</h5>
        <p>{skillsContent}</p>
      </HoverTextStyledDiv>
    </StyledDiv>
  );
}
