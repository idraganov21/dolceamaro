import React from 'react';
import styles from './Locations.module.css';

const Locations = () => {
  return (
    <section className={styles.locationsSection}>
      <div className={styles.locationBox}>
        <div className={styles.locationContent}>
          <h2>Dolce Amaro Морска Градина</h2>
          <a href="https://garden.dolceamaro.bg" target="_blank" rel="noopener noreferrer">Виж повече</a>
        </div>
      </div>
      <div className={styles.locationBox}>
        <div className={styles.locationContent}>
          <h2>Dolce Amaro Морска Гара</h2>
          <a href="https://seaport.dolceamaro.bg" target="_blank" rel="noopener noreferrer">Виж повече</a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
