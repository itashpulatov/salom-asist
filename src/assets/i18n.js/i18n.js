import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

// Lug'atlarni Locales papkasidan import qilish
import uzTranslation from '../Locales/uz.json';
import ruTranslation from '../Locales/ru.json';
import enTranslation from '../Locales/en.json';

const resources = {
  uz: {
    translation: uzTranslation
  },
  ru: {
    translation: ruTranslation
  },
  en: {
    translation: enTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", // Boshlang'ich til O'zbekcha
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;