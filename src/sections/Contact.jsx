import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { HiDocumentDownload } from "react-icons/hi";
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

export default function Contact() {
    return (
        <section
            id="contacto"
            className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-100 py-16"
        >

            <h2 className="text-4xl font-bold text-gray-800 mb-10">Contacto</h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-6xl text-gray-700">

                <div className="relative group flex flex-col items-center cursor-pointer">
                    <motion.a
                        href="https://github.com/xDanyV"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="hover:text-blue-500 cursor-pointer"
                    >
                        <FaGithub />
                    </motion.a>
                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        GitHub
                    </span>
                </div>

                <div className="relative group flex flex-col items-center cursor-pointer">
                    <motion.div
                        onClick={() => {
                            navigator.clipboard.writeText("danyvalencia05051@hotmail.com");
                            toast.success("Correo copiado al portapapeles");
                        }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="hover:text-blue-500 cursor-pointer"
                    >
                        <MdEmail />
                    </motion.div>

                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Email
                    </span>
                </div>

                <div className="relative group flex flex-col items-center cursor-pointer">
                    <motion.a
                        href="https://www.linkedin.com/in/daniel-valencia-6a4689278/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="hover:text-blue-500 cursor-pointer"
                    >
                        <FaLinkedin />
                    </motion.a>
                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        LinkedIn
                    </span>
                </div>


                <div className="relative group flex flex-col items-center cursor-pointer">
                    <motion.a
                        href="../public/CV-Daniel-Valencia.pdf"
                        download="CV-Daniel-Valencia.pdf"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="hover:text-blue-500 cursor-pointer"
                    >
                        <HiDocumentDownload />
                    </motion.a>
                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        CV
                    </span>
                </div>

            </div>

        </section>
    );
}