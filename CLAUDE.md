# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server on localhost:3000
npm run build      # production build
npm test           # run Jest with coverage
npm run testlint   # ESLint check (quiet mode)
npm run fix        # ESLint auto-fix
npm run deploy     # build + publish to GitHub Pages via gh-pages
```

Run a single test file:
```bash
npx react-scripts test src/__test__/App.test.js --watchAll=false
```

## Architecture

Single-page portfolio app built with Create React App. No routing — navigation uses `react-scroll` to anchor-scroll to named `id`s within the page. Layout is a vertical stack rendered in `App.js`:

```
NavBar → Welcome → About → Projects → Contact → Footer
```

- **Components** (`src/components/`): `NavBar` and `Footer` — shared layout pieces.
- **Pages** (`src/pages/`): Each section is a standalone stateless functional component with a co-located CSS file. Images live in `src/pages/images/`.
- **Contact form** uses Netlify Forms (HTML `method="post"` with a hidden `form-name` input). No JS form-submission logic — Netlify handles it at the CDN layer.
- **NavBar** uses `react-animated-text` (`<Wave>`) for the animated link text and `react-scroll` `<Link>` for smooth scrolling.
- **Styling**: Bootstrap grid via CDN (loaded in `public/index.html`), AOS (Animate On Scroll) for entry animations on project cards, plus per-component CSS files.
- **Tests**: One smoke test in `src/__test__/App.test.js` that mounts and unmounts the full `<App />`.

## Deployment

Deployed to Netlify automatically on push to `master`. Also supports manual deploy to GitHub Pages via `npm run deploy`.
