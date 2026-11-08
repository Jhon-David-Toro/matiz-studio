import type { VisionMode } from "@/lib/color/color.types";
import type { DesignSystem, ThemeMode } from "@/lib/system/system.types";

export type PreviewPanelProps = {
  system: DesignSystem;
};

export type PreviewToolbarProps = {
  mode: ThemeMode;
  vision: VisionMode;
  onModeChange: (mode: ThemeMode) => void;
  onVisionChange: (vision: VisionMode) => void;
};

export type PreviewCanvasProps = {
  system: DesignSystem;
  mode: ThemeMode;
  vision: VisionMode;
};
