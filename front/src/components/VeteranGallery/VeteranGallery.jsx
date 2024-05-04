import {
  Environment,
  Float,
  Html,
  OrbitControls,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import "./VeteranGallery.css";
const VeteranGallery = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData([
      "img1.jpg",
      "img1.jpg",
      "img1.jpg",
      "img1.jpg",
      "img1.jpg",
      "img1.jpg",
      "img1.jpg",
    ]);
  }, []);
  return (
    <div className="veteran-gallery-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <OrbitControls />
        <Environment preset="sunset" />
        <Float
          speed={3}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[-0.3, 0.3]}
        >
          {data &&
            data.map((url, index) => (
              <ImageFrame
                key={index}
                url={"/public/img/" + url}
                position={[0, -1 - index * 10, 0]}
              />
            ))}
        </Float>
      </Canvas>
    </div>
  );
};

function ImageFrame({ url, position, name }) {
  const texture = useTexture(url);
  return (
    <group>
      <mesh position={position}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Html>
        <div className="veteran-gallery-text">{name}</div>
      </Html>
    </group>
  );
}
export default VeteranGallery;
