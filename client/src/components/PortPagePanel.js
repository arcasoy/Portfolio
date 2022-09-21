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

  .overview-details-title {
    font-weight: bold;
    font-size: 25px;
  }

  a.overview-details-content {
    margin: 8px;
  }

  .overview-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .image-panel-img {
    max-width: 350px;
    min-width: 100px;
    width: 75%;
    margin: auto;
  }

  .port-page-section-content-offset {
    max-width: 1000px;
    min-width: 250px;
    margin-left: auto;
    width: 60%;
  }

  .port-page-section-content-offset ul {
    padding-left: 1rem;
  }

  .port-page-section-content-center {
    min-width: 250px;
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    width: 60%;
  }

  .port-page-section-content-center img {
    width: 85%;
    object-fit: contain;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
  }

  @media (max-width: 750px) {
    flex-direction: column;

    h3 {
      text-align: center;
    }

    .port-page-section-content-offset {
      align-items: center;
      margin: auto;
    }

    .overview-details {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
`;

export default PortPagePanel;
