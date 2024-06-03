import React from 'react'

import Navbar from './Components/NavBar/Navbar.jsx'
import Contact from './Components/Pages/Contact/Contact.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import Projects from './Components/Pages/Projects/Projects.jsx'
import Education from './Components/Pages/Education/Education.jsx'
import Skills from './Components/Pages/Skills/Skills.jsx'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/education' element={<Education />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
