// Import packages
import React, { useEffect, useRef } from "react";

// Import components
import { PerspectiveCamera, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

// Import assets

export default function XCamera() {
  const starsTexture = useTexture("8k_stars_milky_way.jpg");
  const { scene } = useThree();
  // const starsTexture = useTexture("logo512.png");
  console.log(scene);
  console.log(starsTexture);
  return (
    <>
      <PerspectiveCamera envMap={starsTexture} />
    </>
  );
}
