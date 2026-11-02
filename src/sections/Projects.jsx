import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects as projectData } from "../data/projects";

export default function Projects({ t }) {
    // Combina los datos fijos de cada proyecto con sus textos traducidos
    const projects = projectData
        .filter((project) => t?.items?.[project.id])
        .map((project) => ({ ...project, ...t.items[project.id] }));

    return (
        <section
            id="proyectos"
            className="relative overflow-hidden bg-gray-950 px-5 py-24 md:py-32"
        >
            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 md:mb-20 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end"
                >
                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-[-0.03em] leading-[0.95] text-white">
                        {t?.title}
                    </h2>

                    <p className="max-w-xl text-gray-200 text-lg md:text-xl leading-relaxed">
                        {t?.subtitle}
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: (index % 2) * 0.12, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative flex flex-col overflow-hidden rounded-3xl bg-gray-900 transition-colors duration-300 hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                        >
                            <div className="relative aspect-2/1 overflow-hidden bg-gray-800">
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-6 sm:p-8">
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white transition-colors group-hover:text-blue-200">
                                        {project.title}
                                    </h3>

                                    <span
                                        aria-hidden="true"
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-[background-color,transform] duration-300 group-hover:bg-blue-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    >
                                        <ArrowUpRight size={24} />
                                    </span>
                                </div>

                                <p className="mb-6 text-gray-200 text-base sm:text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <ul
                                    aria-label={t?.techLabel}
                                    className="mt-auto flex flex-wrap gap-2"
                                >
                                    {project.tech.map((tech) => (
                                        <li
                                            key={tech}
                                            className="rounded-full bg-white/8 px-3 py-1.5 text-sm font-semibold text-blue-100"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>

                                <span className="sr-only">{t?.liveDemo}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
