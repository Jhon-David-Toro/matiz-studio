import type { VisionMode } from "@/lib/color/color.types";
import type { DesignSystem, ThemeMode } from "@/lib/system/system.types";

export type CanvasOptions = {
  mode: ThemeMode;
  vision: VisionMode;
};

export type CanvasOptionsState = CanvasOptions & {
  setMode: (mode: ThemeMode) => void;
  setVision: (vision: VisionMode) => void;
};

export type ThemeCanvasProps = CanvasOptions & {
  system: DesignSystem;
  label: string;
  children: React.ReactNode;
};

export type CanvasToolbarProps = CanvasOptionsState & {
  children?: React.ReactNode;
};
