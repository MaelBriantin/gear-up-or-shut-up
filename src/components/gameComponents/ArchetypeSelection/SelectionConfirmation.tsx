import { useCompleteName } from "@/hooks/useCompleteName";
import { ArchetypeSelectionInterface } from "@/types";
import { Button } from "@/components/uiComponents";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { randomNumber } from "@/utils";

type SelectionConfirmationProps = {
    cards: Array<ArchetypeSelectionInterface>
}

export const SelectionConfirmation = (props: SelectionConfirmationProps) => {
    const { cards } = props;
    const { t } = useTranslation('archetypes');
    const selectedCard = cards.find(card => card.selected) || null;

    const [randomized, setRandomized] = useState({ nameIndex: 0, titleIndex: 0 });

    useEffect(() => {
        setRandomized({
            nameIndex: randomNumber(0, 9),
            titleIndex: randomNumber(1, 10)
        });
    }, []);

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
                    <p className="text-2xl">{useCompleteName(selectedCard?.key || '', randomized.nameIndex, randomized.titleIndex)}</p>
                </div>
                <Button
                    onClick={() => {
                        console.log('clicked');
                    }}
                >
                    {t('selection.confirm_choice')}
                </Button>
            </div>
        </motion.div>
    )
}