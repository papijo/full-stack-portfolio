import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./Computer";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading....">
        <Stage environment="city" intensity={0.2}>
          <ComputerModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera makeDefault position={[-1, 0, 10]} zoom={0.5} />
      </Suspense>
    </Canvas>
  );
};

export default ComputerModelContainer;
