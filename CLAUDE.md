# Agentic Solutions — Dev Reference

## Design System

### Colors
All color values are CSS custom properties defined in `src/styles/variables.css`.

| Token | Value | Use |
|-------|-------|-----|
| `--color-bg` | `#080a0f` | Page background |
| `--color-surface` | `#0f1117` | Card/section backgrounds |
| `--color-surface-alt` | `#13161e` | Nested surface (tier boxes, chips) |
| `--color-border` | `rgba(255,255,255,0.06)` | Default borders |
| `--color-border-hover` | `rgba(255,255,255,0.12)` | Hovered borders |
| `--color-accent` | `#5b8dee` | Primary blue (CTAs, links) |
| `--color-accent-soft` | `rgba(91,141,238,0.12)` | Accent tint background |
| `--color-accent-glow` | `rgba(91,141,238,0.22)` | Box-shadow glow |
| `--color-teal` | `#34d399` | Consumer/live indicator |
| `--color-teal-soft` | `rgba(52,211,153,0.1)` | Teal tint background |
| `--color-teal-border` | `rgba(52,211,153,0.25)` | Teal bordered elements |
| `--color-purple` | `#a78bfa` | Developer audience color |
| `--color-purple-soft` | `rgba(167,139,250,0.1)` | Purple tint background |
| `--color-text` | `#edf0f7` | Primary text |
| `--color-muted` | `#7c8494` | Secondary text |
| `--color-dim` | `#3d4251` | Tertiary/disabled text |

### Fonts
| Token | Value |
|-------|-------|
| `--font-display` | `'DM Serif Display', serif` — headings, logo, stat numbers |
| `--font-sans` | `'DM Sans', sans-serif` — body, labels, nav, buttons |

Fonts are loaded via Google Fonts in `index.html`.

### Spacing / Layout
- Max content width: `660px` on each side → `max(1.5rem, calc(50vw - 660px))` for horizontal padding
- Fluid typography: `clamp()` for hero title and section headings
- Section vertical padding: `100px` top and bottom

## File Structure

```
src/
  App.jsx                  — full page component (Nav, Hero, Products, WhoWeServe, About, Contact, Footer)
  main.jsx                 — React entry point, imports CSS
  styles/
    variables.css          — CSS custom properties (colors, fonts)
    app.css                — component-level CSS classes and base reset
```

## Component Patterns

- **`C` object** in `App.jsx` — maps shorthand keys (`C.accent`, `C.teal`, etc.) to CSS variable strings (`var(--color-accent)`). Use for inline dynamic styles only.
- **`F` object** in `App.jsx` — `F.display` / `F.sans` for font-family in inline styles.
- **Static styles** → CSS class in `app.css`
- **Dynamic styles** (hover transforms, prop-driven colors) → inline `style` prop using `C`/`F` references
- **Hover color changes** on simple links → CSS `:hover` in `app.css`, no JS needed

## Git Workflow

- **Never commit directly to `main`.** Always create a feature branch for any change, no matter how small.
- Branch naming: `feature/<short-description>` (e.g. `feature/footer-fixes`, `feature/new-product-card`)
- Work and commit on the feature branch locally. When the work is complete, squash all commits on the branch into one, merge into `main` locally, and push `main`. Do not push feature branches to the remote.

## Dev Server

```bash
npm run dev   # → http://localhost:3000/agentic-solutions/
```

## Build & Deploy

```bash
npm run build   # outputs to dist/
```

Pushes to `main` automatically deploy via `.github/workflows/deploy.yml`.

**Live URL:** https://kevhunte.github.io/agentic-solutions/
