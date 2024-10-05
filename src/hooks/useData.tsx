import { useLanguageStore } from "@stores";
import { data, Data } from '@data';

/**
 * Retrieves nested data from an object based on a dot-separated path string.
 *
 * @param obj - The object from which to retrieve the nested data.
 * @param path - A dot-separated string representing the path to the desired nested data.
 * @returns The nested data if found, otherwise `undefined`.
 */
const getNestedData = (obj: Data, path: string): string | Data | undefined => {
    return path.split('.').reduce<string | Data | undefined>((acc, part) => {
        if (acc && typeof acc === 'object' && part in acc) {
            return acc[part] as Data | string;
        }
        return undefined;
    }, obj);
};

/**
 * Custom hook to retrieve a nested string value from a data object based on a given key.
 *
 * @param {string} key - The key used to retrieve the nested string value.
 * @returns {string} - The retrieved string value or the key itself if the value is not found.
 */
export const useData = (key: string): string => {
    const { lng } = useLanguageStore();
    const nestedData = getNestedData(data as unknown as Data, lng);
    if (nestedData && typeof nestedData === 'object') {
        const result = getNestedData(nestedData as Data, key);
        if (typeof result === 'string') {
            return result;
        }
    }
    return key;
};