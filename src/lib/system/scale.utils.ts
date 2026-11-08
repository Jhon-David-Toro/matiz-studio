import { clampToGamut, hexToOklch, oklchToHex } from "@/lib/color/color.utils";

import {
  CHROMA_CURVE,
  HARMONY_OFFSETS,
  LIGHTNESS,
  MIN_ACCENT_CHROMA,
  MIN_BRAND_CHROMA,
  NEUTRAL_CHROMA,
  PALETTE_LABELS,
  STATUS_CHROMA,
  STATUS_HUES,
  STEPS,
} from "./system.constants";
import { chromaFactor } from "./personality.utils";
import type { Palette, PaletteName, Swatch, SystemConfig } from "./system.types";

/**
 * Eleven-step scale of one hue: lightness falls evenly in OKLCH and chroma peaks in the middle, so every step
 * looks equally spaced to the eye.
 *
 * @param hue Hue in degrees.
 * @param chroma Peak chroma of the scale.
 * @returns The swatches from 50 to 950, fitted to sRGB.
 */
export function buildScale(hue: number, chroma: number): Swatch[] {
  return STEPS.map((step, index) => {
    const oklch = clampToGamut({ l: LIGHTNESS[index], c: chroma * CHROMA_CURVE[index], h: hue });
    return { step, oklch, hex: oklchToHex(oklch) };
  });
}

/**
 * Puts the exact brand color in the scale, replacing the step with the closest lightness.
 *
 * @param swatches Scale of the brand hue.
 * @param brand Brand color as `#rrggbb`.
 * @returns The scale with the brand color marked as its anchor.
 */
export function anchorBrand(swatches: Swatch[], brand: string): Swatch[] {
  const oklch = hexToOklch(brand);
  const distances = swatches.map((swatch) => Math.abs(swatch.oklch.l - oklch.l));
  const closest = distances.indexOf(Math.min(...distances));
  return swatches.map((swatch, index) => (index === closest ? { ...swatch, hex: brand, oklch, anchor: true } : swatch));
}

/**
 * Palette with its label.
 *
 * @param name Name of the palette.
 * @param swatches Its scale.
 * @returns The palette.
 */
function palette(name: PaletteName, swatches: Swatch[]): Palette {
  return { name, label: PALETTE_LABELS[name], swatches };
}

/**
 * Every palette of the system: primary (anchored to the brand), accent (from the harmony), a neutral tinted with
 * the brand hue and the four status colors.
 *
 * @param config Brand color, harmony and personality.
 * @returns The seven palettes.
 */
export function buildPalettes(config: SystemConfig): Palette[] {
  const brand = hexToOklch(config.brand);
  const factor = chromaFactor(config.personality.vibrancy);
  const accentHue = (brand.h + HARMONY_OFFSETS[config.harmony]) % 360;
  const status = (Object.keys(STATUS_HUES) as (keyof typeof STATUS_HUES)[]).map((name) =>
    palette(name, buildScale(STATUS_HUES[name], STATUS_CHROMA * factor)),
  );
  return [
    palette("primary", anchorBrand(buildScale(brand.h, Math.max(brand.c, MIN_BRAND_CHROMA) * factor), config.brand)),
    palette("accent", buildScale(accentHue, Math.max(brand.c, MIN_ACCENT_CHROMA) * factor)),
    palette("neutral", buildScale(brand.h, NEUTRAL_CHROMA * factor)),
    ...status,
  ];
}
