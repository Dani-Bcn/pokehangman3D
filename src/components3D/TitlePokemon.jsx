import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import{motion as m} from "framer-motion-3d"

export function TitlePokemon(props) {
  const { nodes, materials } = useGLTF("/pokemonTitle.glb");
  return (
    <m.group {...props} dispose={null}

    initial={{
      x:-25
    }}

    animate={{
      x:[-25,-4],
      transition:{
        delay:0.3,
        type:"spring",
        mass:2,
        damping:10,

        duration:1,
      }
    }}
    scale={0.015}
    position={[-2.5,-1,-5]}
    rotation={[0,-0.5,0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Extrude-Mat"].geometry}
        material={materials.Mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Extrude-Mat1"].geometry}
        material={materials["Mat.1"]}
      />
    </m.group>
  );
}

useGLTF.preload("/pokemonTitle.glb");