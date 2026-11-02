// Datos de proyectos que no dependen del idioma.
// Para agregar un proyecto:
//   1. Agrega un objeto aquí con un `id` único.
//   2. Coloca la imagen en public/projects/.
//   3. Agrega los textos con el mismo `id` en src/locales/es.json y en.json
//      (projects.items.<id>).
export const projects = [
    {
        id: "matchbox",
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Tailwind"],
        link: "https://matchboxd-j4ginar2c-daniel-valencias-projects-a86e1fc4.vercel.app",
        image: "/projects/Matchbox.png",
        featured: true,
    },
    {
        id: "rosa-pastel",
        tech: ["React", "Tailwind", "Framer Motion"],
        link: "https://bakery-page-tw.vercel.app/",
        image: "/projects/RosaPastel.png",
    },
    {
        id: "barbershop-saas",
        tech: ["Next.js", "TypeScript", "Prisma", "Vercel"],
        link: "https://barbershop-saas-azure.vercel.app/",
        image: "/projects/BarberShop.png",
        featured: true,
    },
];
