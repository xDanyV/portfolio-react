import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

export default function Technologies() {
    return (
        <section
            id="tecnologias"
            className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-200 py-16 inset-shadow-sm inset-shadow-gray-300 px-4"
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Tecnologías</h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-6xl text-gray-700">

                <div className="relative group flex flex-col items-center cursor-pointer">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="hover:text-blue-500 cursor-pointer"
                    >
                        <FaHtml5 />
                    </motion.div>
                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        HTML5
                    </span>
                </div>

                <div className="relative group flex flex-col items-center cursor-pointer">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="hover:text-blue-400 cursor-pointer"
                    >
                        <FaCss3Alt />
                    </motion.div>
                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        CSS3
                    </span>
                </div>

                <div className="relative group flex flex-col items-center cursor-pointer">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="hover:text-yellow-500 cursor-pointer">
                        <FaJs />
                    </motion.div>

                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        JavaScript
                    </span>
                </div>


                <div className="relative group flex flex-col items-center cursor-pointer">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="hover:text-blue-500 cursor-pointer"
                    >
                        <FaReact className="text-6xl" />
                    </motion.div>
                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        React
                    </span>
                </div>

                <div className="relative group flex flex-col items-center cursor-pointer">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="hover:text-sky-400 cursor-pointer">
                        <SiTailwindcss />
                    </motion.div>
                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Tailwind CSS
                    </span>
                </div>

                <div className="relative group flex flex-col items-center cursor-pointer">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="hover:text-orange-600 cursor-pointer">
                        <FaGitAlt />
                    </motion.div>
                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Git
                    </span>
                </div>
            </div>
        </section >
    );
}