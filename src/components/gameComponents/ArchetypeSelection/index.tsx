import { useState } from 'react';
import archetypes from '@/data/en/archetypes.json';
import { SelectionTitle } from './SelectionTitle';
import { ArchetypeSelectionCard } from './ArchetypeSelectionCard';
import { SelectionConfirmation } from './SelectionConfirmation';

export const ArchetypeSelection = () => {
    
    const [cards, setCards] = useState(
        (Object.keys(archetypes) as Array<keyof typeof archetypes>).map(key => (
            { 
                ...archetypes[key], 
                key, 
                flipped: false, 
                selected: false 
            })
        )
    );

    const handleCardClick = (index: number) => {
        setCards(prevState => {
            const allFlipped = prevState.every(card => card.flipped);
            return prevState.map((card, i) => ({
            ...card,
            flipped: i === index ? true : card.flipped,
            selected: allFlipped && i === index
            }));
        });
    };

    return (
        <div className='flex flex-col items-center justify-center gap-10'>
            
            { 
                cards.some(card => !card.flipped) &&
                    <SelectionTitle key='not-all-flipped'>
                        <h1 className="text-4xl">Reveal the <span className='font-bold text-transparent bg-purple-gradient bg-clip-text'>archetypes</span></h1>
                        <p className="text-xl">Click on the cards to reveal the archetypes and select one.</p>
                    </SelectionTitle>
            }
            {
                cards.every(card => card.flipped) &&
                    <SelectionTitle key='all-flipped'>
                        <h1 className="text-4xl">Select a hero <span className='font-bold text-transparent bg-purple-gradient bg-clip-text'>archetype</span></h1>
                        <p className="text-xl">You can only choose one archetype to play with and start your journey.</p>
                        <p className="text-xl">So choose wisely!</p>
                    </SelectionTitle>
            }

            <div className="flex flex-row items-center justify-center gap-5 h-[500px]">
                {
                    cards.map((card, index) => (
                        <ArchetypeSelectionCard
                            key={index}
                            card={card}
                            index={index}
                            handleCardClick={handleCardClick}
                        />
                    ))
                }
            </div>
            <div className="flex flex-row items-center justify-center gap-10 h-[100px] border-8 border-orange rounded-lg">
                {
                    cards.every(card => card.flipped) && cards.some(card => card.selected) && (
                        <SelectionConfirmation
                            cards={cards}
                        />
                    )
                }
            </div>
        </div>
    );
};