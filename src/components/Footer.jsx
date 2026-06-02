import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ArrowUp } from "lucide-react";

export default function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t.links.home, href: "#inicio" },
    { label: t.links.about, href: "#sobre-mi" },
    { label: t.links.projects, href: "#proyectos" },
    { label: t.links.contact, href: "#contacto" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/xDanyV",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/daniel-valencia-6a4689278/",
      icon: FaLinkedin,
    },
    {
      label: "Email",
      href: "mailto:danyvalencia0505@hotmail.com",
      icon: MdEmail,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-950 text-gray-300 px-5 pt-16 pb-28 md:pb-8">
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute -top-24 right-0 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] pb-10 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              {t.name}
            </h3>

            <p className="text-blue-200 font-semibold mb-4">
              {t.role}
            </p>

            <p className="max-w-md text-gray-400 leading-relaxed">
              {t.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            <h4 className="text-white font-bold text-lg mb-4">
              {t.navigation}
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.45 }}
          >
            <h4 className="text-white font-bold text-lg mb-4">
              {t.social}
            </h4>

            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                    className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>

            <a
              href="#inicio"
              className="inline-flex items-center gap-2 mt-6 text-blue-200 font-semibold hover:text-white transition-colors"
            >
              {t.backToTop}
              <ArrowUp size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-sm text-gray-500 text-center"
        >
          <p>
            © {currentYear} {t.name}. {t.rights}
          </p>

          <p>
            React · Tailwind CSS · Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}