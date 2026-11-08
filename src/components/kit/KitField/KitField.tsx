import { useId } from "react";

import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import type { KitFieldProps } from "./KitField.types";
import { FieldControl } from "./parts/FieldControl";
import styles from "./KitField.module.scss";

/**
 * Sample form field: label, input, textarea or select, optional leading icon, and a hint or an error.
 *
 * @param props Props of the component, see {@link KitFieldProps}.
 * @param props.label Visible label.
 * @param props.hint Help text under the field.
 * @param props.error Error under the field; marks it invalid.
 * @param props.icon Icon inside the control, on the left.
 * @param props.className Extra class name for the root element.
 * @param props.rest Remaining properties, forwarded to the control.
 * @returns The rendered element.
 */
export function KitField({ label, hint, error, icon, className, ...rest }: KitFieldProps) {
  const id = useId();
  const message = error ?? hint;
  const describedBy = message ? `${id}-message` : undefined;

  return (
    <div className={cx(styles.field, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.wrap}>
        {icon && <Icon icon={icon} size="small" className={styles.icon} />}
        <FieldControl {...rest} id={id} icon={icon} describedBy={describedBy} invalid={Boolean(error)} />
      </div>
      {message && (
        <p id={describedBy} className={cx(styles.message, error && styles.error)}>
          {message}
        </p>
      )}
    </div>
  );
}
