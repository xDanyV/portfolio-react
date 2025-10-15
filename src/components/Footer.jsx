import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      {/* Línea superior sutil */}
      <div className="border-t border-gray-700 pt-6 flex flex-col items-center text-center space-y-3">

        {/* Nombre o marca */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-semibold text-white tracking-wide"
        >
          Daniel Valencia Garcia — Desarrollador Software
        </motion.h3>

        {/* Derechos reservados */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs text-gray-500 mt-4"
        >
          © {new Date().getFullYear()} Daniel Valencia. Todos los derechos reservados.
        </motion.p>
      </div>
    </footer>
  );
}
