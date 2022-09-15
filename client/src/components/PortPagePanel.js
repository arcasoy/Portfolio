import styled from "styled-components";

const PortPagePanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex: 0 0 auto;

  text-align: left;

  width: 100%;
  padding: 20px 10%;
  box-sizing: border-box;
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
