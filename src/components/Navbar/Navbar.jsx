import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '/logo.png';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaBars, FaClock, FaPhone } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={styles.topBar}>
                <div className={styles.contactInfo}>
                    <FaMapMarkerAlt className={styles.locationIcon} />
                    <p>Верига ресторанти Dolce Amaro</p>
                </div>
                <div className={styles.socialIcons}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={styles.socialIcon} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.socialIcon} />
                    </a>
                </div>
            </div>

            <nav className={styles.navbar}>
                <div className={styles.navContent}>
                    <div className={styles.navMenu}>
                        <p className={styles.navText}>Добрият вкус е винаги на мода!</p>
                    </div>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.navMenu}>
                        <div className={styles.clock}>
                            <FaClock className={styles.clockIcon} />
                            <p className={styles.navText}>09:00 – 00:00</p>
                        </div>
                    </div>

                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <FaBars color="black" />
                    </div>

                    <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''}`}>
                        <button className={styles.closeButton} onClick={toggleMenu}>X</button>
                        <a href="#" className={styles.navItem}>Морска Градина</a>
                        <a href="#" className={styles.navItem}>Морска Гара</a>
                        <a href="#" className={styles.navItem}>Меню</a>
                        <a href="#" className={styles.navItem}>Събития</a>
                    </div>
                </div>
            </nav>
            <div className={styles.bottomBar}>
                <div className={styles.navMenu}>
                    <a href="https://www.garden.dolceamaro.bg" className={styles.navItem}>Морска Градина</a>
                    <a href="#" className={styles.navItem}>Морска Гара</a>
                    <a href="https://dolceamaro.bg/%d0%b4%d0%be%d1%81%d1%82%d0%b0%d0%b2%d0%ba%d0%b0/" className={styles.navItem}>Меню</a>
                    <a href="https://dolceamaro.bg/%d0%bd%d0%be%d0%b2%d0%b8%d0%bd%d0%b8-dolce-amaro/" className={styles.navItem}>Събития</a>
                    <a href="#" className={styles.navItem}>
                        Контакти
                        <div className={styles.contactDropdown}>
                            <div className={styles.contactInfo}>
                                <FaPhone className={styles.contactIcon} />
                                <p>Долче Амаро Seaport: 0877 622 607</p>
                            </div>
                            <div className={styles.contactInfo}>
                                <FaPhone className={styles.contactIcon} />
                                <p>Долче Амаро Garden: 0877 622 641</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
