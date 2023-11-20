import React, { useEffect, useRef, useState,useLayoutEffect } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import { motion as m } from "framer-motion-3d";

export function Charizard(props) {
  const { nodes, materials } = useGLTF("/charizard.glb");
     
  return (
    <m.group
      {...props}
      dispose={null}
      scale={2}
      position={[5,-2.5, 10]}
      rotation={[-0, -0.3, 0]}
    >
      <m.group
        rotation={[Math.PI / 2, 0, 0]}
        initial={{
          y:5
        }}

        animate={{
          rotateX: [2.8, 1.5],
          rotateZ: [-0.3, 0.1, 0],
          y: [5, 0],
          transition: {
            delay: 0.8,
            type:"spring",
            mass:5,
            stiffness:500,
            damping:100,
            restDelta:0.001
          }
        }}
      >
        <m.mesh
  animate={{
    rotateX: [-1.57, -1.5, -1.57],
            scaleX:[1.02,1.05,1.02],
            scaleY:[1.05,1.02,1.05],
            transition: {
              repeat:"Infinity",
              type:"just",
              duration:5,
              mass:5,
              stiffness:50,
              damping:100,
              restDelta:0.001
            }
  }}

        rotation={[-1.5,0,0]}
          geometry={nodes.pm0006_00_00_body_mesh_shape_body_a.geometry}
          material={materials.body_a}
          skeleton={nodes.pm0006_00_00_body_mesh_shape_body_a.skeleton}
        />
        <m.mesh     
          animate={{
            rotateX: [-1.57, -1.5, -1.57],
            scaleY:[1.03,1.01,1.03],
            transition: {
              repeat:"Infinity",
              type:"just",
              duration:5,
              mass:5,
              stiffness:50,
              damping:100,
              restDelta:0.001
            }
          }}
          position={[0, 0, 0]}
          rotation={[-1.575, 0, 0]}
          geometry={nodes.pm0006_00_00_body_mesh_shape_body_b.geometry}
          material={materials.body_b}
          skeleton={nodes.pm0006_00_00_body_mesh_shape_body_b.skeleton}
        />
      {/*  <skinnedMesh
          geometry={nodes.pm0006_00_00_eye_mesh_shape_l_eye.geometry}
          material={materials.l_eye}
          skeleton={nodes.pm0006_00_00_eye_mesh_shape_l_eye.skeleton}
        />
         <skinnedMesh        
          geometry={nodes.pm0006_00_00_eye_mesh_shape_r_eye.geometry}
          material-color={"red"}
          skeleton={nodes.pm0006_00_00_eye_mesh_shape_r_eye.skeleton}
        />
 */}
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
