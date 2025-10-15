import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section
            id="sobre-mi"
            className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4"
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
                        Acerca de mí
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
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                            Soy egresado de <span className="font-semibold">Ingeniería en Desarrollo de Software</span> con experiencia en el desarrollo de aplicaciones web y móviles.
                            Me apasiona construir interfaces <span className="font-semibold">intuitivas, escalables y con enfoque en la experiencia del usuario</span>.
                            Disfruto aprender nuevas tecnologías y aplicarlas en proyectos que transformen ideas en soluciones digitales reales.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            He trabajado con frameworks modernos como <span className="font-semibold">React</span> y <span className="font-semibold">Angular</span>,
                            aplicando metodologías ágiles como <span className="font-semibold">Scrum</span> y herramientas de colaboración como
                            <span className="font-semibold"> Git y Azure</span>. Mi objetivo es seguir creciendo como desarrollador frontend
                            y contribuir en equipos donde la <span className="font-semibold">innovación y el aprendizaje constante</span> sean prioridad.
                        </p>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="space-y-4 bg-gray-700 shadow-md hover:shadow-xl shadow-blue-300 ease-in-out duration-200 p-10 rounded-lg text-white"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-6">
                            Habilidades
                        </h3>

                        {/* Contenedor de chips */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                "React",
                                "Angular",
                                "JavaScript",
                                "TypeScript",
                                "HTML",
                                "CSS",
                                "C#",
                                "Java",
                                "Python",
                                "SQL Server",
                                "Git",
                                "GitHub",
                                "Azure",
                                "Scrum",
                            ].map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.5 + index * 0.05,
                                        duration: 0.4,
                                        ease: "easeOut",
                                    }}
                                    className="bg-blue-100/10 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-300/30 hover:bg-blue-300/20 hover:scale-105 transition-transform duration-300"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}