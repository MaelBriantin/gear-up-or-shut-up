import { CharacterStatsKeys } from "./CharacterType";

export type ArchetypeKeys = '_berzerker' | '_rogue' | '_wizard';

export type Archetypes = {
    [key in ArchetypeKeys]: Archetype;
};

export interface Archetype {
    translations: string[];
    cover: string;
    name_list: Array<string>;
    stats_ranges: StatsRanges;
};

export type StatsRanges = {
    [key in CharacterStatsKeys]: Array<number>;
};