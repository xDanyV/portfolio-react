import { useEffect, useMemo, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import CustomToaster from "./components/CustomToaster";
import Footer from "./components/Footer";

import es from "./locales/es.json";
import en from "./locales/en.json";

const translations = {
  es,
  en,
};

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio-language") || "es";
  });

  const currentTranslation = useMemo(() => {
    return translations[language] || translations.es;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "es" ? "en" : "es"
    );
  };

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <CustomToaster />

      <Navbar
        toggleLanguage={toggleLanguage}
        t={currentTranslation.navbar}
      />

      <main className="pb-24 md:pb-0">
        <Hero t={currentTranslation.hero} />
        <Technologies t={currentTranslation.technologies} />
        <AboutMe t={currentTranslation.about} />
        <Projects t={currentTranslation.projects} />
        <Contact t={currentTranslation.contact} />
      </main>

      <Footer t={currentTranslation.footer} />
    </>
  );
}

export default App;