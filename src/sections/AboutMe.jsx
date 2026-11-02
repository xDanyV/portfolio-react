import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutMe({ t }) {

  const cards = Array.isArray(t?.cards) ? t.cards : [];
  const softSkills = Array.isArray(t?.softSkills) ? t.softSkills : [];
  const focusItems = Array.isArray(t?.focusItems) ? t.focusItems : [];
  const mainStack = Array.isArray(t?.mainStack) ? t.mainStack : [];

  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-white px-5 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-20 text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-[-0.03em] leading-[0.95] text-gray-950"
        >
          {t.title}
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="space-y-6"
            >
              <p className="text-gray-950 leading-snug text-2xl md:text-3xl font-semibold tracking-[-0.01em]">
                {t.descriptionOne}
              </p>

              <p className="text-gray-800 leading-relaxed text-lg md:text-xl">
                {t.descriptionTwo}
              </p>
            </motion.div>

            <dl className="mt-12 grid gap-8 sm:grid-cols-3">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + index * 0.08,
                    duration: 0.4,
                  }}
                >
                  <dt className="text-base font-semibold text-blue-800 mb-2">
                    {card.title}
                  </dt>

                  <dd className="text-gray-950 font-bold text-xl leading-snug">
                    {card.text}
                  </dd>
                </motion.div>
              ))}
            </dl>

            <motion.a
              href="#proyectos"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-12 px-7 py-3.5 rounded-full bg-blue-800 text-white font-bold text-lg hover:bg-blue-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
            >
              {t.cta}
              <ArrowRight size={20} />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="relative h-fit bg-gray-950 rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t.softSkillsTitle}
            </h3>

            <ul className="flex flex-wrap gap-2.5">
              {softSkills.map((skill, index) => (
                <motion.li
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
                  className="bg-white/10 text-white px-4 py-2 rounded-full text-sm sm:text-base font-semibold"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>

            <h3 className="mt-12 mb-6 text-2xl md:text-3xl font-bold text-white">
              {t.focusTitle}
            </h3>

            <ul className="space-y-3">
              {focusItems.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.35 + index * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{ x: 6 }}
                  className="rounded-2xl bg-white/[0.06] p-5 hover:bg-white/[0.1] transition-colors duration-300"
                >
                  <p className="text-white text-lg font-bold mb-1">
                    {item.title}
                  </p>

                  <p className="text-gray-200 text-base leading-relaxed">
                    {item.text}
                  </p>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-blue-800 p-5">
              <p className="text-white text-base font-semibold mb-3">
                {t.stackLabel}
              </p>

              <ul className="flex flex-wrap gap-2">
                {mainStack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
