import { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Locations from './components/Locations/Locations';
import Reservation from './components/Reservation/Reservation';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';
import Gift from './components/Gift/Gift';
import Kids from './components/Kids/Kids';
import BottomBar from './components/Footer/BottomBar';
import scroll from '/scroll.svg';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import PostDetail from './components/Offers/PostDetail';
import './i18n'

function App() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const reservationRef = useRef(null);
    const orderRef = useRef(null);
    const contactRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToReservation = () => {
        reservationRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToOrder = () => {
        orderRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContacts = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isPostDetailPage = location.pathname.startsWith('/post/');

    return (
        <>
            {!isPostDetailPage && (
                <Navbar
                    scrollToReservation={scrollToReservation}
                    scrollToOrder={scrollToOrder}
                    scrollToContacts={scrollToContacts}
                />
            )}
            <Routes>
                {isPostDetailPage ? (
                    <Route path="/post/:id" element={<PostDetail onBack={() => navigate(-1)} />} />
                ) : (
                    <Route path="/" element={
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
                            <div ref={contactRef}>
                                <Footer />
                            </div>
                            {showScrollToTop && (
                                <button onClick={scrollToTop} className="scroll-to-top">
                                    <img src={scroll} alt='Dolce Amaro scroll button' />
                                </button>
                            )}
                        </div>
                    } />
                )}
            </Routes>
            <BottomBar />
        </>
    );
}

export default App;

