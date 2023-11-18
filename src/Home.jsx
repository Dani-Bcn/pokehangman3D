import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    <main className='w-screen h-screen bg-red-500'>
        <h1>Home</h1>
        <button onClick={()=> navigate("/game")}>Go to Game</button>
    </main>
  )
}

