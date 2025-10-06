
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <section id="inicio" className="h-screen flex items-center justify-center bg-yellow-100">
        <h2 className="text-4xl font-bold">¡Hola! Soy Daniel</h2>
      </section>

      <section id="sobre-mi" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-semibold">Sobre mí</h2>
      </section>

      <section id="proyectos" className="h-screen flex items-center justify-center bg-blue-100">
        <h2 className="text-3xl font-semibold">Proyectos</h2>
      </section>

    </div>
  )
}

export default App
