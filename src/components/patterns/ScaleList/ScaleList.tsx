import { cx } from "@/lib/shared/cx";

import type { ScaleListProps } from "./ScaleList.types";
import { visualStyle } from "./ScaleList.utils";
import styles from "./ScaleList.module.scss";

/**
 * Spacing, radius or shadow tokens, each with its name, value and a drawing of what it does.
 *
 * @param props Props of the component, see {@link ScaleListProps}.
 * @param props.kind What the tokens are; it decides the drawing.
 * @param props.items Tokens to show.
 * @returns The rendered element.
 */
export function ScaleList({ kind, items }: ScaleListProps) {
  return (
    <ul role="list" className={cx(styles.list, styles[kind])}>
      {items.map((item) => (
        <li key={item.name} className={styles.row}>
          <span aria-hidden="true" className={styles.visual} style={visualStyle(item)} />
          <span className={styles.name}>{item.name}</span>
          <span className={styles.value}>{item.value}</span>
        </li>
      ))}
    </ul>
  );
}
