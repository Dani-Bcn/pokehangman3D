import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  Text,
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { motion as m } from "framer-motion";
import { PokeBall_red } from "./PokeBall_red";
import { PokeBall_blue } from "./PokeBall_blue";
import { Charizard } from "./Charizard";
import { TitlePokemon } from "./TitlePokemon";
import Game from "../Game";
import Rules from "../Rules";

export default function Escene3d() {
  return (
    <m.main>
      <Canvas>
        <OrbitControls
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={10} />
        <Environment preset="city" />

        <ScrollControls pages={2}>
          <Scroll>
            <Charizard />
            <PokeBall_red />
            <PokeBall_blue />
            <TitlePokemon />
            <mesh position={[0, -2, 0]} scale={50} rotation={[-1.5, 0, 0]}>
              <planeGeometry />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={80}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={0.5}
              />
            </mesh>
            <Html transform>
              <m.h1
                className="
               mt-40   h-32 w-96 bg-red-900 text-7xl font-moon
                  bg-gradient-to-r to-yellow-300 from-blue-500 bg-clip-text text-transparent z-50"
                  animate={{
                    opacity:[0,1],
                    y:[10,0],
                    transition:{
                      duration:5,
                      type:"spring",
                      mass:1,/* intensidad */
                      stiffness:1000, /* velocidad */
                      restDelta:0.00001 /*  */
                    }
                  }}
              >
                Hangman_3D
              </m.h1>
    
          
            </Html>
          </Scroll>
        </ScrollControls>
      </Canvas>

      {/*    <Game /> */}
    </m.main>
  );
}
