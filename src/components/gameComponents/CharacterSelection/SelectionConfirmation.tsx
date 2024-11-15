import { useTranslatedCharacterName } from "@/hooks/characters";
import { GeneratedCharacterCardType } from "@/types/CharacterType";
import { Button } from "@/components/uiComponents";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

type SelectionConfirmationProps = {
    selectedCharacterCard: GeneratedCharacterCardType;
}

export const SelectionConfirmation = (props: SelectionConfirmationProps) => {
    const { selectedCharacterCard } = props;
    const character = selectedCharacterCard.character;
    const characterName = useTranslatedCharacterName(character.completeName);
    const { t } = useTranslation('archetypes');

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
                        { characterName }
                    </p>
                </div>
                <Button
                    onClick={() => {
                        console.log(character);
                    }}
                >
                    {t('selection.confirm_choice')}
                </Button>
            </div>
        </motion.div>
    )
}