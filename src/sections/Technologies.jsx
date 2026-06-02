import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaNodeJs,
    FaPython,
    FaJava,
    FaDatabase,
    FaServer,
    FaCode,
    FaCloud,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiAngular,
    SiPrisma,
    SiPostgresql,
    SiGithub,
    SiVercel,
} from "react-icons/si";

export default function Technologies({ t }) {
    const [activeTab, setActiveTab] = useState("frontend");

    const technologyGroups = [
        {
            id: "frontend",
            title: t.categories.frontend,
            items: [
                { name: "HTML5", icon: FaHtml5 },
                { name: "CSS3", icon: FaCss3Alt },
                { name: "JavaScript", icon: FaJs },
                { name: "TypeScript", icon: SiTypescript },
                { name: "React", icon: FaReact },
                { name: "Next.js", icon: SiNextdotjs },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Angular", icon: SiAngular },
            ],
        },
        {
            id: "backend",
            title: t.categories.backend,
            items: [
                { name: "Node.js", icon: FaNodeJs },
                { name: "REST APIs", icon: FaServer },
                { name: "Prisma ORM", icon: SiPrisma },
            ],
        },
        {
            id: "database",
            title: t.categories.database,
            items: [
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "SQL Server", icon: FaDatabase },
                { name: "Databases", icon: FaDatabase },
            ],
        },
        {
            id: "tools",
            title: t.categories.tools,
            items: [
                { name: "Git", icon: FaGitAlt },
                { name: "GitHub", icon: SiGithub },
                { name: "Vercel", icon: SiVercel },
                { name: "Azure", icon: FaCloud },
                { name: "VS Code", icon: FaCode },
            ],
        },
        {
            id: "languages",
            title: t.categories.languages,
            items: [
                { name: "Python", icon: FaPython },
                { name: "Java", icon: FaJava },
                { name: "C#", icon: FaCode },
            ],
        },
    ];

    const activeGroup =
        technologyGroups.find((group) => group.id === activeTab) ||
        technologyGroups[0];

    return (
        <section
            id="tecnologias"
            className="relative overflow-hidden bg-gray-100 py-20 px-5 md:py-24"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#dbeafe,transparent_35%),linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white text-blue-800 text-sm md:text-base font-semibold border border-blue-100 shadow-sm">
                        Stack
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-5">
                        {t.title}
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed">
                        {t.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/85 backdrop-blur-md border border-gray-200 rounded-3xl shadow-sm p-4 sm:p-6 md:p-8"
                >
                    <div className="overflow-x-auto pb-2 mb-8 [scrollbar-width:none]">
                        <div
                            role="tablist"
                            aria-label="Technology categories"
                            className="flex min-w-max gap-2 sm:gap-3 bg-gray-100 border border-gray-200 rounded-3xl p-2"
                        >
                            {technologyGroups.map((group) => {
                                const isActive = activeTab === group.id;

                                return (
                                    <button
                                        key={group.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => setActiveTab(group.id)}
                                        className={`relative px-4 py-3 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${isActive
                                                ? "text-white"
                                                : "text-gray-700 hover:text-gray-950 hover:bg-white"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeTechnologyTab"
                                                className="absolute inset-0 bg-blue-800 rounded-2xl shadow-md"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 350,
                                                    damping: 30,
                                                }}
                                            />
                                        )}

                                        <span className="relative z-10">
                                            {group.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="min-h-[310px] sm:min-h-[250px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeGroup.id}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -18 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="flex items-center gap-3 mb-7">
                                    <div className="w-2 h-8 bg-blue-800 rounded-full" />

                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {activeGroup.title}
                                    </h3>

                                    <span className="ml-auto text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        {activeGroup.items.length}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {activeGroup.items.map((technology, index) => {
                                        const Icon = technology.icon;

                                        return (
                                            <motion.div
                                                key={technology.name}
                                                initial={{ opacity: 0, scale: 0.92 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    delay: index * 0.04,
                                                    duration: 0.25,
                                                }}
                                                whileHover={{
                                                    y: -8,
                                                    scale: 1.04,
                                                }}
                                                whileTap={{ scale: 0.96 }}
                                                className="group flex flex-col items-center justify-center gap-3 min-h-32 rounded-2xl bg-gray-50 border border-gray-200 p-4 text-gray-700 shadow-sm hover:bg-white hover:shadow-md hover:border-blue-200 transition-all duration-300 cursor-default"
                                            >
                                                <motion.div
                                                    animate={{ y: [0, -4, 0] }}
                                                    transition={{
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        repeatType: "mirror",
                                                        ease: "easeInOut",
                                                    }}
                                                    className="text-4xl sm:text-5xl group-hover:text-blue-800 transition-colors duration-300"
                                                >
                                                    <Icon />
                                                </motion.div>

                                                <span className="text-sm sm:text-base text-center font-bold text-gray-800">
                                                    {technology.name}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}