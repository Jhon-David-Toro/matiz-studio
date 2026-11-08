import { useId } from "react";

import type { KitTooltipProps } from "./KitTooltip.types";
import styles from "./KitTooltip.module.scss";

/**
 * Sample tooltip that shows on hover and on keyboard focus, and describes the element it wraps.
 *
 * @param props Props of the component, see {@link KitTooltipProps}.
 * @param props.tip Text of the tooltip.
 * @param props.children Element that triggers it (a focusable one).
 * @returns The rendered element.
 */
export function KitTooltip({ tip, children }: KitTooltipProps) {
  const id = useId();

  return (
    <span className={styles.wrap} aria-describedby={id}>
      {children}
      <span id={id} role="tooltip" className={styles.tip}>
        {tip}
      </span>
    </span>
  );
}
