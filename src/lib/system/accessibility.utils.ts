import { contrastRatio, wcagLevel } from "@/lib/color/contrast.utils";

import { CONTRAST_PAIRS } from "./accessibility.constants";
import type { ContrastCheck, Theme } from "./system.types";

/**
 * Contrast of every pair of tokens that is read together, against the WCAG minimum of that use.
 *
 * @param theme Semantic tokens of one mode.
 * @returns One check per pair.
 */
export function checkContrast(theme: Theme): ContrastCheck[] {
  return CONTRAST_PAIRS.map((pair) => {
    const [foregroundHex, backgroundHex] = [theme[pair.foreground].hex, theme[pair.background].hex];
    const ratio = contrastRatio(foregroundHex, backgroundHex);
    return { ...pair, foregroundHex, backgroundHex, ratio, level: wcagLevel(ratio), passes: ratio >= pair.min };
  });
}

/**
 * How many checks pass.
 *
 * @param checks Result of {@link checkContrast}.
 * @returns The passing count and the total.
 */
export function contrastScore(checks: ContrastCheck[]): { passed: number; total: number } {
  return { passed: checks.filter((check) => check.passes).length, total: checks.length };
}
