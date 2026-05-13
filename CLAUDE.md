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
- **NavBar** uses `react-animated-text` (`<Wave>`) for animated link text and `react-scroll` `<Link>` for smooth scrolling. *(Will be replaced with Framer Motion in Phase 6.)*
- **Styling**: Bootstrap grid via CDN (`index.html`), AOS for project card animations, per-component CSS files. *(CDN deps move to npm in Phase 4.)*
- **Background animation**: Vanta.NET initialized via CDN inline script in `index.html`, targeting `<body id="vanta">`. *(Moves to React useEffect in Phase 4.)*
- **Tests**: One smoke test in `src/__test__/App.test.jsx` using `@testing-library/react`.

## File Structure Notes

- Entry point: `src/main.jsx` (not `index.js` — this is Vite)
- All component files use `.jsx` extension
- `index.html` lives at the **repo root** (Vite convention, not in `public/`)
- Static assets in `public/` (favicon, manifest, icons)
- Build output goes to `dist/` (not `build/`)

## Deployment

- **Netlify**: auto-deploys on push to `master`. Build command: `npm run build`, publish dir: `dist` (configured in `netlify.toml`). Node version pinned to 18 via `netlify.toml` + `.nvmrc`.
- Netlify Forms: the hidden `<form>` in `index.html` must not be removed — Netlify's build scanner requires it.

## Modernization In Progress

This project is being modernized in phases. See the plan at `~/.claude/plans/curious-shimmying-lollipop.md`.

| Phase | Status | Focus |
|---|---|---|
| 1 — CRA → Vite | ✅ Done | Bundler, .jsx renames, Vitest |
| 2 — Data layer | ✅ Done | All content in `src/data/portfolio.js` + `src/data/images.js` |
| 3 — CSS design system | Pending | Tokens, global styles, bug fixes |
| 4 — CDN → npm | Pending | Remove all CDN scripts |
| 5 — Responsive CSS | Pending | Mobile-first, media queries |
| 6 — Animations | Pending | Framer Motion, remove Wave |
| 7 — Code quality | Pending | Prettier + Husky |
