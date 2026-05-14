# Leo Fernandez — Technology Generalist Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/18582f7f-a53f-40d9-a6a5-b16d36dd93be/deploy-status)](https://app.netlify.com/sites/netlifyleoportfolio/deploys)
![GitHub last commit](https://img.shields.io/github/last-commit/lfernandez79/reactPortfolio?logo=github)
![Vitest](https://img.shields.io/badge/Vitest-passing-green?style=flat-square&logo=vitest)

A personal portfolio built with React 18 and Vite. Live at [netlifyleoportfolio.netlify.app](https://netlifyleoportfolio.netlify.app).

## Tech Stack

- **React 18** + **Vite 5** — fast dev server and optimized production builds
- **Framer Motion** — staggered hero reveal, NavBar hover animations, scroll-triggered project cards
- **react-scroll** — smooth anchor-scroll navigation
- **Vanta.NET** — animated WebGL background
- **Iconify** — colored tech logos (devicon set) for skills section
- **Font Awesome** — social icons
- **Netlify Forms** — contact form with spam protection
- **Vitest** + **React Testing Library** — component testing
- **Prettier** + **ESLint** + **Husky** — code quality and formatting on pre-commit

## Development

```bash
nvm use 18         # requires Node 18 (see .nvmrc)
npm install
npm start          # dev server → http://localhost:3000
npm run build      # production build → dist/
npm test           # run tests with Vitest
npm run lint       # ESLint
npm run format     # Prettier
```

## Deployment

Auto-deployed to Netlify on push to `master`. The `netlify.toml` at the repo root configures the build command and publish directory. Node version pinned to 18.

## Modernization Roadmap

- [x] Migrate CRA → Vite
- [x] Extract content to data layer
- [x] CSS design system with custom properties
- [x] Move CDN dependencies to npm
- [x] Mobile-first responsive CSS (Bootstrap removed)
- [x] Replace animations with Framer Motion
- [x] Prettier + Husky code quality gates
- [x] Visual refresh — modern typography, richer color palette, skills section
- [x] Content cleanup — removed outdated projects, updated descriptions and images

## License

MIT
