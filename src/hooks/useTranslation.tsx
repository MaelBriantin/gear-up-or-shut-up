import { getNestedValue } from "@utils";
import { useLanguageStore } from "@stores";
import { Data } from '@types';

export const useTranslation = (translations: Data) => {
    const { lng } = useLanguageStore();

    return (key: string): string => {
        const translation = getNestedValue(translations, key);
        if (translation && typeof translation === 'object' && lng in translation) {
            return translation[lng] as unknown as string;
        }
        return '';
    };
};