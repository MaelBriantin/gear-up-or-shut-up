import { CompleteNameType } from "@/types/CharacterType";
import { useTranslation } from "react-i18next";
import { archetypes } from "@/data";

export const useTranslatedCharacterName = (props: CompleteNameType) => {
    const { archetypeKey, nameKey, titleKey } = props;
    const { t } = useTranslation('archetypes');
    const name = archetypes[archetypeKey].name_list[nameKey];
    const title = t(`${archetypeKey}.title_list.${titleKey}`);
    return `${name} ${title}`;
};