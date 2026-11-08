import { PANEL_LABEL } from "./ControlsPanel.constants";
import type { ControlsPanelProps } from "./ControlsPanel.types";
import { BrandControls } from "./parts/BrandControls";
import { PersonalityControls } from "./parts/PersonalityControls";
import { PresetPicker } from "./parts/PresetPicker";
import { TypeControls } from "./parts/TypeControls";
import styles from "./ControlsPanel.module.scss";

/**
 * Every input of the generator: presets, brand color and harmony, personality and typography.
 *
 * @param props Props of the component, see {@link ControlsPanelProps}.
 * @param props.config Current configuration.
 * @param props.onUpdate Replaces parts of the configuration.
 * @param props.onTrait Changes one trait of the personality.
 * @returns The rendered element.
 */
export function ControlsPanel({ config, onUpdate, onTrait }: ControlsPanelProps) {
  return (
    <aside aria-label={PANEL_LABEL} className={styles.panel}>
      <PresetPicker config={config} onUpdate={onUpdate} />
      <BrandControls config={config} onUpdate={onUpdate} />
      <PersonalityControls config={config} onTrait={onTrait} />
      <TypeControls config={config} onUpdate={onUpdate} />
    </aside>
  );
}
