import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section
            id="sobre-mi"
            className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4"
        >
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Sobre mí
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                            Soy un desarrollador frontend apasionado por transformar ideas en
                            experiencias digitales excepcionales.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Con experiencia en React, JavaScript y diseño responsive, me enfoco
                            en crear interfaces que combinen estética minimalista con funcionalidad
                            intuitiva.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="space-y-4 bg-blue-400 p-10 rounded-lg text-white shadow-lg"

                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">
                            Habilidades
                        </h3>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}