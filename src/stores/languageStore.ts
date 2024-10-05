import { create } from 'zustand';

type Language = 'en' | 'fr';

interface LanguageState {
    language: Language;
    lng: Language;
    languageOptions: Language[];
    setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
    language: localStorage.getItem('language') as Language || 'en',
    lng: localStorage.getItem('language') as Language || 'en',
    languageOptions: ['en', 'fr'],
    setLanguage: (language) => {
        localStorage.setItem('language', language);
        set({ language });
        set({ lng: language });
    }
}));