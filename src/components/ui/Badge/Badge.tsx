import { cx } from "@/lib/shared/cx";

import type { BadgeProps } from "./Badge.types";
import styles from "./Badge.module.scss";

/**
 * Small pill with a status or a count.
 *
 * @param props Props of the component, see {@link BadgeProps}.
 * @param props.tone Color of the badge.
 * @param props.children Text of the badge.
 * @param props.className Extra class name for the root element.
 * @returns The rendered element.
 */
export function Badge({ tone = "neutral", children, className }: BadgeProps) {
  return <span className={cx(styles.badge, styles[tone], className)}>{children}</span>;
}
