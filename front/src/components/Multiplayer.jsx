import {
  ContactShadows,
  Edges,
  Environment,
  OrbitControls,
  useCursor,
} from "@react-three/drei";

import { useAtom } from "jotai";
import { useState } from "react";
import * as THREE from "three";
import { charactersAtom, socket } from "./SocketManager";
import { WebcupAvatar } from "./WebcupAvatar";
import StaticModels from "./WebcupWorld/StaticModels";

export const Multiplayer = () => {
  const [characters] = useAtom(charactersAtom);
  const [onFloor, setOnFloor] = useState(false);
  useCursor(onFloor);

  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      <StaticModels />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, -10]}
        onClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
      >
        <planeGeometry args={[7, 35]} />
        <meshStandardMaterial
          color={"rgba(31,31,31)"}
          opacity={0.7}
          transparent
        />
        <Edges linewidth={4} scale={1.05} color="white" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -40]}>
        <planeGeometry args={[7, 15]} />
        <meshStandardMaterial
          color={"rgba(31,31,31)"}
          opacity={0.7}
          transparent
        />
        <Edges linewidth={4} scale={1.05} color="white" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -55]}>
        <planeGeometry args={[7, 5]} />
        <meshStandardMaterial
          color={"rgba(31,31,31)"}
          opacity={0.7}
          transparent
        />
        <Edges linewidth={4} scale={1.05} color="white" />
      </mesh>

      <ContactShadows blur={2} />
      {characters.map((character) => (
        <WebcupAvatar
          key={character.id}
          id={character.id}
          position={
            new THREE.Vector3(
              character.position[0],
              character.position[1],
              character.position[2]
            )
          }
          bodyColor={character.bodyColor}
        />
      ))}
    </>
  );
};
