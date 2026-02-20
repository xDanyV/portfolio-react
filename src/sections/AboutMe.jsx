import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="sobre-mi"
      className="
        relative
        min-h-screen
        flex items-center
        bg-gradient-to-b from-gray-50 to-white
        px-4 sm:px-6 lg:px-12
        py-16 sm:py-20
      "
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            Acerca de mí
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Contenido */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed text-md md:text-xl justify-evenly">
              Soy egresado de{" "}
              <span className="font-semibold">
                Ingeniería en Desarrollo de Software
              </span>{" "}
              con experiencia en el desarrollo de aplicaciones web y móviles.
              Me apasiona construir interfaces{" "}
              <span className="font-semibold">
                intuitivas, escalables y con enfoque en la experiencia del usuario
              </span>
              .
            </p>

            <p className="text-gray-700 leading-relaxed text-md md:text-xl justify-evenly">
              He trabajado con frameworks modernos como{" "}
              <span className="font-semibold">React</span> y{" "}
              <span className="font-semibold">Angular</span>, aplicando metodologías
              ágiles como <span className="font-semibold">Scrum</span> y herramientas
              como <span className="font-semibold">Git y Azure</span>. Busco seguir
              creciendo como desarrollador frontend y aportar en equipos donde la{" "}
              <span className="font-semibold">innovación</span> sea prioridad.
            </p>
          </motion.div>

          {/* Habilidades */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="
              bg-gray-800
              p-6 sm:p-8 lg:p-10
              rounded-xl
              shadow-md hover:shadow-xl
              transition duration-300
            "
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 mb-6">
              Habilidades
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                "React",
                "Angular",
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "C#",
                "Java",
                "Python",
                "SQL Server",
                "Git",
                "GitHub",
                "Azure",
                "Scrum",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.04,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="
                    bg-blue-100/10
                    text-blue-300
                    px-3 sm:px-4 py-1.5 sm:py-2
                    rounded-full
                    text-xs sm:text-sm
                    font-medium
                    border border-blue-300/30
                    hover:bg-blue-300/20 hover:scale-105
                    transition
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
