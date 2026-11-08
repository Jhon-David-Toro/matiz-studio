import { cx } from "@/lib/shared/cx";

import type { SegmentedControlProps } from "./SegmentedControl.types";
import styles from "./SegmentedControl.module.scss";

/**
 * Pill-shaped group of options where one is picked, built on native radio buttons (arrow keys move between them).
 *
 * @param props Props of the component, see {@link SegmentedControlProps}.
 * @param props.label Accessible name of the group.
 * @param props.name Name shared by the radio buttons.
 * @param props.options Options of the group.
 * @param props.value Picked option.
 * @param props.onChange Called with the option the user picked.
 * @param props.className Extra class name for the root element.
 * @returns The rendered element.
 */
export function SegmentedControl<T extends string>({ label, name, options, value, onChange, className }: SegmentedControlProps<T>) {
  return (
    <div role="radiogroup" aria-label={label} className={cx(styles.root, className)}>
      {options.map((option) => (
        <label key={option.value} className={styles.option}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={option.value === value}
            className={styles.input}
            onChange={() => onChange(option.value)}
          />
          <span className={styles.text}>{option.label}</span>
        </label>
      ))}
    </div>
  );
}
