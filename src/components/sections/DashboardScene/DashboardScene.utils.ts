import type { CSSProperties } from "react";

/**
 * Height of a bar of the chart.
 *
 * @param value Value of the bar, from 0 to 100.
 * @returns The `style` attribute of the bar.
 */
export function barStyle(value: number): CSSProperties {
  return { "--bar": `${value}%` } as CSSProperties;
}
