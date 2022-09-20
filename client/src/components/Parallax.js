import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";

// Import Parallax images
// Each image that will be used for a parallax is to be imported here
// and added to the image object below.
// Reference the image by the file name in the tag attribute
import mit from "../assets/images/parallax/wenhao-ryan-zGx9P250WaE-unsplash.jpg";
import wavy from "../assets/images/parallax/maarten-deckers-T5nXYXCf50I-unsplash.jpg";
import stairs from "../assets/images/parallax/meritt-thomas-PWA7RiUBBIo-unsplash.jpg";
import defaultImg from "../assets/images/parallax/thisisengineering-raeng-nyAzMQ6Ejgs-unsplash.jpg";

const StyledNameDiv = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.pureWhite};
  margin: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Parallax(props) {
  const image =
    {
      "wenhao-ryan-zGx9P250WaE-unsplash.jpg": mit,
      "maarten-deckers-T5nXYXCf50I-unsplash.jpg": wavy,
      "meritt-thomas-PWA7RiUBBIo-unsplash.jpg": stairs,
    }[props.imgPath] || props.imgPath;

  return (
    <>
      <ParallaxBanner
        layers={[{ image, speed: 15 }]}
        style={{ aspectRatio: `${props.aspectRatio} / 1` }}
      >
        {props.name && (
          <StyledNameDiv>
            <h2>
              Alexander <br />
              Arcasoy
            </h2>
          </StyledNameDiv>
        )}
      </ParallaxBanner>
    </>
  );
}

Parallax.defaultProps = {
  imgPath: defaultImg,
  aspectRatio: "5",
};
