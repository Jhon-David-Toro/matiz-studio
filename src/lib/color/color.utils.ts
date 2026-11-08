import {
  CHROMA_SEARCH_STEPS,
  GAMUT_EPSILON,
  HEX_PATTERN,
  LINEAR_RGB_TO_LMS,
  LMS_TO_LINEAR_RGB,
  LMS_TO_OKLAB,
  OKLAB_TO_LMS,
} from "./color.constants";
import type { Matrix3, Oklch, Vector3 } from "./color.types";

/**
 * Multiplies a 3×3 matrix by a vector.
 *
 * @param matrix Matrix, row by row.
 * @param vector Vector to transform.
 * @returns The transformed vector.
 */
export function applyMatrix(matrix: Matrix3, vector: Vector3): Vector3 {
  return matrix.map((row) => row[0] * vector[0] + row[1] * vector[1] + row[2] * vector[2]) as Vector3;
}

/**
 * Removes the sRGB gamma of one channel.
 *
 * @param channel Channel from 0 to 1.
 * @returns The linear channel.
 */
export function toLinear(channel: number): number {
  return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
}

/**
 * Applies the sRGB gamma to one channel.
 *
 * @param channel Linear channel from 0 to 1.
 * @returns The gamma-encoded channel.
 */
export function toGamma(channel: number): number {
  return channel <= 0.0031308 ? channel * 12.92 : 1.055 * channel ** (1 / 2.4) - 0.055;
}

/**
 * Turns a hex color into a valid `#rrggbb`, accepting 3-digit colors and a missing `#`.
 *
 * @param text Color typed by the user.
 * @returns The normalized color, or `undefined` when the text is not a hex color.
 */
export function normalizeHex(text: string): string | undefined {
  const match = HEX_PATTERN.exec(text.trim());
  if (!match) return undefined;
  const digits = match[1].length === 3 ? [...match[1]].map((digit) => digit + digit).join("") : match[1];
  return `#${digits.toLowerCase()}`;
}

/**
 * Channels of a hex color.
 *
 * @param hex Color as `#rrggbb`.
 * @returns Red, green and blue from 0 to 1.
 */
export function hexToRgb(hex: string): Vector3 {
  const value = Number.parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255].map((channel) => channel / 255) as Vector3;
}

/**
 * Hex color of some channels, clamped to the valid range.
 *
 * @param rgb Red, green and blue from 0 to 1.
 * @returns The color as `#rrggbb`.
 */
export function rgbToHex(rgb: Vector3): string {
  const bytes = rgb.map((channel) => Math.round(Math.min(1, Math.max(0, channel)) * 255));
  return `#${bytes.map((byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}

/**
 * Converts sRGB channels to OKLCH.
 *
 * @param rgb Red, green and blue from 0 to 1.
 * @returns Lightness (0–1), chroma and hue in degrees.
 */
export function rgbToOklch(rgb: Vector3): Oklch {
  const lms = applyMatrix(LINEAR_RGB_TO_LMS, rgb.map(toLinear) as Vector3);
  const [l, a, b] = applyMatrix(LMS_TO_OKLAB, lms.map(Math.cbrt) as Vector3);
  const hue = (Math.atan2(b, a) * 180) / Math.PI;
  return { l, c: Math.hypot(a, b), h: (hue + 360) % 360 };
}

/**
 * Converts OKLCH to sRGB channels, which may fall outside 0–1 when the color is out of gamut.
 *
 * @param color Lightness, chroma and hue.
 * @returns Red, green and blue, not clamped.
 */
export function oklchToRgb(color: Oklch): Vector3 {
  const radians = (color.h * Math.PI) / 180;
  const lab: Vector3 = [color.l, color.c * Math.cos(radians), color.c * Math.sin(radians)];
  const lms = applyMatrix(OKLAB_TO_LMS, lab).map((value) => value ** 3) as Vector3;
  return applyMatrix(LMS_TO_LINEAR_RGB, lms).map(toGamma) as Vector3;
}

/**
 * Whether some channels can be shown on an sRGB screen.
 *
 * @param rgb Red, green and blue.
 * @returns True when every channel is between 0 and 1.
 */
export function isInGamut(rgb: Vector3): boolean {
  return rgb.every((channel) => channel >= -GAMUT_EPSILON && channel <= 1 + GAMUT_EPSILON);
}

/**
 * Lowers the chroma of a color until it fits in sRGB, keeping its lightness and hue.
 *
 * @param color Color that may be out of gamut.
 * @returns The most saturated version of the color that fits.
 */
export function clampToGamut(color: Oklch): Oklch {
  if (isInGamut(oklchToRgb(color))) return color;
  let [low, high] = [0, color.c];
  for (let step = 0; step < CHROMA_SEARCH_STEPS; step += 1) {
    const middle = (low + high) / 2;
    [low, high] = isInGamut(oklchToRgb({ ...color, c: middle })) ? [middle, high] : [low, middle];
  }
  return { ...color, c: low };
}

/**
 * Hex color of an OKLCH color, fitted to sRGB.
 *
 * @param color Lightness, chroma and hue.
 * @returns The color as `#rrggbb`.
 */
export function oklchToHex(color: Oklch): string {
  return rgbToHex(oklchToRgb(clampToGamut(color)));
}

/**
 * OKLCH of a hex color.
 *
 * @param hex Color as `#rrggbb`.
 * @returns Lightness, chroma and hue.
 */
export function hexToOklch(hex: string): Oklch {
  return rgbToOklch(hexToRgb(hex));
}

/**
 * CSS `oklch()` notation of a color, rounded for reading.
 *
 * @param color Lightness, chroma and hue.
 * @returns The CSS value, e.g. `oklch(62.4% 0.18 264)`.
 */
export function formatOklch(color: Oklch): string {
  return `oklch(${(color.l * 100).toFixed(1)}% ${color.c.toFixed(3)} ${Math.round(color.h)})`;
}
