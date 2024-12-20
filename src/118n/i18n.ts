import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import sk from "./sk.json";
import ua from "./ua.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      sk: { translation: sk },
      ua: { translation: ua },
    },
    fallbackLng: "sk",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
