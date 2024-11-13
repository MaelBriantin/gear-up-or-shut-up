import { CharacterStats } from "@/types/CharacterType";
import { ArchetypeKeys } from "@types";
import { randomNumber } from "@utils";
import { getArchetypeData } from "./getArchetypeData";

export const generateCharacterStats = (archetypeKey: ArchetypeKeys) => {
    const archetype = getArchetypeData(archetypeKey);
    const archetypeStats = archetype['stats_ranges'];
    const stats: CharacterStats = {
        CON: randomizeStat(archetypeStats['CON']),
        ATT: randomizeStat(archetypeStats['ATT']),
        DEF: randomizeStat(archetypeStats['DEF']),
        ARC: randomizeStat(archetypeStats['ARC']),
        INI: randomizeStat(archetypeStats['INI']),
        LUCK: randomizeStat(archetypeStats['LUCK']),
    }
    return stats;
};

const randomizeStat = (archetypeStat: Array<number>) => {
    return archetypeStat.length > 1 ? randomNumber(archetypeStat[0], archetypeStat[1]) : archetypeStat[0];
};