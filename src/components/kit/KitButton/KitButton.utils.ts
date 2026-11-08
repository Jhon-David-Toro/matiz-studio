import type { LucideIcon } from "lucide-react";

import { LoaderCircle } from "@/components/ui/Icon";
import type { IconSize } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import type { KitButtonProps, KitButtonSize } from "./KitButton.types";
import styles from "./KitButton.module.scss";

/**
 * Class list of a sample button.
 *
 * @param props Variant, size and layout options of the button.
 * @param props.variant Visual variant.
 * @param props.size Size of the button.
 * @param props.iconOnly Whether only the icon is shown.
 * @param props.fullWidth Whether the button fills its container.
 * @param props.className Extra class name to append.
 * @returns The class names joined by a space.
 */
export function kitButtonClass({ variant = "primary", size = "md", iconOnly, fullWidth, className }: KitButtonProps): string {
  return cx(styles.button, styles[variant], styles[size], iconOnly && styles.iconOnly, fullWidth && styles.full, className);
}

/**
 * Icon a button shows: the spinner while loading, otherwise its own icon.
 *
 * @param icon Icon of the button.
 * @param loading Whether the button is busy.
 * @returns The icon to draw, if any.
 */
export function buttonIcon(icon: LucideIcon | undefined, loading: boolean | undefined): LucideIcon | undefined {
  return loading ? LoaderCircle : icon;
}

/**
 * Icon size that fits a button size.
 *
 * @param size Size of the button.
 * @returns `medium` for large buttons, `small` otherwise.
 */
export function buttonIconSize(size: KitButtonSize | undefined): IconSize {
  return size === "lg" ? "medium" : "small";
}
