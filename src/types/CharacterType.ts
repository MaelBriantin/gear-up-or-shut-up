import { ArchetypeKeys } from "./ArchetypeInterface";

export interface CharacterData {
    archetypeKey: ArchetypeKeys;
    nameKey: number;
    titleKey: number;
    stats: CharacterStats;
};

export interface TranslatedCharacter {
    archetypeKey: ArchetypeKeys;
    name: string;
    title: string;
    stats: CharacterStats;
};

export interface CharacterStats {
    CON: number;
    ATT: number;
    DEF: number;
    ARC: number;
    INI: number;
    LUCK: number;
};