import React, { useEffect } from 'react'
import { Navbar, Home, Tentang, Program, Jadwal, Pendaftaran, Ketentuan, Footer } from './Contents'
import "./App.css"

import Aos from 'aos';
import 'aos/dist/aos.css'

const App = () => {

  useEffect(() => {
    Aos.init({duration: 500})
}, [])

  return (
    <div>
      <Navbar/>
      <Home/>
      <Tentang/>
      <Program/>
      <Jadwal/>
      <Pendaftaran/>
      <Ketentuan/>
      <Footer/>
    </div>
  )
}

export default App
