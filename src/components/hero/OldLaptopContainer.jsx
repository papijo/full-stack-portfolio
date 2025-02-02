import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OldLaptopModel } from "./Old";

const OldLaptopContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading....">
        <Stage environment="city" intensity={0.5}>
          <OldLaptopModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={10} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} zoom={0.5} />
      </Suspense>
    </Canvas>
  );
};

export default OldLaptopContainer;
