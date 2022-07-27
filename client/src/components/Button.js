import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  ${(props) => {
    switch (props.$mode) {
      case "dark":
        return `
            background-color: ${props.theme.colors.pureBlack};
            color: ${props.theme.colors.pureWhite};
        `;
      default:
        return `
            background-color: ${props.theme.colors.pureWhite};
            color: ${props.theme.colors.pureBlack};
        `;
    }
  }}
`;

export default StyledButton;
