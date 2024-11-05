import { motion } from "framer-motion"

type SelectionTitleProps = {
    title: string;
    specialWord: string;
    subtitle: string;
}

export const SelectionTitle = (props: SelectionTitleProps) => {
    const { title, specialWord, subtitle } = props;
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
}