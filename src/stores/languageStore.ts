import { langOptions, LangType } from '@/types/LangType';
import { create } from 'zustand';

interface LanguageState {
    language: LangType;
    lng: LangType;
    languageOptions: LangType[];
    setLanguage: (language: LangType) => void;
}

export const useLanguageStore = create<LanguageState>((set) => {
    const initialLanguage = localStorage.getItem('language') as LangType || langOptions[0];

    const handleStorageChange = (e: StorageEvent) => {
        if (e.key === 'language') {
            const newLanguage = (e.newValue as LangType) || langOptions[0];
            set({ language: newLanguage, lng: newLanguage });
        }
    };

    window.addEventListener('storage', handleStorageChange);

    return {
        language: initialLanguage,
        lng: initialLanguage,
        languageOptions: langOptions,
        setLanguage: (language) => {
            localStorage.setItem('language', language);
            set({ language, lng: language });
        }
    };
});