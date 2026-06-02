import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  BriefcaseBusiness,
  ArrowRight,
  Code2,
  Layers3,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export default function AboutMe({ t }) {

  const cardIcons = [GraduationCap, Target, BriefcaseBusiness];
  const focusIcons = [Code2, Layers3, Workflow];

  const cards = Array.isArray(t?.cards) ? t.cards : [];
  const softSkills = Array.isArray(t?.softSkills) ? t.softSkills : [];
  const focusItems = Array.isArray(t?.focusItems) ? t.focusItems : [];
  const mainStack = Array.isArray(t?.mainStack) ? t.mainStack : [];

  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-white px-5 py-20 md:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,#dbeafe,transparent_35%)]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm md:text-base font-semibold border border-blue-100">
            {t.badge}
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-5">
            {t.title}
          </h2>

          <div className="w-20 h-1.5 bg-blue-800 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8  items-start">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="h-fit bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm"
          >
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                {t.descriptionOne}
              </p>

              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                {t.descriptionTwo}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-9">
              {cards.map((card, index) => {
                const Icon = cardIcons[index];

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.4,
                    }}
                    whileHover={{ y: -6 }}
                    className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center mb-4">
                      <Icon size={23} />
                    </div>

                    <h3 className="text-gray-900 font-bold text-lg mb-2">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#proyectos"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-9 text-blue-800 font-bold text-lg hover:text-blue-700 transition-colors"
            >
              {t.cta}
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="relative h-fit bg-gray-950 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-700/35 rounded-full blur-3xl" />
            <div className="absolute -bottom-28 -left-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

            <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:36px_36px]" />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {t.softSkillsTitle}
              </h3>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.25 + index * 0.05,
                      duration: 0.35,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                    }}
                    className="bg-white/10 text-blue-100 px-4 py-2 rounded-full text-sm sm:text-base font-semibold border border-blue-300/20 backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="mt-9 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 className="text-blue-300" size={22} />
                  <h4 className="text-white text-xl font-bold">
                    {t.focusTitle}
                  </h4>
                </div>

                <div className="space-y-3">
                  {focusItems.map((item, index) => {
                    const Icon = focusIcons[index];

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.35 + index * 0.08,
                          duration: 0.4,
                        }}
                        whileHover={{ x: 6 }}
                        className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 hover:bg-white/[0.1] transition-all duration-300"
                      >
                        <div className="w-11 h-11 shrink-0 rounded-2xl bg-blue-500/15 text-blue-300 flex items-center justify-center border border-blue-300/10">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h5 className="text-white font-bold mb-1">
                            {item.title}
                          </h5>

                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-blue-300/15 bg-blue-900/20 p-5">
                <p className="text-blue-200 text-sm font-semibold mb-3">
                  {t.stackLabel}
                </p>

                <div className="flex flex-wrap gap-2">
                  {mainStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}