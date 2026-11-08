import { hexToRgb } from "@/lib/color/color.utils";

import {
  RADIUS_FACTORS,
  RADIUS_FULL,
  RADIUS_RANGE,
  SHADOW_ALPHA_RANGE,
  SHADOW_LEVELS,
  SPACING_MULTIPLIERS,
  SPACING_UNIT_RANGE,
  VIBRANCY_RANGE,
} from "./system.constants";
import type { DimensionToken, ShadowToken } from "./system.types";

/**
 * Value between two ends for a slider position.
 *
 * @param range Value at 0 and value at 100.
 * @param position Slider position from 0 to 100.
 * @returns The interpolated value.
 */
export function mix(range: [number, number], position: number): number {
  return range[0] + (range[1] - range[0]) * (position / 100);
}

/**
 * Corner radii from the roundness of the personality.
 *
 * @param roundness Slider from 0 (square) to 100 (round).
 * @returns The radius tokens, from `sm` to `full`, in pixels.
 */
export function radiusScale(roundness: number): DimensionToken[] {
  const base = mix(RADIUS_RANGE, roundness);
  const steps = RADIUS_FACTORS.map(({ name, factor }) => ({ name, value: Math.round(base * factor) }));
  return [...steps, { name: "full", value: RADIUS_FULL }];
}

/**
 * Spacing scale from the density of the personality: a base unit times fixed multipliers.
 *
 * @param density Slider from 0 (compact) to 100 (airy).
 * @returns The spacing tokens, named by multiplier, in pixels.
 */
export function spacingScale(density: number): DimensionToken[] {
  const unit = mix(SPACING_UNIT_RANGE, density);
  return SPACING_MULTIPLIERS.map((multiplier) => ({ name: String(multiplier), value: Math.round(unit * multiplier) }));
}

/**
 * Shadows from the depth of the personality, tinted with the darkest neutral so they match the palette.
 *
 * @param depth Slider from 0 (flat, no shadows) to 100 (raised).
 * @param tint Color of the shadow as `#rrggbb`.
 * @returns The shadow tokens as CSS `box-shadow` values.
 */
export function shadowScale(depth: number, tint: string): ShadowToken[] {
  const alpha = mix(SHADOW_ALPHA_RANGE, depth);
  const [r, g, b] = hexToRgb(tint).map((channel) => Math.round(channel * 255));
  const color = `${tint}${Math.round(alpha * 255).toString(16).padStart(2, "0")}`;
  return SHADOW_LEVELS.map(({ name, y, blur }) => ({
    name,
    y,
    blur,
    color,
    value: depth === 0 ? "none" : `0 ${y}px ${blur}px rgb(${r} ${g} ${b} / ${alpha.toFixed(2)})`,
  }));
}

/**
 * How much the vibrancy slider multiplies the chroma of every palette.
 *
 * @param vibrancy Slider from 0 (muted) to 100 (vivid).
 * @returns The chroma multiplier.
 */
export function chromaFactor(vibrancy: number): number {
  return mix(VIBRANCY_RANGE, vibrancy);
}
