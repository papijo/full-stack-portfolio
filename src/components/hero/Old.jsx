/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function OldLaptopModel(props) {
  const { nodes, materials } = useGLTF("/old.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[31.289, 9.19, 4.634]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.Cube006_Ilot1_0.geometry}
            material={materials.Ilot1}
          />
          <mesh
            geometry={nodes.Cube009_Ilot1_0.geometry}
            material={materials.Ilot1}
            position={[0.001, 0, 0]}
          />
          <mesh
            geometry={nodes.Cube010_Ilot1_0.geometry}
            material={materials.Ilot1}
            position={[0.001, 0, -0.034]}
          />
          <mesh
            geometry={nodes.Cube014_Ilot1_0.geometry}
            material={materials.Ilot1}
            position={[0.001, 0.107, -0.034]}
          />
        </group>
        <group
          position={[0.987, 14.399, -11.433]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.Cylinder004_Ilot1_0.geometry}
            material={materials.Ilot1}
          />
          <mesh
            geometry={nodes.Cylinder003_Ilot1_0.geometry}
            material={materials.Ilot1}
            position={[0, 0.01, 0.024]}
          />
          <mesh
            geometry={nodes.Cylinder005_Ilot1_0.geometry}
            material={materials.Ilot1}
            position={[0, 0.026, 0.065]}
          />
          <mesh
            geometry={nodes.Cylinder006_Ilot1_0.geometry}
            material={materials.Ilot1}
            position={[0, 0.042, 0.105]}
          />
        </group>
        <group
          position={[50.001, 1.362, 3.758]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.Cube_ilot_2_0.geometry}
            material={materials.ilot_2}
          />
          <mesh
            geometry={nodes.Cube027_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[-0.039, -0.17, 0.009]}
          />
          <mesh
            geometry={nodes.Cube028_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[-0.019, -0.033, 0.007]}
          />
          <mesh
            geometry={nodes.Cube029_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0, -0.028, 0.006]}
          />
          <mesh
            geometry={nodes.Cube030_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.02, -0.048, 0.004]}
          />
          <mesh
            geometry={nodes.Cube031_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.04, -0.043, 0.003]}
          />
          <mesh
            geometry={nodes.Cube032_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[-0.019, -0.165, 0.007]}
          />
          <mesh
            geometry={nodes.Cube033_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0, -0.163, 0.006]}
          />
          <mesh
            geometry={nodes.Cube034_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.02, -0.167, 0.004]}
          />
          <mesh
            geometry={nodes.Cube035_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.039, -0.165, 0.003]}
          />
          <mesh
            geometry={nodes.Cube036_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.039, -0.14, 0.003]}
          />
          <mesh
            geometry={nodes.Cube037_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.039, -0.116, 0.003]}
          />
          <mesh
            geometry={nodes.Cube038_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.04, 0.031, 0.003]}
          />
          <mesh
            geometry={nodes.Cube039_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.04, 0.055, 0.003]}
          />
          <mesh
            geometry={nodes.Cube040_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.04, 0.075, 0.003]}
          />
          <mesh
            geometry={nodes.Cube041_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.04, 0.099, 0.003]}
          />
          <mesh
            geometry={nodes.Cube042_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.02, 0.087, 0.004]}
          />
          <mesh
            geometry={nodes.Cube043_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[-0.009, 0.099, 0.007]}
          />
          <mesh
            geometry={nodes.Cube044_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[-0.039, 0.094, 0.009]}
          />
          <mesh
            geometry={nodes.Cube045_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[-0.039, 0.15, 0.009]}
          />
          <mesh
            geometry={nodes.Cube046_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[-0.019, 0.15, 0.007]}
          />
          <mesh
            geometry={nodes.Cube047_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.04, 0.15, 0.003]}
          />
          <mesh
            geometry={nodes.Cube048_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[0.021, 0.15, 0.004]}
          />
          <mesh
            geometry={nodes.Cube061_ilot_2_0.geometry}
            material={materials.ilot_2}
            position={[-0.039, -0.043, 0.009]}
          />
        </group>
        <mesh
          geometry={nodes.a_moniteur_low_poly_Ilot1_0.geometry}
          material={materials.Ilot1}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.base_pc_low_poly_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[14.798, 6.93, 4.19]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube002_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[16.927, 6.95, 4.19]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube004_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[5.14, 16.423, 5.248]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube005_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[24.343, 17.066, 15.654]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube011_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[32.758, 6.95, 4.19]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube012_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[32.333, 8.383, -6.059]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube013_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[31.289, 5.69, 4.634]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube015_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[31.289, 5.69, -6.076]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube016_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[31.253, 9.196, -6.076]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube017_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[0.885, 7.122, 4.19]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube026_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[35.28, 9.515, 12.287]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube054_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[0.989, 14.279, -11.44]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube057_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[25.025, 28.564, 11.188]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube085_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[24.685, 34.336, -3.21]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube086_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[24.685, 22.606, -3.21]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube087_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[23.047, 28.435, 11.071]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube089_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[23.321, 34.247, -3.296]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube090_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[23.321, 22.383, -3.296]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[32.201, 9.237, -6.076]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder002_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[35.304, 9.629, 12.277]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane002_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[28.33, 22.779, 17.588]}
          rotation={[-1.549, -0.092, 0.051]}
          scale={100}
        />
        <mesh
          geometry={nodes.ventilateur_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[-0.999, 7.545, -2.908]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube052_Ilot1_0.geometry}
          material={materials.Ilot1}
          position={[32.903, 6.78, -0.743]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube049_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[43.449, 0.911, -21.994]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube050_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-0.164, 15.497, 12.656]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube051_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[43.02, 0.927, 8.172]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube058_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[45.455, 2.179, -20.731]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube059_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[45.351, 2.213, -21.998]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube060_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[45.456, 2.179, -23.297]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube079_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-2.207, 2.578, 10.864]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder001_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-3.291, 2.602, 9.658]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder007_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-1.248, 15.52, 13.869]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder008_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-1.94, 15.496, 12.657]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder010_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-3.291, 2.602, 12.077]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder011_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-3.983, 2.577, 10.865]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder012_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-1.248, 15.52, 11.45]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder014_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-5.923, 2.24, 10.927]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder015_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-3.538, 14.513, 12.631]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cylinder016_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-2.82, 2.764, 7.871]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.NurbsCurve_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[18.464, 1.465, -6.91]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.NurbsCurve004_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[-4.907, 7.807, 14.864]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.pCube245_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[29.467, 18.638, 18.914]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Plane001_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[49.739, 1.832, -22]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={nodes.Cube062_ilot_2_0.geometry}
          material={materials.ilot_2}
          position={[8.524, 0.149, -19.606]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/old.glb");
