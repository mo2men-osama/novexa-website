# Novexa Website

A fully responsive, multi-page digital agency website built with React 19, Vite 7, and React Router 7.

**Live demo → [novexa-website-kohl.vercel.app](https://novexa-website-kohl.vercel.app)**

---

## About

Novexa is a digital services agency. This website is their primary marketing surface — communicating services, showcasing work, and building trust with prospective clients through a clean, modern, and responsive interface.

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, capabilities rail, services overview, case studies, stats, process, testimonial |
| `/services` | Services | Full service breakdown, engagement model, process steps, why-choose-us |
| `/solutions` | Solutions | Six solution cards with outcomes and tech stacks, Align→Architect→Accelerate process |
| `/work` | Work | Portfolio grid with category filter, featured project card |
| `/work/:id` | Project Details | Individual project page with image, tech stack, and description |
| `/about` | About | Company story, mission/vision, expertise areas, stats |
| `*` | 404 | Catch-all not-found page — no dead ends |

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Library | React | 19.1.1 |
| Build Tool | Vite | 7.1.4 |
| Routing | React Router DOM | 7.18.3 |
| Styling | CSS Custom Properties (Design Tokens) | — |
| Linting | ESLint + eslint-plugin-react + eslint-plugin-react-hooks | 9.x |
| Hosting | Vercel | — |

**No external UI libraries.** Animations use the native Intersection Observer API. All data is served from JS config objects — no backend required.

---

## Project Structure

```
src/
├── components/
│   ├── layout/         Navbar · Footer · Container · Section
│   ├── sections/       Hero · Intro · Services · Solutions · Work
│   │                   Journey · WhyNovexa · Stats · Process
│   │                   Testimonial · FinalCTA
│   └── ui/             Button  (primary / outline variants)
├── data/
│   ├── homeContent.js  Navigation, services, case studies, stats, footer
│   └── siteContent.js  Brand constants + workProjects mock data
├── hooks/
│   └── useInView.js    Reusable IntersectionObserver hook
├── pages/
│   ├── Home/
│   ├── Services/
│   ├── Solutions/
│   ├── Work/
│   ├── ProjectDetails/
│   ├── About/
│   └── NotFound/
└── styles/
    ├── tokens.css      Design token definitions (color, spacing, type)
    └── global.css      Base reset + defaults
```

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
# Clone
git clone https://github.com/mo2men-osama/novexa-website.git
cd novexa-website

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173`.

```bash
# Lint
npm run lint

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## React Best Practices

- All components are **functional** with single responsibility
- State managed with `useState` / `useEffect` — immutable updates throughout
- All list renders use unique `key` props
- Shared scroll-reveal logic extracted into the `useInView` custom hook
- Mock data centralized in `src/data/` — easy to swap for a real API
- Zero ESLint warnings (`npm run lint` passes clean)

---

## Team

Built as part of the **GIG Skill Boost Program** — a collaboration between **Nile University (IECC)** and **Banque Misr Foundation for Community Development**.

**Front-End Development Course — Graduation Project**

| Name |
|---|
| Mohamed Adel |
| Moamen Osama |
| Seif Yasser |
| Nada Hassan |
| Malak Walid |

---

## License

Created for educational and development purposes as part of the GIG Skill Boost Program.
