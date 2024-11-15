import { useTranslation } from "react-i18next";
import { archetypes } from "@/data";

export const useCompleteName = (archetypeKey: string, nameIndex: number, titleIndex: number) => {
    const { t } = useTranslation('archetypes');
    const name = archetypes[archetypeKey].name_list[nameIndex];
    const title = t(`${archetypeKey}.title_list.${titleIndex}`);
    return `${name} ${title}`;
};