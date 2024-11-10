import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import fa from './locales/fa/translations.json';

i18n.use(initReactI18next).init({
  fallbackLng: "fa",
  lng: "fa",
  resources: {
    fa: {
      translations: fa, 
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["fa"];

export default i18n;
