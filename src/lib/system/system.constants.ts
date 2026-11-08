import type { FontPairing, Harmony, PaletteName, Personality, PersonalityKey, Step, SystemConfig } from "./system.types";

export const STEPS: Step[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export const LIGHTNESS: number[] = [0.975, 0.94, 0.885, 0.805, 0.715, 0.625, 0.545, 0.465, 0.385, 0.305, 0.225];

export const CHROMA_CURVE: number[] = [0.12, 0.25, 0.45, 0.7, 0.9, 1, 0.97, 0.88, 0.75, 0.6, 0.45];

export const PALETTE_LABELS: Record<PaletteName, string> = {
  primary: "Primario",
  accent: "Acento",
  neutral: "Neutro",
  success: "Éxito",
  warning: "Advertencia",
  danger: "Peligro",
  info: "Información",
};

export const STATUS_HUES: Record<"success" | "warning" | "danger" | "info", number> = {
  success: 152,
  warning: 72,
  danger: 30,
  info: 245,
};

export const STATUS_CHROMA = 0.16;

export const NEUTRAL_CHROMA = 0.016;

export const MIN_BRAND_CHROMA = 0.04;

export const MIN_ACCENT_CHROMA = 0.12;

export const HARMONY_OFFSETS: Record<Harmony, number> = {
  complementary: 180,
  analogous: 35,
  triadic: 120,
  split: 150,
};

export const HARMONY_OPTIONS: { value: Harmony; label: string }[] = [
  { value: "complementary", label: "Complementario" },
  { value: "analogous", label: "Análogo" },
  { value: "triadic", label: "Triádico" },
  { value: "split", label: "Complementario dividido" },
];

export const FONT_PAIRINGS: FontPairing[] = [
  {
    id: "modern",
    label: "Moderna · Inter",
    heading: { name: "Inter", stack: '"Inter Variable", system-ui, sans-serif' },
    body: { name: "Inter", stack: '"Inter Variable", system-ui, sans-serif' },
    mono: { name: "JetBrains Mono", stack: '"JetBrains Mono Variable", ui-monospace, monospace' },
  },
  {
    id: "editorial",
    label: "Editorial · Fraunces + Inter",
    heading: { name: "Fraunces", stack: '"Fraunces Variable", Georgia, serif' },
    body: { name: "Inter", stack: '"Inter Variable", system-ui, sans-serif' },
    mono: { name: "JetBrains Mono", stack: '"JetBrains Mono Variable", ui-monospace, monospace' },
  },
  {
    id: "tech",
    label: "Técnica · Space Grotesk + Inter",
    heading: { name: "Space Grotesk", stack: '"Space Grotesk Variable", system-ui, sans-serif' },
    body: { name: "Inter", stack: '"Inter Variable", system-ui, sans-serif' },
    mono: { name: "JetBrains Mono", stack: '"JetBrains Mono Variable", ui-monospace, monospace' },
  },
  {
    id: "friendly",
    label: "Amigable · Bricolage + DM Sans",
    heading: { name: "Bricolage Grotesque", stack: '"Bricolage Grotesque Variable", system-ui, sans-serif' },
    body: { name: "DM Sans", stack: '"DM Sans Variable", system-ui, sans-serif' },
    mono: { name: "JetBrains Mono", stack: '"JetBrains Mono Variable", ui-monospace, monospace' },
  },
];

export const TYPE_RATIOS: { value: number; label: string }[] = [
  { value: 1.125, label: "1.125 · Segunda mayor" },
  { value: 1.2, label: "1.2 · Tercera menor" },
  { value: 1.25, label: "1.25 · Tercera mayor" },
  { value: 1.333, label: "1.333 · Cuarta justa" },
  { value: 1.5, label: "1.5 · Quinta justa" },
];

export const TYPE_BASE = 16;

export const TYPE_STEPS: { name: string; exponent: number }[] = [
  { name: "xs", exponent: -2 },
  { name: "sm", exponent: -1 },
  { name: "base", exponent: 0 },
  { name: "lg", exponent: 1 },
  { name: "xl", exponent: 2 },
  { name: "2xl", exponent: 3 },
  { name: "3xl", exponent: 4 },
  { name: "4xl", exponent: 5 },
];

export const HEADING_FROM_EXPONENT = 2;

export const SPACING_MULTIPLIERS: number[] = [1, 2, 3, 4, 6, 8, 12, 16, 24];

export const SPACING_UNIT_RANGE: [number, number] = [3, 5];

export const RADIUS_RANGE: [number, number] = [0, 14];

export const RADIUS_FACTORS: { name: string; factor: number }[] = [
  { name: "sm", factor: 0.5 },
  { name: "md", factor: 1 },
  { name: "lg", factor: 1.6 },
  { name: "xl", factor: 2.4 },
];

export const RADIUS_FULL = 9999;

export const VIBRANCY_RANGE: [number, number] = [0.35, 1.25];

export const SHADOW_ALPHA_RANGE: [number, number] = [0, 0.2];

export const SHADOW_LEVELS: { name: string; y: number; blur: number }[] = [
  { name: "sm", y: 1, blur: 3 },
  { name: "md", y: 4, blur: 12 },
  { name: "lg", y: 12, blur: 32 },
];

export const PERSONALITY_CONTROLS: { key: PersonalityKey; label: string; low: string; high: string }[] = [
  { key: "roundness", label: "Redondez", low: "Recto", high: "Redondo" },
  { key: "density", label: "Densidad", low: "Compacto", high: "Aireado" },
  { key: "depth", label: "Profundidad", low: "Plano", high: "Elevado" },
  { key: "vibrancy", label: "Vibrancia", low: "Sobrio", high: "Intenso" },
];

export const DEFAULT_PERSONALITY: Personality = { roundness: 45, density: 50, depth: 35, vibrancy: 60 };

export const DEFAULT_CONFIG: SystemConfig = {
  brand: "#5b3cff",
  harmony: "complementary",
  pairing: "tech",
  ratio: 1.25,
  personality: DEFAULT_PERSONALITY,
};
