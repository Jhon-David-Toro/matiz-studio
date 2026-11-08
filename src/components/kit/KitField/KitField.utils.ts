import type { ComponentPropsWithoutRef } from "react";

import { cx } from "@/lib/shared/cx";

import type { FieldControlProps } from "./KitField.types";
import styles from "./KitField.module.scss";

/**
 * Attributes shared by every kind of control: class, description and invalid state.
 *
 * @param props Props of the control.
 * @param props.icon Whether there is a leading icon, which adds room on the left.
 * @param props.describedBy Id of the hint or error.
 * @param props.invalid Whether the field has an error.
 * @param props.rest Remaining native attributes.
 * @returns The attributes for the native element.
 */
export function controlProps({ icon, describedBy, invalid, ...rest }: Omit<FieldControlProps, "kind" | "options">): ComponentPropsWithoutRef<"input"> {
  return { ...rest, className: cx(styles.control, icon && styles.withIcon), "aria-describedby": describedBy, "aria-invalid": invalid || undefined };
}
