import React from 'react'
import { Navbar, Home, Tentang, Program, Jadwal, Pendaftaran, Ketentuan, Footer } from './Contents'
import "./App.css"

const App = () => {
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
