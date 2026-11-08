import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import type { KitButtonProps } from "./KitButton.types";
import { buttonIcon, buttonIconSize, kitButtonClass } from "./KitButton.utils";
import styles from "./KitButton.module.scss";

/**
 * Sample button drawn with the generated tokens: five variants, three sizes, icon, icon-only and loading states.
 *
 * @param props Props of the component, see {@link KitButtonProps}.
 * @param props.icon Icon before the label (or the only content with `iconOnly`).
 * @param props.loading Shows a spinner and marks the button as busy.
 * @param props.children Label; with `iconOnly` it becomes the accessible name.
 * @param props.variant Visual variant.
 * @param props.size Size of the button.
 * @param props.iconOnly Shows only the icon.
 * @param props.fullWidth Fills the width of its container.
 * @param props.className Extra class name for the root element.
 * @param props.rest Remaining properties, forwarded to the `<button>`.
 * @returns The rendered element.
 */
export function KitButton({ icon, loading, children, variant, size, iconOnly, fullWidth, className, ...rest }: KitButtonProps) {
  const shown = buttonIcon(icon, loading);
  const label = iconOnly ? <span className={styles.hidden}>{children}</span> : children;

  return (
    <button type="button" {...rest} className={kitButtonClass({ variant, size, iconOnly, fullWidth, className })} aria-busy={loading || undefined}>
      {shown && <Icon icon={shown} size={buttonIconSize(size)} className={cx(loading && styles.spin)} />}
      {label}
    </button>
  );
}
