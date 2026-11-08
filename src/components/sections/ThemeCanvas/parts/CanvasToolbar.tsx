import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { SelectField } from "@/components/ui/SelectField";
import type { VisionMode } from "@/lib/color/color.types";

import { MODE_GROUP, MODE_OPTIONS, VISION_LABEL, VISION_OPTIONS } from "../ThemeCanvas.constants";
import type { CanvasToolbarProps } from "../ThemeCanvas.types";
import styles from "../ThemeCanvas.module.scss";

/**
 * Light or dark theme and color-vision simulation of the canvases, plus any extra control of the view.
 *
 * @param props Props of the component, see {@link CanvasToolbarProps}.
 * @param props.mode Theme on screen.
 * @param props.vision Vision mode on screen.
 * @param props.setMode Changes the theme.
 * @param props.setVision Changes the vision mode.
 * @param props.children Extra controls, at the start of the bar.
 * @returns The rendered element.
 */
export function CanvasToolbar({ mode, vision, setMode, setVision, children }: CanvasToolbarProps) {
  return (
    <div className={styles.toolbar}>
      {children}
      <div className={styles.toolbarEnd}>
        <SegmentedControl label={MODE_GROUP.label} name={MODE_GROUP.name} options={MODE_OPTIONS} value={mode} onChange={setMode} />
        <SelectField label={VISION_LABEL} options={VISION_OPTIONS} value={vision} className={styles.vision} onChange={(event) => setVision(event.target.value as VisionMode)} />
      </div>
    </div>
  );
}
