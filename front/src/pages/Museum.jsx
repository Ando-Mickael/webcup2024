import { Canvas } from "@react-three/fiber";
import { Multiplayer } from "../components/Multiplayer";
import { SocketManager } from "../components/SocketManager";

export default function Museum() {
  return (
    <div style={{ height: "100vh" }}>
      <SocketManager />
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Multiplayer />
      </Canvas>
    </div>
  );
}
