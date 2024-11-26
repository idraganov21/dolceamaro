import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './Reservation.module.css';
import seaport from '/seaportres.jpg';
import garden from '/gardenres.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reservations = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [state, handleSubmit] = useForm(selectedRestaurant === "garden" ? "xeoqazdb" : "xgvenvag");
    const [localNotification, setLocalNotification] = useState(null);

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
                        {selectedRestaurant === null ? (
                            <div className={styles.modalChoice}>
                                <h2 className={styles.modalTitle}>В кой ресторант желаете да направите резервация?</h2>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <button
                                        className={styles.btn}
                                        onClick={() => setSelectedRestaurant("garden")}
                                    >
                                        Dolce Amaro Garden
                                    </button>
                                    <button
                                        className={styles.btn}
                                        onClick={() => setSelectedRestaurant("seaport")}
                                    >
                                        Dolce Amaro Seaport
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.modalLeft}>
                                <h2 className={styles.modalTitle}>Резервирай маса</h2>
                                <form className={styles.reservationForm} onSubmit={handleFormSubmit}>
                                    <div>
                                        <label>
                                            <input type="text" placeholder="Име и фамилия:" name="name" id="name" required />
                                        </label>
                                        <label>
                                            <input type="email" placeholder="Имейл:" name="email" id="email" required />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="tel" placeholder="Телефонен номер:" name="phone" id="phone" required />
                                        </label>
                                        <label>
                                            <input type="number" placeholder="Брой хора:" name="people" id="people" required />
                                        </label>
                                    </div>
                                    <label>
                                        <textarea placeholder="Бележка:" name="note" id="note"></textarea>
                                    </label>
                                    <button type="submit" className={styles.submitBtn}>Резервирай</button>
                                </form>
                                {localNotification && (
                                    <div className={styles.localNotification}>
                                        {localNotification}
                                    </div>
                                )}
                                <button className={styles.btn} onClick={() => setSelectedRestaurant(null)}>
                                    Назад
                                </button>
                            </div>
                        )}
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
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Reservations;
