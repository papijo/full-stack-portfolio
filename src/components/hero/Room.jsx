/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function RoomModel(props) {
  const { nodes, materials } = useGLTF("/room.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.295}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-0.273, 0.041, -0.723]}
            rotation={[-Math.PI, -1.542, -Math.PI]}
            scale={0.039}
          >
            <mesh
              geometry={nodes.stoelpTorus1_stoellambert6_0.geometry}
              material={materials.stoellambert6}
            />
            <mesh
              geometry={nodes.stoelpTorus1_lambert1_0.geometry}
              material={materials.lambert1}
            />
          </group>
          <mesh
            geometry={nodes.pCube1_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.214, 0.457, -0.363]}
            rotation={[-1.474, 0.123, 2.468]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube2_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.106, 0.454, -0.276]}
            rotation={[1.765, -0.004, 0.089]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube3_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.112, 0.453, -0.227]}
            rotation={[-1.381, 0.026, 0.066]}
            scale={[0.063, 0.063, 0.007]}
          />
          <mesh
            geometry={nodes.pCube4_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.169, 0.453, -0.264]}
            rotation={[-1.473, 0.445, 0.106]}
            scale={[0.063, 0.063, 0.007]}
          />
          <mesh
            geometry={nodes.pCube5_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.222, 0.443, -0.503]}
            rotation={[-1.553, 0.023, 2.474]}
            scale={[0.051, 0.051, 0.006]}
          />
          <mesh
            geometry={nodes.pCube6_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.307, 0.444, -0.309]}
            rotation={[1.597, -0.063, 2.253]}
            scale={[0.051, 0.051, 0.006]}
          />
          <mesh
            geometry={nodes.pCube7_lambert4_0.geometry}
            material={materials.lambert4}
            position={[-0.713, 0.2, 1.016]}
            rotation={[0, 0.703, 0]}
            scale={0.359}
          />
          <mesh
            geometry={nodes.pCube8_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[-0.764, 0.217, -0.122]}
            rotation={[0, 0.056, 0]}
            scale={[0.231, 0.079, 0.162]}
          />
          <mesh
            geometry={nodes.pCube9_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[-0.301, 0.065, 1.126]}
            rotation={[0, -0.568, 0]}
            scale={[0.273, 0.093, 0.192]}
          />
          <mesh
            geometry={nodes.pCube10_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[-0.301, 0.156, 1.126]}
            rotation={[0, 0.077, 0]}
            scale={[0.273, 0.093, 0.192]}
          />
          <mesh
            geometry={nodes.pCube11_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[-0.256, 0.303, 1.152]}
            rotation={[0, 0.077, 0]}
            scale={[0.219, 0.075, 0.153]}
          />
          <mesh
            geometry={nodes.pCube12_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[-0.248, 0.233, 1.136]}
            rotation={[-Math.PI, 1.341, -Math.PI]}
            scale={[0.181, 0.062, 0.127]}
          />
          <mesh
            geometry={nodes.pCube13_lambert4_0.geometry}
            material={materials.lambert4}
            position={[-0.376, 0.543, 1.163]}
            rotation={[0.447, 1.246, -0.427]}
            scale={0.359}
          />
          <mesh
            geometry={nodes.pCube14_lambert6_0.geometry}
            material={materials.lambert6}
            position={[-0.718, 0.394, 0.96]}
            rotation={[3.118, -0.199, 0]}
            scale={[0.246, 0.008, 0.181]}
          />
          <mesh
            geometry={nodes.pCube15_lambert6_0.geometry}
            material={materials.lambert6}
            position={[-0.718, 0.402, 0.96]}
            rotation={[3.118, -0.095, 0]}
            scale={[0.246, 0.008, 0.181]}
          />
          <mesh
            geometry={nodes.pCube16_lambert6_0.geometry}
            material={materials.lambert6}
            position={[-0.718, 0.41, 0.96]}
            rotation={[3.118, -0.075, 0]}
            scale={[0.246, 0.008, 0.181]}
          />
          <mesh
            geometry={nodes.pCube17_lambert6_0.geometry}
            material={materials.lambert6}
            position={[-0.012, 0.461, -0.125]}
            rotation={[-0.024, -0.804, Math.PI]}
            scale={[0.246, 0.008, 0.181]}
          />
          <mesh
            geometry={nodes.pCube18_lambert6_0.geometry}
            material={materials.lambert6}
            position={[-0.012, 0.453, -0.125]}
            rotation={[-0.024, -0.7, Math.PI]}
            scale={[0.246, 0.008, 0.181]}
          />
          <mesh
            geometry={nodes.pCube19_lambert6_0.geometry}
            material={materials.lambert6}
            position={[-0.012, 0.446, -0.125]}
            rotation={[-0.024, -0.899, Math.PI]}
            scale={[0.246, 0.008, 0.181]}
          />
          <mesh
            geometry={nodes.pCube20_lambert6_0.geometry}
            material={materials.lambert6}
            position={[-0.012, 0.469, -0.125]}
            rotation={[-0.024, -0.824, Math.PI]}
            scale={[0.246, 0.008, 0.181]}
          />
          <mesh
            geometry={nodes.pCube21_lambert6_0.geometry}
            material={materials.lambert6}
            position={[0.695, 0.409, -1.095]}
            rotation={[-0.024, -0.824, Math.PI]}
            scale={[0.224, 0.007, 0.165]}
          />
          <mesh
            geometry={nodes.pCube22_lambert6_0.geometry}
            material={materials.lambert6}
            position={[0.695, 0.385, -1.095]}
            rotation={[-0.024, -0.899, Math.PI]}
            scale={[0.224, 0.007, 0.165]}
          />
          <mesh
            geometry={nodes.pCube23_lambert6_0.geometry}
            material={materials.lambert6}
            position={[0.695, 0.392, -1.095]}
            rotation={[-0.024, -0.7, Math.PI]}
            scale={[0.224, 0.007, 0.165]}
          />
          <mesh
            geometry={nodes.pCube24_lambert6_0.geometry}
            material={materials.lambert6}
            position={[0.695, 0.401, -1.095]}
            rotation={[-0.024, -0.804, Math.PI]}
            scale={[0.224, 0.007, 0.165]}
          />
          <mesh
            geometry={nodes.pCube25_lambert6_0.geometry}
            material={materials.lambert6}
            position={[0.695, 0.44, -1.095]}
            rotation={[-0.024, -0.824, Math.PI]}
            scale={[0.224, 0.007, 0.165]}
          />
          <mesh
            geometry={nodes.pCube26_lambert6_0.geometry}
            material={materials.lambert6}
            position={[0.695, 0.417, -1.095]}
            rotation={[-0.024, -0.899, Math.PI]}
            scale={[0.224, 0.007, 0.165]}
          />
          <mesh
            geometry={nodes.pCube27_lambert6_0.geometry}
            material={materials.lambert6}
            position={[0.695, 0.424, -1.095]}
            rotation={[-0.024, -0.7, Math.PI]}
            scale={[0.224, 0.007, 0.165]}
          />
          <mesh
            geometry={nodes.pCube28_lambert6_0.geometry}
            material={materials.lambert6}
            position={[0.695, 0.432, -1.095]}
            rotation={[-0.024, -0.804, Math.PI]}
            scale={[0.224, 0.007, 0.165]}
          />
          <mesh
            geometry={nodes.pCube29_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[0.787, 0.065, -0.814]}
            rotation={[0, 0.056, 0]}
            scale={[0.231, 0.079, 0.162]}
          />
          <mesh
            geometry={nodes.pCube30_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.777, 0.115, -0.777]}
            rotation={[1.765, -0.004, 0.089]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube31_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.84, 0.114, -0.765]}
            rotation={[-1.473, 0.445, 0.106]}
            scale={[0.063, 0.063, 0.007]}
          />
          <mesh
            geometry={nodes.pCube32_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.783, 0.114, -0.728]}
            rotation={[-1.381, 0.026, 0.066]}
            scale={[0.063, 0.063, 0.007]}
          />
          <mesh
            geometry={nodes.pCube33_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.815, 0.105, -0.86]}
            rotation={[1.578, 0, 0.077]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube34_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[-0.785, 0.081, -1.202]}
            rotation={[-Math.PI, -0.998, -Math.PI]}
            scale={[0.273, 0.093, 0.192]}
          />
          <mesh
            geometry={nodes.pCube35_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[-0.733, 0.233, -1.192]}
            rotation={[0, 0.225, 0]}
            scale={[0.181, 0.062, 0.127]}
          />
          <mesh
            geometry={nodes.pCube36_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[-0.741, 0.303, -1.176]}
            rotation={[0, -1.498, 0]}
            scale={[0.219, 0.075, 0.153]}
          />
          <mesh
            geometry={nodes.pCube37_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[-0.785, 0.156, -1.202]}
            rotation={[0, -1.498, 0]}
            scale={[0.273, 0.093, 0.192]}
          />
          <mesh
            geometry={nodes.pCube38_lambert8_0.geometry}
            material={materials.lambert8}
            position={[0.348, 0.052, -1.124]}
            rotation={[-3.1, -0.801, 3.053]}
            scale={0.106}
          />
          <mesh
            geometry={nodes.pCube39_lambert8_0.geometry}
            material={materials.lambert8}
            position={[-0.45, 0.052, 0.261]}
            rotation={[-0.044, -0.843, -0.152]}
            scale={0.106}
          />
          <mesh
            geometry={nodes.pCube40_lambert8_0.geometry}
            material={materials.lambert8}
            position={[-0.599, 0.229, -0.15]}
            rotation={[1.618, 0.699, -1.711]}
            scale={0.106}
          />
          <mesh
            geometry={nodes.pCube42_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[-0.371, 0.249, 1.071]}
            rotation={[-0.022, 1.134, -1.633]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube43_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[-0.386, 0.263, 1.069]}
            rotation={[0.207, 1.141, -1.842]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube45_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[-0.42, 0.21, 1.057]}
            rotation={[-1.671, -0.024, -0.413]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube46_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[-0.403, 0.258, 1.066]}
            rotation={[0.475, 1.092, -2.083]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube47_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[-0.434, 0.247, 1.054]}
            rotation={[1.036, 0.776, -2.544]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube48_lambert8_0.geometry}
            material={materials.lambert8}
            position={[-0.787, 0.37, -1.224]}
            rotation={[-0.002, 0.7, -0.007]}
            scale={[0.102, 0.106, 0.106]}
          />
          <mesh
            geometry={nodes.pCylinder1_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[0, 0.472, -0.372]}
            rotation={[0, -1.425, 0]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder2_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[0.063, 0.458, -0.367]}
            rotation={[0, -1.425, -1.606]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder3_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[0, 0.507, -0.081]}
            rotation={[0, 0.136, 0]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder4_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[0.054, 0.494, -0.043]}
            rotation={[0, 0.136, -1.615]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder5_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[0.05, 0.044, 0.358]}
            rotation={[-0.076, -0.678, -1.581]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder6_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[0.148, 0.059, 0.284]}
            rotation={[-1.636, -0.167, 0.023]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder7_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.793, 0.372, -1.118]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder8_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.719, 0.372, -1.256]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder9_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.723, 0.359, -1.108]}
            rotation={[-1.536, 0, 2.273]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder10_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.716, 0.373, -1.168]}
            rotation={[0.038, -0.869, -3.14]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder11_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.874, 0.248, -1.117]}
            rotation={[1.614, -0.592, 1.648]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder12_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.85, 0.239, -1.077]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder13_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.823, 0.071, -1.006]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder14_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.827, 0.058, -0.858]}
            rotation={[-1.536, 0, 2.273]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder15_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.433, 0.059, -1.158]}
            rotation={[-1.636, -0.167, 0.023]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder16_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.532, 0.044, -1.084]}
            rotation={[-0.076, -0.678, -1.581]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder17_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.743, 0.041, 0.603]}
            rotation={[0, 0.136, -1.615]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder18_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.797, 0.055, 0.566]}
            rotation={[0, 0.136, 0]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder19_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[0.46, 0.041, -1.035]}
            rotation={[0, 0.136, -1.615]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder20_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[0.406, 0.055, -1.073]}
            rotation={[0, 0.136, 0]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCube49_tvlambert2_0.geometry}
            material={materials.tvlambert2}
            position={[-0.663, 1.2, 0.362]}
            rotation={[0.015, 0.483, -0.067]}
            scale={[0.017, 0.351, 0.593]}
          />
          <mesh
            geometry={nodes.pCube50_tvlambert2_0.geometry}
            material={materials.tvlambert2}
            position={[-0.731, 1.545, -0.226]}
            rotation={[0.096, 0.206, -0.518]}
            scale={[0.015, 0.309, 0.523]}
          />
          <mesh
            geometry={nodes.pCube51_tvlambert2_0.geometry}
            material={materials.tvlambert2}
            position={[-0.693, 0.839, 0.369]}
            rotation={[0.014, 0.475, -0.068]}
            scale={[0.017, 0.351, 0.593]}
          />
          <mesh
            geometry={nodes.pCube52_tvlambert2_0.geometry}
            material={materials.tvlambert2}
            position={[-0.731, 1.545, -0.954]}
            rotation={[-0.087, -0.12, -0.51]}
            scale={[0.015, 0.309, 0.523]}
          />
          <mesh
            geometry={nodes.pCube53_lambert9_0.geometry}
            material={materials.lambert9}
            position={[0.55, 1.587, -1.281]}
            scale={[0.634, 0.27, 0.151]}
          />
          <mesh
            geometry={nodes.pCube54_lambert9_0.geometry}
            material={materials.lambert9}
            position={[-0.864, 1.587, 1.025]}
            rotation={[0, 1.56, 0]}
            scale={[0.634, 0.27, 0.151]}
          />
          <mesh
            geometry={nodes.pCube55_lambert9_0.geometry}
            material={materials.lambert9}
            position={[-0.855, 1.587, 0.386]}
            rotation={[0, 1.56, 0]}
            scale={[0.634, 0.27, 0.151]}
          />
          <mesh
            geometry={nodes.pCube56_lambert8_0.geometry}
            material={materials.lambert8}
            position={[-0.478, 0.052, 0.922]}
            rotation={[-3.017, -0.499, -3.027]}
            scale={0.106}
          />
          <mesh
            geometry={nodes.pCube57_lambert11_0.geometry}
            material={materials.lambert11}
            position={[0.086, 0.086, -0.228]}
            rotation={[Math.PI / 2, 0, 1.62]}
            scale={[0.28, 0.28, 0.134]}
          />
          <mesh
            geometry={nodes.pCube58_lambert11_0.geometry}
            material={materials.lambert11}
            position={[-0.783, 0.502, -0.065]}
            rotation={[-1.576, 0.019, 0.066]}
            scale={[0.28, 0.28, 0.134]}
          />
          <mesh
            geometry={nodes.pCube59_lambert8_0.geometry}
            material={materials.lambert8}
            position={[-0.119, 0.327, -1.284]}
            rotation={[-3.1, -0.801, 3.053]}
            scale={0.106}
          />
          <mesh
            geometry={nodes.pCylinder21_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[0.026, 0.338, -1.261]}
            rotation={[0, -1.425, 0]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCylinder22_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[-0.014, 0.336, -1.29]}
            rotation={[1.525, -0.302, 1.418]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.pCube60_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.106, 0.454, -0.276]}
            rotation={[1.765, -0.004, 0.089]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube61_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.698, 0.184, 1.032]}
            rotation={[-1.474, 0.123, 2.468]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube62_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.63, 0.195, 1.09]}
            rotation={[1.765, -0.004, 0.089]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.pCube63_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[0.62, 0.101, 1.038]}
            rotation={[0, -0.258, 0]}
            scale={[0.451, 0.154, 0.316]}
          />
          <mesh
            geometry={nodes.hard_discpCube1_hard_disclambert2_0.geometry}
            material={materials.hard_disclambert2}
            position={[0.144, 0.444, -0.359]}
            rotation={[1.578, 0, 0.077]}
            scale={[0.092, 0.092, 0.01]}
          />
          <mesh
            geometry={nodes.kamerpCube1_lambert1_0.geometry}
            material={materials.lambert1}
            position={[0, 0.809, 0]}
            scale={[1.824, 1.571, 2.707]}
          />
          <mesh
            geometry={nodes.texttypeMesh1_texttypeShader2_0.geometry}
            material={materials.texttypeShader2}
            position={[0, 0.869, -1.359]}
            rotation={[0, 0, -0.18]}
            scale={[0.249, 0.183, 0.056]}
          />
          <mesh
            geometry={nodes.tafelpCube1_lambert3_0.geometry}
            material={materials.lambert3}
            position={[-0.327, 0.426, -0.144]}
            rotation={[0, 1.555, 0]}
            scale={[0.486, 0.028, 1.184]}
          />
          <mesh
            geometry={nodes.tafelpCube2_lambert2_0.geometry}
            material={materials.lambert2}
            position={[0.251, 0.195, -0.265]}
            rotation={[1.856, -1.162, 1.879]}
            scale={[0.371, 0.528, 0.048]}
          />
          <mesh
            geometry={nodes.ouden_tvpCube1_lambert4_0.geometry}
            material={materials.lambert4}
            position={[0.732, 0.2, -1.146]}
            rotation={[-Math.PI, -0.909, -Math.PI]}
            scale={0.359}
          />
          <mesh
            geometry={nodes.doos_1pCube1_doos_1lambert2_0.geometry}
            material={materials.doos_1lambert2}
            position={[-0.653, 0.101, -0.158]}
            rotation={[0, -0.258, 0]}
            scale={[0.451, 0.154, 0.316]}
          />
          <mesh
            geometry={nodes.papierenpCube1_lambert6_0.geometry}
            material={materials.lambert6}
            position={[-0.718, 0.387, 0.96]}
            rotation={[3.118, 0, 0]}
            scale={[0.246, 0.008, 0.181]}
          />
          <mesh
            geometry={nodes.tvpCube1_tvlambert2_0.geometry}
            material={materials.tvlambert2}
            position={[-0.824, 0.993, -0.586]}
            rotation={[0.004, 0.043, -0.087]}
            scale={[0.04, 0.814, 1.376]}
          />
          <mesh
            geometry={nodes.muispCube1_lambert7_0.geometry}
            material={materials.lambert7}
            position={[-0.725, 0.449, -0.325]}
            rotation={[Math.PI, 0.809, 0]}
            scale={[0.094, 0.029, 0.094]}
          />
          <mesh
            geometry={nodes.zakjepCube1_lambert8_0.geometry}
            material={materials.lambert8}
            position={[-0.083, 0.491, -0.044]}
            rotation={[0.077, 0.698, 0.234]}
            scale={0.106}
          />
          <mesh
            geometry={nodes.blikiepCylinder1_blikielambert2_0.geometry}
            material={materials.blikielambert2}
            position={[0, 0.472, -0.318]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.02, 0.033, 0.02]}
          />
          <mesh
            geometry={nodes.ercopCube1_lambert9_0.geometry}
            material={materials.lambert9}
            position={[-0.09, 1.587, -1.281]}
            scale={[0.634, 0.27, 0.151]}
          />
          <mesh
            geometry={nodes.toetsen_boardpCube1_lambert10_0.geometry}
            material={materials.lambert10}
            position={[-0.406, 0.438, -0.19]}
            rotation={[0, 1.039, 0]}
            scale={[0.177, 0.015, 0.403]}
          />
          <mesh
            geometry={nodes.PC1pCube1_lambert11_0.geometry}
            material={materials.lambert11}
            position={[-0.104, 0.161, -1.285]}
            rotation={[0, -0.009, 0]}
            scale={[0.28, 0.28, 0.134]}
          />
          <mesh
            geometry={nodes.stoelpCube1_stoellambert4_0.geometry}
            material={materials.stoellambert4}
            position={[-0.151, 0.348, -0.915]}
            rotation={[-0.061, 1.126, 0]}
            scale={[0.503, 0.015, 0.057]}
          />
          <mesh
            geometry={nodes.stoelpCube2_stoellambert2_0.geometry}
            material={materials.stoellambert2}
            position={[-0.617, 0.379, -0.811]}
            rotation={[-0.061, 1.126, 0]}
            scale={[0.373, 0.031, 0.373]}
          />
          <mesh
            geometry={nodes.stoelpCylinder1_stoellambert3_0.geometry}
            material={materials.stoellambert3}
            position={[-0.277, 0.212, -0.724]}
            scale={[0.104, 0.181, 0.104]}
          />
          <mesh
            geometry={nodes.stoelpCube3_stoellambert2_0.geometry}
            material={materials.stoellambert2}
            position={[0.208, 0.666, -0.83]}
            rotation={[3.082, -1.142, 1.845]}
            scale={[0.373, 0.031, 0.373]}
          />
          <mesh
            geometry={nodes.giant_robotpPlane1_giant_robotlambert2_0.geometry}
            material={materials.giant_robotlambert2}
            position={[-0.908, 0.838, 1.071]}
            rotation={[1.511, 0, -Math.PI / 2]}
            scale={[0.385, 0.504, 1.057]}
          />
          <mesh
            geometry={nodes.swaardenpPlane1_swaardenlambert2_0.geometry}
            material={materials.swaardenlambert2}
            position={[-0.894, 1.029, 0.642]}
            rotation={[1.644, 0, -Math.PI / 2]}
            scale={[0.402, 1, 0.6]}
          />
          <mesh
            geometry={nodes.showerpPlane1_showerlambert2_0.geometry}
            material={materials.showerlambert2}
            position={[-0.59, 0.705, -1.33]}
            rotation={[Math.PI / 2, -0.066, 0]}
            scale={[0.399, 0.378, 0.575]}
          />
          <mesh
            geometry={nodes.whalepPlane1_whalelambert2_0.geometry}
            material={materials.whalelambert2}
            position={[-0.073, 0.648, -1.349]}
            rotation={[Math.PI / 2, -0.157, 0]}
            scale={[0.32, 0.303, 0.462]}
          />
          <mesh
            geometry={nodes.astronautpPlane1_astronautlambert2_0.geometry}
            material={materials.astronautlambert2}
            position={[-0.391, 0.53, -1.324]}
            rotation={[Math.PI / 2, 0.045, 0]}
            scale={[0.408, 0.408, 0.611]}
          />
          <mesh
            geometry={nodes.blood_forestpPlane1_blood_forestlambert2_0.geometry}
            material={materials.blood_forestlambert2}
            position={[-0.897, 0.526, 0.494]}
            rotation={[1.471, 0, -Math.PI / 2]}
            scale={[0.398, 0.398, 0.755]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/room.glb");
