import type { CanvasOptions } from "@/components/sections/ThemeCanvas";
import type { DesignSystem } from "@/lib/system/system.types";

export type ComponentsPanelProps = CanvasOptions & {
  system: DesignSystem;
};

export type GallerySectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export type SpecimenProps = {
  label: string;
  wide?: boolean;
  children: React.ReactNode;
};
