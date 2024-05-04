import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Color } from "three";
import targetShootImage from "../../../public/img/targetShoot.png";
import "./Game.css";

const Game = () => {
  const bgColor = new Color(0xfaf9f6);
  const targetShoot = useRef();

  function updateBoxPosition(event) {
    if (!targetShoot.current) return;
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    targetShoot.current.style.left = mouseX + "px";
    targetShoot.current.style.top = mouseY + "px";
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateBoxPosition);

    return () => {
      window.removeEventListener("mousemove", updateBoxPosition);
    };
  }, []);

  const ballRef = useRef();
  const body = useRef();
  const [rigid, setRigid] = useState(true);
  const [points, setPoints] = useState(0);
  const direction = useRef();

  const addPoints = () => {
    setPoints(points + 1);
  };

  const resetBullet = () => {
    setRigid(true);
    console.log("ici");
    ballRef.current.position = new THREE.Vector3(0, 0, 4);
  };
  const applyImpulse = (direction) => {
    body.current.applyImpulse(direction, true);
  };
  // Event listener for click on canvas
  const handleMouseUp = (event) => {
    setRigid(false);
    const mouse = {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    };

    direction.current = new THREE.Vector3(mouse.x * 8, mouse.y * 8, 0)
      .sub(ballRef.current.position)
      .normalize()
      .multiplyScalar(20);
  };
  useEffect(() => {
    if (rigid) return;
    setTimeout(() => {
      applyImpulse(direction.current);
    }, 10);
  }, [rigid]);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <div className="game-container">
      <Canvas camera={{ position: [0, 1, 9] }}>
        <axesHelper />
        <color attach="background" args={[bgColor.r, bgColor.g, bgColor.b]} />
        <Environment preset="sunset" />
        <OrbitControls />

        <Suspense>
          <Physics debug>
            <RigidBody
              key={rigid + "ojdwadaowd"}
              ref={body}
              type={rigid ? "kinematicPosition" : "dynamic"}
            >
              <mesh ref={ballRef} position={[0, 0, 4]}>
                <boxGeometry />
                <meshStandardMaterial color={"red"} />
              </mesh>
            </RigidBody>

            <RigidBody>
              <mesh position={[0, -2, 4]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color={"blue"} />
              </mesh>
            </RigidBody>

            <TargetToShoot addPoints={addPoints} resetBullet={resetBullet} />
          </Physics>
        </Suspense>
      </Canvas>

      <div className="target-shoot-container center " ref={targetShoot}>
        <img className="target-shoot-img" src={targetShootImage} alt="" />
      </div>
      <div className="points">{points}</div>
    </div>
  );
};

const TargetToShoot = ({ addPoints, resetBullet }) => {
  return (
    <>
      <RigidBody
        onCollisionEnter={({ manifold, target, other }) => {
          addPoints();
          resetBullet();
        }}
        type="fixed"
      >
        <mesh position={[0, 3, 0]}>
          <boxGeometry args={[5, 5, 1]} />
          <meshStandardMaterial color={"yellow"} />
        </mesh>
      </RigidBody>
    </>
  );
};
export default Game;
