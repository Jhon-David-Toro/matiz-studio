import type { SemanticRule, ThemeMode } from "./system.types";

/*
 * How every semantic token is picked. Rules run in order; `against` + `min` choose the first step that reaches that
 * contrast with a token resolved earlier (4.5 for text, 3 for components); `holdsText` also asks for white or near-black
 * text to reach 4.5 on it. `preferAnchor` tries the exact brand color first; `vivid` tries the most saturated steps first.
 * So the system is accessible by construction.
 */
export const THEME_RULES: Record<ThemeMode, SemanticRule[]> = {
  light: [
    { name: "background", palette: "neutral", steps: [50] },
    { name: "surface", white: true },
    { name: "surface-muted", palette: "neutral", steps: [100] },
    { name: "border", palette: "neutral", steps: [200] },
    { name: "border-strong", palette: "neutral", steps: [400, 500, 600], against: "surface", min: 3 },
    { name: "text", palette: "neutral", steps: [900, 950] },
    { name: "text-muted", palette: "neutral", steps: [600, 700, 800], against: "surface", min: 4.5 },
    { name: "primary", palette: "primary", steps: [500, 600, 700, 800, 900], against: "surface", min: 3, holdsText: true, preferAnchor: true },
    { name: "primary-hover", from: "primary", by: 1 },
    { name: "on-primary", on: "primary" },
    { name: "primary-text", palette: "primary", steps: [600, 700, 800, 900, 950], against: "surface", min: 4.5 },
    { name: "primary-soft", palette: "primary", steps: [100] },
    { name: "on-primary-soft", palette: "primary", steps: [700, 800, 900, 950], against: "primary-soft", min: 4.5 },
    { name: "accent", palette: "accent", steps: [300, 400, 500, 600, 700], holdsText: true, vivid: true },
    { name: "on-accent", on: "accent" },
    { name: "success", palette: "success", steps: [600, 700, 800, 900], against: "surface", min: 4.5 },
    { name: "success-soft", palette: "success", steps: [100] },
    { name: "warning", palette: "warning", steps: [600, 700, 800, 900], against: "surface", min: 4.5 },
    { name: "warning-soft", palette: "warning", steps: [100] },
    { name: "danger", palette: "danger", steps: [600, 700, 800, 900], against: "surface", min: 4.5 },
    { name: "danger-soft", palette: "danger", steps: [100] },
    { name: "info", palette: "info", steps: [600, 700, 800, 900], against: "surface", min: 4.5 },
    { name: "info-soft", palette: "info", steps: [100] },
    { name: "focus", palette: "primary", steps: [500, 600, 700], against: "background", min: 3 },
  ],
  dark: [
    { name: "background", palette: "neutral", steps: [950] },
    { name: "surface", palette: "neutral", steps: [900] },
    { name: "surface-muted", palette: "neutral", steps: [800] },
    { name: "border", palette: "neutral", steps: [800] },
    { name: "border-strong", palette: "neutral", steps: [600, 500, 400], against: "surface", min: 3 },
    { name: "text", palette: "neutral", steps: [50] },
    { name: "text-muted", palette: "neutral", steps: [400, 300, 200], against: "surface", min: 4.5 },
    { name: "primary", palette: "primary", steps: [400, 300, 500, 200], against: "surface", min: 3, holdsText: true, preferAnchor: true },
    { name: "primary-hover", from: "primary", by: -1 },
    { name: "on-primary", on: "primary" },
    { name: "primary-text", palette: "primary", steps: [300, 200, 100, 50], against: "surface", min: 4.5 },
    { name: "primary-soft", palette: "primary", steps: [900] },
    { name: "on-primary-soft", palette: "primary", steps: [200, 100, 50], against: "primary-soft", min: 4.5 },
    { name: "accent", palette: "accent", steps: [200, 300, 400, 500], against: "surface", min: 3, holdsText: true, vivid: true },
    { name: "on-accent", on: "accent" },
    { name: "success", palette: "success", steps: [400, 300, 200, 100], against: "surface", min: 4.5 },
    { name: "success-soft", palette: "success", steps: [950] },
    { name: "warning", palette: "warning", steps: [400, 300, 200, 100], against: "surface", min: 4.5 },
    { name: "warning-soft", palette: "warning", steps: [950] },
    { name: "danger", palette: "danger", steps: [400, 300, 200, 100], against: "surface", min: 4.5 },
    { name: "danger-soft", palette: "danger", steps: [950] },
    { name: "info", palette: "info", steps: [400, 300, 200, 100], against: "surface", min: 4.5 },
    { name: "info-soft", palette: "info", steps: [950] },
    { name: "focus", palette: "primary", steps: [400, 300], against: "background", min: 3 },
  ],
};

export const WHITE_REF = "white";

export const WHITE = "#ffffff";

export const TEXT_MIN = 4.5;
