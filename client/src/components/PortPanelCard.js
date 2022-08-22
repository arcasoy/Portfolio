// Import packages
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: rgba(255, 255, 255, 0.5);
  diplay: block;
  width: 100%;
  aspect-ratio: 1 / 1;

  > p {
    position: abosolute;
  }

  :not(:hover) > p {
    visibility: hidden;
  }

  :hover > p {
    visibility: visible;
  }
`;

export default function PortPanelCard(props) {
  return (
    <StyledDiv className="port-panel-card">
      <img src={props.content.image} alt="Social Tracker Logo"></img>
      <p>{props.content.title}</p>
      <p>{props.content.skills}</p>
    </StyledDiv>
  );
}
