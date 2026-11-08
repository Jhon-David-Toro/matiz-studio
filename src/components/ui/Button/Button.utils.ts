import { cx } from "@/lib/shared/cx";

import type { ButtonSize, ButtonVariant } from "./Button.types";
import styles from "./Button.module.scss";

/**
 * Class list of a button from its variant and size.
 *
 * @param variant Visual variant.
 * @param size Size of the button.
 * @param className Extra class name to append.
 * @returns The class names joined by a space.
 */
export function buttonClassName(variant: ButtonVariant, size: ButtonSize, className?: string): string {
  return cx(styles.button, styles[variant], styles[size], className);
}
