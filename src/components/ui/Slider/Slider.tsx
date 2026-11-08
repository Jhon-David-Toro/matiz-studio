import { useId, type CSSProperties } from "react";

import type { SliderProps } from "./Slider.types";
import styles from "./Slider.module.scss";

/**
 * Native range input with its label, the current value and the meaning of each end.
 *
 * @param props Props of the component, see {@link SliderProps}.
 * @param props.label Visible label, also the accessible name.
 * @param props.value Current value.
 * @param props.onChange Called with the new value while dragging or using the arrow keys.
 * @param props.lowLabel Meaning of the lowest value.
 * @param props.highLabel Meaning of the highest value.
 * @param props.min Lowest value.
 * @param props.max Highest value.
 * @returns The rendered element.
 */
export function Slider({ label, value, onChange, lowLabel, highLabel, min = 0, max = 100 }: SliderProps) {
  const id = useId();
  const fill = ((value - min) / (max - min)) * 100;

  return (
    <div className={styles.slider}>
      <div className={styles.top}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <span className={styles.value} aria-hidden="true">
          {value}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        aria-valuetext={`${value} · ${lowLabel} a ${highLabel}`}
        className={styles.input}
        style={{ "--fill": `${fill}%` } as CSSProperties}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <div className={styles.ends} aria-hidden="true">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  );
}
