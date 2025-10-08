
import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Technologies from './sections/Technologies';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';

function App() {

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Technologies />
      <AboutMe />
      <Projects />

    </div >
  )
}

export default App
