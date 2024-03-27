// Import packages
import React, { useEffect, useRef } from "react";

// Import components
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useBounds, useProgress } from "@react-three/drei";
import { Group } from "three";

// Import assets
import { FalconModel } from "../../assets/3d/falcon9/Falcon_9_spacex_rocket";
import { MarsModel } from "../../assets/3d/Mars/Mars_1_6792";

export default function XScene() {
  const twentyFiveDegreesInRad = (25 * Math.PI) / 180;
  const ninetyDegreesInRad = (90 * Math.PI) / 180;
  const groupRef = useRef<Group>(null);

  const bounds = useBounds();
  const { progress } = useProgress();

  useEffect(() => {
    console.log(progress, bounds);
    if (progress === 100 && bounds) {
      console.log("bounding");
      bounds.refresh().clip().fit();
      // .to({ position: [Math.PI / 2, 0, 0] });
    }
  }, [progress, bounds]);

  useFrame(() => {
    if (groupRef.current && groupRef.current.rotation) {
      // @ts-ignore
      groupRef.current.rotation.y += (0.5 * Math.PI) / 180;
    }
  });

  return (
    <group rotation={[0, ninetyDegreesInRad, 0]}>
      <group rotation={[twentyFiveDegreesInRad, 0, 0]} ref={groupRef}>
        <FalconModel scale={[0.05, 0.05, 0.05]} position={[0, 495, 0]} />
        <MarsModel />
      </group>
    </group>
  );
}
