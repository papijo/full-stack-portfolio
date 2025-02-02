import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { RoomModel } from "./Room";

const RoomContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading....">
        <Stage scale={0.5} environment="city">
          <RoomModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} zoom={0.5} />
      </Suspense>
    </Canvas>
  );
};

export default RoomContainer;
