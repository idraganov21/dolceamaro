import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        contacts: "Contacts",
        lunchMenu: "Lunch Menu",
        reservation: "Reservation",
        seaportLunch: "Dolce Amaro Seaport lunch menu",
        gardenLunch: "Dolce Amaro Garden lunch menu",
        orderFood: "Order food",
        res: "Reservation",
        intro: "The good taste is always modern!",
      },
      global: {
        seaport: "Dolce Amaro Seaport",
        garden: "Dolce Amaro Garden",
        close: "Close",
        back: "Go back",
        seemore: "See more",
        gallery: "Gallery",
      },
      modal: {
        bookTable: "Book a Table",
        namePlaceholder: "Name:",
        emailPlaceholder: "Email:",
        phonePlaceholder: "Phone:",
        peoplePlaceholder: "Number of People:",
        notePlaceholder: "Note:",
        submit: "Reserve",
        successMessage: "Reservation successful!",
        errorMessage: "Something went wrong. Please try again.",
      },
      locations: {
        delivery: "Delivery",
        deliveryftext: "Dolce Amaro restaurants delivers",
        deliverystext:
          "Freshly prepared and exceptionally delicious food delivered to your home or office in Varna!",
        order: "Order",
        homeorder: "Delivery to home and office!",
        close: "Close",
      },
      reservations: {
        book: "Book a table",
        desc: "Reserve a table at Dolce Amaro Garden or Dolce Amaro Seaport and enjoy an unforgettable culinary experience. We look forward to welcoming you to the cozy atmosphere of our restaurants",
        bookBtn: "Make a reservation",
        title: "Which restaurant would you like to make a reservation at",
        name: "First and Last name",
        email: "Email",
        phone: "Phone number",
        ppl: "Number of people",
        note: "Note",
        reach: "Contact us",
        address: "Address",
        work: "Working time",
        seaport: "Seaport",
        bus: "Sea Garden, near bus station Akaciite",
      },
      offers: {
        news: "News",
      },
      gift: {
        loved: "For the loved ones",
        descone: "Give your loved ones an unforgettable experience!",
        desctwo:
          "With this voucher, they can enjoy specially selected dishes and drinks at our two locations — Dolce Amaro Seaport and Dolce Amaro Sea Garden.",
        descthree:
          "Choose the gift of culinary delight and let them decide when and where to enjoy it!",
        order: "To order: 087 762 2641",
      },
      kids: {
        playground: "Childrens playground",
        descone:"Gift your child an amazing experience and unforgettable emotions:",
        desctwo: "Fully equipped children's playground",
        descthree: "Professional animators for kids",
        descfour: "Exciting children's events",
      },
      footer: {
        title: "Nearby Attractions",
        garden: "Dolce Amaro Garden",
        seaport: "Dolce Amaro Seaport",
        locations: {
          zoo: "Garden Zoo",
          sportsHall: "Sports Hall",
          seaGarden: "Sea Garden",
          romanBaths: "Roman Baths: ",
        },
        time: " 10 min",
        contacts: "Contacts",
        workingHours: "Working hours",
        phone: "Phone",
        email: "Email",
      },
      aboutus: {
        about: 'About us',
        desc: 'Do you know what Dolce Amaro means? The literal translation is "Sweet-bitter," but we aim to encapsulate the entire diversity of flavors, aromas, and visuals that quality food offers in this phrase. The satisfaction of a well-prepared dish, served with style and personal attention, our specially selected wines, and, of course, our uniquely delicious desserts—this is the philosophy of Dolce Amaro.'
      }
    },
  },
  bg: {
    translation: {
      navbar: {
        home: "Начало",
        contacts: "Контакти",
        lunchMenu: "Обедно меню",
        reservation: "Резервация",
        seaportLunch: "Обедно меню на Морска Гара",
        gardenLunch: "Обедно меню на Морска Градина",
        orderFood: "Поръчай храна",
        res: "Резервирай",
        intro: "Добрият вкус е винаги на мода!",
      },
      global: {
        seaport: "Долче Амаро Морска Гара",
        garden: "Долче Амаро Морска Градина",
        close: "Затвори",
        back: "Назад",
        seemore: "Виж повече",
        gallery: "Галерия",
      },
      modal: {
        bookTable: "Резервирай маса",
        namePlaceholder: "Име:",
        emailPlaceholder: "Имейл:",
        phonePlaceholder: "Телефон:",
        peoplePlaceholder: "Брой хора:",
        notePlaceholder: "Бележка:",
        submit: "Резервирай",
        successMessage: "Успешна резервация!",
        errorMessage: "Нещо се обърка. Опитайте отново.",
      },
      locations: {
        delivery: "Доставка",
        deliveryftext: "Ресторанти Dolce Amaro доставят",
        deliverystext:
          "прясно приготвена и изключително вкусна храна до дома или офиса в град Варна!",
        order: "Поръчай",
        homeorder: "Доставки до дома и офиса!",
        close: "Затвори",
      },
      reservations: {
        book: "Резервирай маса",
        desc: "Резервирайте маса в Dolce Amaro Garden или Dolce Amaro Seaport и се насладете на незабравимо кулинарно изживяване. Очакваме Ви в приятната атмосфера на нашите ресторанти.",
        bookBtn: "Резервирай",
        title: "В кой ресторант желаете да направите резервация",
        name: "Име и Фамилия",
        email: "Имейл",
        phone: "Телефонен номер",
        ppl: "Брой хора",
        note: "Бележка",
        reach: "Свържете се с нас",
        address: "Адрес",
        work: "Работно време",
        seaport: "Морска Гара",
        bus: "Морска градина, до спирка Акациите",
      },
      offers: {
        news: "Новини",
      },
      gift: {
        loved: "За любимите хора",
        descone: "Подарете незабравимо изживяване на вашите близки!",
        desctwo:
          " С този ваучер те могат да се насладят на специално подбрани ястия и напитки в нашите два обекта — Dolce Amaro Морска Гара и Dolce Amaro Морска Градина.",
        descthree:
          "Изберете подаръка на кулинарното удоволствие и оставете те да изберат кога и къде да го изживеят!",
        order: "За поръчки: 087 762 2641",
      },
      kids: {
        playground: "Детски кът",
        descone: "Подарете на детето си страхотно преживяване и емоции:",
        desctwo: "Оборудван детски кът",
        descthree: "Аниматори за децата",
        descfour: "Детски събития",
      },
      footer: {
        title: "Забележителности наблизо",
        garden: "Долче Амаро Морска Градина",
        seaport: "Долче Амаро Морска Гара",
        locations: {
          zoo: "Гардън Зоологическа градина",
          sportsHall: "Спортна зала",
          seaGarden: "Морска градина",
          romanBaths: "Римски Терми: ",
        },
        time: " 10 мин",
        contacts: "Контакти",
        workingHours: "Работно време",
        phone: "Телефон",
        email: "Имейл",
      },
      aboutus: {
        about: 'За Нас',
        desc: 'Знаете ли какво означава Dolce Amaro? Буквалният превод е „Сладко-горчиво“, но ние искаме да съберем в този израз цялото многообразие от вкусове, аромати и визии, които дава качествената храна. Задоволството от добре приготвеното ястие, поднесено със стил и лично отношение, специално селектираните вина и разбира се, уникално вкусните ни десерти – това е философията на Dolce Amaro.'
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "bg", // Език по подразбиране
  fallbackLng: "bg", // Език за резервиране, ако няма превод
  interpolation: {
    escapeValue: false, // React вече защитава от XSS
  },
});

export default i18n;
