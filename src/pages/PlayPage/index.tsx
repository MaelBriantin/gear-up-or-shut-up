import { motion } from "framer-motion"

export const PlayPage = () => {
    const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const card = event.currentTarget;
        card.classList.toggle("flipped");
    };

    return (
        <div className="flex flex-row items-center justify-center gap-5">
            <motion.div
                className="flex items-center justify-center text-white bg-gray-800 rounded-lg w-[250px] h-[400px] hover:cursor-pointer select-none"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "100vh" }}
                transition={{ type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.05 }}
                onClick={handleCardClick}
            >
                <h1>Carte de Jeu</h1>
            </motion.div>
            <motion.div
                className="flex items-center justify-center text-white bg-gray-800 rounded-lg w-[250px] h-[400px] hover:cursor-pointer select-none"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "100vh" }}
                transition={{ type: "spring", stiffness: 120, delay: 0.1 }} // Ajout du délai ici
                whileHover={{ scale: 1.05 }}
                onClick={handleCardClick}
            >
                <h1>Carte de Jeu</h1>
            </motion.div>
            <motion.div
                className="flex items-center justify-center text-white bg-gray-800 rounded-lg w-[250px] h-[400px] hover:cursor-pointer select-none"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "100vh" }}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }} // Ajout du délai ici
                whileHover={{ scale: 1.05 }}
                onClick={handleCardClick}
            >
                <h1>Carte de Jeu</h1>
            </motion.div>
        </div>
    );
};