import { DashboardScene } from "@/components/sections/DashboardScene";
import { LandingScene } from "@/components/sections/LandingScene";
import { MobileScene } from "@/components/sections/MobileScene";
import { ThemeCanvas } from "@/components/sections/ThemeCanvas";

import { CANVAS_LABEL } from "./PreviewPanel.constants";
import type { PreviewPanelProps } from "./PreviewPanel.types";

/**
 * Live preview: a whole sample product (landing, dashboard or mobile app) drawn with the system.
 *
 * @param props Props of the component, see {@link PreviewPanelProps}.
 * @param props.system Design system to draw with.
 * @param props.mode Light or dark.
 * @param props.vision Vision mode to simulate.
 * @param props.scene Sample product to show.
 * @returns The rendered element.
 */
export function PreviewPanel({ system, mode, vision, scene }: PreviewPanelProps) {
  const scenes = { landing: <LandingScene />, dashboard: <DashboardScene />, mobile: <MobileScene /> };

  return (
    <ThemeCanvas system={system} mode={mode} vision={vision} label={CANVAS_LABEL}>
      {scenes[scene]}
    </ThemeCanvas>
  );
}
