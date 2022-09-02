import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  margin: 1rem;
  transition: background-color 0.5s, color 0.5s ease;
  padding: 5px 50px;
  ${(props) => {
    switch (props.mode) {
      case "dark":
        return `
            background-color: ${props.theme.colors.pureBlack};
            color: ${props.theme.colors.pureWhite};

            :hover {
              background-color: transparent;
              color: ${props.theme.colors.pureBlack}
            }
        `;
      default:
        return `
            background-color: ${props.theme.colors.pureWhite};
            color: ${props.theme.colors.pureBlack};

            :hover {
              background-color: transparent;
              color: ${props.theme.colors.pureWhite}
            }
        `;
    }
  }};
`;

export default StyledButton;
