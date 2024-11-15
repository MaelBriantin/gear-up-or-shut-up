import { GeneratedCharacterCardType } from "@/types/CharacterType";
import { ArchetypeKeys } from "@/types/ArchetypeInterface";
import { randomNumber, shuffleAndPick } from "@/utils";
import allArchetypes from "@/data/archetypes.json";
import { Character } from "@/classes/Character";
import { useTranslation } from "react-i18next";

type GenerateCharacterSelectionProps = {
  numberOfCharacters: number | null;
};

export const useGenerateCharacterSelectionCards = (props: GenerateCharacterSelectionProps): Array<GeneratedCharacterCardType> => {
  let { numberOfCharacters } = props;
  const { t } = useTranslation();
  const archetypesArray = Object.keys(allArchetypes).map((key) => ({
    key,
    ...(allArchetypes[key as ArchetypeKeys]),
  }));
  if (!numberOfCharacters) {
    numberOfCharacters = archetypesArray.length;
  }
  if (numberOfCharacters > archetypesArray.length || numberOfCharacters < 1) {
    numberOfCharacters = archetypesArray.length;
  }
  const shuffledAndPickedArchetypes = shuffleAndPick(archetypesArray, numberOfCharacters);
  const characterCards = shuffledAndPickedArchetypes.map((archetype) => {
    const _key = archetype.key as ArchetypeKeys;
    const nameKey = randomNumber(0, archetype.name_list.length - 1);
    const titleKey = randomNumber(0, 9);
    return {
      _key, 
      character: new Character(_key, nameKey, titleKey),
      name: t(`archetypes:${_key}.name`),
      description: t(`archetypes:${_key}.description`),
      cover: archetype.cover,
      flipped: false,
      selected: false,
    };
  });
  return characterCards;
};

