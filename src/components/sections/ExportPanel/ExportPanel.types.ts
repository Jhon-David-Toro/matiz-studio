import type { DesignSystem, ExportFormat } from "@/lib/system/system.types";

export type ExportPanelProps = {
  system: DesignSystem;
  onNotice: (message: string) => void;
};

export type UseExportParams = ExportPanelProps & {
  format: ExportFormat;
};
