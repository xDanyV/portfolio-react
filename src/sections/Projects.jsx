import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

export default function Projects({ t }) {
    const projects = Array.isArray(t?.items) ? t.items : [];

    return (
        <section
            id="proyectos"
            className="relative min-h-screen overflow-hidden bg-gray-950 px-5 py-20 md:py-24"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#1d4ed8,transparent_32%),linear-gradient(to_bottom,#111827,#030712)]" />

            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]" />

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/10 text-blue-100 text-sm md:text-base font-semibold border border-white/10 backdrop-blur-sm">
                        <Sparkles size={18} />
                        {t?.badge}
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5">
                        {t?.title}
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
                        {t?.subtitle}
                    </p>
                </motion.div>

                <div className="grid gap-7 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.12, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl backdrop-blur-md"
                        >
                            <div className="relative h-56 sm:h-72 overflow-hidden bg-gray-900">
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />

                                {index === 1 && (
                                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-bold text-white shadow-md">
                                        <Sparkles size={16} />
                                        {t?.featured}
                                    </span>
                                )}

                                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-gray-900 shadow-md">
                                    {project.status}
                                </span>
                            </div>

                            <div className="relative p-6 sm:p-7">
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <p className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-300">
                                            {project.type}
                                        </p>

                                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-blue-200 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white border border-white/10 group-hover:bg-blue-700 transition-colors">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>

                                <p className="mb-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-1.5 text-sm font-semibold text-blue-100"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 text-white font-bold">
                                    <ExternalLink size={19} />
                                    <span className="group-hover:text-blue-200 transition-colors">
                                        {t?.liveDemo}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}