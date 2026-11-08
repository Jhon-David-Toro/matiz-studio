import { cx } from "@/lib/shared/cx";

import type { KitCheckProps } from "./KitCheck.types";
import styles from "./KitCheck.module.scss";

/**
 * Sample checkbox, radio button or switch with a label and an optional description. Built on the native input.
 *
 * @param props Props of the component, see {@link KitCheckProps}.
 * @param props.kind Checkbox, radio or switch.
 * @param props.label Visible label.
 * @param props.description Smaller text under the label.
 * @param props.className Extra class name for the root element.
 * @param props.rest Remaining properties, forwarded to the `<input>`.
 * @returns The rendered element.
 */
export function KitCheck({ kind = "checkbox", label, description, className, ...rest }: KitCheckProps) {
  return (
    <label className={cx(styles.check, className)}>
      <input {...rest} type={kind === "radio" ? "radio" : "checkbox"} role={kind === "switch" ? "switch" : undefined} className={cx(styles.input, styles[kind])} />
      <span className={styles.text}>
        <span>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </span>
    </label>
  );
}
