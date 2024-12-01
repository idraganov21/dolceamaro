import React from 'react'
import styles from './Fond.module.css';
import plakat1 from '/plakat.png';
import plakat2 from '/plakat2.png';
import { useTranslation } from 'react-i18next';

function Fond() {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.section}>
            <h1>{t('global.fondTitle')}</h1>
            <div className={styles.images}>
                <img src={plakat1} alt="Image 2" className={styles.an2} />
                <img src={plakat2} alt="Image 2" className={styles.an1} />
            </div>
        </div>
    )
}

export default Fond