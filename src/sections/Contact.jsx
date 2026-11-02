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
            toast.error(t.copyError);
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
            className="relative overflow-hidden bg-gray-100 px-5 py-24 md:py-32"
        >

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 md:mb-20 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end"
                >
                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-[-0.03em] leading-[0.95] text-gray-950">
                        {t.title}
                    </h2>

                    <p className="max-w-xl text-gray-800 text-lg md:text-xl leading-relaxed">
                        {t.subtitle}
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.55 }}
                        className="bg-blue-800 text-white rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden relative"
                    >
                        <div className="relative">
                            <h3 className="text-2xl md:text-3xl font-bold mb-5">
                                {t.directEmail}
                            </h3>

                            <p className="text-blue-50 leading-relaxed text-lg mb-7">
                                {t.availability}
                            </p>

                            <button
                                onClick={copyEmail}
                                className="w-full text-left rounded-2xl bg-white/10 p-5 hover:bg-white/20 active:scale-[0.98] transition-[background-color,transform] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <span className="block text-base font-semibold text-blue-100 mb-2">
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
                                "group bg-white rounded-3xl p-6 hover:bg-blue-50 transition-colors duration-300 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800";

                            const cardContent = (
                                <>
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center mb-5 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                                        {item.label}
                                    </h3>

                                    <p className="text-gray-800 font-semibold break-all">
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