// // import { useLanguageStore } from "@stores";
// import { getNestedValue } from "@utils";
// import { data, Data } from '@data';

// /**
//  * Custom hook to retrieve a nested string value from a data object based on a given key.
//  *
//  * @param {string} key - The key used to retrieve the nested string value.
//  * @returns {string} - The retrieved string value or the key itself if the value is not found.
//  */
// export const useData = (key: string): string => {
//     // const { lng } = useLanguageStore();
//     const nestedData = getNestedValue(data as unknown as Data, lng);
//     if (nestedData && typeof nestedData === 'object') {
//         const result = getNestedValue(nestedData as Data, key);
//         if (typeof result === 'string') {
//             return result;
//         }
//     }
//     return key;
// };