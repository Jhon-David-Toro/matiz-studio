import type { DesignSystem } from "@/lib/system/system.types";

export type WorkspaceTab = "preview" | "tokens" | "accessibility" | "export";

export type WorkspaceProps = {
  system: DesignSystem;
  onNotice: (message: string) => void;
  onCopy: (value: string) => void;
};

export type WorkspaceViewProps = WorkspaceProps & {
  tab: WorkspaceTab;
};
