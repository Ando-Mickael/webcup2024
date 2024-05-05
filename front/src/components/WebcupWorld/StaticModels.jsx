import { Float, Html, Stars } from "@react-three/drei";
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
      />
      <Volcano2
        scale={2}
        position={[-7, 0, 3]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Html
        transform
        position-x={-5}
        position-y={3}
        position-z={-5}
        rotation-y={Math.PI / 4}
      >
        <div className="natural-disaster-text center">
          NATURAL DISASTERS PREVENTION
        </div>
      </Html>
      <Html
        transform
        position-x={-5}
        position-y={5}
        position-z={-5}
        rotation-y={Math.PI / 4}
      >
        <div className="final-webcup-text center">WEBCUP FINAL 2023</div>
      </Html>

      <Html
        transform
        position-x={-6}
        position-y={1}
        position-z={-6}
        rotation-y={Math.PI / 4}
      >
        <div className="winner-text-container">
          <div style={{ width: "15%", height: "100%" }} className="center">
            <img
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
              src="/img/couronne-de-laurier.png"
            />
          </div>
          <div
            style={{ width: "85%", height: "100%" }}
            className="winner-text center"
          >
            MADAGASCAR - Angry Geek
          </div>
        </div>
      </Html>

      <Float
        speed={1}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        <RocketShip scale={20} position={[10, -4, -20]} />
      </Float>
      <Stars count={700} />
      <Html
        transform
        position-x={7}
        position-y={3}
        position-z={-20}
        rotation-y={-Math.PI / 4}
      >
        <div className="natural-disaster-text center">
          FORGOTTEN TIME CAPSULE EXPOSITION
        </div>
      </Html>
      <Html
        transform
        position-x={7}
        position-y={5}
        position-z={-20}
        rotation-y={-Math.PI / 4}
      >
        <div className="final-webcup-text center">WEBCUP FINAL 2022</div>
      </Html>

      <Html
        transform
        position-x={8}
        position-y={1}
        position-z={-21}
        rotation-y={-Math.PI / 4}
      >
        <div className="winner-text-container">
          <div style={{ width: "15%", height: "100%" }} className="center">
            <img
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
              src="/img/couronne-de-laurier.png"
            />
          </div>
          <div
            style={{ width: "85%", height: "100%" }}
            className="winner-text center"
          >
            MAYOTTES - Ylangs
          </div>
        </div>
      </Html>

      <Html transform position-x={0} position-y={3} position-z={-27}>
        <div className="other-year-coming-text center">2010-2021 will come</div>
      </Html>

      <Html
        transform
        position-x={0}
        position-y={0}
        position-z={-8}
        rotation-x={-Math.PI / 2}
        rotation-z={Math.PI / 2}
      >
        <div className="webcup-timeline-text center">WEBCUP TIMELINE</div>
      </Html>
    </>
  );
};

export default StaticModels;
