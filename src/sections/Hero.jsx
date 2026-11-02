import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero({ t }) {
    return (
        <section
            id="inicio"
            className="relative min-h-[100svh] flex flex-col justify-center items-center text-center px-5 pt-24 pb-32 md:pt-28 md:pb-20 overflow-hidden bg-white"
        >
            {/* Fondo grid animado */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 opacity-60"
                    animate={{ backgroundPositionX: ["0px", "80px"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        // taste-skill-ignore: la cuadrícula animada es parte del motion del hero
                        backgroundImage:
                            "linear-gradient(to right, #eef0f3 1px, transparent 1px), linear-gradient(to bottom, #eef0f3 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* Contenido */}
            <div className="relative max-w-6xl mx-auto flex flex-col items-center">
                {/*
                    Cuando tengas foto, puedes agregarla aquí:
                    <img src="/tu-foto.png" alt="Daniel Valencia" className="mb-8 w-32 h-32 rounded-full object-cover" />
                */}

                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-[2.4rem] sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-8 text-gray-950 tracking-[-0.04em] leading-[0.95]"
                >
                    {t.greeting}{" "}
                    {t.name}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="text-gray-800 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    <span className="font-semibold text-gray-950">{t.role}</span>{" "}
                    {t.descriptionStart}{" "}
                    <span className="font-semibold text-gray-950">
                        {t.modern}
                    </span>{" "}
                    {t.and}{" "}
                    <span className="font-semibold text-gray-950">
                        {t.functional}
                    </span>
                    {t.descriptionEnd}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-3"
                >
                    <a
                        href="#proyectos"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white text-lg md:text-xl font-semibold rounded-full transition-[background-color,transform] duration-300 hover:bg-blue-700 hover:-translate-y-1 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
                    >
                        {t.projectsButton}
                        <ArrowRight
                            size={20}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>

                    <a
                        href="#tecnologias"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-950 text-lg md:text-xl font-semibold rounded-full transition-[background-color,transform] duration-300 hover:bg-gray-200 hover:-translate-y-1 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
                    >
                        {t.button}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
