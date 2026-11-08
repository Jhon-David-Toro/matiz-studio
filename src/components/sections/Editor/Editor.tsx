"use client";

import { AppHeader } from "@/components/sections/AppHeader";
import { ControlsPanel } from "@/components/sections/ControlsPanel";
import { Workspace } from "@/components/sections/Workspace";
import { Snackbar } from "@/components/ui/Snackbar";
import { copyText, shareUrl } from "@/lib/shared/browser";
import { generateSystem } from "@/lib/system/system.utils";
import { encodeConfig } from "@/lib/system/url.utils";

import { COLOR_COPIED, COPY_FAILED, LINK_COPIED } from "./Editor.constants";
import { copyMessage } from "./Editor.utils";
import { useNotice } from "./hooks/useNotice";
import { useSystemConfig } from "./hooks/useSystemConfig";
import styles from "./Editor.module.scss";

/**
 * The generator: header, controls and the workspace, all driven by one configuration that lives in the address.
 *
 * @returns The rendered element.
 */
export function Editor() {
  const { config, update, setTrait, remix } = useSystemConfig();
  const notice = useNotice();
  const system = generateSystem(config);

  /** Copies a link that opens this same system. */
  async function share() {
    notice.notify((await copyText(shareUrl(encodeConfig(config)))) ? LINK_COPIED : COPY_FAILED);
  }

  /**
   * Copies a value and tells the user.
   *
   * @param value Value to copy, e.g. a color.
   */
  async function copy(value: string) {
    notice.notify(copyMessage(await copyText(value), value, { success: COLOR_COPIED, failure: COPY_FAILED }));
  }

  return (
    <div className={styles.editor}>
      <AppHeader onRemix={remix} onShare={share} />
      <div className={styles.body}>
        <ControlsPanel config={config} onUpdate={update} onTrait={setTrait} />
        <Workspace system={system} onNotice={notice.notify} onCopy={copy} />
      </div>
      <Snackbar message={notice.message} onDismiss={notice.dismiss} />
    </div>
  );
}
