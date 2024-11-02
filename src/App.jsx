import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Locations from './components/Locations/Locations'
import Reservation from './components/Reservation/Reservation'
import Offers from './components/Offers/Offers'
import Footer from './components/Footer/Footer'
import Gift from './components/Gift/Gift'

function App() {

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Locations />
        <Reservation />
        <Offers />
        <Gift />
      </div>
      <Footer />
    </>
  )
}

export default App
