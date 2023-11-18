import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  return (
    <main>
      <h2>About</h2>
    <button onClick={()=> navigate("/")} className='p-5'>Back</button>
    </main>
  )
}
