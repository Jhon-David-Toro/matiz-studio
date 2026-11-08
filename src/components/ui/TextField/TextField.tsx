import { useId } from "react";

import { cx } from "@/lib/shared/cx";

import { FieldMessage } from "./parts/FieldMessage";
import type { TextFieldProps } from "./TextField.types";
import { messageId } from "./TextField.utils";
import styles from "./TextField.module.scss";

/**
 * Text input with its label and an optional hint or error, linked for assistive tech.
 *
 * @param props Props of the component, see {@link TextFieldProps}.
 * @param props.label Visible label of the field.
 * @param props.hint Help text under the field.
 * @param props.error Error under the field; marks it as invalid.
 * @param props.className Extra class name for the root element.
 * @param props.rest Remaining properties, forwarded to the `<input>`.
 * @returns The rendered element.
 */
export function TextField({ label, hint, error, className, ...rest }: TextFieldProps) {
  const id = useId();
  const describedBy = messageId(id, error ?? hint);

  return (
    <div className={cx(styles.field, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input {...rest} id={id} className={styles.input} aria-invalid={Boolean(error) || undefined} aria-describedby={describedBy} />
      {describedBy && <FieldMessage id={describedBy} hint={hint} error={error} />}
    </div>
  );
}
