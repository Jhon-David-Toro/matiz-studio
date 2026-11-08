import { DARK_SELECTOR, FILE_HEADER } from "./export.constants";
import type { DesignSystem, ExportFormat, Theme, TokenEntry } from "./system.types";
import { foundationEntries, paletteEntries, semanticEntries } from "./tokens.utils";

/**
 * Lines of CSS custom properties.
 *
 * @param entries Tokens to write.
 * @returns One indented `--name: value;` line per token.
 */
function cssLines(entries: TokenEntry[]): string {
  return entries.map((entry) => `  --${entry.name}: ${entry.value};`).join("\n");
}

/**
 * Design system as CSS custom properties: palettes and foundations in `:root`, the light theme in `:root` and the dark
 * one under `[data-theme="dark"]`.
 *
 * @param system Design system.
 * @returns The CSS file.
 */
export function toCss(system: DesignSystem): string {
  const root = [...paletteEntries(system), ...foundationEntries(system), ...semanticEntries(system.themes.light, true)];
  return `/* ${FILE_HEADER} */\n:root {\n${cssLines(root)}\n}\n\n${DARK_SELECTOR} {\n${cssLines(semanticEntries(system.themes.dark, true))}\n}\n`;
}

/**
 * Semantic tokens of a theme as Sass variables that point at the palette variables.
 *
 * @param theme Semantic tokens of one mode.
 * @param prefix Prefix of the mode, e.g. `light`.
 * @returns One line per token.
 */
function scssTheme(theme: Theme, prefix: string): string {
  return Object.values(theme)
    .map((token) => `$${prefix}-${token.name}: ${token.palette ? `$color-${token.ref}` : token.hex};`)
    .join("\n");
}

/**
 * Design system as Sass variables.
 *
 * @param system Design system.
 * @returns The SCSS file.
 */
export function toScss(system: DesignSystem): string {
  const globals = [...paletteEntries(system), ...foundationEntries(system)].map((entry) => `$${entry.name}: ${entry.value};`).join("\n");
  return `// ${FILE_HEADER}\n${globals}\n\n// Light theme\n${scssTheme(system.themes.light, "light")}\n\n// Dark theme\n${scssTheme(system.themes.dark, "dark")}\n`;
}

/**
 * Token in the W3C Design Tokens format.
 *
 * @param type `$type` of the token.
 * @param value `$value` of the token.
 * @returns The token object.
 */
function dtcg(type: string, value: unknown): Record<string, unknown> {
  return { $type: type, $value: value };
}

/**
 * Tokens of a list as a W3C group, keyed by name.
 *
 * @param items Named items.
 * @param toToken Turns an item into a token.
 * @returns The group.
 */
function group<T extends { name: string }>(items: T[], toToken: (item: T) => Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(items.map((item) => [item.name, toToken(item)]));
}

/**
 * Semantic tokens of a theme as W3C aliases (`{color.primary.600}`).
 *
 * @param theme Semantic tokens of one mode.
 * @returns The group.
 */
function dtcgTheme(theme: Theme): Record<string, unknown> {
  return group(Object.values(theme), (token) => dtcg("color", token.palette ? `{color.${token.palette}.${token.step}}` : token.hex));
}

/**
 * Design system in the W3C Design Tokens format, which Tokens Studio for Figma and Style Dictionary read.
 *
 * @param system Design system.
 * @returns The JSON file.
 */
export function toJson(system: DesignSystem): string {
  const tokens = {
    color: Object.fromEntries(system.palettes.map((palette) => [palette.name, group(palette.swatches.map((swatch) => ({ ...swatch, name: String(swatch.step) })), (swatch) => dtcg("color", swatch.hex))])),
    theme: { light: dtcgTheme(system.themes.light), dark: dtcgTheme(system.themes.dark) },
    font: { heading: dtcg("fontFamily", system.fonts.heading.name), body: dtcg("fontFamily", system.fonts.body.name), mono: dtcg("fontFamily", system.fonts.mono.name) },
    fontSize: group(system.type, (style) => dtcg("dimension", `${style.size}px`)),
    lineHeight: group(system.type, (style) => dtcg("dimension", `${style.lineHeight}px`)),
    space: group(system.spacing, (space) => dtcg("dimension", `${space.value}px`)),
    radius: group(system.radius, (radius) => dtcg("dimension", `${radius.value}px`)),
    shadow: group(system.shadows, (shadow) => dtcg("shadow", { color: shadow.color, offsetX: "0px", offsetY: `${shadow.y}px`, blur: `${shadow.blur}px`, spread: "0px" })),
  };
  return `${JSON.stringify(tokens, null, 2)}\n`;
}

/**
 * Semantic tokens of a theme as plain colors keyed by name.
 *
 * @param theme Semantic tokens of one mode.
 * @returns The colors.
 */
function plainTheme(theme: Theme): Record<string, string> {
  return Object.fromEntries(Object.values(theme).map((token) => [token.name, token.hex]));
}

/**
 * Design system as a typed TypeScript object, for CSS-in-JS, React Native or charts.
 *
 * @param system Design system.
 * @returns The TypeScript file.
 */
export function toTypeScript(system: DesignSystem): string {
  const tokens = {
    color: Object.fromEntries(system.palettes.map((palette) => [palette.name, Object.fromEntries(palette.swatches.map((swatch) => [swatch.step, swatch.hex]))])),
    theme: { light: plainTheme(system.themes.light), dark: plainTheme(system.themes.dark) },
    font: { heading: system.fonts.heading.stack, body: system.fonts.body.stack, mono: system.fonts.mono.stack },
    text: Object.fromEntries(system.type.map((style) => [style.name, { size: style.size, lineHeight: style.lineHeight, weight: style.weight }])),
    space: Object.fromEntries(system.spacing.map((space) => [space.name, space.value])),
    radius: Object.fromEntries(system.radius.map((radius) => [radius.name, radius.value])),
    shadow: Object.fromEntries(system.shadows.map((shadow) => [shadow.name, shadow.value])),
  };
  return `// ${FILE_HEADER}
export const tokens = ${JSON.stringify(tokens, null, 2)} as const;

export type Tokens = typeof tokens;
`;
}

const EXPORTERS: Record<ExportFormat, (system: DesignSystem) => string> = { css: toCss, scss: toScss, json: toJson, ts: toTypeScript };

/**
 * Design system written in a format.
 *
 * @param system Design system.
 * @param format File format.
 * @returns The file contents.
 */
export function exportSystem(system: DesignSystem, format: ExportFormat): string {
  return EXPORTERS[format](system);
}
