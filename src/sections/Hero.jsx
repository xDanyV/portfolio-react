import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex flex-col justify-center items-center text-center px-4"
        >
            <div className="absolute inset-0 bg-white/80 -z-20" />
            
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    className="absolute inset-0 opacity-50"
                    animate={{ backgroundPositionX: ["0px", "80px"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />


            </div>

            {/* Contenido */}
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
                className="text-gray-700 text-2xl max-w-2xl mb-8"
            >
                Desarrollador Software apasionado por crear experiencias web
                <span className="font-semibold text-gray-900"> modernas </span>
                y <span className="font-semibold text-gray-900"> funcionales</span>, enfocándome en
                interfaces intuitivas, rendimiento óptimo y diseño responsivo.
            </motion.p>

            <motion.a
                href="#tecnologias"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-block px-6 py-3 bg-blue-800 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-110 transition duration-300"
            >
                Tecnologías
            </motion.a>
        </section>
    );
}
