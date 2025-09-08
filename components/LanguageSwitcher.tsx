import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage ?? i18n.language;

  const setLang = (lng: "en" | "pt") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">{t("lang.select")}</span>
      <button
        onClick={() => setLang("en")}
        aria-label={t("lang.switchToEnglish")}
        aria-pressed={current === "en"}
        className={`px-2 py-1 rounded-md text-sm font-medium ${
          current === "en"
            ? "bg-white/15 text-white"
            : "bg-white/5 text-gray-300 hover:bg-white/10"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("pt")}
        aria-label={t("lang.switchToPortuguese")}
        aria-pressed={current === "pt"}
        className={`px-2 py-1 rounded-md text-sm font-medium ${
          current === "pt"
            ? "bg-white/15 text-white"
            : "bg-white/5 text-gray-300 hover:bg-white/10"
        }`}
      >
        PT
      </button>
    </div>
  );
}
