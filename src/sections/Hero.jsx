import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

export default function Hero({ t }) {
    return (
        <section
            id="inicio"
            className="relative min-h-[100svh] flex flex-col justify-center items-center text-center px-5 pt-24 pb-32 md:pt-28 md:pb-20 overflow-hidden"
        >
            {/* Fondo base */}
            <div className="absolute inset-0 bg-white -z-20" />

            {/* Fondo grid animado */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    className="absolute inset-0 opacity-60"
                    animate={{ backgroundPositionX: ["0px", "80px"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* Decoración suave */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.25, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-200 rounded-full blur-3xl -z-10"
            />

            {/* Contenido */}
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto flex flex-col items-center"
            >
                {/* Avatar temporal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.05, duration: 0.55 }}
                    className="relative mb-6"
                >
                    <div className="absolute inset-0 bg-blue-300/40 rounded-full blur-2xl" />

                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white border border-blue-100 shadow-xl flex items-center justify-center overflow-hidden">
                        <UserRound className="text-blue-800" size={58} />

                        {/* 
              Después puedes reemplazar el icono por tu foto así:

              <img
                src="/tu-foto.png"
                alt="Daniel Valencia"
                className="w-full h-full object-cover"
              />
            */}
                    </div>
                </motion.div>

                <motion.span
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="inline-block mb-5 px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm md:text-base font-semibold border border-blue-100"
                >
                    {t.role}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-5 text-gray-900 leading-tight"
                >
                    {t.greeting}{" "}
                    <span className="text-blue-800">
                        {t.name}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-9 leading-relaxed"
                >
                    {t.descriptionStart}{" "}
                    <span className="font-semibold text-gray-950">
                        {t.modern}
                    </span>{" "}
                    {t.and}{" "}
                    <span className="font-semibold text-gray-950">
                        {t.functional}
                    </span>
                    , {t.descriptionEnd}
                </motion.p>

                <motion.a
                    href="#tecnologias"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                    className="inline-flex items-center justify-center px-7 py-3 bg-blue-800 text-white text-lg md:text-xl font-semibold rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-300"
                >
                    {t.button}
                </motion.a>
            </motion.div>
        </section>
    );
}