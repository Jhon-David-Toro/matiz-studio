import { SCENE_GROUP, SCENES } from "@/components/sections/PreviewPanel";
import { CanvasToolbar } from "@/components/sections/ThemeCanvas";
import { SegmentedControl } from "@/components/ui/SegmentedControl";

import { CANVAS_TABS } from "./Workspace.constants";
import type { WorkspaceToolbarProps } from "./Workspace.types";

/**
 * Controls of the canvas tabs: the scene (preview only), the theme and the vision simulation.
 *
 * @param props Props of the component, see {@link WorkspaceToolbarProps}.
 * @param props.tab Selected tab; other tabs get no toolbar.
 * @param props.scene Scene of the preview.
 * @param props.onSceneChange Changes the scene.
 * @param props.canvas Theme and vision of the canvases.
 * @returns The rendered element, or nothing.
 */
export function WorkspaceToolbar({ tab, scene, onSceneChange, canvas }: WorkspaceToolbarProps) {
  if (!CANVAS_TABS.includes(tab)) return null;

  return (
    <CanvasToolbar {...canvas}>
      {tab === "preview" && <SegmentedControl label={SCENE_GROUP.label} name={SCENE_GROUP.name} options={SCENES} value={scene} onChange={onSceneChange} />}
    </CanvasToolbar>
  );
}
