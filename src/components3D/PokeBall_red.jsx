import React, { useRef, useState } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion-3d";

export function PokeBall_red(props) {
  const [stateHover, setStateHover] = useState(false);
  const navigate = useNavigate();
  useCursor(stateHover);
  const { nodes, materials } = useGLTF("/pokeBall_red.glb");
  return (
    <m.group

   
    animate={{
      scale:[0,1],
      x:[-5,0],
      transition:{
        delay:1.5,
        duration:1.2,
        type:"tween",
        stiffness:50
      }

    }}
      onPointerOver={() => setStateHover(true)}
      onPointerOut={() => setStateHover(false)}
      onClick={() => navigate("/game")}
    >
      <group
        {...props}
        dispose={null}
        scale={[0.01, 0.01, 0.01]}
        position={[-8, 2, 0]}
        rotation={[0, 0.5, 0]}
      >
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
    </m.group>
  );
}

useGLTF.preload("/pokeBall_red.glb");
