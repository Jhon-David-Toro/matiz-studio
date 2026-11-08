import { Slider } from "@/components/ui/Slider";
import { PERSONALITY_CONTROLS } from "@/lib/system/system.constants";

import { SECTIONS } from "../ControlsPanel.constants";
import type { PersonalityControlsProps } from "../ControlsPanel.types";
import styles from "../ControlsPanel.module.scss";

/**
 * The four personality sliders: roundness, density, depth and vibrancy.
 *
 * @param props Props of the component, see {@link PersonalityControlsProps}.
 * @param props.config Current configuration.
 * @param props.onTrait Changes one trait of the personality.
 * @returns The rendered element.
 */
export function PersonalityControls({ config, onTrait }: PersonalityControlsProps) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{SECTIONS.personality}</legend>
      {PERSONALITY_CONTROLS.map((control) => (
        <Slider
          key={control.key}
          label={control.label}
          lowLabel={control.low}
          highLabel={control.high}
          value={config.personality[control.key]}
          onChange={(value) => onTrait(control.key, value)}
        />
      ))}
    </fieldset>
  );
}
