import archetypes from "@/data/archetypes.json";
import { Archetype, ArchetypeKeys } from "@/types";

export const getArchetypeData = (key: ArchetypeKeys): Archetype => {
    const archetype: Archetype = archetypes[key];
    return archetype;
}