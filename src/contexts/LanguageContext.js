import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ur');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'ur';
    setLanguage(savedLanguage);
    updateDirection(savedLanguage);
  }, []);

  const updateDirection = (lang) => {
    const direction = lang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', lang);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ur' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    updateDirection(newLanguage);
  };

  const t = (translations) => {
    return translations[language] || translations.en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
