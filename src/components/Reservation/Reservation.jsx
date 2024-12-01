import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './Reservation.module.css';
import seaport from '/seaportres.jpg';
import garden from '/gardenres.jpg';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const Reservations = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [state, handleSubmit] = useForm(selectedRestaurant === "garden" ? "xeoqazdb" : "xgvenvag");
    const [localNotification, setLocalNotification] = useState(null);
    const { t, i18n } = useTranslation();

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            await handleSubmit(e);
            form.reset();
            setLocalNotification("Успешна резервация, благодарим Ви!");
            setTimeout(() => setLocalNotification(null), 3000);
        } catch (error) {
            setLocalNotification("Грешка при резервацията. Моля, опитайте отново.");
            setTimeout(() => setLocalNotification(null), 3000);
        }
    }

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
                        <p className={styles.orderTitle}>{t('reservations.book')}</p>
                    </div>
                    <p className={styles.desc}>
                        {t('reservations.desc')}
                    </p>
                    <button className={styles.btn} onClick={openModal}>
                        {t('reservations.bookBtn')}
                    </button>
                </div>
            </div>

            {showModal && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        {selectedRestaurant === null ? (
                            <div className={styles.modalChoice}>
                                <h2 className={styles.modalTitle}>{t('reservations.title')}</h2>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <button
                                        className={styles.btn}
                                        onClick={() => setSelectedRestaurant("garden")}
                                    >
                                        {t('global.garden')}
                                    </button>
                                    <button
                                        className={styles.btn}
                                        onClick={() => setSelectedRestaurant("seaport")}
                                    >
                                        {t('global.seaport')}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.modalLeft}>
                                <h2 className={styles.modalTitle}>{t('reservations.book')}</h2>
                                <form className={styles.reservationForm} onSubmit={handleFormSubmit}>
                                    <div>
                                        <label>
                                            <input type="text" placeholder={t('reservations.name')} name="name" id="name" required />
                                        </label>
                                        <label>
                                            <input type="email" placeholder={t('reservations.email')} name="email" id="email" required />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="tel" placeholder={t('reservations.phone')} name="phone" id="phone" required />
                                        </label>
                                        <label>
                                            <input type="number" placeholder={t('reservations.ppl')} name="people" id="people" required />
                                        </label>
                                    </div>
                                    <label>
                                        <textarea placeholder={t('reservations.note')} name="note" id="note"></textarea>
                                    </label>
                                    <button type="submit" className={styles.submitBtn}>{t('reservations.book')} </button>
                                </form>
                                {localNotification && (
                                    <div className={styles.localNotification}>
                                        {localNotification}
                                    </div>
                                )}
                                <button className={styles.btn} onClick={() => setSelectedRestaurant(null)}>
                                    {t('global.back')}
                                </button>
                            </div>
                        )}
                        <div className={styles.modalRight}>
                            <button className={styles.closeModalBtn} onClick={closeModal}>{t('global.close')}</button>
                            <h3 className={styles.contactsTitle}>{t('reservations.reach')} </h3>
                            <div className={styles.contacts}>
                                <h1 className={styles.contactsTitle}>{t('global.garden')}</h1>
                                <p>{t('reservations.phone')}: 087 762 2641</p>
                                <p>{t('reservations.address')}: {t('reservations.bus')}</p>
                                <p>{t('reservations.work')}: 11:00 - 00:00</p>
                            </div>
                            <div className={styles.contacts}>
                                <h1 className={styles.contactsTitle}>{t('global.seaport')}</h1>
                                <p>{t('reservations.phone')}: 087 762 2607</p>
                                <p>{t('reservations.address')}: {t('reservations.seaport')}</p>
                                <p>{t('reservations.work')}: 11:00 - 00:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Reservations;
