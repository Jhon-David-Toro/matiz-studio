import { ColorField } from "@/components/ui/ColorField";
import { SelectField } from "@/components/ui/SelectField";
import type { Harmony } from "@/lib/system/system.types";

import { LABELS, SECTIONS } from "../ControlsPanel.constants";
import type { ControlGroupProps } from "../ControlsPanel.types";
import { selectOptions } from "../ControlsPanel.utils";
import styles from "../ControlsPanel.module.scss";

/**
 * Brand color and the harmony that picks the accent from it.
 *
 * @param props Props of the component, see {@link ControlGroupProps}.
 * @param props.config Current configuration.
 * @param props.onUpdate Replaces parts of the configuration.
 * @returns The rendered element.
 */
export function BrandControls({ config, onUpdate }: ControlGroupProps) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{SECTIONS.brand}</legend>
      <ColorField label={LABELS.brand} hint={LABELS.brandHint} value={config.brand} onChange={(brand) => onUpdate({ brand })} />
      <SelectField label={LABELS.harmony} options={selectOptions().harmony} value={config.harmony} onChange={(event) => onUpdate({ harmony: event.target.value as Harmony })} />
    </fieldset>
  );
}
