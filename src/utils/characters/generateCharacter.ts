import { ArchetypeKeys } from "@/types";
import { CharacterData } from "@/types/CharacterType";
import { generateCharacterStats } from "@/utils";

export const generateCharacter = (archetypeKey: ArchetypeKeys, nameKey: number, titleKey: number): CharacterData => {
    return {
        archetypeKey,
        nameKey,
        titleKey,
        stats: generateCharacterStats(archetypeKey),
    };
};