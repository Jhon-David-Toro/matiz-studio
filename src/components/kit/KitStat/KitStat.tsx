import { ArrowDownRight, ArrowUpRight, Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import type { KitStatProps } from "./KitStat.types";
import styles from "./KitStat.module.scss";

/**
 * Sample metric: label, big value and the change, green when it goes up and red when it goes down.
 *
 * @param props Props of the component, see {@link KitStatProps}.
 * @param props.label What the metric measures.
 * @param props.value Current value.
 * @param props.delta Change since the last period.
 * @param props.trend Whether the change is good (up) or bad (down).
 * @returns The rendered element.
 */
export function KitStat({ label, value, delta, trend }: KitStatProps) {
  return (
    <div className={styles.stat}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
      <span className={cx(styles.delta, styles[trend])}>
        <Icon icon={trend === "up" ? ArrowUpRight : ArrowDownRight} size="small" />
        {delta}
      </span>
    </div>
  );
}
