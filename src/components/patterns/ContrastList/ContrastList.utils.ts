/**
 * Contrast ratio as people read it.
 *
 * @param ratio Contrast ratio.
 * @returns The ratio with two decimals, e.g. "4.52:1".
 */
export function formatRatio(ratio: number): string {
  return `${ratio.toFixed(2)}:1`;
}
