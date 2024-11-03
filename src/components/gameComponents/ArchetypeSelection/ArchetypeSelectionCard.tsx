import { ArchetypeSelectionInterface } from "@/types";
import { motion } from "framer-motion"

type ArchetypeSelectionCardProps = {
    card: ArchetypeSelectionInterface;
    index: number;
    handleCardClick: (index: number) => void;
}

export const ArchetypeSelectionCard = (props: ArchetypeSelectionCardProps) => {

    const { card, index, handleCardClick } = props;
    const cardDimensions = {
        width: '300px',
        height: '400px',
        borderRadius: '1rem',
        border: '5px solid #27272a',
        selectedBorder: '5px solid #f59e0b',
        backgroundColor: '#27272a',
    }
    
    return (
        <motion.div
            className={`relative flex items-center justify-center text-white rounded-lg hover:cursor-pointer select-none`}
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCardClick(index)}
            style={{ perspective: 1000, width: cardDimensions.width, height: cardDimensions.height }}
        >
            <motion.div
                className="absolute flex items-center justify-center w-full h-full text-3xl text-white rounded-lg bg-purple-gradient backface-hidden"
                style={{ 
                    backfaceVisibility: 'hidden', 
                    border: cardDimensions.border, 
                    borderRadius: cardDimensions.borderRadius, 
                    backgroundColor: cardDimensions.backgroundColor 
                }}
                animate={{ rotateY: card.flipped ? -180 : 0 }}
                transition={{ type: "spring", stiffness: 50 }}
            />
            <motion.div
                className="absolute flex items-end justify-center w-full h-full p-4 text-white rounded-lg backface-hidden"
                style={{ 
                    backfaceVisibility: 'hidden', 
                    rotateY: 180, 
                    backgroundImage: `url(${card.cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: cardDimensions.backgroundColor,
                    border: `${card.selected ? cardDimensions.selectedBorder : cardDimensions.border}`,
                    borderRadius: cardDimensions.borderRadius,
                }}
                animate={{ rotateY: card.flipped ? 0 : 180 }}
                transition={{ type: "spring", stiffness: 50 }}
            >
                <div className='flex flex-col justify-center gap-4 p-4 text-white bg-black rounded-lg bg-opacity-70 items-between'>
                    <div className='text-xl opacity-100'>{card.name}</div>
                    <div>{card.description}</div>
                </div>
            </motion.div>
        </motion.div>
    )
}