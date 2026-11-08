import type { Oklch, WcagLevel } from "@/lib/color/color.types";

export type Harmony = "complementary" | "analogous" | "triadic" | "split";

export type PaletteName = "primary" | "accent" | "neutral" | "success" | "warning" | "danger" | "info";

export type Step = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export type Swatch = {
  step: Step;
  hex: string;
  oklch: Oklch;
  anchor?: boolean;
};

export type Palette = {
  name: PaletteName;
  label: string;
  swatches: Swatch[];
};

export type PersonalityKey = "roundness" | "density" | "depth" | "vibrancy";

export type Personality = Record<PersonalityKey, number>;

export type FontPairingId = "modern" | "editorial" | "tech" | "friendly";

export type FontFamily = {
  name: string;
  stack: string;
};

export type FontPairing = {
  id: FontPairingId;
  label: string;
  heading: FontFamily;
  body: FontFamily;
  mono: FontFamily;
};

export type SystemConfig = {
  brand: string;
  harmony: Harmony;
  pairing: FontPairingId;
  ratio: number;
  personality: Personality;
};

export type ThemeMode = "light" | "dark";

export type SemanticName =
  | "background"
  | "surface"
  | "surface-muted"
  | "border"
  | "border-strong"
  | "text"
  | "text-muted"
  | "primary"
  | "primary-hover"
  | "on-primary"
  | "primary-text"
  | "primary-soft"
  | "on-primary-soft"
  | "accent"
  | "on-accent"
  | "success"
  | "success-soft"
  | "warning"
  | "warning-soft"
  | "danger"
  | "danger-soft"
  | "info"
  | "info-soft"
  | "focus";

export type SemanticToken = {
  name: SemanticName;
  ref: string;
  hex: string;
  palette?: PaletteName;
  step?: Step;
};

export type Theme = Record<SemanticName, SemanticToken>;

export type PaletteRule = {
  name: SemanticName;
  palette: PaletteName;
  steps: Step[];
  against?: SemanticName;
  min?: number;
  holdsText?: boolean;
  preferAnchor?: boolean;
  vivid?: boolean;
};

export type WhiteRule = {
  name: SemanticName;
  white: true;
};

export type OnRule = {
  name: SemanticName;
  on: SemanticName;
};

export type ShiftRule = {
  name: SemanticName;
  from: SemanticName;
  by: number;
};

export type SemanticRule = PaletteRule | WhiteRule | OnRule | ShiftRule;

export type RuleContext = {
  dark: string;
  against?: string;
};

export type TypeToken = {
  name: string;
  size: number;
  lineHeight: number;
  weight: number;
  role: "heading" | "body";
};

export type DimensionToken = {
  name: string;
  value: number;
};

export type ShadowToken = {
  name: string;
  value: string;
  y: number;
  blur: number;
  color: string;
};

export type TokenEntry = {
  name: string;
  value: string;
};

export type ExportFormat = "css" | "scss" | "json";

export type DesignSystem = {
  config: SystemConfig;
  palettes: Palette[];
  themes: Record<ThemeMode, Theme>;
  fonts: FontPairing;
  type: TypeToken[];
  spacing: DimensionToken[];
  radius: DimensionToken[];
  shadows: ShadowToken[];
};

export type ContrastPair = {
  id: string;
  label: string;
  foreground: SemanticName;
  background: SemanticName;
  min: number;
};

export type ContrastCheck = ContrastPair & {
  foregroundHex: string;
  backgroundHex: string;
  ratio: number;
  level: WcagLevel;
  passes: boolean;
};

export type Preset = {
  id: string;
  label: string;
  description: string;
  config: SystemConfig;
};
