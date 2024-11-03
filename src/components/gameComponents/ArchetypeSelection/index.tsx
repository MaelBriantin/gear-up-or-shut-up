import { ArchetypeSelectionCard } from './ArchetypeSelectionCard';
import { SelectionConfirmation } from './SelectionConfirmation';
import { SelectionTitle } from './SelectionTitle';
import { useTranslation } from 'react-i18next';
import { archetypes } from '@/data';
import { useState } from 'react';

export const ArchetypeSelection = () => {
    const { t } = useTranslation('archetypes');
    
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
                        <h1 className="text-4xl">{t('selection.title_1')}<span className='font-bold text-transparent bg-purple-gradient bg-clip-text'>{t('archetype', { count: 2 })}</span></h1>
                        <p className="text-xl">{t('selection.description_1')}</p>
                    </SelectionTitle>
            }
            {
                cards.every(card => card.flipped) &&
                    <SelectionTitle key='all-flipped'>
                        <h1 className="text-4xl">{t('selection.title_2')}<span className='font-bold text-transparent bg-purple-gradient bg-clip-text'>{t('archetype', {count: 1})}</span></h1>
                        <p className="text-xl">{t('selection.description_2')}</p>
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