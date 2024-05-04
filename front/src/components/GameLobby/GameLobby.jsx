import {
  Environment,
  Float,
  MeshPortalMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Howl } from "howler";
import { geometry } from "maath";
import React, { Suspense, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { Color } from "three";
import NarratorIntroduction from "../../../public/audio/game-lobby-introduction-en.mp3";
import GamePrevisualization from "../GamePrevisualization/GamePrevisualization";
import "./GameLobby.css";
import GameLobbyUI from "./GameLobbyUI";
extend(geometry);
const GameLobby = () => {
  const [isMouseInsidePortal, setIsMouseInsidePortal] = useState(false);
  const bgColor = new Color(0xfaf9f6);
  function playNarratorSound() {
    var narratorIntroductionSound = new Howl({
      src: [NarratorIntroduction],
    });
    console.log("here");
    narratorIntroductionSound.play();
  }
  return (
    <div
      className={
        "game-lobby-container  " +
        (isMouseInsidePortal ? "cursor-pointer" : "cursor-default")
      }
    >
      <Canvas camera={{ position: [0, 0, 6] }}>
        <axesHelper />
        <color attach="background" args={[bgColor.r, bgColor.g, bgColor.b]} />
        <Environment preset="sunset" />
        <OrbitControls />

        <Suspense>
          <Physics>
            <GameLobbyExperience
              setIsMouseInsidePortal={setIsMouseInsidePortal}
            />
          </Physics>
        </Suspense>
      </Canvas>
      <GameLobbyUI
        playNarratorSound={playNarratorSound}
        isMouseInsidePortal={isMouseInsidePortal}
      />
    </div>
  );
};

function GameLobbyExperience({ setIsMouseInsidePortal }) {
  const portal = useRef();
  const navigate = useNavigate();

  return (
    <>
      <Float
        speed={3}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[-0.3, 0.3]}
      >
        <mesh
          onPointerEnter={() => {
            setIsMouseInsidePortal(true);
          }}
          onPointerLeave={() => {
            setIsMouseInsidePortal(false);
          }}
          onClick={() => {
            navigate("/game/play");
          }}
        >
          <MeshPortalMaterial ref={portal} side={THREE.DoubleSide}>
            <GamePrevisualization />
          </MeshPortalMaterial>
          <roundedPlaneGeometry args={[6, 4, 0.1]} />
        </mesh>
      </Float>
    </>
  );
}
export default GameLobby;
