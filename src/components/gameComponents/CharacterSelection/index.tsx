import { useGenerateCharacterSelectionCards } from '@/hooks/characters';
import { GeneratedCharacterCardType } from '@/types/CharacterType';
import { CharacterSelectionCard } from './CharacterSelectionCard';
import { SelectionConfirmation } from './SelectionConfirmation';
import { SelectionTitle } from './SelectionTitle';
import { useState } from 'react';

export const CharacterSelection = () => {
    const generatedCharacterCards = useGenerateCharacterSelectionCards({ numberOfCharacters: 2 });
    const [cards, setCards] = useState<GeneratedCharacterCardType[]>(generatedCharacterCards);

    const allCardsFlipped = cards.every(card => card.flipped);
    const oneCardSelected = cards.some(card => card.selected);

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
            <SelectionTitle allCardsFlipped={allCardsFlipped} />
            <div className="flex flex-row items-center justify-center gap-5">
                {
                    cards.map((card, index) => (
                        <CharacterSelectionCard
                            key={card._key}
                            card={card}
                            index={index}
                            handleCardClick={handleCardClick}
                        />
                    ))
                }
            </div>
            <div className="flex flex-row items-center justify-center gap-10 h-[100px] border-8 border-orange rounded-lg">
                {
                    (allCardsFlipped && oneCardSelected) && (
                        <SelectionConfirmation
                            selectedCharacterCard={cards.find(card => card.selected) as GeneratedCharacterCardType}
                        />
                    )
                }
            </div>
        </div>
    );
};