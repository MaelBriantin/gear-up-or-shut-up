import { ArchetypeSelectionCard } from './ArchetypeSelectionCard';
import { SelectionConfirmation } from './SelectionConfirmation';
import { SelectionTitle } from './SelectionTitle';
import { useTranslation } from 'react-i18next';
import { archetypes } from '@/data';
import { useState } from 'react';
import { shuffleArrayAndPick } from '@/utils';

export const ArchetypeSelection = () => {
    const { t } = useTranslation('archetypes');

    const [cards, setCards] = useState(
        shuffleArrayAndPick(
            (Object.keys(archetypes) as Array<keyof typeof archetypes>).map(key => (
                {
                    ...archetypes[key],
                    key: key as keyof typeof archetypes,
                    flipped: false,
                    selected: false
                })
            )
            , 2
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
        <div className='flex flex-col items-center justify-center gap-20'>

            {
                cards.some(card => !card.flipped) &&
                <SelectionTitle key='not-all-flipped' title={t('selection.title_1')} specialWord={t('archetype', { count: 3 })} subtitle={t('selection.description_1')} />
            }
            {
                cards.every(card => card.flipped) &&
                <SelectionTitle key='all-flipped' title={t('selection.title_2')} specialWord={t('archetype', { count: 1 })} subtitle={t('selection.description_2')} />
            }

            <div className="flex flex-row items-center justify-center gap-5">
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