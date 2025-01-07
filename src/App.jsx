import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Pic from "./assets/me.png"
import Home from './pages/Home.jsx'
import './App.css'
import React from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App
