// Import packages
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useImage from "../hooks/useImage";

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
  const defaultImage = "portfolioItems/marvin-meyer-SYTO3xs06fU-unsplash.jpg";

  // Image source
  const { loading, error, image } = useImage(
    typeof props.content.image != "undefined" &&
      typeof props.content.image.src != "undefined"
      ? props.content.image.src
      : defaultImage
  );

  //Image alt
  let imageAlt;
  if (typeof props.content.image != "undefined") {
    imageAlt = props.content.image;
  } else {
    imageAlt = "Default project image";
  }

  //Card Skills
  let skillsContent = "";
  if (typeof props.content.skills != "undefined")
    skillsContent = props.content.skills.join(" | ");

  return (
    <Link
      to={props.content.path ? props.content.path : "/"}
      style={{ color: "white" }}
    >
      <StyledDiv className="port-panel-card">
        <img
          src={image}
          alt={imageAlt}
          style={{
            objectFit: "contain",
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
    </Link>
  );
}
