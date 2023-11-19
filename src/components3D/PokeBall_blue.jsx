import React, { useRef, useState } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import {motion as m} from "framer-motion-3d"
export function PokeBall_blue(props) {
  const { nodes, materials } = useGLTF("/pokeBall_blue.glb");
  const [stateHover, setStateHover] = useState(false);
  const navigate = useNavigate();
  useCursor(stateHover);
  return (
    <m.group
    initial={{
      scale:[0]
      
    }}
    animate={{
      x:[-5,0],
      scale:[0,0.7],
      transition:{
        delay:2,
        type:"spring",
        mass:1,
        damping:10,
      }

    }}
    onPointerOver={() => setStateHover(true)}
    onPointerOut={() => setStateHover(false)}
    onClick={() => navigate("/game")}
  >
    <group {...props} dispose={null} 
    scale={[0.01, 0.01, 0.01]}
      position={[-8,-1,0]}
      rotation={[0,0.5,0]}
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

useGLTF.preload("/pokeBall_blue.glb");
