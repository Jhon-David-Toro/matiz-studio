import type { CSSProperties } from "react";

import type { VisionMode } from "@/lib/color/color.types";
import type { DesignSystem, ThemeMode } from "@/lib/system/system.types";
import { themeStyle } from "@/lib/system/tokens.utils";

import { VISION_FILTER_PREFIX } from "./PreviewPanel.constants";

/**
 * Id of the SVG filter of a vision mode.
 *
 * @param vision Vision mode.
 * @returns The id of its filter.
 */
export function visionFilterId(vision: Exclude<VisionMode, "normal">): string {
  return `${VISION_FILTER_PREFIX}-${vision}`;
}

/**
 * Style of the canvas: every token as a custom property and, when simulating, the vision filter.
 *
 * @param system Design system.
 * @param mode Light or dark.
 * @param vision Vision mode to simulate.
 * @returns The `style` attribute of the canvas.
 */
export function canvasStyle(system: DesignSystem, mode: ThemeMode, vision: VisionMode): CSSProperties {
  const filter = vision === "normal" ? undefined : `url(#${visionFilterId(vision)})`;
  return { ...themeStyle(system, mode), filter } as CSSProperties;
}
