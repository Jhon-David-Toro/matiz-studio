import { SelectField } from "@/components/ui/SelectField";
import type { FontPairingId } from "@/lib/system/system.types";

import { LABELS, SECTIONS } from "../ControlsPanel.constants";
import type { ControlGroupProps } from "../ControlsPanel.types";
import { selectOptions } from "../ControlsPanel.utils";
import styles from "../ControlsPanel.module.scss";

/**
 * Font pairing and the ratio of the modular type scale.
 *
 * @param props Props of the component, see {@link ControlGroupProps}.
 * @param props.config Current configuration.
 * @param props.onUpdate Replaces parts of the configuration.
 * @returns The rendered element.
 */
export function TypeControls({ config, onUpdate }: ControlGroupProps) {
  const options = selectOptions();

  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{SECTIONS.type}</legend>
      <SelectField label={LABELS.pairing} options={options.pairing} value={config.pairing} onChange={(event) => onUpdate({ pairing: event.target.value as FontPairingId })} />
      <SelectField label={LABELS.ratio} options={options.ratio} value={String(config.ratio)} onChange={(event) => onUpdate({ ratio: Number(event.target.value) })} />
    </fieldset>
  );
}
