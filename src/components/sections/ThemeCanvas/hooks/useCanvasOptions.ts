import { useState } from "react";

import type { VisionMode } from "@/lib/color/color.types";
import type { ThemeMode } from "@/lib/system/system.types";

import type { CanvasOptionsState } from "../ThemeCanvas.types";

/**
 * Theme and vision mode shared by every canvas, so switching tabs keeps them.
 *
 * @returns The options and the functions that change them.
 */
export function useCanvasOptions(): CanvasOptionsState {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [vision, setVision] = useState<VisionMode>("normal");

  return { mode, vision, setMode, setVision };
}
