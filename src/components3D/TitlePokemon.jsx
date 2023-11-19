import React, { useLayoutEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { motion as m } from "framer-motion-3d";

export function TitlePokemon(props) {
  const { nodes, materials } = useGLTF("/pokemonTitle.glb");
  const [scale, setScale] = useState(0.015);
  const [positionY,setPositionY]=useState(0)
  const [positionX,setPositionX]=useState(0)
  useLayoutEffect(()=>{
  window.addEventListener("resize",(e)=>{
    window.screen.width > 400 ? setScale(0.01) : setScale(0.007);
      console.log(window.screen.width)
   } )
  },[window.screen])

  return (
    <m.group
      {...props}
      dispose={null}
      initial={{
        x: 0,
      }}
      animate={{
        x: [-25, -1.5],
        transition: {
          delay: 0.3,
          type: "spring",
          mass: 2,
          damping: 10,
          duration: 1,
        },
      }}
      scale={scale}
      position={[positionX,positionY, -5]}
      rotation={[0, -0.5, 0]}
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
