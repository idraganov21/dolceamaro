import React, { useState } from 'react';
import styles from './Menu.module.css';
import an3 from '/an3.png';
import an4 from '/an4.png';
import logo from '/dalogo.png';
import burrata from '/burrata.jpg';
import proshuto from '/proshuto.jpg';
import salami from '/salami.jpg';
import sirena from '/sirena.jpg';
import vege from '/vege.jpg';
import franch from '/franch.jpg';

function Menu() {
  const categories = ['Пици', 'Паста и ризото', 'Основни', 'Разядки', 'Предястия'];
  const [selectedCategory, setSelectedCategory] = useState('Пици');

  const menuItems = {
    'Пици': [
      { name: 'Бурата', image: burrata },
      { name: 'Прошуто', image: proshuto },
      { name: 'Четири сирена', image: sirena },
      { name: 'Куатро Салами', image: salami },
      { name: 'Вегетариана', image: vege },
      { name: 'Франческана', image: franch }
    ],
    'Паста и ризото': [
      { name: 'Паста Карбонара', image: logo },
      { name: 'Паста Болонезе', image: logo },
      { name: 'Ризото Миланезе', image: logo },
      { name: 'Ризото с морски дарове', image: logo },
      { name: 'Паста Песто', image: logo },
      { name: 'Лазаня', image: logo }
    ],
    'Основни': [
      { name: 'Пържола', image: logo },
      { name: 'Кебапчета', image: logo },
      { name: 'Кюфтета', image: logo },
      { name: 'Риба тон', image: logo },
      { name: 'Пиле на скара', image: logo },
      { name: 'Тартар', image: logo }
    ],
    'Разядки': [
      { name: 'Тарама', image: logo },
      { name: 'Хумус', image: logo },
      { name: 'Баба гануш', image: logo },
      { name: 'Топено сирене', image: logo },
      { name: 'Тапенада', image: logo },
      { name: 'Салата Табуле', image: logo }
    ],
    'Предястия': [
      { name: 'Брускети', image: logo },
      { name: 'Калмари', image: logo },
      { name: 'Карпачо', image: logo },
      { name: 'Тартар от риба', image: logo },
      { name: 'Чийзкейк от сьомга', image: logo },
      { name: 'Скариди с чесън', image: logo }
    ]
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.menuSection}>
      <img src={an3} alt="Image" className={styles.an3} />
      <img src={an4} alt="Image" className={styles.an4} />

      <h2 className={styles.menuTitle}>Меню</h2>

      <div className={styles.categoryFilters}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.menuItems}>
        {menuItems[selectedCategory].map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <img src={item.image} alt={item.name} className={styles.menuImage} />
            <span className={styles.menuText}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

