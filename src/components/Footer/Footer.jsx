// Footer.js
import React from 'react';
import styles from './Footer.module.css';
import { FaWalking } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerUpper}>
        {/* Nearby Attractions */}
        <div className={styles.nearbyAttractions}>
          <h4>Забележителности наблизо</h4>
          <div>
            <strong>Dolce Amaro Garden:</strong>
            <ul>
              <li>Гардън Зоологическа градина <span>10 мин <FaWalking /></span></li>
              <li>Спортна зала <span>10 мин <FaWalking /></span></li>
            </ul>
          </div>
          <div>
            <strong>Dolce Amaro Seaport:</strong>
            <ul>
              <li>Морска Градина <span>10 мин <FaWalking /></span></li>
              <li>Римски Терми <span>10 мин <FaWalking /></span></li>
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
            <h4>Контакти</h4>
            <strong>Dolce Amaro Garden:</strong>
            <ul>
              <li>Телефон: +359 123 456 789</li>
              <li>Имейл: garden@dolceamaro.bg</li>
              <li>Работно време: 10:00 - 22:00</li>
            </ul>
          </div>
          <div>
            <strong>Dolce Amaro Seaport:</strong>
            <ul>
              <li>Телефон: +359 987 654 321</li>
              <li>Имейл: seaport@dolceamaro.bg</li>
              <li>Работно време: 10:00 - 23:00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
