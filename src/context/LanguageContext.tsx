"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ta" | "si";

const translations = {
  en: {
    languageName: "English",
    dashboard: "Dashboard",
    verifyClaim: "Verify Claim",
    history: "History",
    admin: "Admin",
    systemName: "Legal Misinformation Detection System",
  },
  ta: {
    languageName: "தமிழ்",
    dashboard: "முகப்பு",
    verifyClaim: "கூற்றைச் சரிபார்க்க",
    history: "வரலாறு",
    admin: "நிர்வாகம்",
    systemName: "சட்டத் தவறான தகவல் கண்டறிதல் அமைப்பு",
  },
  si: {
    languageName: "සිංහල",
    dashboard: "මුල් පිටුව",
    verifyClaim: "ප්‍රකාශය පරීක්ෂා කරන්න",
    history: "ඉතිහාසය",
    admin: "පරිපාලනය",
    systemName: "නීතිමය වැරදි තොරතුරු හඳුනාගැනීමේ පද්ධතිය",
  },
} as const;

type TranslationKey = keyof typeof translations.en;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("legal-ui-language") as Language | null;
    if (saved === "en" || saved === "ta" || saved === "si") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem("legal-ui-language", next);
    document.documentElement.lang = next;
  };

  const t = (key: TranslationKey) => translations[language][key];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
