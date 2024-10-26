import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Locations from './components/Locations/Locations'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Locations />
      </div>
      <Footer />
    </>
  )
}

export default App
