# Leo Fernandez — Frontend Developer Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/18582f7f-a53f-40d9-a6a5-b16d36dd93be/deploy-status)](https://app.netlify.com/sites/netlifyleoportfolio/deploys)
![GitHub last commit](https://img.shields.io/github/last-commit/lfernandez79/reactPortfolio?logo=github)
![Vitest](https://img.shields.io/badge/Vitest-passing-green?style=flat-square&logo=vitest)

A personal portfolio built with React 18 and Vite. Live at [netlifyleoportfolio.netlify.app](https://netlifyleoportfolio.netlify.app).

## Tech Stack

- **React 18** + **Vite 5** — fast dev server and optimized production builds
- **react-scroll** — smooth anchor-scroll navigation
- **Vanta.NET** — animated WebGL background
- **AOS** — scroll-triggered project card animations
- **Netlify Forms** — contact form with spam protection
- **Vitest** + **React Testing Library** — component testing

## Development

```bash
npm install
npm start        # dev server → http://localhost:3000
npm run build    # production build → dist/
npm test         # run tests with Vitest
npm run lint     # ESLint
```

## Deployment

Auto-deployed to Netlify on push to `master`. The `netlify.toml` at the repo root configures the build command and publish directory.

## Roadmap

Active modernization in progress:

- [x] Migrate CRA → Vite
- [ ] Extract content to data layer
- [ ] CSS design system with custom properties
- [ ] Move CDN dependencies to npm
- [ ] Mobile-first responsive CSS
- [ ] Replace animations with Framer Motion
- [ ] Prettier + Husky code quality gates

## License

MIT
