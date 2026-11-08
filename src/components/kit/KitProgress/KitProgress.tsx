import type { CSSProperties } from "react";

import { Icon, LoaderCircle } from "@/components/ui/Icon";

import type { KitProgressProps } from "./KitProgress.types";
import styles from "./KitProgress.module.scss";

/**
 * Sample progress: a bar with its percentage, or a spinner when there is no value.
 *
 * @param props Props of the component, see {@link KitProgressProps}.
 * @param props.label Accessible name and visible label.
 * @param props.value Percentage done; without it the progress is indeterminate.
 * @returns The rendered element.
 */
export function KitProgress({ label, value }: KitProgressProps) {
  if (value === undefined) {
    return (
      <span role="status" className={styles.spinner}>
        <Icon icon={LoaderCircle} className={styles.spin} />
        {label}
      </span>
    );
  }

  return (
    <div className={styles.progress}>
      <div className={styles.top}>
        <span>{label}</span>
        <span className={styles.value}>{value}%</span>
      </div>
      <div role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} className={styles.track}>
        <span className={styles.bar} style={{ "--value": value / 100 } as CSSProperties} />
      </div>
    </div>
  );
}
