import { InterfaceOptionContainer } from '@/components/uiComponents';
import { LanguageOption } from './LanguageOption';
import { languageOptions } from '@/types/LanguageType';
import i18n from '@/lib/i18n';
import { useState, useEffect } from 'react';

export const LanguageSelector = () => {

  const [actualLanguage, setActualLanguage] = useState(localStorage.language || 'en');

  const setLanguage = (language: string) => {
    if(language === actualLanguage) return;
    i18n.changeLanguage(language);
    localStorage.language = language;
    setActualLanguage(language);
  }

  useEffect(() => {
    const handleStorageChange = () => {
      const newLanguage = localStorage.language || 'en';
      if (newLanguage !== actualLanguage) {
        setActualLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [actualLanguage]);

  return (
      <InterfaceOptionContainer>
        {languageOptions.map((option) => (
          <LanguageOption key={option} option={option} {...{ actualLanguage, setLanguage }} />
        ))}
      </InterfaceOptionContainer>
  );

};