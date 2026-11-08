import type { CanvasOptions } from "@/components/sections/ThemeCanvas";
import type { DesignSystem } from "@/lib/system/system.types";

export type Scene = "landing" | "dashboard" | "mobile";

export type PreviewPanelProps = CanvasOptions & {
  system: DesignSystem;
  scene: Scene;
};
