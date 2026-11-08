# Project rules

Rules for anyone (person or agent) changing this code. `pnpm check` must pass before a change is done.

## Language

- Code, identifiers, comments, docs and commit messages: English.
- Copy shown to users: Spanish (es-CO), always in a `*.constants.ts` file, never inline in JSX.

## Files and folders

- Routes in `src/app` only compose sections; they hold no logic.
- `components/ui`: generic, domain-free pieces. `components/patterns`: domain pieces reused by several sections. `components/sections`: one per page area.
- `lib/<domain>`: types, constants, pure utils and hooks shared across components.
- One folder per component: `X.tsx`, `X.types.ts`, `X.constants.ts`, `X.utils.ts`, `X.module.scss`, `X.test.tsx`, `index.ts`, plus `hooks/` and `parts/` when needed.
- Types go in `X.types.ts`, constants in `X.constants.ts`. Neither lives in `.tsx`, hooks or utils. Types and constants carry no comments; functions do.
- Imports from other folders go through their `index.ts` (`@/components/ui/Button`), except for `lib` modules, which are imported by file.

## Functions

- Every named function, hook and component has JSDoc: a sentence that says what it does, `@param` for every parameter (destructured props as `props.name`) and `@returns` when it returns something.
- Cyclomatic complexity ≤ 6, nesting depth ≤ 2, ≤ 3 parameters (use an object when you need more), ≤ 40 lines.
- Prefer pure functions in `X.utils.ts`; components and hooks wire them to React.

## React

- Server Components by default; add `"use client"` only where state, effects or browser APIs are needed.
- **Effects only call a named function**, optionally returning its cleanup: `useEffect(() => listenX(handler), [handler])`. Conditions go inside the function or as `cond ? fn() : undefined`. The rule `local/effect-calls-function` enforces it.
- Keep shareable state in the address (see `lib/system/url.utils.ts`) instead of copying it into storage with effects.
- Components accept native attributes (`...rest`) when they wrap a native element.
- Accessibility is part of the component: native elements, labels, `aria-*` where needed, keyboard support and 44 px touch targets.

## Styles

- SCSS Modules only. No Tailwind, no inline styles except CSS custom properties (`style={{ "--share": 0.4 }}`).
- Use tokens: colors, spacing, radius, motion and type come from `src/styles/foundations`. Never hard-code a color or a size that a token covers.
- Text styles through `@include typography.style("name")`; breakpoints through `@include tablet` / `@include desktop`.
- Build class lists with `cx()`.

## Tests

- Every component has tests next to it; every util is tested.
- Test behavior through roles and labels (Testing Library), not class names.

## Git

- Conventional commits, subject only: `feat: added PaletteStrip pattern`.
- One commit per component or section.

## Color engine

- All color math lives in `src/lib/color` (OKLCH conversions, gamut mapping, WCAG contrast) and is pure and tested.
- Semantic tokens are chosen by the rules in `src/lib/system/theme.constants.ts`. To change how a token is picked, change its rule, not the components.
- The accessibility test in `system.test.ts` generates the presets and 30 random systems and requires every contrast pair to pass in both themes. Keep it green.
