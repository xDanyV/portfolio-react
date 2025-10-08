import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section
            id="inicio"
            className=" min-h-screen flex flex-col justify-center items-center text-center bg-gray-50"
        >
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold mb-4 text-gray-800"
            >
                ¡Hola! Soy <span className="text-blue-600 ">Daniel Valencia</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-600 text-2xl md:text-4xl max-w-xl mb-8"
            >
                Desarrollador Frontend apasionado por crear experiencias web modernas y funcionales.
            </motion.p>
        </section>);
}