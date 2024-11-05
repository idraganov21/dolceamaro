import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Locations from './components/Locations/Locations'
import Reservation from './components/Reservation/Reservation'
import Offers from './components/Offers/Offers'
import Footer from './components/Footer/Footer'
import Gift from './components/Gift/Gift'
import Kids from './components/Kids/Kids'
import BottomBar from './components/Footer/BottomBar'

function App() {

  const reservationRef = useRef(null);
  const orderRef = useRef(null);

  const scrollToReservation = () => {
    reservationRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOrder = () => {
    orderRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToReservation={scrollToReservation} scrollToOrder={scrollToOrder} />
      <div className="main-content">
        <div ref={orderRef}>
          <Locations />
        </div>
        <div ref={reservationRef}>
          <Reservation />
        </div>
        <Offers />
        <Gift />
        <Kids />
      </div>
      <Footer />
      <BottomBar />
    </>
  )
}

export default App
