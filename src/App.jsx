import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

import './App.css'

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </React.Fragment>
  )
}

export default App
