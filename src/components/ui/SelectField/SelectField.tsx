import { useId } from "react";

import { FieldMessage, messageId } from "@/components/ui/TextField";
import { cx } from "@/lib/shared/cx";

import type { SelectFieldProps } from "./SelectField.types";
import styles from "./SelectField.module.scss";

/**
 * Native `<select>` with its label and an optional error, styled like the text fields.
 *
 * @param props Props of the component, see {@link SelectFieldProps}.
 * @param props.label Visible label of the field.
 * @param props.options Options to pick from.
 * @param props.error Error under the field; marks it as invalid.
 * @param props.className Extra class name for the root element.
 * @param props.rest Remaining properties, forwarded to the `<select>`.
 * @returns The rendered element.
 */
export function SelectField({ label, options, error, className, ...rest }: SelectFieldProps) {
  const id = useId();
  const describedBy = messageId(id, error);

  return (
    <div className={cx(styles.field, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select {...rest} id={id} className={styles.select} aria-invalid={Boolean(error) || undefined} aria-describedby={describedBy}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {describedBy && <FieldMessage id={describedBy} error={error} />}
    </div>
  );
}
