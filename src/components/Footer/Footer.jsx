// Footer.js
import React from 'react';
import styles from './Footer.module.css';
import { FaWalking } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerUpper}>
        {/* Nearby Attractions */}
        <div className={styles.nearbyAttractions}>
          <h4>{t('footer.title')}</h4>
          <div>
            <strong>{t('footer.garden')}:</strong>
            <ul>
              <li>{t('footer.locations.zoo')}: {t('footer.time')} <FaWalking /></li>
              <li>{t('footer.locations.sportsHall')}: {t('footer.time')} <FaWalking /></li>
            </ul>
          </div>
          <div>
            <strong>{t('footer.seaport')}:</strong>
            <ul>
              <li>{t('footer.locations.seaGarden')}: {t('footer.time')} <FaWalking /></li>
              <li>{t('footer.locations.romanBaths')}: {t('footer.time')} <FaWalking /></li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapContainer}>
          <div className={styles.mapSection}>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1tOSr3s_TjmRSiuUx74dEhzINbMkumXA&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
              title="Dolce Amaro Locations"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contacts */}
        <div className={styles.contactInfo}>
          <div>
            <h4>{t('footer.contacts')}</h4>
            <strong>{t('footer.garden')}:</strong>
            <ul>
              <li>{t('footer.phone')}: +359 123 456 789</li>
              <li>{t('footer.email')}: garden@dolceamaro.bg</li>
              <li>{t('footer.workingHours')}: 10:00 - 22:00</li>
            </ul>
          </div>
          <div>
            <strong>{t('footer.seaport')}:</strong>
            <ul>
              <li>{t('footer.phone')}: +359 987 654 321</li>
              <li>{t('footer.email')}: seaport@dolceamaro.bg</li>
              <li>{t('footer.workingHours')}: 10:00 - 23:00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
