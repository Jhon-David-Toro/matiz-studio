import { copyText, downloadText } from "@/lib/shared/browser";
import { EXPORT_FORMATS } from "@/lib/system/export.constants";
import { exportSystem } from "@/lib/system/export.utils";

import { COPIED_MESSAGE, COPY_FAILED_MESSAGE, DOWNLOADED_MESSAGE } from "../ExportPanel.constants";
import type { UseExportParams } from "../ExportPanel.types";

/**
 * Code of the system in a format and the actions that copy or download it.
 *
 * @param params Options, see {@link UseExportParams}.
 * @param params.system Design system.
 * @param params.format File format.
 * @param params.onNotice Shows the result of an action.
 * @returns The code, the file details and the copy and download actions.
 */
export function useExport({ system, format, onNotice }: UseExportParams) {
  const code = exportSystem(system, format);
  const file = EXPORT_FORMATS.find((item) => item.value === format) ?? EXPORT_FORMATS[0];

  /** Copies the code and reports the result. */
  async function copy() {
    onNotice((await copyText(code)) ? COPIED_MESSAGE : COPY_FAILED_MESSAGE);
  }

  /** Downloads the code as a file. */
  function download() {
    downloadText(file.file, code, file.mime);
    onNotice(DOWNLOADED_MESSAGE);
  }

  return { code, file, copy, download };
}
