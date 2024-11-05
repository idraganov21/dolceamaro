import React from 'react';
import styles from './Footer.module.css';

const BottomBar = () => {
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
      </div>
    </div>
  );
};

export default BottomBar;
