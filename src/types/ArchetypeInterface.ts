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

export type StatsKeys = 'CON' | 'ATT' | 'DEF' | 'ARC' | 'INI' | 'LUCK';

export type StatsRanges = {
    [key in StatsKeys]: Array<number>;
};

export interface TranslatedArchetype {
    key: ArchetypeKeys;
    name: string;
    description: string;
    cover: string;
};

export type ArchetypeSelectionInterface = {
    key: ArchetypeKeys;
    translations: Array<string>;
    cover: string;
    flipped: boolean;
    selected: boolean;
};