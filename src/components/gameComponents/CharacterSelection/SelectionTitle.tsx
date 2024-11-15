import { motion } from "motion/react";
import { memo } from "react";
import { useTranslation } from "react-i18next";

type SelectionTitleProps = {
    allCardsFlipped: boolean;
}

export const SelectionTitle = memo((props: SelectionTitleProps) => {
    const { allCardsFlipped } = props;
    const { t } = useTranslation('archetypes');

    const title = allCardsFlipped ? t('selection.title_2') : t('selection.title_1')
    const specialWord = allCardsFlipped ? t('archetype', { count: 1 }) : t('archetype', { count: 2 })
    const subtitle = allCardsFlipped ? t('selection.description_2') : t('selection.description_1')
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ width: '100%', textAlign: 'start' }}
        >
            <h1 className="text-2xl text-center">{title}<span className='font-bold text-transparent bg-purple-gradient bg-clip-text'>{specialWord}</span></h1>
            <p className="text-lg italic text-center">{subtitle}</p>
        </motion.div>
    )
});