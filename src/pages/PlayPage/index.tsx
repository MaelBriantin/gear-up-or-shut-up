import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components';
import archetypes from '@/data/en/archetypes.json';

export type Achetype = {
    name: string;
    description: string;
    cover: string;
    flipped: boolean;
};

export const PlayPage = () => {
    const [cards, setCards] = useState(
        (Object.keys(archetypes) as Array<keyof typeof archetypes>).map(key => ({ ...archetypes[key], key, flipped: false }))
    );

    const handleCardClick = (index: number) => {
        setCards(prevState => {
            return prevState.map((card, i) => ({
                ...card,
                flipped: i === index ? !card.flipped : false
            }));
        });
    };

    return (
        <div className='flex flex-col items-center justify-center gap-20'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
            >
                <h1 className="text-4xl">Select a hero <span className='font-bold text-transparent bg-gradient-to-tl from-cyan-900 via-indigo-800 to-violet-800 bg-clip-text'>archetype</span></h1>
                <p className="text-xl">You can only choose one archetype to play with and start your journey.</p>
                <p className="text-xl">So choose wisely!</p>
            </motion.div>
            <div className="flex flex-row items-center justify-center gap-10 h-[500px]">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative flex items-center justify-center text-white rounded-lg w-[300px] h-[400px] hover:cursor-pointer select-none"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100vh" }}
                        transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleCardClick(index)}
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            className="absolute flex items-center justify-center w-full h-full text-3xl text-white rounded-lg bg-gradient-to-tl from-cyan-900 via-indigo-800 to-violet-800 backface-hidden"
                            style={{ backfaceVisibility: 'hidden', border: `5px solid #27272a`, borderRadius: '1rem', backgroundColor: '#27272a' }}
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
                                backgroundColor: '#27272a',
                                border: '5px solid #27272a',
                                borderRadius: '1rem'
                            }}
                            animate={{ rotateY: card.flipped ? 0 : 180 }}
                            transition={{ type: "spring", stiffness: 50 }}
                        >
                            <div className='flex flex-col justify-center gap-4 p-4 text-white bg-black rounded-lg bg-opacity-70 items-between'>
                                <div className='text-xl opacity-100'>{card.name}</div>
                                <div >{card.description}</div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row items-center justify-center gap-10 h-[100px] border-8 border-orange rounded-lg">
                {
                    cards.some(card => card.flipped) && (
                        <Button
                            onClick={() => {
                                const selectedCard = cards.find(card => card.flipped);
                                if (selectedCard) {
                                    console.log(selectedCard.key);
                                }
                            }}
                        >
                            Confirm your choice
                        </Button>
                    )
                }
            </div>
        </div>
    );
};