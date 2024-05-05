/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Volcano.glb -T -S 
Files: Volcano.glb [2.04MB] > D:\S7\Webcup2024\webcup2024\front\public\models\Volcano-transformed.glb [37.47KB] (98%)
*/

import { useGLTF } from "@react-three/drei";
import React from "react";

export function Volcano(props) {
  const { nodes, materials } = useGLTF("/models/Volcano.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Volcano_mesh.geometry}
        material={materials.blinn1SG}
      />
    </group>
  );
}

useGLTF.preload("/models/Volcano.glb");