import React, { useRef, useState } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export function PokeBall_red(props) {
  const [stateHover, setStateHover] = useState(false);
  const navigate = useNavigate();
  useCursor(stateHover);
  const { nodes, materials } = useGLTF("/pokeBall_red.glb");
  return (
    <group
      onPointerOver={() => setStateHover(true)}
      onPointerOut={() => setStateHover(false)}
      onClick={() => navigate("/about")}
    >
      <group {...props} dispose={null} scale={[0.01, 0.01, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[0, 0, 86.871]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere1.geometry}
          material={materials["Mat.1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Boole1_1.geometry}
          material={nodes.Boole1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Boole1-Mat"].geometry}
          material={materials.Mat}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/pokeBall_red.glb");
