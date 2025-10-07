import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-8 flex justify-center ">
        <ul className="hidden md:flex space-x-8 text-gray-700 text-3xl font-semibold">
          <li><a href="#inicio" className="p-2 hover:underline hover:bg-gray-100 rounded-2xl">Inicio</a></li>
          <li><a href="#sobre-mi" className="p-2 hover:underline hover:bg-gray-100 rounded-2xl">Sobre mí</a></li>
          <li><a href="#proyectos" className="p-2 hover:underline hover:bg-gray-100 rounded-2xl">Proyectos</a></li>

        </ul>

        <button
          className="md:hidden hover:scale-110 hover:text-white hover:bg-black rounded transition-transform cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden"
          >
            <li><a className="hover:underline text-2xl px-40 py-2 hover:bg-gray-100 rounded-2xl" href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a></li>
            <li><a className="hover:underline text-2xl px-40 py-2 hover:bg-gray-100 rounded-2xl" href="#sobre-mi" onClick={() => setIsOpen(false)}>Sobre mí</a></li>
            <li><a className="hover:underline text-2xl px-40 py-2 hover:bg-gray-100 rounded-2xl" href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a></li>
          </motion.ul>
        )}
      </AnimatePresence>

    </nav>
  )
}
