import React, { useState } from 'react';
import styles from './Offers.module.css';
import off1 from '/off1.png';
import off2 from '/off2.jpg';
import off3 from '/off3.png';
import off4 from '/off4.png';
import off5 from '/off5.png';

const Offers = () => {
  const offers = [off1, off2, off3, off4, off5];
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow >= offers.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - itemsToShow : prevIndex - 1
    );
  };

  const getVisibleOffers = () => {
    const endIndex = startIndex + itemsToShow;
    return offers.slice(startIndex, endIndex).concat(
      endIndex > offers.length ? offers.slice(0, endIndex - offers.length) : []
    );
  };

  return (
    <section className={styles.offersSection}>
      <div className={styles.titleContainer}>
        <div className={styles.line}></div>
        <h2>Събития и специални оферти</h2>
        <div className={styles.line}></div>
      </div>
      <div className={styles.carouselContainer}>
        <button className={styles.arrow} onClick={handlePrev}>
          ←
        </button>
        <div className={styles.offerItems}>
          {getVisibleOffers().map((offer, index) => (
            <div key={index} className={styles.offerItem}>
              <img src={offer} alt={`Offer ${index + 1}`} className={styles.offerImage} />
              <a href="#" className={styles.offerButton}>Виж повече</a>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={handleNext}>
          →
        </button>
      </div>
    </section>
  );
};

export default Offers;
