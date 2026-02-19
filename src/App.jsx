import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Technologies from './sections/Technologies';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import CustomToaster from './components/CustomToaster';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <CustomToaster />
      <Navbar />
      <Hero />
      <Technologies />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </ >
  )
}

export default App
