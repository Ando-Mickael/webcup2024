/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Volcano2.glb -T -S 
Files: Volcano2.glb [232.4KB] > D:\S7\Webcup2024\webcup2024\front\public\models\Volcano2-transformed.glb [28.22KB] (88%)
*/

import { useGLTF } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";
import React, { useMemo } from "react";
import * as SkeletonUtils from "three/addons/utils/SkeletonUtils.js";

export function Volcano2(props) {
  const { scene, materials } = useGLTF("/models/Volcano2.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.volcano.geometry} material={materials.None} />
    </group>
  );
}

useGLTF.preload("/models/Volcano2.glb");
