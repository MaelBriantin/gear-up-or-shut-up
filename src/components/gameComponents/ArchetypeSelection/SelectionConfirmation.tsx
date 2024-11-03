import { Button } from "@/components/uiComponents";
import { ArchetypeSelectionInterface } from "@/types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type SelectionConfirmationProps = {
    cards: Array<ArchetypeSelectionInterface>
}

export const SelectionConfirmation = (props: SelectionConfirmationProps) => {
    const { cards } = props;
    const { t } = useTranslation('archetypes');
    const selectedCard = cards.find(card => card.selected) || null;
    return (
        <motion.div
            key="all-flipped"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ height: '100px', width: '100%', textAlign: 'start' }}
        >
            <div className="flex flex-col items-center justify-center gap-4">
                <div>
                    <p className="text-xl">{t('selection.selected')}:</p>
                    <p className="text-2xl">{t(`${selectedCard?.key}.name`)}</p>
                </div>
                <Button
                    onClick={() => {
                        const selectedCard = cards.find(card => card.selected);
                        if (selectedCard) {
                            console.log(selectedCard.key);
                        }
                    }}
                >
                    {t('selection.confirm_choice')}
                </Button>
            </div>
        </motion.div>
    )
}