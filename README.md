# Portafolio — Daniel Valencia Garcia

Portafolio personal bilingüe (español / inglés) hecho con React, Vite, Tailwind CSS y Framer Motion.

## Tecnologías

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) para animaciones
- [lucide-react](https://lucide.dev/) y [react-icons](https://react-icons.github.io/react-icons/) para íconos
- [react-hot-toast](https://react-hot-toast.com/) para notificaciones

## Cómo ejecutarlo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

| Script            | Descripción                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga rápida |
| `npm run build`   | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la versión de `dist/`    |
| `npm run lint`    | Revisa el código con ESLint               |

## Estructura

```
public/
  projects/          Capturas de los proyectos
  CV_*.pdf           CV descargable desde la sección de contacto
src/
  components/        Navbar, Footer y Toaster
  sections/          Hero, Technologies, AboutMe, Projects, Contact
  data/projects.js   Datos de los proyectos (links, imágenes, tecnologías)
  locales/           Textos en español (es.json) e inglés (en.json)
  App.jsx            Idioma activo y orden de las secciones
```

## Agregar un proyecto

1. Guarda la captura en `public/projects/` (de preferencia `.webp` o `.png` optimizado).
2. Agrega el proyecto en `src/data/projects.js`:

   ```js
   {
       id: "mi-proyecto",
       tech: ["React", "Tailwind"],
       link: "https://mi-proyecto.vercel.app/",
       image: "/projects/MiProyecto.png",
       featured: false, // opcional: muestra la etiqueta "Destacado"
   },
   ```

3. Agrega los textos con el mismo `id` en **ambos** archivos de idioma, dentro de `projects.items`:

   ```json
   "mi-proyecto": {
       "title": "Mi proyecto",
       "description": "Qué hace y qué resuelve.",
       "type": "Web app",
       "status": "Deploy activo",
       "imageAlt": "Vista previa de Mi proyecto"
   }
   ```

Un proyecto sin textos en el idioma activo no se muestra.

## Idiomas

El idioma se cambia desde la barra de navegación y se guarda en `localStorage`. Todos los textos viven en `src/locales/`; al agregar una clave nueva, agrégala en los dos archivos.
