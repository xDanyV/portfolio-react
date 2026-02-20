import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section
            id="proyectos"
            className="min-h-screen flex flex-col justify-center items-center bg-gray-700 px-4 py-20"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-bold mb-4 text-gray-100">
                    Proyectos
                </h2>
                <div className="w-20 h-1 bg-gray-50 mx-auto"></div>
            </motion.div>

            <div className="max-w-6xl w-full grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                    {
                        title: "Repostería Rosa Pastel",
                        description: "Landing page para una pastelería con catálogo de productos y contacto.",
                        tech: "React, Tailwind, Framer Motion",
                        link: "https://bakery-page-tw.vercel.app/",
                    },
                ].map((proyecto, index) => (
                    <motion.a
                        key={index}
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-gray-50 rounded-lg shadow-md overflow-hidden cursor-pointer group block"
                    >
                        {/* Imagen del proyecto */}
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src="/projects/RosaPastel.png"
                                alt="Vista previa del proyecto Repostería Rosa Pastel"
                                className="object-cover  transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Contenido */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-3">
                                {proyecto.title}
                            </h3>
                            <p className="text-gray-700 font-bold mb-4 leading-relaxed">
                                {proyecto.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700 font-medium">
                                    {proyecto.tech}
                                </span>
                                <span className="text-gray-700 font-extrabold group-hover:text-blue-600 transition-colors duration-300">
                                    →
                                </span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

        </section>
    );
}