
import './App.css';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

function App() {


  return (
    <div className="scroll-smooth">
      <Navbar />

      <section
        id="inicio"
        className=" min-h-screen flex flex-col justify-center items-center text-center bg-gray-50"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-gray-800"
        >
          ¡Hola! Soy <span className="text-blue-600 ">Daniel Valencia</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-2xl md:text-4xl max-w-xl mb-8"
        >
          Desarrollador Frontend apasionado por crear experiencias web modernas y funcionales.
        </motion.p>
      </section>

      <section className="min-h-[50vh] flex items-center justify-center bg-gray-500">
        <h2 className="text-3xl font-semibold text-gray-200 ">Tecnologías</h2>
      </section>

      <section
        id="sobre-mi"
        className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4"
      >
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Sobre mí
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Soy un desarrollador frontend apasionado por transformar ideas en
                experiencias digitales excepcionales.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Con experiencia en React, JavaScript y diseño responsive, me enfoco
                en crear interfaces que combinen estética minimalista con funcionalidad
                intuitiva.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 bg-blue-400 p-10 rounded-lg text-white shadow-lg"

            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">
                Habilidades
              </h3>

            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Proyectos
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce App",
              description: "Tienda online con carrito de compras y sistema de pagos integrado.",
              tech: "React, Tailwind, Stripe"
            },
            {
              title: "Dashboard Analytics",
              description: "Panel de análisis de datos con gráficos interactivos y reportes.",
              tech: "React, Chart.js, API"
            },
            {
              title: "Portfolio Website",
              description: "Sitio web personal con animaciones y diseño responsive moderno.",
              tech: "React, Framer Motion"
            }
          ].map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-6xl">🚀</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {proyecto.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {proyecto.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">
                    {proyecto.tech}
                  </span>
                  <span className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default App
