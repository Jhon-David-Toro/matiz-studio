import { FONT_PAIRINGS, HEADING_FROM_EXPONENT, TYPE_BASE, TYPE_STEPS } from "./system.constants";
import type { FontPairing, FontPairingId, TypeToken } from "./system.types";

/**
 * Rounds a line height to the 4-pixel grid: roomy for body sizes, tight for headings.
 *
 * @param size Font size in pixels.
 * @returns The line height in pixels.
 */
export function lineHeightFor(size: number): number {
  const factor = size <= 20 ? 1.5 : 1.2;
  return Math.ceil((size * factor) / 4) * 4;
}

/**
 * Modular type scale: every size is the previous one times the ratio.
 *
 * @param ratio Ratio between sizes.
 * @returns The text styles from `xs` to `4xl`.
 */
export function typeScale(ratio: number): TypeToken[] {
  return TYPE_STEPS.map(({ name, exponent }) => {
    const size = Math.round(TYPE_BASE * ratio ** exponent);
    const heading = exponent >= HEADING_FROM_EXPONENT;
    return { name, size, lineHeight: lineHeightFor(size), weight: heading ? 650 : 400, role: heading ? "heading" : "body" };
  });
}

/**
 * Font pairing of an id.
 *
 * @param id Id of the pairing.
 * @returns The pairing; the first one when the id is unknown.
 */
export function findPairing(id: FontPairingId): FontPairing {
  return FONT_PAIRINGS.find((pairing) => pairing.id === id) ?? FONT_PAIRINGS[0];
}
