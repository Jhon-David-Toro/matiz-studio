import type { DesignSystem, ThemeMode } from "@/lib/system/system.types";

export type AccessibilityPanelProps = {
  system: DesignSystem;
};

export type ThemeReportProps = {
  system: DesignSystem;
  mode: ThemeMode;
};
