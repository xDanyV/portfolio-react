import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section
            id="proyectos"
            className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Proyectos
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <div className="max-w-6xl w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        title: "E-commerce App",
                        description: "Tienda online con carrito de compras y sistema de pagos integrado.",
                        tech: "React, Tailwind, Stripe"
                    },
                    {
                        title: "Dashboard Analytics",
                        description: "Panel de análisis de datos con gráficos interactivos y reportes.",
                        tech: "React, Chart.js, API"
                    },
                    {
                        title: "Portfolio Website",
                        description: "Sitio web personal con animaciones y diseño responsive moderno.",
                        tech: "React, Framer Motion"
                    }
                ].map((proyecto, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
                    >
                        <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white text-6xl">🚀</span>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {proyecto.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {proyecto.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-blue-600 font-medium">
                                    {proyecto.tech}
                                </span>
                                <span className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                                    →
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}