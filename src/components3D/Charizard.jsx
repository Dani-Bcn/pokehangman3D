import React, { useEffect, useRef, useState,useLayoutEffect } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import { motion as m } from "framer-motion-3d";

export function Charizard(props) {
  const { nodes, materials } = useGLTF("/charizard.glb");
  const [repeat, setRepeat] = useState(0);
  const [state, setState] = useState(false);
  const [scale,setScale] = useState(3)
  useCursor(state);
  useLayoutEffect(()=>{
    
   window.addEventListener("resize",(e)=>{
    window.screen.width > 400 ? setScale(3) : setScale(2);
      console.log(window.screen.width)
   } )
 
  },[window.screen])

  return (
    <m.group
      {...props}
      dispose={null}
      scale={scale}
      position={[0, -2.8, 10]}
      rotation={[-0.07, 0, 0]}
    >
      <m.group
        rotation={[Math.PI / 2, 0, 0]}
        initial={{
          y:2.5
        }}

        animate={{
          rotateX: [2.8, 1.5],
          rotateZ: [-0.3, 0.1, 0],
          y: [2.5, 0],
          transition: {
            delay: 1,
            duration: 3,
            type: "tween",
            stiffness: 50,
          },
        }}
      >
        <m.skinnedMesh
          geometry={nodes.pm0006_00_00_body_mesh_shape_body_a.geometry}
          material={materials.body_a}
          skeleton={nodes.pm0006_00_00_body_mesh_shape_body_a.skeleton}
        />
        <m.mesh

     
          animate={{
            rotateX: [-1.57, -1.4, -1.57],
            transition: {
              delay: 1,
              duration: 0.5,
              repeat: 5,
              type: "tween",
              stiffness: 50,
            },
          }}
          position={[0, 0, 0]}
          rotation={[-1.575, 0, 0]}
          geometry={nodes.pm0006_00_00_body_mesh_shape_body_b.geometry}
          material={materials.body_b}
          skeleton={nodes.pm0006_00_00_body_mesh_shape_body_b.skeleton}
        />
        <skinnedMesh
          geometry={nodes.pm0006_00_00_eye_mesh_shape_l_eye.geometry}
          material={materials.l_eye}
          skeleton={nodes.pm0006_00_00_eye_mesh_shape_l_eye.skeleton}
        />
        <skinnedMesh
          geometry={nodes.pm0006_00_00_eye_mesh_shape_r_eye.geometry}
          material={materials.r_eye}
          skeleton={nodes.pm0006_00_00_eye_mesh_shape_r_eye.skeleton}
        />

        <skinnedMesh
          rotation={[0.5, 0, 0]}
          geometry={nodes.pm0006_00_00_fire_mesh_shape_fire.geometry}
          material={materials.fire}
          skeleton={nodes.pm0006_00_00_fire_mesh_shape_fire.skeleton}
        />

        <skinnedMesh
          geometry={nodes.pm0006_00_00_tongue_mesh_shape_body_b.geometry}
          material={materials.body_b}
          skeleton={nodes.pm0006_00_00_tongue_mesh_shape_body_b.skeleton}
        />

        <primitive object={nodes.pm0006_00_00} />
      </m.group>
    </m.group>
  );
}

useGLTF.preload("/charizard.glb");
