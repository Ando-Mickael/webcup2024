import {
  Edges,
  Environment,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import StaticModels from "./StaticModels";
import "./WebcupWorld";
const WebcupWorld = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Canvas camera={{ position: [0, 5, 5] }}>
        <color attach="background" args={["black"]} />
        {/* <axesHelper /> */}
        <OrbitControls />
        <Environment preset="sunset" />
        <StaticModels />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -10]}>
          <planeGeometry args={[7, 35]} />
          <meshStandardMaterial
            color={"rgba(31,31,31)"}
            opacity={0.7}
            transparent
          />
          <Edges linewidth={4} scale={1.05} color="white" />
        </mesh>
        {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]}>
          <planeGeometry args={[1000, 1000]} />
          <meshStandardMaterial
            color={"rgba(31,31,31)"}
            opacity={0.7}
            transparent
          />
        </mesh> */}
        {/* <WebcupSign /> */}
      </Canvas>
    </div>
  );
};

function WebcupSign() {
  const texture = useTexture("/public/img/webcup.png");

  return (
    <>
      <mesh position={[0, 0.6, 0]}>
        <planeGeometry args={[1, 0.8]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="brown" />
      </mesh>
    </>
  );
}

export default WebcupWorld;
