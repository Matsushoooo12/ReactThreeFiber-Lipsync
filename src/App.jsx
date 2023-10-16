import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ARButton, XR, Controllers } from "@react-three/xr";

function App() {
  return (
    // <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
    //   <color attach="background" args={["#ececec"]} />
    //   <Experience />
    // </Canvas>
    <>
      <ARButton />
      <Canvas>
        <XR>
          <Controllers />
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
