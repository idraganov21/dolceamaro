import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Offers.module.css';
import { useTranslation } from 'react-i18next';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate();
    const itemsToShow = 3;
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch('https://seaport.dolceamaro.bg/wp-json/wp/v2/posts?_embed');
                const data = await response.json();
                setOffers(data);
            } catch (error) {
                console.error('Error fetching offers:', error);
            }
        };
        fetchOffers();
    }, []);

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % offers.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
    };

    const getVisibleOffers = () => {
        const endIndex = startIndex + itemsToShow;
        const visibleOffers = offers.slice(startIndex, endIndex);
        if (endIndex > offers.length) {
            visibleOffers.push(...offers.slice(0, endIndex - offers.length));
        }
        return visibleOffers;
    };

    return (
        <section className={styles.offersSection}>
            <div className={styles.titleContainer}>
                <div className={styles.line}></div>
                <h2>{t('offers.news')}</h2>
                <div className={styles.line}></div>
            </div>
            <div className={styles.carouselContainer}>
                <div className={styles.offerItems}>
                    {getVisibleOffers().map((offer) => {
                        const media = offer._embedded?.['wp:featuredmedia']?.[0];
                        const imageUrl = media?.source_url || '';

                        return (
                            <div key={offer.id} className={styles.offerItem}>
                                <img src={imageUrl} alt={offer.title.rendered} className={styles.offerImage} />
                                <h3 className={styles.offerTitle}>{offer.title.rendered}</h3>
                                <button
                                    onClick={() => navigate(`/post/${offer.id}`)}
                                    className={styles.offerButton}
                                >
                                    {t('global.seemore')}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.carouselArrows}>
                <button className={styles.arrow} onClick={handlePrev}>←</button>
                <button className={styles.arrow} onClick={handleNext}>→</button>
            </div>
        </section>
    );
};

export default Offers;

