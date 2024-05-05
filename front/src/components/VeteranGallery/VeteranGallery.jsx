import {
  Environment,
  Float,
  PerspectiveCamera,
  Stars,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import useSWR from "swr";
import { Vector3 } from "three";
import { fetcher } from "../../lib/api";
import { BlockCharacter } from "../Models/Block Character";
import "./VeteranGallery.css";
gsap.registerPlugin(ScrollTrigger);

function getRandomPosition() {
  var x = Math.random() * (30 - -30) + -30;
  var y = Math.random() * (-100 - 0) + 0;
  var z = Math.random() * (-5 - -20) + -20;
  return [x, y, z];
}

let randomPositions = [];
for (let index = 0; index < 50; index++) {
  randomPositions.push(getRandomPosition());
}
const VeteranGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { data, error, isLoading } = useSWR(
    "http://192.168.88.17:1234/crud/photo",
    fetcher
  );

  const [positionToLookAt, setPositionToLookAt] = useState(
    new Vector3(0, 0, 0)
  );
  const [cameraPosition, setCameraPosition] = useState(new Vector3(0, 0, 5));

  const [startCameraPositionAnimation, setStartCameraPositionAnimation] =
    useState(false);

  const [startCameraLookAtAnimation, setStartCameraLookAtAnimation] =
    useState(false);

  const [targetCameraPosition, setTargetCameraPosition] = useState();
  const [targetCameraLookAt, setTargetCameraLookAt] = useState();

  function moveFrame(upOrDown) {
    if (upOrDown < 0) {
      if (currentImage + 1 > data.length - 1) {
        return;
      }
      setCurrentImage(currentImage + 1);
    } else {
      if (currentImage - 1 < 0) {
        return;
      }
      setCurrentImage(currentImage - 1);
    }
    const newCameraPosition = new Vector3().copy(cameraPosition);
    newCameraPosition.y += upOrDown;
    setTargetCameraPosition(newCameraPosition);
    const newPositionToLookAt = new Vector3().copy(positionToLookAt);
    newPositionToLookAt.y += upOrDown;
    setTargetCameraLookAt(newPositionToLookAt);
    setStartCameraPositionAnimation(true);
    setStartCameraLookAtAnimation(true);
  }
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <div className="veteran-gallery-container">
            <div className="Home center">HOME</div>
            <div className="veteran-gallery-title center">
              GALLERY FOR WEBCUP VETERAN
            </div>
            <div className="canvas-container">
              <Canvas>
                <color attach="background" args={["black"]} />
                <Stars />
                <Experience
                  positionToLookAt={positionToLookAt}
                  cameraPosition={cameraPosition}
                  setCameraPosition={setCameraPosition}
                  targetCameraPosition={targetCameraPosition}
                  startCameraPositionAnimation={startCameraPositionAnimation}
                  setStartCameraPositionAnimation={
                    setStartCameraPositionAnimation
                  }
                  setPositionToLookAt={setPositionToLookAt}
                  setStartCameraLookAtAnimation={setStartCameraLookAtAnimation}
                  targetCameraLookAt={targetCameraLookAt}
                  startCameraLookAtAnimation={startCameraLookAtAnimation}
                  data={data}
                />
              </Canvas>
            </div>
            <div className="switch-frame-ui-container center">
              <div
                className="switch-frame-ui center"
                onClick={() => {
                  if (
                    !startCameraLookAtAnimation &&
                    !startCameraPositionAnimation
                  ) {
                    moveFrame(10);
                  }
                }}
              >
                Back
              </div>
              <div
                className="switch-frame-ui center"
                onClick={() => {
                  if (
                    !startCameraLookAtAnimation &&
                    !startCameraPositionAnimation
                  ) {
                    moveFrame(-10);
                  }
                }}
              >
                Next
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

function Experience({
  cameraPosition,
  setCameraPosition,
  targetCameraPosition,
  startCameraPositionAnimation,
  setStartCameraPositionAnimation,
  positionToLookAt,
  setPositionToLookAt,
  setStartCameraLookAtAnimation,
  targetCameraLookAt,
  startCameraLookAtAnimation,
  data,
}) {
  const perspectiveCameraRef = useRef();

  useFrame(() => {
    // console.log()
    perspectiveCameraRef.current.lookAt(positionToLookAt);
    if (startCameraPositionAnimation) {
      lerpCameraPosition();
    }
    if (startCameraLookAtAnimation) {
      lerpCameraLookAt();
    }
  });

  function lerpCameraPosition() {
    const cameraPositionCopy = new Vector3().copy(cameraPosition);
    if (cameraPosition.distanceTo(targetCameraPosition) > 0.05) {
      cameraPositionCopy.lerp(targetCameraPosition, 0.05);
      setCameraPosition(cameraPositionCopy);
    } else {
      setStartCameraPositionAnimation(false);
    }
  }

  function lerpCameraLookAt() {
    const cameraLookAtCopy = new Vector3().copy(positionToLookAt);
    if (positionToLookAt.distanceTo(targetCameraLookAt) > 0.05) {
      cameraLookAtCopy.lerp(targetCameraLookAt, 0.03);
      setPositionToLookAt(cameraLookAtCopy);
    } else {
      setStartCameraLookAtAnimation(false);
    }
  }

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={cameraPosition}
        ref={perspectiveCameraRef}
        args={[75, window.innerWidth / window.innerHeight, 0.1, 1000]}
      />
      <Environment preset="sunset" />

      <ImageFrames data={data} />
      {randomPositions.map((element, index) => (
        <BlockCharacter key={index} position={element} />
      ))}
    </>
  );
}
function ImageFrames({ data }) {
  return (
    <>
      {data &&
        data.map((data, index) => (
          <ImageFrame
            key={"img" + index}
            url={data.link}
            position={[0, -index * 10, 0]}
            name={"La victoire de Madagascar"}
          />
        ))}
    </>
  );
}
function ImageFrame({ url, position, name }) {
  const texture = useTexture(url);
  return (
    <group position={position}>
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[-0.3, 0.3]}
      >
        <mesh>
          <planeGeometry args={[6, 4]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </Float>
    </group>
  );
}
export default VeteranGallery;
