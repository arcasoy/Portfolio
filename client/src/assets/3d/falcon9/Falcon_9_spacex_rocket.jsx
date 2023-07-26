/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 falcon_9_spacex_rocket.glb 
Author: artemycz (https://sketchfab.com/artemycz)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/falcon-9-spacex-rocket-58784d6b55ad47d2985f353459759f06
Title: Falcon 9 SpaceX rocket
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FalconModel(props) {
  const { nodes, materials } = useGLTF("/falcon_9_spacex_rocket.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={259.915}>
        <group position={[0, 0, 0.244]} scale={0.385}>
          <mesh
            geometry={nodes.Cylinder_body_0.geometry}
            material={materials.body}
          />
          <mesh
            geometry={nodes.Cylinder_body_black_0.geometry}
            material={materials.body_black}
          />
        </group>
        <mesh
          geometry={nodes.Plane016_details_0.geometry}
          material={materials.details}
          position={[0, -0.002, 7.074]}
          rotation={[0, 1.55, 1.571]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Plane015_details_0.geometry}
          material={materials.details}
          position={[0, -0.002, 7.074]}
          rotation={[0, 1.55, 1.571]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Plane014_details_0.geometry}
          material={materials.details}
          position={[0.002, -0.293, 7.075]}
          rotation={[0, 1.55, 1.571]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Circle009_engine_0.geometry}
          material={materials.engine}
          position={[0.001, 0, 0.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Circle008_engine_0.geometry}
          material={materials.engine}
          position={[0.001, 0, 0.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Circle007_engine_0.geometry}
          material={materials.engine}
          position={[0.001, 0, 0.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Circle006_engine_0.geometry}
          material={materials.engine}
          position={[0.001, 0, 0.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Circle005_engine_0.geometry}
          material={materials.engine}
          position={[0.001, 0, 0.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Circle004_engine_0.geometry}
          material={materials.engine}
          position={[0.001, 0, 0.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Circle003_engine_0.geometry}
          material={materials.engine}
          position={[0.001, 0, 0.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Circle002_engine_0.geometry}
          material={materials.engine}
          position={[0.001, 0, 0.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Circle001_engine_0.geometry}
          material={materials.engine}
          position={[0.001, 0, 0.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Plane013_legs_0.geometry}
          material={materials.legs}
          position={[0.194, 0.247, 1.012]}
          rotation={[-Math.PI / 2, -0.842, -Math.PI]}
          scale={[0.018, 0.029, 0.029]}
        />
        <mesh
          geometry={nodes.Plane012_legs_0.geometry}
          material={materials.legs}
          position={[0.22, -0.183, 1.012]}
          rotation={[-Math.PI / 2, -0.842, -Math.PI]}
          scale={[0.018, 0.029, 0.029]}
        />
        <mesh
          geometry={nodes.Plane011_legs_0.geometry}
          material={materials.legs}
          position={[-0.2, -0.214, 1.012]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Plane009_legs_0.geometry}
          material={materials.legs}
          position={[0, 0.03, 1.012]}
          rotation={[-Math.PI / 2, -0.842, -Math.PI]}
          scale={[0.018, 0.029, 0.029]}
        />
        <mesh
          geometry={nodes.Plane008_details_0.geometry}
          material={materials.details}
          position={[-0.025, 0.265, 7.872]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[0.012, 0.012, 0.007]}
        />
        <mesh
          geometry={nodes.Plane007_details_0.geometry}
          material={materials.details}
          position={[0.268, -0.01, 8.136]}
          rotation={[Math.PI / 2, 1.483, 0]}
          scale={[0.012, 0.012, 0.006]}
        />
        <mesh
          geometry={nodes.Plane006_details_0.geometry}
          material={materials.details}
          position={[0.268, -0.01, 7.641]}
          rotation={[Math.PI / 2, 1.483, 0]}
          scale={[0.012, 0.012, 0.006]}
        />
        <mesh
          geometry={nodes.Plane005_details_0.geometry}
          material={materials.details}
          position={[-0.248, -0.105, 7.55]}
          rotation={[Math.PI / 2, -1.137, 0]}
          scale={[0.012, 0.012, 0.006]}
        />
        <mesh
          geometry={nodes.Plane004_details_0.geometry}
          material={materials.details}
          position={[-0.025, -0.266, 7.486]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.012}
        />
        <mesh
          geometry={nodes.Plane003_details_0.geometry}
          material={materials.details}
          position={[-0.191, -0.189, 8.12]}
          rotation={[-Math.PI / 2, 0.783, 0]}
          scale={[-0.006, 0.006, 0.006]}
        />
        <mesh
          geometry={nodes.Plane_details_0.geometry}
          material={materials.details}
          position={[0.085, -0.259, 7.196]}
          rotation={[-Math.PI / 2, -0.304, 0]}
          scale={[-0.006, 0.006, 0.006]}
        />
        <mesh
          geometry={nodes.Cube002_details_0.geometry}
          material={materials.details}
          position={[0, -0.273, 7.273]}
          scale={[0.01, 0.003, 0.011]}
        />
        <mesh
          geometry={nodes.Plane002_details_0.geometry}
          material={materials.details}
          position={[0, -0.002, 7.074]}
          rotation={[0, 1.55, 1.571]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Cube_details_0.geometry}
          material={materials.details}
          position={[0.002, 0, 6.006]}
          rotation={[-0.06, 0, 0]}
          scale={[0.01, 0.006, 0.01]}
        />
        <mesh
          geometry={nodes.Cube004_fins_0.geometry}
          material={materials.fins}
          position={[0, -0.001, 5.926]}
          rotation={[0, 0, Math.PI / 4]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Circle_body_black_0.geometry}
          material={materials.body_black}
          position={[0.001, 0, 0.188]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Cylinder001_fairing_0.geometry}
          material={materials.fairing}
          position={[0, 0, 8.484]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.385}
        />
        <mesh
          geometry={nodes.Plane010_legs_0.geometry}
          material={materials.legs}
          position={[-0.009, 0.025, 0.75]}
          rotation={[-1.716, -0.15, -0.048]}
          scale={[-0.005, 0.005, 0.005]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/falcon_9_spacex_rocket.glb");