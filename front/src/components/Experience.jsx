import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Experience() {
  return (
    <Canvas>
      <OrbitControls />
      <Environment preset="sunset" />
      <Float>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Float>
    </Canvas>
  );
}
