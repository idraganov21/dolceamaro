import React from 'react'
import styles from './Gift.module.css';
import giftCard from '/giftCard.png';
import an2 from '/an2.png';
import { useTranslation } from 'react-i18next';

function Gift() {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.section}>
            <img src={an2} alt="Image 2" className={styles.an2} />
            <div className={styles.sectionBox}>
                <div className={styles.fLocationBox}>
                    <img src={giftCard} className={styles.sectionImg} alt="Dolce Amaro" />
                </div>
                <div className={styles.locationBox}>
                    <h1>{t('gift.loved')}</h1>
                    <div className={styles.locationContent}>
                        <p className={styles.desc}>
                            {t('gift.descone')} <br /> {t('gift.desctwo')}
                            <br /> {t('gift.descthree')}
                            <br />
                            {t('gift.order')}

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gift