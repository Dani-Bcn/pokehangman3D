import React from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei"
import {motion as m} from "framer-motion"
import { PokeBall_red } from "./PokeBall_red"

export default function Escene3d() {
  return (
    <m.main
        animate={{
            opacity:[0,1]
        }}

        exit={{
            opacity:[1,0]
        }}
    >
        <Canvas>    
            <OrbitControls/>
            <PerspectiveCamera/>
            <Environment preset="city"/>
            <ScrollControls pages={0}>
                <Scroll>
                  <PokeBall_red/>
                </Scroll>
            </ScrollControls>

        </Canvas>
    </m.main>
  )
}
