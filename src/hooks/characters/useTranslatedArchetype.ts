import { TranslatedArchetype } from "@/types/ArchetypeInterface";
import archetypes from "@/data/archetypes.json";
import { useTranslation } from "react-i18next";
import { ArchetypeKeys } from "@/types";

export const useTranslatedArchetype = (key: ArchetypeKeys): TranslatedArchetype => {
    const { t } = useTranslation('archetypes');
    const archetype = archetypes[key];
    return {
        key,
        name: t(`${key}.name`),
        description: t(`${key}.description`),
        cover: archetype.cover,
    };
}