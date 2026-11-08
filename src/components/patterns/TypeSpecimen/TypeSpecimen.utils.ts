import type { CSSProperties } from "react";

import type { FontPairing, TypeToken } from "@/lib/system/system.types";

/**
 * Custom properties that draw a sample in a text style.
 *
 * @param style Text style.
 * @param fonts Fonts of the system.
 * @returns The `style` attribute of the sample.
 */
export function sampleStyle(style: TypeToken, fonts: FontPairing): CSSProperties {
  return {
    "--sample-family": style.role === "heading" ? fonts.heading.stack : fonts.body.stack,
    "--sample-size": `${style.size}px`,
    "--sample-line": `${style.lineHeight}px`,
    "--sample-weight": style.weight,
  } as CSSProperties;
}

/**
 * Size and line height of a style.
 *
 * @param style Text style.
 * @returns The text, e.g. "16 / 24".
 */
export function styleMetrics(style: TypeToken): string {
  return `${style.size} / ${style.lineHeight}`;
}
