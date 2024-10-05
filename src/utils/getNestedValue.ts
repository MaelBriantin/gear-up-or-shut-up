import { Data } from '@types';

/**
 * Retrieves the value at a given nested path within an object.
 *
 * @param obj - The object from which to retrieve the value.
 * @param path - The dot-separated path string indicating the nested value to retrieve.
 * @returns The value at the specified path, or `undefined` if the path does not exist.
 */
export const getNestedValue = (obj: Data, path: string): string | Data | undefined => {
    return path.split('.').reduce<Data | string | undefined>((acc, part) => {
        if (acc && typeof acc === 'object' && part in acc) {
            return acc[part] as Data | string;
        }
        return undefined;
    }, obj);
};