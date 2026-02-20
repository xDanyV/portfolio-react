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
                    <motion.div
                        onClick={() => {

                            const toastId = "cv-download-toast";

                            toast.custom(
                                (t) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                                        animate={{
                                            opacity: t.visible ? 1 : 0,
                                            y: t.visible ? 0 : 10,
                                            scale: t.visible ? 1 : 0.8,
                                        }}
                                        transition={{ duration: 0.25 }}
                                        className="max-w-md w-full bg-gray-800 text-white rounded-xl shadow-2xl p-5 flex items-center justify-between gap-4"
                                    >
                                        <p className="text-lg font-bold">
                                            ¿Deseas descargar mi CV?
                                        </p>

                                        <div className="flex gap-2">
                                            <a
                                                href="/CV-Daniel-Valencia.pdf"
                                                download
                                                onClick={() => toast.dismiss(t.id)}
                                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-semibold transition-all duration-200"
                                            >
                                                Descargar
                                            </a>
                                        </div>
                                    </motion.div>
                                ),
                                { id: "cv-download-toast" }
                            );



                        }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="hover:text-blue-500 cursor-pointer"
                    >
                        <HiDocumentDownload />
                    </motion.div>
                    <span className="absolute top-full mt-2 text-lg text-gray-700 font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        CV
                    </span>
                </div>

            </div>

        </section>
    );
}