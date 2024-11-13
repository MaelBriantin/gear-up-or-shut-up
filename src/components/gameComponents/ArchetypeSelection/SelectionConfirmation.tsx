import { generateCharacter } from "@/utils/characters/generateCharacter";
import { ArchetypeKeys, ArchetypeSelectionInterface } from "@/types";
import { useCompleteName } from "@/hooks/characters/useCompleteName";
import { CharacterData } from "@/types/CharacterType";
import { Button } from "@/components/uiComponents";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { randomNumber } from "@/utils";

type SelectionConfirmationProps = {
    cards: Array<ArchetypeSelectionInterface>
}

export const SelectionConfirmation = (props: SelectionConfirmationProps) => {
    const { cards } = props;
    const { t } = useTranslation('archetypes');

    const selectedCard = cards.find(card => card.selected) || null;

    const [randomized, setRandomized] = useState({ nameIndex: 0, titleIndex: 0 });
    const [generatedCharacters, setGeneratedCharacters] = useState<Array<CharacterData>>([]);
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterData | null>(null);

    useEffect(() => {
        const nameIndex = randomNumber(0, 9);
        const titleIndex = randomNumber(0, 9);
        setRandomized({
            nameIndex,
            titleIndex
        });
        cards.forEach(card => {
            setGeneratedCharacters(
                prevState => 
                    [...prevState, 
                        generateCharacter(card.key, nameIndex, titleIndex)
                    ]
            );
        });
    }, []);

    useEffect(() => {
        setSelectedCharacter(generatedCharacters.find(character => character.archetypeKey === selectedCard?.key as ArchetypeKeys) || null);
    }, [selectedCard]);

    return (
        <motion.div
            key="all-flipped"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ height: '100px', width: '100%', textAlign: 'start' }}
        >
            <div className="flex flex-col items-center justify-center gap-8">
                <div>
                    <p className="text-2xl">
                        {
                            useCompleteName(
                                selectedCard?.key as ArchetypeKeys, 
                                randomized.nameIndex, 
                                randomized.titleIndex
                            )
                        }
                    </p>
                </div>
                <Button
                    onClick={() => {
                        console.log(selectedCharacter);
                    }}
                >
                    {t('selection.confirm_choice')}
                </Button>
            </div>
        </motion.div>
    )
}