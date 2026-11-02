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
        className="hidden md:block fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50"
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-center gap-8">
          <ul className="flex items-center gap-4 lg:gap-6 text-gray-700 text-lg lg:text-xl font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-full transition-colors duration-300 hover:bg-gray-100 hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLanguage}
            className="ml-2 flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 font-semibold hover:bg-gray-950 hover:text-white transition-colors duration-300 cursor-pointer"
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
        className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 w-[96%] max-w-lg bg-white/95 shadow-lg rounded-3xl z-50"
      >
        <ul className="flex items-center justify-around px-1 py-2">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex flex-col items-center gap-1 px-1.5 py-2 rounded-2xl text-gray-800 hover:bg-gray-100 active:scale-95 transition-[background-color,transform] duration-300"
                >
                  <Icon size={21} />

                  <span className="text-[13px] font-semibold whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}

          <li>
            <button
              onClick={toggleLanguage}
              className="flex flex-col items-center gap-1 px-1.5 py-2 rounded-2xl text-gray-800 hover:bg-gray-100 active:scale-95 transition-[background-color,transform] duration-300 cursor-pointer"
              aria-label={t.changeLanguage}
            >
              <Languages size={21} />

              <span className="text-[13px] font-semibold whitespace-nowrap">
                {t.switchLanguage}
              </span>
            </button>
          </li>
        </ul>
      </motion.nav>
    </>
  );
}