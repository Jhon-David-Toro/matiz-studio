"use client";

import { useState } from "react";

import type { Scene } from "@/components/sections/PreviewPanel";
import { useCanvasOptions } from "@/components/sections/ThemeCanvas";
import { panelId, tabId, Tabs } from "@/components/ui/Tabs";

import { ID_PREFIX, TABS, TABS_LABEL } from "./Workspace.constants";
import type { WorkspaceProps, WorkspaceTab } from "./Workspace.types";
import { WorkspaceToolbar } from "./WorkspaceToolbar";
import { WorkspaceView } from "./WorkspaceView";
import styles from "./Workspace.module.scss";

/**
 * Main area: tabs for the live preview, the component gallery, the tokens, the accessibility report and the export.
 * Theme and vision are shared by the preview and the gallery.
 *
 * @param props Props of the component, see {@link WorkspaceProps}.
 * @param props.system Design system.
 * @param props.onNotice Shows a short message.
 * @param props.onCopy Copies a value.
 * @returns The rendered element.
 */
export function Workspace({ system, onNotice, onCopy }: WorkspaceProps) {
  const [tab, setTab] = useState<WorkspaceTab>("preview");
  const [scene, setScene] = useState<Scene>("landing");
  const canvas = useCanvasOptions();

  return (
    <main className={styles.workspace}>
      <Tabs label={TABS_LABEL} idPrefix={ID_PREFIX} tabs={TABS} value={tab} onChange={setTab} />
      <div id={panelId(ID_PREFIX)} role="tabpanel" aria-labelledby={tabId(ID_PREFIX, tab)} className={styles.view}>
        <WorkspaceToolbar tab={tab} scene={scene} onSceneChange={setScene} canvas={canvas} />
        <WorkspaceView tab={tab} system={system} scene={scene} canvas={canvas} onNotice={onNotice} onCopy={onCopy} />
      </div>
    </main>
  );
}
