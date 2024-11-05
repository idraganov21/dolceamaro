import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '/dalogo.png';
import { FaFacebook, FaInstagram, FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import img1 from '/garden.png';
import img2 from '/seaport.png';

const Navbar = ({ scrollToReservation, scrollToOrder, scrollToContacts }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header
            className={styles.header}
        >
            <nav className={styles.navbar}>
                <div className={styles.navContent}>
                    <div className={styles.leftSection}>
                        <div className={styles.desktopMenu}>
                            <a onClick={scrollToContacts} className={styles.navItem}>Контакти</a>
                            {/* TODO make lunchmenu showing both restaurants and redirecting to the lunch menu */}
                            <a onClick={scrollToReservation} className={styles.navItem}>Обедно меню</a>
                        </div>
                    </div>
                    <div className={styles.middleSection}>
                        <img src={logo} alt="logo" className={styles.logo} />
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.desktopMenu}>
                            <div className={styles.orderFood}>
                                <a onClick={openModal} className={styles.navItem}>
                                    <FontAwesomeIcon icon={faTruck} className={styles.icon} /> Поръчай храна
                                </a>
                            </div>
                            <a onClick={scrollToReservation} className={styles.navItem}>Резервирай</a>
                            {showModal && (
                                <div className={styles.modalOverlay} onClick={closeModal}>
                                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                                        <p className={styles.modalTitle}>Доставки до дома и офиса!</p>
                                        <div className={styles.modalImages}>
                                            <div className={styles.modalItem}>
                                                <img src={img1} alt="image1" className={styles.modalImage} />
                                                <div>
                                                    <button className={styles.btn} onClick={() => window.location.href = 'https://www.dolceamaro.bg/доставка'}>
                                                        Поръчай
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={styles.modalItem}>
                                                <img src={img2} alt="image2" className={styles.modalImage} />
                                                <div>
                                                    <button className={styles.btn} onClick={() => window.location.href = '#'}>
                                                        Поръчай
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button className={styles.closeModalBtn} onClick={closeModal}>Затвори</button>
                                    </div>
                                </div>
                            )}
                            {/* <a href="#" className={styles.navItem}>Контакти</a> */}
                        </div>
                        <div className={styles.socialIcons}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={20} className={styles.socialIcon} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={20} className={styles.socialIcon} />
                            </a>
                        </div>

                        <div className={styles.hamburger} onClick={toggleMenu}>
                            <FaBars color="white" />
                        </div>

                        <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''}`}>
                            <button className={styles.closeButton} onClick={toggleMenu}>X</button>
                            <div className={styles.orderFood}>
                                <a onClick={scrollToOrder} className={styles.navItem}>
                                    <FontAwesomeIcon icon={faTruck} className={styles.icon} /> Поръчай храна
                                </a>
                            </div>
                            <a onClick={scrollToReservation} className={styles.navItem}>Резервирай</a>
                            <a onClick={scrollToReservation} className={styles.navItem}>Контакти</a>
                            <a onClick={scrollToReservation} className={styles.navItem}>Обедно меню</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={styles.sloganContainer}>
                <p className={styles.slogan}>Добрият вкус е винаги на мода!</p>
            </div>
        </header>

    );
};

export default Navbar;


