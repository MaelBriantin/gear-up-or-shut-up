export interface ArchetypeSelectionInterface {
    key: string;
    translations: Array<string>;
    cover: string;
    flipped: boolean;
    selected: boolean;
};

export interface Archetype {
    translations: Array<string>;
    color: string;
    cover: string;
    name_list: Array<string>;
};

export interface Archetypes {
    [key: string]: Archetype;
};