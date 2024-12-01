import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '/dalogo.png';
import { FaFacebook, FaInstagram, FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import img1 from '/garden.png';
import img2 from '/seaport.png';
import { useTranslation } from 'react-i18next';

const Navbar = ({ scrollToReservation, scrollToOrder, scrollToContacts }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isLunchMenuVisible, setIsLunchMenuVisible] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        if (i18n.language === 'bg') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('bg');
        }
    };

    const toggleLunchMenu = () => {
        setIsLunchMenuVisible(!isLunchMenuVisible);
    };

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
                            <a onClick={scrollToContacts} className={styles.navItem}>{t('navbar.contacts')}</a>
                            <div className={styles.navItemWrapper}>
                                <a
                                    onClick={toggleLunchMenu}
                                    className={styles.navItem}>
                                    {t('navbar.lunchMenu')}
                                </a>
                                {isLunchMenuVisible && (
                                    <div className={styles.dropdownMenu}>
                                        <a href="https://seaport.dolceamaro.bg" className={styles.dropdownItem}>
                                            {t('navbar.seaportLunch')}
                                        </a>
                                        <a href="https://garden.dolceamaro.bg" className={styles.dropdownItem}>
                                            {t('navbar.gardenLunch')}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.languageSwitcher}>
                            {i18n.language === 'bg' ? (
                                <button
                                    onClick={toggleLanguage}
                                    className={styles.languageButton}
                                    aria-label="Switch to English"
                                >
                                    🇬🇧
                                </button>
                            ) : (
                                <button
                                    onClick={toggleLanguage}
                                    className={styles.languageButton}
                                    aria-label="Switch to Bulgarian"
                                >
                                    🇧🇬
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={styles.middleSection}>
                        <img src={logo} alt="logo" className={styles.logo} />
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.desktopMenu}>
                            <div className={styles.orderFood}>
                                <a onClick={openModal} className={styles.navItem}>
                                    <FontAwesomeIcon icon={faTruck} className={styles.icon} /> {t('navbar.orderFood')}
                                </a>
                            </div>
                            <a onClick={scrollToReservation} className={styles.navItem}>{t('navbar.res')}</a>
                            {showModal && (
                                <div className={styles.modalOverlay} onClick={closeModal}>
                                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                                        <p className={styles.modalTitle}>Доставки до дома и офиса!</p>
                                        <div className={styles.modalImages}>
                                            <div className={styles.modalItem}>
                                                <img src={img1} alt="image1" className={styles.modalImage} />
                                                <div>
                                                    <button className={styles.btn} onClick={() => window.location.href = 'https://www.seaport.dolceamaro.bg/'}>
                                                        Поръчай
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={styles.modalItem}>
                                                <img src={img2} alt="image2" className={styles.modalImage} />
                                                <div>
                                                    <button className={styles.btn} onClick={() => window.location.href = 'https://www.garden.dolceamaro.bg/'}>
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
                            <div className={styles.navItemWrapper}>
                                <a
                                    onClick={toggleLunchMenu}
                                    className={styles.navItem}>
                                    Обедно меню
                                </a>
                                {isLunchMenuVisible && (
                                    <div className={styles.dropdownMenu}>
                                        <a href="https://seaport.dolceamaro.bg" className={styles.dropdownItem}>
                                            Обедно меню на Морска гара
                                        </a>
                                        <a href="https://garden.dolceamaro.bg" className={styles.dropdownItem}>
                                            Обедно меню на Морска градина
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={styles.sloganContainer}>
                <p className={styles.slogan}>{t('navbar.intro')}</p>
            </div>
        </header>

    );
};

export default Navbar;


