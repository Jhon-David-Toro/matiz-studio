import type { CSSProperties } from "react";

import { PRESETS } from "@/lib/system/presets.constants";
import { cx } from "@/lib/shared/cx";

import { SECTIONS } from "../ControlsPanel.constants";
import type { ControlGroupProps, PresetButtonProps } from "../ControlsPanel.types";
import { sameConfig } from "../ControlsPanel.utils";
import styles from "../ControlsPanel.module.scss";

/**
 * Button that applies a preset; pressed while the system matches it.
 *
 * @param props Props of the component, see {@link PresetButtonProps}.
 * @param props.preset Preset to apply.
 * @param props.active Whether the current system is this preset.
 * @param props.onApply Replaces the configuration.
 * @returns The rendered element.
 */
function PresetButton({ preset, active, onApply }: PresetButtonProps) {
  return (
    <button type="button" aria-pressed={active} className={cx(styles.preset, active && styles.presetActive)} onClick={() => onApply(preset.config)}>
      <span className={styles.presetDot} style={{ "--preset": preset.config.brand } as CSSProperties} aria-hidden="true" />
      <span className={styles.presetText}>
        <span className={styles.presetName}>{preset.label}</span>
        <span className={styles.presetDescription}>{preset.description}</span>
      </span>
    </button>
  );
}

/**
 * Ready-made personalities to start from.
 *
 * @param props Props of the component, see {@link ControlGroupProps}.
 * @param props.config Current configuration.
 * @param props.onUpdate Replaces parts of the configuration.
 * @returns The rendered element.
 */
export function PresetPicker({ config, onUpdate }: ControlGroupProps) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{SECTIONS.presets}</legend>
      <div className={styles.presets}>
        {PRESETS.map((preset) => (
          <PresetButton key={preset.id} preset={preset} active={sameConfig(preset.config, config)} onApply={onUpdate} />
        ))}
      </div>
    </fieldset>
  );
}
