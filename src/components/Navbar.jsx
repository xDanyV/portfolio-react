import {
  Home,
  UserRound,
  FolderKanban,
  Languages,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Navbar({ toggleLanguage, t }) {
  const navLinks = [
    {
      label: t.home,
      href: "#inicio",
      icon: Home,
    },
    {
      label: t.about,
      href: "#sobre-mi",
      icon: UserRound,
    },
    {
      label: t.projects,
      href: "#proyectos",
      icon: FolderKanban,
    },
    {
      label: t.contact,
      href: "#contacto",
      icon: Mail,
    },
  ];

  return (
    <>
      {/* Navbar escritorio */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="hidden md:block fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-200"
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-center gap-8">
          <ul className="flex items-center gap-4 lg:gap-6 text-gray-700 text-lg lg:text-xl font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-2xl transition-all duration-300 hover:bg-gray-100 hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLanguage}
            className="ml-2 flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            aria-label={t.changeLanguage}
          >
            <Languages size={20} />
            {t.switchLanguage}
          </button>
        </div>
      </motion.nav>

      {/* Navbar móvil inferior */}
      <motion.nav
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[94%] max-w-lg bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 rounded-3xl z-50"
      >
        <ul className="flex items-center justify-around px-2 py-3">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex flex-col items-center gap-1 px-2 py-2 rounded-2xl text-gray-700 hover:bg-gray-100 active:scale-95 transition-all duration-300"
                >
                  <Icon size={21} />

                  <span className="text-[11px] font-semibold whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}

          <li>
            <button
              onClick={toggleLanguage}
              className="flex flex-col items-center gap-1 px-2 py-2 rounded-2xl text-gray-700 hover:bg-gray-100 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label={t.changeLanguage}
            >
              <Languages size={21} />

              <span className="text-[11px] font-semibold whitespace-nowrap">
                {t.switchLanguage}
              </span>
            </button>
          </li>
        </ul>
      </motion.nav>
    </>
  );
}