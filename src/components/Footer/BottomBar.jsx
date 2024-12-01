import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BottomBar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.bottomBar}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Dolce Amaro. All rights reserved.
        </div>
        <div className={styles.poweredBy}>
          <span> | Powered by </span>
          <a href="https://www.innogrowth.net" target="_blank" rel="noopener noreferrer">
            InnoGrowth
          </a>
        </div>
        <span> | </span>
        <Link to="/terms" target="_blank" className={styles.termsLink}>
          {t('bottomBar.terms')}
        </Link>
        <span> | </span>
        <Link to="/privatedata" target="_blank" className={styles.termsLink}>
          {t('bottomBar.privacy')}
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
