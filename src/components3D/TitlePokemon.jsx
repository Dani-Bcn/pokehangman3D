import React, { useLayoutEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { motion as m } from "framer-motion-3d";

export function TitlePokemon(props) {
  const { nodes, materials } = useGLTF("/pokemonTitle.glb");

  return (
    <m.group 
      {...props} 
      dispose={null}
      initial={{
        x: -25,
      }} 
      animate={{ 
        x: [-25, -6.5],
        transition: {
          delay: 0.3,
          type:"spring",
          mass:10,
          stiffness:500,
          damping:50,
          restDelta:0.001
        },
      }}
      scale={0.016}
      position={[0,0, -5]}
      rotation={[0, 0, 0]} 
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
