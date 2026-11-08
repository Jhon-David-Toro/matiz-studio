import type { CSSProperties } from "react";

import type { DimensionToken, ShadowToken } from "@/lib/system/system.types";

import type { ScaleItem } from "./ScaleList.types";

/**
 * Pixel tokens as items of the list.
 *
 * @param tokens Spacing or radius tokens.
 * @returns The items with their CSS value.
 */
export function dimensionItems(tokens: DimensionToken[]): ScaleItem[] {
  return tokens.map((token) => ({ name: token.name, value: `${token.value}px` }));
}

/**
 * Shadow tokens as items of the list.
 *
 * @param tokens Shadow tokens.
 * @returns The items with their CSS value.
 */
export function shadowItems(tokens: ShadowToken[]): ScaleItem[] {
  return tokens.map((token) => ({ name: token.name, value: token.value }));
}

/**
 * Custom property that draws the visual of an item.
 *
 * @param item Item of the list.
 * @returns The `style` attribute of the visual.
 */
export function visualStyle(item: ScaleItem): CSSProperties {
  return { "--token": item.value } as CSSProperties;
}
