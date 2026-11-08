import { cx } from "@/lib/shared/cx";

import type { KitBadgeProps } from "./KitBadge.types";
import styles from "./KitBadge.module.scss";

/**
 * Sample status badge in six tones, soft or solid, with an optional dot.
 *
 * @param props Props of the component, see {@link KitBadgeProps}.
 * @param props.tone Meaning of the badge.
 * @param props.solid Filled with the strong color instead of the soft one.
 * @param props.dot Shows a dot before the text.
 * @param props.children Text of the badge.
 * @returns The rendered element.
 */
export function KitBadge({ tone = "neutral", solid, dot, children }: KitBadgeProps) {
  return (
    <span className={cx(styles.badge, styles[tone], solid && styles.solid)}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
