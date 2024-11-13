import { ArchetypeKeys } from "@/types";
import { useTranslation } from "react-i18next";

export const useTranslatedArchetypeData = (archetypeKey: ArchetypeKeys, valueKey: number) => {
    const { t } = useTranslation('archetypes');
    return t(`${archetypeKey}.${valueKey}`);
}
    