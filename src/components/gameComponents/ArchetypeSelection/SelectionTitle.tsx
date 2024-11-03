import { motion } from "framer-motion"

type SelectionTitleProps = {
    children: React.ReactNode;
}

export const SelectionTitle = (props: SelectionTitleProps) => {
    const { children } = props;
    return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ height: '100px', width: '100%', textAlign: 'start' }}
            >
                {children}
            </motion.div>
    )
}