import { contrastRatio, readableOn } from "@/lib/color/contrast.utils";

import { STEPS } from "./system.constants";
import { TEXT_MIN, THEME_RULES, WHITE, WHITE_REF } from "./theme.constants";
import type {
  OnRule,
  Palette,
  PaletteRule,
  RuleContext,
  SemanticRule,
  SemanticToken,
  ShiftRule,
  Step,
  Swatch,
  Theme,
  ThemeMode,
} from "./system.types";


/**
 * Chroma of the swatch at a step.
 *
 * @param swatches Scale of a palette.
 * @param step Step of the scale.
 * @returns The OKLCH chroma; 0 when the step is missing.
 */
function chromaAt(swatches: Swatch[], step: Step): number {
  return swatches.find((swatch) => swatch.step === step)?.oklch.c ?? 0;
}

/**
 * Swatch of a palette at a step.
 *
 * @param palettes Every palette.
 * @param name Name of the palette.
 * @param step Step of the scale.
 * @returns The semantic value of that swatch, without a token name.
 */
function swatchAt(palettes: Palette[], name: PaletteRule["palette"], step: Step): Omit<SemanticToken, "name"> {
  const swatch = palettes.find((item) => item.name === name)?.swatches.find((item) => item.step === step);
  return { ref: `${name}-${step}`, hex: swatch?.hex ?? WHITE, palette: name, step };
}

/**
 * Whether a candidate meets a rule: contrast with its reference token and, for button colors, room for readable text.
 *
 * @param rule Rule being resolved.
 * @param hex Candidate color.
 * @param context Darkest neutral (the dark text color) and the hex of the reference token.
 * @param context.dark Darkest neutral of the palette.
 * @param context.against Color the candidate must contrast with, if any.
 * @returns True when the candidate can be used.
 */
function meetsRule(rule: PaletteRule, hex: string, { dark, against }: RuleContext): boolean {
  const contrastOk = !against || contrastRatio(hex, against) >= (rule.min ?? 0);
  const textOk = !rule.holdsText || Math.max(contrastRatio(hex, WHITE), contrastRatio(hex, dark)) >= TEXT_MIN;
  return contrastOk && textOk;
}

/**
 * Candidate steps of a rule in the order they are tried: the brand step first when asked, or the most saturated first.
 *
 * @param rule Rule being resolved.
 * @param palettes Every palette.
 * @returns The candidate values.
 */
function candidatesOf(rule: PaletteRule, palettes: Palette[]): Omit<SemanticToken, "name">[] {
  const swatches = palettes.find((item) => item.name === rule.palette)?.swatches ?? [];
  const anchor = rule.preferAnchor ? swatches.filter((swatch) => swatch.anchor).map((swatch) => swatch.step) : [];
  const steps = rule.vivid ? [...rule.steps].sort((a, b) => chromaAt(swatches, b) - chromaAt(swatches, a)) : rule.steps;
  return [...new Set([...anchor, ...steps])].map((step) => swatchAt(palettes, rule.palette, step));
}

/**
 * Picks the first step of a rule that reaches its contrast, or the last one when none does.
 *
 * @param rule Rule with its palette, candidate steps and target contrast.
 * @param palettes Every palette.
 * @param resolved Tokens resolved so far.
 * @returns The value of the token.
 */
function resolvePalette(rule: PaletteRule, palettes: Palette[], resolved: Partial<Theme>): Omit<SemanticToken, "name"> {
  const candidates = candidatesOf(rule, palettes);
  const context = { dark: swatchAt(palettes, "neutral", 950).hex, against: rule.against && resolved[rule.against]?.hex };
  return candidates.find((candidate) => meetsRule(rule, candidate.hex, context)) ?? candidates[candidates.length - 1];
}

/**
 * Moves a resolved token some steps along its scale, as hover states do.
 *
 * @param rule Rule with the source token and how many steps to move.
 * @param palettes Every palette.
 * @param resolved Tokens resolved so far.
 * @returns The value of the token.
 */
function resolveShift(rule: ShiftRule, palettes: Palette[], resolved: Partial<Theme>): Omit<SemanticToken, "name"> {
  const source = resolved[rule.from];
  if (!source?.palette || !source.step) return { ref: WHITE_REF, hex: WHITE };
  const index = Math.min(STEPS.length - 1, Math.max(0, STEPS.indexOf(source.step) + rule.by));
  return swatchAt(palettes, source.palette, STEPS[index]);
}

/**
 * White or the darkest neutral, whichever reads better on a resolved token.
 *
 * @param rule Rule with the background token.
 * @param palettes Every palette.
 * @param resolved Tokens resolved so far.
 * @returns The value of the token.
 */
function resolveOn(rule: OnRule, palettes: Palette[], resolved: Partial<Theme>): Omit<SemanticToken, "name"> {
  const dark = swatchAt(palettes, "neutral", 950);
  const background = resolved[rule.on]?.hex ?? WHITE;
  return readableOn(background) === WHITE ? { ref: WHITE_REF, hex: WHITE } : dark;
}

/**
 * Resolves one rule of any kind.
 *
 * @param rule Rule to resolve.
 * @param palettes Every palette.
 * @param resolved Tokens resolved so far.
 * @returns The token.
 */
function resolveRule(rule: SemanticRule, palettes: Palette[], resolved: Partial<Theme>): SemanticToken {
  if ("white" in rule) return { name: rule.name, ref: WHITE_REF, hex: WHITE };
  if ("on" in rule) return { name: rule.name, ...resolveOn(rule, palettes, resolved) };
  if ("from" in rule) return { name: rule.name, ...resolveShift(rule, palettes, resolved) };
  return { name: rule.name, ...resolvePalette(rule, palettes, resolved) };
}

/**
 * Semantic tokens of a theme, picked from the palettes by the rules of that mode.
 *
 * @param palettes Every palette.
 * @param mode Light or dark.
 * @returns Every semantic token with the swatch it points at.
 */
export function buildTheme(palettes: Palette[], mode: ThemeMode): Theme {
  return THEME_RULES[mode].reduce<Partial<Theme>>((resolved, rule) => ({ ...resolved, [rule.name]: resolveRule(rule, palettes, resolved) }), {}) as Theme;
}
