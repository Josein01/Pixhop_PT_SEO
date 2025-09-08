import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "@/locales/en/common.json";
import pt from "@/locales/pt/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "pt"],
    resources: { en: { common: en }, pt: { common: pt } },
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: { order: ["querystring","localStorage","navigator"], caches: ["localStorage"] }
  });

export default i18n;
