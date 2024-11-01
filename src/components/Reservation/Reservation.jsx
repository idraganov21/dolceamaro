import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './Reservation.module.css';
import seaport from '/seaportres.jpg';
import garden from '/gardenres.jpg';

const Reservations = () => {
    const [showModal, setShowModal] = useState(false);
    const [state, handleSubmit] = useForm("xeoqazdb");

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
                    <img src={seaport} className={styles.sectionImg} alt="Dolce Amaro" />
                    <img src={garden} className={styles.overlayImg} alt="Overlay" />
                </div>
            </div>
            <div className={styles.locationBox}>
                <div className={styles.locationContent}>
                    <div className={styles.order}>
                        <p className={styles.orderTitle}>Резервирай маса!</p>
                    </div>
                    <p className={styles.desc}>
                        Резервирайте маса в Dolce Amaro Garden или Dolce Amaro Seaport и се насладете на незабравимо кулинарно изживяване. Очакваме Ви в приятната атмосфера на нашите ресторанти.
                    </p>
                    <button className={styles.btn} onClick={openModal}>
                        Резервирай
                    </button>
                </div>
            </div>

            {showModal && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalLeft}>
                            <h2 className={styles.modalTitle}>Резервирай маса</h2>
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
                        </div>
                        <button className={styles.closeModalBtn} onClick={closeModal}>Затвори</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Reservations;
