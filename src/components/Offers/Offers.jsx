import React, { useState } from 'react';
import styles from './Offers.module.css';
import off1 from '/off1.png';
import off2 from '/off2.jpg';
import off3 from '/off3.png';
import off4 from '/off4.png';
import off5 from '/off5.png';
import off6 from '/off6.png';
import an1 from '/an1.png';
import an2 from '/an2.png';

const Offers = () => {
    const offers = [off6, off1, off2, off3, off4, off5];
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 3;

    const handleNext = () => {
        setStartIndex((prevIndex) =>
            (prevIndex + 1) % offers.length
        );
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) =>
            (prevIndex - 1 + offers.length) % offers.length
        );
    };

    const getVisibleOffers = () => {
        const endIndex = startIndex + itemsToShow;
        const visibleOffers = offers.slice(startIndex, endIndex);
        if (endIndex > offers.length) {
            visibleOffers.push(...offers.slice(0, endIndex - offers.length));
        }
        return visibleOffers;
    };

    return (
        <section className={styles.offersSection}>
            <img src={an1} alt="Image 1" className={styles.an1} />
            <img src={an2} alt="Image 2" className={styles.an2} />

            <div className={styles.titleContainer}>
                <div className={styles.line}></div>
                <h2>Новини</h2>
                <div className={styles.line}></div>
            </div>
            <div className={styles.carouselContainer}>
                <div className={styles.offerItems}>
                    {getVisibleOffers().map((offer, index) => (
                        <div key={index} className={styles.offerItem}>
                            <img src={offer} alt={`Offer ${index + 1}`} className={styles.offerImage} />
                            <a href="#" className={styles.offerButton}>Виж повече</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.carouselArrows}>
                <button className={styles.arrow} onClick={handlePrev}>
                    ←
                </button>
                <button className={styles.arrow} onClick={handleNext}>
                    →
                </button>
            </div>
        </section>
    );
};

export default Offers;

