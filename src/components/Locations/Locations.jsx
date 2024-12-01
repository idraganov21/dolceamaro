import React, { useState } from 'react';
import styles from './Locations.module.css';
import locationImage from '/locationn.jpg';
import loc from '/loc.png';
import img1 from '/garden.png';
import img2 from '/seaport.png';
import { useTranslation } from 'react-i18next';


const Locations = () => {
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.locationsSection}>
      <div className={styles.fLocationBox}>
        <img src={locationImage} className={styles.sectionImg} alt="dolce amaro" />
      </div>
      <div className={styles.locationBox}>
        <div className={styles.locationContent}>
          <div className={styles.order}>
            <img src={loc} alt="dolce amaro" className={styles.loc} />
            <p className={styles.orderTitle}>{t('locations.delivery')}</p>
          </div>
          <p className={styles.desc}>
            ⭐ {t('locations.deliveryftext')} <br />
            {t('locations.deliverystext')}
          </p>
          <button className={styles.btn} onClick={openModal}>
            {t('locations.order')}
          </button>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <p className={styles.modalTitle}>{t('locations.homeorder')}</p>
            <div className={styles.modalImages}>
              <div className={styles.modalItem}>
                <img src={img1} alt="image1" className={styles.modalImage} />
                <div>
                  <button className={styles.btn} onClick={() => window.location.href = 'https://www.dolceamaro.bg/доставка'}>
                    {t('locations.order')}
                  </button>
                </div>
              </div>
              <div className={styles.modalItem}>
                <img src={img2} alt="image2" className={styles.modalImage} />
                <div>
                  <button className={styles.btn} onClick={() => window.location.href = '#'}>
                    {t('locations.order')}
                  </button>
                </div>
              </div>
            </div>
            <button className={styles.closeModalBtn} onClick={closeModal}>{t('locations.close')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Locations;

