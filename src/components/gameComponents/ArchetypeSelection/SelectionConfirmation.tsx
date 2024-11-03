import { Button } from "@/components/uiComponents";
import { motion } from "framer-motion";

type SelectionConfirmationProps = {
    cards: Array<{
        key: string;
        name: string;
        selected: boolean;
    }>
}

export const SelectionConfirmation = (props: SelectionConfirmationProps) => {
    const { cards } = props;
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
                    <p className="text-xl">You have selected:</p>
                    <p className="text-2xl">{cards.find(card => card.selected)?.name}</p>
                </div>
                <Button
                    onClick={() => {
                        const selectedCard = cards.find(card => card.selected);
                        if (selectedCard) {
                            console.log(selectedCard.key);
                        }
                    }}
                >
                    Confirm your choice
                </Button>
            </div>
        </motion.div>
    )
}