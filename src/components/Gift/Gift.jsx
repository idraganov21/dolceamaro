import React from 'react'
import styles from './Gift.module.css';
import giftCard from '/giftCard.png';
import an2 from '/an2.png';


function Gift() {
    return (
        <div className={styles.section}>
            <img src={an2} alt="Image 2" className={styles.an2} />
            <div className={styles.sectionBox}>
                <div className={styles.fLocationBox}>
                    <img src={giftCard} className={styles.sectionImg} alt="Dolce Amaro" />
                </div>
                <div className={styles.locationBox}>
                    <div className={styles.locationContent}>
                        <p className={styles.desc}>
                            Подарете незабравимо изживяване на вашите близки! <br /> С този ваучер те могат да се насладят на специално подбрани ястия и напитки в нашите два обекта — Dolce Amaro Морска Гара и Dolce Amaro Морска Градина.

                            <br /> Изберете подаръка на кулинарното удоволствие и оставете те да изберат кога и къде да го изживеят!

                            За поръчка: 087 762 2641

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gift