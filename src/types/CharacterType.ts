import { ArchetypeKeys } from "./ArchetypeInterface";
import { Character } from "@/classes/Character";

export type CompleteNameType = {
    archetypeKey: ArchetypeKeys;
    nameKey: number;
    titleKey: number;
};

export type CharacterStatsKeys = "CON" | "ATT" | "DEF" | "ARC" | "INI" | "LCK";

export type CharacterStats = {
    [key in CharacterStatsKeys]: number;
};

export type GeneratedCharacterCardType = {
    _key: ArchetypeKeys;
    character: Character;
    name: string;
    cover: string;
    description: string;
    flipped: boolean;
    selected: boolean;
  };