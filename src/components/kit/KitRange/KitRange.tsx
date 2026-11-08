"use client";

import { useId, useState, type CSSProperties } from "react";

import type { KitRangeProps } from "./KitRange.types";
import styles from "./KitRange.module.scss";

/**
 * Sample slider with its label and current value.
 *
 * @param props Props of the component, see {@link KitRangeProps}.
 * @param props.label Visible label.
 * @param props.defaultValue Starting value, from 0 to 100.
 * @param props.unit Text after the value.
 * @returns The rendered element.
 */
export function KitRange({ label, defaultValue = 50, unit = "%" }: KitRangeProps) {
  const id = useId();
  const [value, setValue] = useState(defaultValue);

  return (
    <div className={styles.range}>
      <div className={styles.top}>
        <label htmlFor={id}>{label}</label>
        <span aria-hidden="true" className={styles.value}>
          {value}
          {unit}
        </span>
      </div>
      <input id={id} type="range" value={value} className={styles.input} style={{ "--fill": `${value}%` } as CSSProperties} onChange={(event) => setValue(Number(event.target.value))} />
    </div>
  );
}
