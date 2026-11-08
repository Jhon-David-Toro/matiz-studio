import { radiusScale, shadowScale, spacingScale } from "./personality.utils";
import { buildPalettes } from "./scale.utils";
import type { DesignSystem, SystemConfig } from "./system.types";
import { buildTheme } from "./theme.utils";
import { findPairing, typeScale } from "./typography.utils";

/**
 * Whole design system from a configuration: palettes, light and dark themes, fonts, type, spacing, radii and shadows.
 * The same configuration always gives the same system.
 *
 * @param config Brand color, harmony, fonts, type ratio and personality.
 * @returns The design system.
 */
export function generateSystem(config: SystemConfig): DesignSystem {
  const palettes = buildPalettes(config);
  const light = buildTheme(palettes, "light");
  return {
    config,
    palettes,
    themes: { light, dark: buildTheme(palettes, "dark") },
    fonts: findPairing(config.pairing),
    type: typeScale(config.ratio),
    spacing: spacingScale(config.personality.density),
    radius: radiusScale(config.personality.roundness),
    shadows: shadowScale(config.personality.depth, light.text.hex),
  };
}
