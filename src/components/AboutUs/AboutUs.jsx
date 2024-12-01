import { useForm } from '@formspree/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import styles from './AboutUs.module.css';
import garden from '/gardena.jpg';
import seaport from '/seaporta.jpg';

const AboutUs = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [state, handleSubmit] = useForm(selectedRestaurant === "garden" ? "xeoqazdb" : "xgvenvag");
    const [localNotification, setLocalNotification] = useState(null);
    const { t, i18n } = useTranslation();
    const [showGallery, setShowGallery] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = ['/kids1.jpg', '/kids2.jpg', '/kids3.jpg', '/kids4.jpg', '/kids5.jpg', '/kids6.jpg', '/kids7.jpg', '/kids8.jpg'];

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setShowGallery(false);
    };

    const openGallery = () => {
        setShowGallery(true);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className={styles.locationsSection}>
            <div className={styles.fLocationBox}>
                <div className={styles.imageWrapper}>
                    <img src={seaport} className={styles.sectionImg} alt="Dolce Amaro" />
                    <img src={garden} className={styles.overlayImg} alt="Overlay" />
                </div>
            </div>
            <div className={styles.locationBox}>
                <div className={styles.locationContent}>
                    <div className={styles.order}>
                        <p className={styles.orderTitle}>{t('aboutus.about')}</p>
                    </div>
                    <p className={styles.desc}>
                        {t('aboutus.desc')}
                    </p>
                </div>
                <button className={styles.btn} onClick={openGallery}>
                    {t('global.gallery')}
                </button>
            </div>

            {showGallery && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        {/* <button className={styles.closeModalBtn} onClick={closeModal}>Затвори</button> */}
                        <div className={styles.galleryContent}>
                            <button className={styles.prevBtn} onClick={prevImage}>‹</button>
                            <img src={images[currentImageIndex]} alt="Gallery" className={styles.galleryImage} />
                            <button className={styles.nextBtn} onClick={nextImage}>›</button>
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalLeft}>
                            <h2 className={styles.modalTitle}>Резервирай</h2>
                            <form className={styles.reservationForm} onSubmit={handleSubmit}>
                                <div>
                                    <label>
                                        <input type="text" placeholder='Име и фамилия:' name="name" id="name" required />
                                    </label>
                                    <label>
                                        <input type="email" placeholder='Имейл:' name="email" id="email" required />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="tel" placeholder='Телефонен номер:' name="phone" id="phone" required />
                                    </label>
                                    <label>
                                        <input type="people" placeholder='Брой хора:' name="people" id="people" required />
                                    </label>
                                    <label>
                                        <select name="location" id="location" required>
                                            <option disabled>Изберете локация</option>
                                            <option value="garden">Dolce Amaro Garden</option>
                                            <option value="seaport">Dolce Amaro Seaport</option>
                                        </select>
                                    </label>
                                </div>
                                <label>
                                    <textarea placeholder='Бележка:' name="note" id="note"></textarea>
                                </label>
                                <button type="submit" className={styles.submitBtn}>Резервирай</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutUs;