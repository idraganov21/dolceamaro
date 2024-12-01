import React, { useState } from 'react';
import styles from './Kids.module.css';
import { useForm, ValidationError } from '@formspree/react';
import kids from '/kids.jpg';
import { useTranslation } from 'react-i18next';


const Kids = () => {
    const [showModal, setShowModal] = useState(false);
    const [state, handleSubmit] = useForm("xeoqazdb");
    const [showGallery, setShowGallery] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { t, i18n } = useTranslation();

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
                <img src={kids} className={styles.sectionImg} alt="dolce amaro" />
            </div>
            <div className={styles.locationBox}>
                <div className={styles.locationContent}>
                    <div className={styles.order}>
                        <p className={styles.orderTitle}>{t('kids.playground')}</p>
                    </div>
                    <p className={styles.desc}>

                        {t('kids.descone')} <br />

                        ✅ {t('kids.desctwo')} <br /> ✅ {t('kids.descthree')} <br /> ✅ {t('kids.descfour')}
                    </p>
                    <div className={styles.btns}>
                        <button className={styles.btn} onClick={openGallery}>
                            {t('global.gallery')}
                        </button>
                        {/* <button className={styles.btn} onClick={openModal}>
                            Резервирай
                        </button> */}
                    </div>
                </div>
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
                        <div className={styles.modalRight}>
                            <button className={styles.closeModalBtn} onClick={closeModal}>Затвори</button>
                            <h3 className={styles.contactsTitle}>Свържете се с нас</h3>
                            <div className={styles.contacts}>
                                <h1 className={styles.contactsTitle}>Dolce Amaro Garden</h1>
                                <p>Телефон: 087 762 2641</p>
                                <p>Адрес: Морска градина, до спирка Акациите</p>
                                <p>Работно време: 11:00 - 00:00</p>
                            </div>
                            <div className={styles.contacts}>
                                <h1 className={styles.contactsTitle}>Dolce Amaro Seaport</h1>
                                <p>Телефон: 087 762 2607</p>
                                <p>Адрес: Морска Гара</p>
                                <p>Работно време: 11:00 - 00:00</p>
                            </div>
                        </div>                    </div>
                </div>
            )}
        </section>
    );
};

export default Kids;