import { AccessibilityPanel } from "@/components/sections/AccessibilityPanel";
import { ExportPanel } from "@/components/sections/ExportPanel";
import { PreviewPanel } from "@/components/sections/PreviewPanel";
import { TokensPanel } from "@/components/sections/TokensPanel";

import type { WorkspaceViewProps } from "./Workspace.types";

/**
 * Panel of the selected tab.
 *
 * @param props Props of the component, see {@link WorkspaceViewProps}.
 * @param props.tab Selected tab.
 * @param props.system Design system.
 * @param props.onNotice Shows a short message.
 * @param props.onCopy Copies a value.
 * @returns The rendered element.
 */
export function WorkspaceView({ tab, system, onNotice, onCopy }: WorkspaceViewProps) {
  const views = {
    preview: <PreviewPanel system={system} />,
    tokens: <TokensPanel system={system} onCopy={onCopy} />,
    accessibility: <AccessibilityPanel system={system} />,
    export: <ExportPanel system={system} onNotice={onNotice} />,
  };
  return views[tab];
}
