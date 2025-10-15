import { motion } from "framer-motion";


export default function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100 px-4"
        >
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold mb-3 text-gray-900"
            >
                ¡Hola! Soy <span className="text-blue-800">Daniel Valencia</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-700 text-2xl md:text-2xl max-w-2xl mb-8"
            >
                Desarrollador Software apasionado por crear experiencias web
                <span className="font-semibold text-gray-900"> modernas </span>
                y <span className="font-semibold text-gray-900">funcionales</span>, enfocándome en
                interfaces intuitivas, rendimiento óptimo y diseño responsivo que se adapte
                a cualquier dispositivo.
            </motion.p>


        </section>

    );
}