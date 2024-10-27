import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '/dalogo.png';
import backgroundImage from '/background.jpg';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header
            className={styles.header}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '850px',
                width: '100%'
            }}
        >
            <nav className={styles.navbar}>
                <div className={styles.navContent}>
                    <div className={styles.leftSection}>
                        <img src={logo} alt="logo" className={styles.logo} />
                    </div>
                    <div className={styles.rightSection}>
                        {/* Линкове за десктоп */}
                        <div className={styles.desktopMenu}>
                            <a href="#" className={styles.navItem}>Морска Градина</a>
                            <a href="#" className={styles.navItem}>Морска Гара</a>
                            <a href="#" className={styles.navItem}>Меню</a>
                            <a href="#" className={styles.navItem}>Събития</a>
                        </div>
                        {/* Социални икони */}
                        <div className={styles.socialIcons}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className={styles.socialIcon} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className={styles.socialIcon} />
                            </a>
                        </div>

                        {/* Бургер икона за мобилни устройства */}
                        <div className={styles.hamburger} onClick={toggleMenu}>
                            <FaBars color="white" />
                        </div>

                        {/* Мобилно меню */}
                        <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''}`}>
                            <button className={styles.closeButton} onClick={toggleMenu}>X</button>
                            <a href="#" className={styles.navItem}>Морска Градина</a>
                            <a href="#" className={styles.navItem}>Морска Гара</a>
                            <a href="#" className={styles.navItem}>Меню</a>
                            <a href="#" className={styles.navItem}>Събития</a>
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


