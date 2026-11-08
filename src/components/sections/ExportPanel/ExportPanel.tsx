"use client";

import { useState } from "react";

import { CodeBlock } from "@/components/patterns/CodeBlock";
import { Button } from "@/components/ui/Button";
import { Copy, Download } from "@/components/ui/Icon";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { EXPORT_FORMATS } from "@/lib/system/export.constants";
import type { ExportFormat } from "@/lib/system/system.types";

import { COPY_LABEL, DOWNLOAD_LABEL, FORMAT_GROUP, HINTS } from "./ExportPanel.constants";
import type { ExportPanelProps } from "./ExportPanel.types";
import { useExport } from "./hooks/useExport";
import styles from "./ExportPanel.module.scss";

/**
 * The system as code: CSS custom properties, Sass variables or W3C design tokens, ready to copy or download.
 *
 * @param props Props of the component, see {@link ExportPanelProps}.
 * @param props.system Design system.
 * @param props.onNotice Shows the result of copying or downloading.
 * @returns The rendered element.
 */
export function ExportPanel({ system, onNotice }: ExportPanelProps) {
  const [format, setFormat] = useState<ExportFormat>("css");
  const { code, file, copy, download } = useExport({ system, format, onNotice });

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <SegmentedControl label={FORMAT_GROUP.label} name={FORMAT_GROUP.name} options={EXPORT_FORMATS} value={format} onChange={setFormat} />
        <div className={styles.actions}>
          <Button variant="secondary" size="small" leadingIcon={Copy} onClick={copy}>
            {COPY_LABEL}
          </Button>
          <Button size="small" leadingIcon={Download} onClick={download}>
            {DOWNLOAD_LABEL}
          </Button>
        </div>
      </div>
      <p className={styles.hint}>{HINTS[format]}</p>
      <CodeBlock label={file.file} code={code} />
    </div>
  );
}
