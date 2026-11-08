import { cx } from "@/lib/shared/cx";

import { ICON_PIXEL_SIZES, ICON_STROKE_WIDTH } from "./Icon.constants";
import type { IconProps } from "./Icon.types";
import styles from "./Icon.module.scss";

/**
 * Draws an icon of the set at one of the system sizes. Decorative unless a `label` is given.
 *
 * @param props Props of the component, see {@link IconProps}.
 * @param props.icon Icon component to draw.
 * @param props.size System size.
 * @param props.tone Color tone.
 * @param props.label Accessible name; without it the icon is hidden from assistive tech.
 * @param props.className Extra class name for the root element.
 * @returns The rendered element.
 */
export function Icon({ icon: IconComponent, size = "medium", tone = "inherit", label, className }: IconProps) {
  const accessibility = label ? { role: "img", "aria-label": label } : { "aria-hidden": true };

  return (
    <IconComponent
      className={cx(styles.icon, styles[tone], className)}
      size={ICON_PIXEL_SIZES[size]}
      strokeWidth={ICON_STROKE_WIDTH}
      focusable="false"
      {...accessibility}
    />
  );
}
