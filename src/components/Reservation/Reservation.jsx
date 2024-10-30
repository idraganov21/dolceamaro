import React, { useState } from 'react';
import styles from './Reservation.module.css';
import seaport from '/seaportres.jpg';
import garden from '/gardenres.jpg';
import loc from '/loc.png';
import img1 from '/garden.png';
import img2 from '/seaport.png';

const Locations = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section className={styles.locationsSection}>
            <div className={styles.fLocationBox}>
                <div className={styles.imageWrapper}>
                    <img src={seaport} className={styles.sectionImg} alt="dolce amaro" />
                    <img src={garden} className={styles.overlayImg} alt="overlay" />
                </div>
            </div>
            <div className={styles.locationBox}>
                <div className={styles.locationContent}>
                    <div className={styles.order}>
                        <p className={styles.orderTitle}>Резервирай маса!</p>
                    </div>
                    <p className={styles.desc}>
                    Резервирайте маса в Dolce Amaro Garden или Dolce Amaro Seaport и се насладете на незабравимо кулинарно изживяване. Очакваме Ви в приятната атмосфера на нашите ресторанти
                    </p>
                    <button className={styles.btn} onClick={openModal}>
                        Резервирай
                    </button>
                </div>
            </div>

            {/* Модалният прозорец */}
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
        </section>
    );
};

export default Locations;