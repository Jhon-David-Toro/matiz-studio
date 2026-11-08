import type { DesignSystem, SemanticToken, Theme, TokenEntry } from "./system.types";

/**
 * Raw color tokens: every step of every palette.
 *
 * @param system Design system.
 * @returns One entry per swatch, e.g. `color-primary-500`.
 */
export function paletteEntries(system: DesignSystem): TokenEntry[] {
  return system.palettes.flatMap((palette) => palette.swatches.map((swatch) => ({ name: `color-${palette.name}-${swatch.step}`, value: swatch.hex })));
}

/**
 * Value of a semantic token: a reference to its palette variable, or the plain color.
 *
 * @param token Semantic token.
 * @param asReference Whether to point at the palette variable instead of repeating the color.
 * @returns The CSS value.
 */
export function semanticValue(token: SemanticToken, asReference: boolean): string {
  return asReference && token.palette ? `var(--color-${token.ref})` : token.hex;
}

/**
 * Semantic color tokens of one theme.
 *
 * @param theme Semantic tokens of one mode.
 * @param asReference Whether the values point at palette variables.
 * @returns One entry per token, e.g. `color-primary`.
 */
export function semanticEntries(theme: Theme, asReference: boolean): TokenEntry[] {
  return Object.values(theme).map((token) => ({ name: `color-${token.name}`, value: semanticValue(token, asReference) }));
}

/**
 * Every token that does not change with the theme: fonts, type, spacing, radii and shadows.
 *
 * @param system Design system.
 * @returns The entries, with CSS values.
 */
export function foundationEntries(system: DesignSystem): TokenEntry[] {
  return [
    { name: "font-heading", value: system.fonts.heading.stack },
    { name: "font-body", value: system.fonts.body.stack },
    { name: "font-mono", value: system.fonts.mono.stack },
    ...system.type.flatMap((style) => [
      { name: `text-${style.name}-size`, value: `${style.size}px` },
      { name: `text-${style.name}-line-height`, value: `${style.lineHeight}px` },
    ]),
    ...system.spacing.map((space) => ({ name: `space-${space.name}`, value: `${space.value}px` })),
    ...system.radius.map((radius) => ({ name: `radius-${radius.name}`, value: `${radius.value}px` })),
    ...system.shadows.map((shadow) => ({ name: `shadow-${shadow.name}`, value: shadow.value })),
  ];
}

/**
 * CSS custom properties of a theme, to put in a `style` attribute (the live preview uses it).
 *
 * @param system Design system.
 * @param mode Light or dark.
 * @returns Every token as `--name: value`.
 */
export function themeStyle(system: DesignSystem, mode: keyof DesignSystem["themes"]): Record<string, string> {
  const entries = [...paletteEntries(system), ...semanticEntries(system.themes[mode], false), ...foundationEntries(system)];
  return Object.fromEntries(entries.map((entry) => [`--${entry.name}`, entry.value]));
}
