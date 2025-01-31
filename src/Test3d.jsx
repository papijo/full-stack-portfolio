/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Test3d = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Canvas>
        <mesh>
          {/* <boxGeometry args={[2, 2, 2]} /> */}
          <Sphere args={[1, 50, 100]}>
            <MeshDistortMaterial
              color="#088898"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          {/* <meshStandardMaterial color="red" /> */}

          <ambientLight intensity={2} />
          <directionalLight position={[1, 2, 3]} />
          {/* <OrbitControls enableZoom={false} /> */}
        </mesh>
      </Canvas>
    </section>
  );
};

export default Test3d;
