import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Locations from './components/Locations/Locations'
import Reservation from './components/Reservation/Reservation'
import Offers from './components/Offers/Offers'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'

function App() {

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Locations />
        <Reservation />
        <Offers />
        <Menu />
      </div>
      <Footer />
    </>
  )
}

export default App
