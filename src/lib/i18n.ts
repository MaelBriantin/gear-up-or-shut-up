import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from 'i18next-http-backend';

const storedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['ui', 'home-page', 'archetypes'],
    defaultNS: 'ui',
    lng: storedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  }, (err) => {
    if (err) return console.error(err);
  });

export default i18n;