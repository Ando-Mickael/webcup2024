import { Canvas } from "@react-three/fiber";
import { Multiplayer } from "../components/Multiplayer";
import { SocketManager } from "../components/SocketManager";
import "./Museum.css";
export default function Museum() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const money = e.target.money.value;
    const year = e.target.year.value;
  };

  // const { data, error, isLoading } = useSWR(
  //   "http://192.168.88.17:1234/crud/photo",
  //   fetcher
  // );
  return (
    <div style={{ height: "100vh" }}>
      <SocketManager />
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
        <color attach="background" args={["black"]} />
        <Multiplayer />
      </Canvas>
      <div className="donation1-container center">
        <h1
          style={{ fontFamily: "Poppins-Bold", color: "antiquewhite" }}
          className="center"
        >
          DONATION
        </h1>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              required
              placeholder="amount"
              className="input"
              type="number"
              name="money"
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <select className="input" name="year">
              <option value="1">2023</option>
              <option value="2">2022</option>
            </select>
          </div>

          <div className="button-container center">
            <button type="submit" className="donation-button center">
              DONATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
