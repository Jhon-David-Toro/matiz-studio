import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import type { IconButtonProps } from "./IconButton.types";
import styles from "./IconButton.module.scss";

/**
 * Round button that only shows an icon; `label` is its accessible name and its tooltip.
 *
 * @param props Props of the component, see {@link IconButtonProps}.
 * @param props.icon Icon to draw.
 * @param props.label Accessible name of the button.
 * @param props.tone `danger` for destructive actions.
 * @param props.className Extra class name for the root element.
 * @param props.rest Remaining properties, forwarded to the `<button>`.
 * @returns The rendered element.
 */
export function IconButton({ icon, label, tone = "default", className, ...rest }: IconButtonProps) {
  return (
    <button {...rest} type="button" aria-label={label} title={label} className={cx(styles.button, styles[tone], className)}>
      <Icon icon={icon} size="small" />
    </button>
  );
}
