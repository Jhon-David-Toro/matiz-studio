"use client";

import { useState } from "react";

import type { VisionMode } from "@/lib/color/color.types";
import type { ThemeMode } from "@/lib/system/system.types";

import type { PreviewPanelProps } from "./PreviewPanel.types";
import { PreviewCanvas } from "./parts/PreviewCanvas";
import { PreviewToolbar } from "./parts/PreviewToolbar";
import { VisionFilters } from "./parts/VisionFilters";
import styles from "./PreviewPanel.module.scss";

/**
 * Live preview: a sample product drawn with the system, in light or dark, with optional color-vision simulation.
 *
 * @param props Props of the component, see {@link PreviewPanelProps}.
 * @param props.system Design system to draw with.
 * @returns The rendered element.
 */
export function PreviewPanel({ system }: PreviewPanelProps) {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [vision, setVision] = useState<VisionMode>("normal");

  return (
    <div className={styles.panel}>
      <VisionFilters />
      <PreviewToolbar mode={mode} vision={vision} onModeChange={setMode} onVisionChange={setVision} />
      <PreviewCanvas system={system} mode={mode} vision={vision} />
    </div>
  );
}
