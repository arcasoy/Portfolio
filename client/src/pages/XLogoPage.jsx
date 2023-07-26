// Import packages
import React, { useEffect } from "react";

// Import components
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Import assets
import { FalconModel } from "../assets/3d/falcon9/Falcon_9_spacex_rocket";

export default function XLogoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Canvas>
        <FalconModel />
      </Canvas>
    </>
  );
}
