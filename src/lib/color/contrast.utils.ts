import { BLACK, WCAG_THRESHOLDS, WHITE } from "./color.constants";
import type { WcagLevel } from "./color.types";
import { hexToRgb, toLinear } from "./color.utils";

/**
 * Relative luminance of a color, as WCAG 2 defines it.
 *
 * @param hex Color as `#rrggbb`.
 * @returns The luminance, from 0 (black) to 1 (white).
 */
export function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * WCAG 2 contrast ratio between two colors; the order does not matter.
 *
 * @param first One color as `#rrggbb`.
 * @param second The other color.
 * @returns The ratio, from 1 to 21.
 */
export function contrastRatio(first: string, second: string): number {
  const [light, dark] = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (light + 0.05) / (dark + 0.05);
}

/**
 * Highest WCAG level a contrast ratio reaches for text.
 *
 * @param ratio Contrast ratio.
 * @returns `AAA` (7), `AA` (4.5), `AA18` (3, large text only) or `fail`.
 */
export function wcagLevel(ratio: number): WcagLevel {
  return WCAG_THRESHOLDS.find((threshold) => ratio >= threshold.min)?.level ?? "fail";
}

/**
 * White or black, whichever reads better on a background.
 *
 * @param background Background as `#rrggbb`.
 * @returns `#ffffff` or `#000000`.
 */
export function readableOn(background: string): string {
  return contrastRatio(background, WHITE) >= contrastRatio(background, BLACK) ? WHITE : BLACK;
}
