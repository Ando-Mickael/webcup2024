import { Float, Stars, Text, useVideoTexture } from "@react-three/drei";
import React from "react";
import { RocketShip } from "../Models/RocketShip";
import { Volcano2 } from "../Models/Volcano2";
import "./WebcupWorld.css";
const StaticModels = () => {
  return (
    <>
      <Volcano2
        scale={10}
        position={[-9, 2, -10]}
        rotation={[0, Math.PI / 2, 0]}
        onClick={() => {
          window.open("https://www.youtube.com/watch?v=dAfomigePEs");
        }}
      />
      <Volcano2
        scale={2}
        position={[-7, 0, 3]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Float
        speed={1}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        <RocketShip
          scale={20}
          position={[10, -13, -20]}
          onClick={() => {
            window.open("https://www.youtube.com/watch?v=thOOR5TMDJE");
          }}
        />
      </Float>

      <Text
        position-x={-5}
        position-y={5}
        position-z={-5}
        rotation-y={Math.PI / 4}
        font={"fonts/poppins/Poppins-Bold.ttf"}
      >
        WEBCUP FINAL 2023
        <meshBasicMaterial color="whitesmoke" />
      </Text>

      <Text
        position-x={-5}
        position-y={3}
        position-z={-6}
        rotation-y={Math.PI / 4}
        fontSize={0.4}
        font={"fonts/poppins/Poppins-Bold.ttf"}
      >
        MADAGASCAR - Angry Geek
        <meshBasicMaterial color="#f7b900" />
      </Text>

      <Text
        position-x={-5}
        position-y={2}
        position-z={-2}
        rotation-y={Math.PI / 4}
        fontSize={0.3}
        font={"fonts/poppins/Poppins-Bold.ttf"}
      >
        Click This
        <meshBasicMaterial color="whitesmoke" />
      </Text>
      <Text
        position-x={5}
        position-y={2}
        position-z={-2}
        rotation-y={-Math.PI / 4}
        fontSize={0.3}
        font={"fonts/poppins/Poppins-Bold.ttf"}
      >
        Click This
        <meshBasicMaterial color="whitesmoke" />
      </Text>

      <Stars count={700} />

      <Text
        position-x={-5}
        position-y={4}
        position-z={-6}
        rotation-y={Math.PI / 4}
        fontSize={0.4}
        font={"fonts/poppins/Poppins-Bold.ttf"}
      >
        NATURAL DISASTERS PREVENTION
        <meshBasicMaterial color="whitesmoke" />
      </Text>

      <Text
        position-x={5}
        position-y={5}
        position-z={-10}
        rotation-y={-Math.PI / 4}
        font={"fonts/poppins/Poppins-Bold.ttf"}
      >
        WEBCUP FINAL 2022
        <meshBasicMaterial color="whitesmoke" />
      </Text>

      <Text
        position-x={5}
        position-y={3}
        position-z={-6}
        rotation-y={-Math.PI / 4}
        fontSize={0.4}
        font={"fonts/poppins/Poppins-Bold.ttf"}
      >
        MAYOTTES - Ylangs Ylangs
        <meshBasicMaterial color="#f7b900" />
      </Text>

      <Stars count={700} />

      <Text
        position-x={5}
        position-y={4}
        position-z={-6}
        rotation-y={-Math.PI / 4}
        fontSize={0.4}
        font={"fonts/poppins/Poppins-Bold.ttf"}
      >
        FORGOTTEN TIME CAPSULE EXPOSITION
        <meshBasicMaterial color="whitesmoke" />
      </Text>

      <Text
        position-x={0}
        position-y={2}
        position-z={-27}
        fontSize={0.6}
        font={"fonts/poppins/Poppins-Bold.ttf"}
      >
        Past 2010-2021 will come in the timeline
        <meshBasicMaterial color="whitesmoke" />
      </Text>

      <Text
        position-x={0}
        position-y={0.2}
        position-z={-8}
        fontSize={3}
        rotation-x={-Math.PI / 2}
        rotation-z={Math.PI / 2}
        font={"fonts/poppins/Poppins-Bold.ttf"}
      >
        WEBCUP TIMELINE
        <meshBasicMaterial color="whitesmoke" />
      </Text>
      <Video />
    </>
  );
};
function Video() {
  const textureVideo = useVideoTexture("/videos/0505.mp4");
  return (
    <>
      <mesh position={[0, 2, -40]}>
        <planeGeometry args={[15, 8]} rotation={[-Math.PI / 2, 0, 0]} />
        <meshBasicMaterial map={textureVideo} />
      </mesh>
    </>
  );
}
export default StaticModels;
