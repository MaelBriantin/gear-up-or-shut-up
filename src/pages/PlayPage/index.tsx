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

    const gradientVariants = {
        initial: {
          background: "linear-gradient(270deg, #ff7e5f, #feb47b)",
          backgroundSize: "400% 400%",
          backgroundPosition: "0% 50%",
        },
        animate: {
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          transition: {
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          },
        },
      };

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
            <motion.h1
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                Please, select your archetype
            </motion.h1>
            <div className="flex flex-row items-center justify-center gap-10 h-[500px]">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative flex items-center justify-center text-white rounded-lg w-[350px] h-[500px] hover:cursor-pointer select-none"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100vh" }}
                        transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleCardClick(index)}
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            className="absolute flex items-center justify-center w-full h-full text-3xl text-white rounded-lg bg-zinc-800 backface-hidden"
                            style={{ backfaceVisibility: 'hidden', border: `10px solid #000`, borderRadius: '1rem' }}
                            animate={{ rotateY: card.flipped ? -180 : 0 }}
                            transition={{ type: "spring", stiffness: 50 }}
                        />
                        <motion.div
                            className="absolute flex items-end justify-center w-full h-full p-4 text-white rounded-lg bg-zinc-800 dark:bg-white dark:text-black backface-hidden"
                            style={{ 
                                backfaceVisibility: 'hidden', 
                                rotateY: 180, 
                                backgroundImage: `url(${card.cover})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '10px solid #000',
                                borderRadius: '1rem'
                            }}
                            animate={{ rotateY: card.flipped ? 0 : 180 }}
                            transition={{ type: "spring", stiffness: 50 }}
                        >
                            <div className='flex flex-col items-center justify-center gap-4 p-4 bg-black rounded-lg bg-opacity-70 dark:text-white'>
                                <div className='text-xl opacity-100'>{card.name}</div>
                                <div>{card.description}</div>
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
                            confirm selection
                        </Button>
                    )
                }
            </div>
        </div>
    );
};