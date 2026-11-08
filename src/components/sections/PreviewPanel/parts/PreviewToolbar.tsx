import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { SelectField } from "@/components/ui/SelectField";
import type { VisionMode } from "@/lib/color/color.types";

import { MODE_GROUP, MODE_OPTIONS, VISION_LABEL, VISION_OPTIONS } from "../PreviewPanel.constants";
import type { PreviewToolbarProps } from "../PreviewPanel.types";
import styles from "../PreviewPanel.module.scss";

/**
 * Light or dark theme and the color-vision simulation of the preview.
 *
 * @param props Props of the component, see {@link PreviewToolbarProps}.
 * @param props.mode Theme on screen.
 * @param props.vision Vision mode on screen.
 * @param props.onModeChange Changes the theme.
 * @param props.onVisionChange Changes the vision mode.
 * @returns The rendered element.
 */
export function PreviewToolbar({ mode, vision, onModeChange, onVisionChange }: PreviewToolbarProps) {
  return (
    <div className={styles.toolbar}>
      <SegmentedControl label={MODE_GROUP.label} name={MODE_GROUP.name} options={MODE_OPTIONS} value={mode} onChange={onModeChange} />
      <SelectField label={VISION_LABEL} options={VISION_OPTIONS} value={vision} className={styles.vision} onChange={(event) => onVisionChange(event.target.value as VisionMode)} />
    </div>
  );
}
