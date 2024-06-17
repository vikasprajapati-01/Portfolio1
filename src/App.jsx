import React from 'react'

import Navbar from './Components/NavBar/Navbar.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import Skills from './Components/Pages/Skills/Skills.jsx'
import Projects from './Components/Pages/Projects/Projects.jsx'
import Education from './Components/Pages/Education/Education.jsx'
import Contact from './Components/Pages/Contact/Contact.jsx'

import { BrowserRouter , Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path='portfolio1' element={ <Home /> } /> 
        <Route path='skills' element={ <Skills /> } />
        <Route path='projects' element={ <Projects /> } />
        <Route path='education' element={ <Education /> } />
        <Route path='contact' element={ <Contact /> } />
      </Routes>
    </ BrowserRouter>
  )
}

export default App
