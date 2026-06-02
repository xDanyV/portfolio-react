import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiDocumentDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export default function Contact({ t }) {
    const email = "danyvalencia0505@hotmail.com";

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            toast.success(t.emailCopied);
        } catch {
            toast.error("No se pudo copiar el correo");
        }
    };

    const showDownloadToast = () => {
        toast.custom(
            (toastData) => (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{
                        opacity: toastData.visible ? 1 : 0,
                        y: toastData.visible ? 0 : 10,
                        scale: toastData.visible ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.25 }}
                    className="max-w-md w-[92vw] bg-gray-950 text-white rounded-2xl shadow-2xl p-5 border border-white/10"
                >
                    <p className="text-lg font-bold mb-4">
                        {t.downloadQuestion}
                    </p>

                    <div className="flex gap-3 justify-end">
                        <button
                            onClick={() => toast.dismiss(toastData.id)}
                            className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 transition cursor-pointer"
                        >
                            {t.cancel}
                        </button>

                        <a
                            href="/CV_dvg_01_06_26.pdf"
                            download
                            onClick={() => toast.dismiss(toastData.id)}
                            className="px-4 py-2 rounded-xl text-sm font-semibold bg-blue-700 hover:bg-blue-600 transition"
                        >
                            {t.download}
                        </a>
                    </div>
                </motion.div>
            ),
            { id: "cv-download-toast" }
        );
    };

    const contactItems = [
        {
            label: t.github,
            value: "github.com/xDanyV",
            icon: FaGithub,
            href: "https://github.com/xDanyV",
            type: "link",
        },
        {
            label: t.email,
            value: email,
            icon: MdEmail,
            onClick: copyEmail,
            type: "button",
        },
        {
            label: t.linkedin,
            value: "Daniel Valencia",
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/daniel-valencia-6a4689278/",
            type: "link",
        },
        {
            label: t.cv,
            value: t.download,
            icon: HiDocumentDownload,
            onClick: showDownloadToast,
            type: "button",
        },
    ];

    return (
        <section
            id="contacto"
            className="relative overflow-hidden bg-gray-100 px-5 py-20 md:py-24"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),linear-gradient(to_bottom,#f3f4f6,#ffffff)]" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white text-blue-800 text-sm md:text-base font-semibold border border-blue-100 shadow-sm">
                        {t.badge}
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-5">
                        {t.title}
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed">
                        {t.subtitle}
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.55 }}
                        className="bg-gray-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden relative"
                    >
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-700/30 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

                        <div className="relative">
                            <h3 className="text-2xl md:text-3xl font-bold mb-5">
                                {t.directEmail}
                            </h3>

                            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-7">
                                {t.availability}
                            </p>

                            <button
                                onClick={copyEmail}
                                className="w-full text-left rounded-2xl bg-white/10 border border-white/10 p-5 hover:bg-white/15 transition cursor-pointer"
                            >
                                <span className="block text-sm font-semibold text-blue-200 mb-2">
                                    {t.copyEmail}
                                </span>

                                <span className="block text-white font-bold break-all">
                                    {email}
                                </span>
                            </button>
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {contactItems.map((item, index) => {
                            const Icon = item.icon;

                            const cardClass =
                                "group bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 text-left";

                            const cardContent = (
                                <>
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center mb-5 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                                        {item.label}
                                    </h3>

                                    <p className="text-gray-600 font-semibold break-all">
                                        {item.value}
                                    </p>
                                </>
                            );

                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.45,
                                    }}
                                    whileHover={{ y: -7 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {item.type === "link" ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${cardClass} block`}
                                        >
                                            {cardContent}
                                        </a>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={item.onClick}
                                            className={`${cardClass} w-full cursor-pointer`}
                                        >
                                            {cardContent}
                                        </button>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}