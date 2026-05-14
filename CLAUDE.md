# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server on localhost:3000 (Vite)
npm run build      # production build → dist/
npm test           # run Vitest with coverage
npm run lint       # ESLint check (quiet mode)
npm run fix        # ESLint auto-fix
npm run preview    # preview production build locally
npm run format     # Prettier format src/
npm run format:check  # Prettier check (CI)
```

Run a single test file:
```bash
npx vitest run src/__test__/App.test.jsx
```

## Architecture

Single-page portfolio app built with **Vite + React 18**. No routing — navigation uses `react-scroll` to anchor-scroll to named `id`s within the page. Layout is a vertical stack rendered in `App.jsx`:

```
NavBar → Welcome → About → Projects → Contact → Footer
```

- **Components** (`src/components/`): `NavBar` and `Footer` — shared layout pieces.
- **Pages** (`src/pages/`): Each section is a standalone stateless functional component with a co-located CSS file. Images live in `src/pages/images/`.
- **Contact form** uses Netlify Forms — hidden form in `index.html` (root) is required for Netlify's build bot to detect it; `NetlifyForms.jsx` renders the visible form with matching `name="contact"`.
- **Data layer** (`src/data/`): `portfolio.js` exports `owner` (name, title, bio, email, social links) and `projects` array — single source of truth for all content. `images.js` exports all image imports keyed by string matching `projects[].image`.
- **NavBar** uses `react-scroll` `<Link>` for smooth scrolling. Framer Motion hover animation (lift + underline slide).
- **Styling**: Mobile-first responsive CSS using CSS Grid and flexbox. CSS custom properties defined in `src/styles/tokens.css` (colors, spacing, typography, breakpoints). Global resets and font imports in `src/styles/global.css`. Per-component CSS files consume tokens via `var(--*)`. No Bootstrap — all layout is native CSS.
- **Background animation**: Vanta.NET initialized via `useEffect` in `App.jsx` with cleanup on unmount.
- **Icons**: Font Awesome (`@fortawesome/react-fontawesome`) for social icons in Contact; Iconify (`@iconify/react`) for Netlify logo in Footer and `devicon:*` tech logos in the About skills section.
- **Animations**: Framer Motion for Welcome (staggered reveal), NavBar (hover lift + underline), and Projects (scroll-triggered fade-in per card direction via `useInView`).
- **Tests**: One smoke test in `src/__test__/App.test.jsx` using `@testing-library/react`.
- **Code quality**: Prettier + ESLint (with `eslint-config-prettier`). Husky pre-commit hook runs `lint-staged` on `src/**/*.{js,jsx,css}`.

## File Structure Notes

- Entry point: `src/main.jsx` (not `index.js` — this is Vite)
- All component files use `.jsx` extension
- `index.html` lives at the **repo root** (Vite convention, not in `public/`)
- Static assets in `public/` (favicon, manifest, icons)
- Build output goes to `dist/` (not `build/`)

## Deployment

- **Netlify**: auto-deploys on push to `master`. Build command: `npm run build`, publish dir: `dist` (configured in `netlify.toml`). Node version pinned to 18 via `netlify.toml` + `.nvmrc`.
- Netlify Forms: the hidden `<form>` in `index.html` must not be removed — Netlify's build scanner requires it.

## Modernization Progress

| Phase | Status | Focus |
|---|---|---|
| 1 — CRA → Vite | ✅ Done | Bundler, .jsx renames, Vitest |
| 2 — Data layer | ✅ Done | All content in `src/data/portfolio.js` + `src/data/images.js` |
| 3 — CSS design system | ✅ Done | `src/styles/tokens.css` + `global.css`, webkit bug fixes, token substitution |
| 4 — CDN → npm | ✅ Done | All CDN scripts → npm packages, Vanta in useEffect |
| 5 — Responsive CSS | ✅ Done | Bootstrap removed, mobile-first CSS Grid, images optimized |
| 6 — Animations | ✅ Done | Framer Motion: staggered Welcome, NavBar hover, scroll-triggered Projects |
| 7 — Code quality | ✅ Done | Prettier + Husky pre-commit, ESLint integrated |
| 8 — Visual refresh | ✅ Done | Modern typography (Inter headings), richer color palette, gradient About section, skills/tech stack with Iconify devicon icons |
| 9 — Content cleanup | ✅ Done | Removed Static Portfolio project, updated descriptions and project images |
