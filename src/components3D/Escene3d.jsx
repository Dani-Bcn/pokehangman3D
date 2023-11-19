import React from "react";
import { Canvas } from "@react-three/fiber";
import {
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
      <section className="absolute t-0 w-screen h-screen  z-50" ></section>
      <Canvas>
        <OrbitControls
          enablePan={false}
          enableRotate={false}
          enableZoom={false}

        />
        <PerspectiveCamera 
          
        makeDefault position={[0, 0, 50]} fov={10} />
        <Environment preset="city" />

        <ScrollControls pages={0}>
          <Scroll>
            <Charizard />
            <PokeBall_red />
            <PokeBall_blue />
            <TitlePokemon />
            <mesh 
            position={[0, -2, 0]} 
            scale={50} 
            rotation={[-1.5, 0, 0]}>
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
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Rules/>
      <Game/>

    </m.main>
  );
}
