// Import packages
import React, { useEffect } from "react";

// Import components
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Bounds,
  useBounds,
  useProgress,
  Lightformer,
  Stars,
  RandomizedLight,
  AccumulativeShadows,
} from "@react-three/drei";

// Import assets
import XScene from "./XScene";
import XCamera from "./XCamera";

export default function XLogoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ height: "calc(100vh - 234px)", width: "100%" }}>
      <Canvas>
        <XCamera />
        <OrbitControls enablePan={false} />
        <Environment preset="night">
          <Lightformer
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={500} // power level (optional = 1)
            color="white" // (optional = white)
            // @ts-ignore
            scale={[500, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />
        </Environment>
        <Stars
          radius={1000}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <AccumulativeShadows>
          <RandomizedLight
            castShadow
            amount={8}
            frames={100}
            position={[750, 0, 750]}
          />
        </AccumulativeShadows>
        <directionalLight position={[-50, 10, 0]} />
        <Bounds fit clip observe damping={6} margin={1.2}>
          <XScene />
        </Bounds>
      </Canvas>
    </div>
  );
}
