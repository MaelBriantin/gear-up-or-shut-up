import { randomNumber } from "./randomNumber";

export const shuffleArray = <T,>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = randomNumber(0, i);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const shuffleArrayAndPick = <T,>(array: T[], count: number): T[] => {
    return shuffleArray(array).slice(0, count);
}