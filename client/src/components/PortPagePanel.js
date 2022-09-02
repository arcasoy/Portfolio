import React from "react";
import styled from "styled-components";

const PortPagePanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 0 0 auto;
  gap: 50px;

  text-align: left;

  width: 100%;
  max-width: 1250px;
  padding: 0px 100%;
  ${(props) => {
    switch (props.mode) {
      case "off-white":
        return `
                background-color: ${props.theme.colors.offWhite}
            `;
      default:
        return `
                background-color: ${props.theme.colors.pureWhite}
            `;
    }
  }};
`;

export default PortPagePanel;
