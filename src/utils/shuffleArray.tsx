import { randomNumber } from "./randomNumber";

export const shuffle = <T,>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = randomNumber(0, i);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const shuffleAndPick = <T,>(array: T[], count: number): T[] => {
    return shuffle(array).slice(0, count);
}