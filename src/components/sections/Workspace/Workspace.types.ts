import type { CanvasOptionsState } from "@/components/sections/ThemeCanvas";
import type { Scene } from "@/components/sections/PreviewPanel";
import type { DesignSystem } from "@/lib/system/system.types";

export type WorkspaceTab = "preview" | "components" | "tokens" | "accessibility" | "export";

export type WorkspaceProps = {
  system: DesignSystem;
  onNotice: (message: string) => void;
  onCopy: (value: string) => void;
};

export type WorkspaceViewProps = WorkspaceProps & {
  tab: WorkspaceTab;
  scene: Scene;
  canvas: CanvasOptionsState;
};

export type WorkspaceToolbarProps = {
  tab: WorkspaceTab;
  scene: Scene;
  onSceneChange: (scene: Scene) => void;
  canvas: CanvasOptionsState;
};
