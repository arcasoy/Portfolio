// Import packages
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: rgba(255, 255, 255, 0.5);
  diplay: block;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export default function PortPanelCard(props) {
  console.log(props.content);
  return (
    <StyledDiv className="port-panel-card">
      <p>{props.content.title}</p>
      <p>{props.content.skills}</p>
    </StyledDiv>
  );
}
