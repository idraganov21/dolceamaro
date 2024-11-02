import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Locations from './components/Locations/Locations'
import Reservation from './components/Reservation/Reservation'
import Offers from './components/Offers/Offers'
import Footer from './components/Footer/Footer'
import Gift from './components/Gift/Gift'

function App() {

  const reservationRef = useRef(null);

  const scrollToReservation = () => {
    reservationRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToReservation={scrollToReservation} />
      <div className="main-content">
        <Locations />
        <div ref={reservationRef}>
          <Reservation />
        </div>
        <Offers />
        <Gift />
      </div>
      <Footer />
    </>
  )
}

export default App
