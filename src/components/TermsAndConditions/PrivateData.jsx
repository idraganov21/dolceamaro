import React from 'react';
import styles from './TermsAndConditions.module.css';

const PrivateData = () => {
    return (
        <div className={styles.container}>
            <h1>Общи условия</h1>
            <div className={styles.height}>
                <p>
                    Събираме лични данни под формата на „бисквитки“ за да персонализираме съдържанието и рекламите, да предоставяме функции на социални медии и да анализираме трафика ви. Необходимо e изрично да се съгласите с използването на „бисквитки“, за да използвате уеб сайта (www.dolceamaro.bg) на ресторант Dolce Amaro по оптимален начин! Лични данни се събират посредством следните публикувани на уеб сайта форми: изпращане на съобщение чрез контактна форма. Личните данни ще бъдат обработвани директно от администратора или обработващи личните данни партньори, сред които са доставчици на облачни услуги в областта на хостинга (Superhosting), комуникацията с клиенти (Firebase) и контрола на бисквитките (OneTrust).
                    Наименование на администратор на лични данни: Арженто 18 ООД
                    Единен идентификационен код (ЕИК): 205402791
                    Седалище и адрес на управление: гр. Варна, р-н Приморски, ж.к. СВЕТИ КОНСТАНТИН И ЕЛЕНА, бл. 24, ет. 6, ап. 24
                    Данни за контакт: contact@dolceamaro.bg; 0888 99 58 83
                </p>
            </div>
        </div>
    );
};

export default PrivateData;