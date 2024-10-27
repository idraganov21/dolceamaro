import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Dolce Amaro. All rights reserved.
        </div>
        <div className={styles.poweredBy}>
          Powered by <a href="https://www.innogrowth.net" target="_blank" rel="noopener noreferrer">InnoGrowth</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
