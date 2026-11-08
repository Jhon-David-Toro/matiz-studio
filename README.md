# Matiz

**One color and a personality become a complete, accessible design system.**

Pick a brand color and move four personality sliders (roundness, density, depth and vibrancy). Matiz generates perceptually even OKLCH palettes, a tinted neutral, status colors, light and dark themes that pass WCAG 2.2 AA by construction, a modular type scale, spacing, radii and shadows. It shows them on a live sample product and exports them as CSS, SCSS or W3C design tokens for Figma.

> **Status: `0.1.0`, front end only.** Everything runs in the browser. The whole system lives in the URL, so a link is enough to share it.

## What makes it different

| Feature | How |
| --- | --- |
| **Personality → tokens** | Four sliders drive the radii, the spacing unit, the shadow strength and the chroma of every palette. |
| **Perceptual palettes** | Eleven steps per hue in OKLCH, mapped to sRGB by lowering only the chroma. The exact brand color is kept in the primary scale. |
| **Accessible by construction** | Each semantic token is picked by a rule (`theme.constants.ts`) that tries palette steps until it reaches 4.5:1 for text or 3:1 for borders and focus. A test runs the presets and 30 random systems to prove it. |
| **Color harmonies** | The accent comes from complementary, analogous, triadic or split-complementary hues, choosing its most vivid readable step. |
| **Color-vision simulation** | The preview can render as protanopia, deuteranopia, tritanopia or achromatopsia, using SVG color matrices. |
| **Light and dark** | Both themes come from the same palettes, with different rules. |
| **Exports** | CSS custom properties (`[data-theme="dark"]`), Sass variables, and W3C Design Tokens JSON with aliases. The JSON works with Tokens Studio for Figma and Style Dictionary. |
| **Shareable** | The configuration is encoded in the query string (`?c=5b3cff&h=complementary&f=tech&r=1.25&p=45-50-35-60`). |
| **Presets and Remix** | Fintech, Editorial, Juguetón, Brutalista and Bienestar, plus a random generator. |

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), statically prerendered |
| UI | React 19 with the React Compiler enabled |
| Language | TypeScript (strict) |
| Styling | SCSS Modules and design tokens in `src/styles`. No Tailwind, no CSS-in-JS. |
| Color math | Hand-written OKLab/OKLCH and WCAG utilities in `src/lib/color`, with no dependencies |
| Icons | `lucide-react`, imported through `@/components/ui/Icon` |
| Fonts | Inter, Space Grotesk, Fraunces, Bricolage Grotesque, DM Sans and JetBrains Mono, self-hosted with Fontsource |
| Tests | Vitest, Testing Library, jsdom |
| Package manager | pnpm |

## Quick start

Requirements: Node.js 20 or later and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>. No environment variables are needed.

## Scripts

```bash
pnpm dev            # development server
pnpm build          # production build (also type-checks)
pnpm start          # serve the production build
pnpm typecheck      # tsc --noEmit
pnpm lint           # eslint (complexity, JSDoc and effect rules included)
pnpm test           # vitest run
pnpm test:coverage  # coverage report in coverage/index.html
pnpm check          # typecheck + lint + test + build
```

## Project structure

```
src/
  app/                    Route and metadata. The page only renders the Editor.
  components/
    ui/                   Generic: Button, Slider, ColorField, Tabs, SegmentedControl, SelectField, Snackbar…
    patterns/             Domain pieces: PaletteStrip, ContrastList, TypeSpecimen, ScaleList, CodeBlock
    sections/             Editor, AppHeader, ControlsPanel, Workspace, PreviewPanel, TokensPanel,
                          AccessibilityPanel, ExportPanel
  lib/
    color/                OKLCH ⇄ sRGB, gamut mapping, WCAG contrast, color-vision matrices
    system/               Generator: scales, theme rules, personality, type, exports, URL, presets, remix
    shared/               cx, clipboard, download, address helpers
  styles/                 App tokens (foundations), mixins (abstracts), reset (base)
eslint-rules/             Local ESLint rule: effects only call a function
```

How a configuration becomes a system (`lib/system/system.utils.ts`):

```
SystemConfig ─┬─ buildPalettes ── 7 OKLCH scales (brand anchored)
              ├─ buildTheme ───── light + dark semantic tokens (rules + contrast)
              ├─ typeScale ────── modular sizes on a 4px grid
              └─ personality ──── spacing · radius · shadows
                         │
                         ├─ themeStyle → live preview (custom properties)
                         └─ exportSystem → CSS · SCSS · W3C JSON
```

Every component lives in its own folder with `X.tsx`, `X.types.ts`, `X.constants.ts`, `X.utils.ts`, `X.module.scss`, `X.test.tsx`, `index.ts`, and `hooks/` and `parts/` when needed.

## Conventions

The full rules are in [`CONTRIBUTING.md`](./CONTRIBUTING.md). The main ones:

- **Low complexity:** cyclomatic complexity ≤ 6 per function, nesting ≤ 2, ≤ 3 parameters and ≤ 40 lines, all enforced by ESLint.
- **Effects only call a named function**, for example `useEffect(() => syncAddress(config), [config])`. This is enforced by the local rule `local/effect-calls-function`.
- **JSDoc** on every named function, hook and component, enforced by `eslint-plugin-jsdoc`.
- **Types** go in `X.types.ts` and **constants and copy** in `X.constants.ts`. Code is in English; the UI is in Spanish.
- **SCSS Modules and tokens only.** The preview uses only the generated custom properties, so it shows exactly what the export produces.
- **Git:** conventional commits, subject only.
