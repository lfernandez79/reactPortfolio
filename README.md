# Leo Fernandez — Technology Generalist Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/18582f7f-a53f-40d9-a6a5-b16d36dd93be/deploy-status)](https://app.netlify.com/sites/netlifyleoportfolio/deploys)
![GitHub last commit](https://img.shields.io/github/last-commit/lfernandez79/reactPortfolio?logo=github)
![Node](https://img.shields.io/badge/Node-18-339933?logo=node.js)

A personal portfolio site for a Dallas-based technology generalist covering web development, DevOps, and Linux. Built with React 18 and Vite.

**Live:** [netlifyleoportfolio.netlify.app](https://netlifyleoportfolio.netlify.app)
**Repo:** [github.com/lfernandez79/reactPortfolio](https://github.com/lfernandez79/reactPortfolio)

## Tech Stack

| Category | Tools |
|---|---|
| **Framework** | React 18, Vite 5 |
| **Animations** | Framer Motion (staggered reveals, scroll-triggered cards, hover effects) |
| **Navigation** | react-scroll (smooth anchor scrolling) |
| **Background** | Vanta.NET + Three.js (interactive WebGL net) |
| **Icons** | Iconify (devicon tech logos), Font Awesome (social icons) |
| **Styling** | CSS custom properties, CSS Grid, mobile-first responsive design |
| **Forms** | Netlify Forms (contact form with spam filtering) |
| **Testing** | Vitest, React Testing Library |
| **Code Quality** | Prettier, ESLint, Husky + lint-staged (pre-commit hooks) |

## Getting Started

```bash
nvm use 18         # Node 18 required (see .nvmrc)
npm install
npm start          # dev server → http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm test` | Run Vitest with coverage |
| `npm run lint` | ESLint check |
| `npm run fix` | ESLint auto-fix |
| `npm run format` | Prettier format `src/` |
| `npm run format:check` | Prettier check (CI) |
| `npm run preview` | Preview production build |

## Deployment

Auto-deployed to [Netlify](https://www.netlify.com/) on push to `master`. Build configuration is in `netlify.toml`. Node version pinned to 18 via `netlify.toml` and `.nvmrc`.

## Project Structure

```
src/
  components/       NavBar, Footer (shared layout)
  pages/            Welcome, About, Projects, Contact (section components)
  data/             portfolio.js (content), images.js (image imports)
  styles/           tokens.css (design tokens), global.css (resets, fonts)
```

## License

[MIT](LICENSE)
