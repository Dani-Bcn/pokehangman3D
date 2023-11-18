import React from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei"
import {motion as m} from "framer-motion"

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
            <PerspectiveCamera/>
            <Environment preset="city"/>
            <ScrollControls pages={0}>
                <Scroll>

                </Scroll>
            </ScrollControls>

        </Canvas>
    </m.main>
  )
}
