// Import packages
import React from "react";
import styled from "styled-components";

// Import Project Data
import PortProjects from "../data/PortProjects.json";

// Import components
import PortPanelCard from "./PortPanelCard";

const StyledDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  justify-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export default function PortPanelCardViewer(props) {
  const softwareCards = [];
  const hardwareCards = [];

  Object.keys(PortProjects).forEach(function (key, index) {
    if (PortProjects[key].section === "software") {
      softwareCards.push(PortProjects[key]);
    } else if (PortProjects[key].section === "hardware") {
      hardwareCards.push(PortProjects[key]);
    }
  });
  return (
    <StyledDiv className="port-panel-cards-wrapper">
      {props.toggle
        ? softwareCards.map((cardContent, key) => {
            return <PortPanelCard key={key} content={cardContent} />;
          })
        : hardwareCards.map((cardContent, key) => {
            return <PortPanelCard key={key} content={cardContent} />;
          })}
    </StyledDiv>
  );
}
