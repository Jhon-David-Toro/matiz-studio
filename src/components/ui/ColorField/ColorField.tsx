"use client";

import { useId } from "react";

import { FieldMessage, messageId } from "@/components/ui/TextField";

import { INVALID_MESSAGE, PICKER_LABEL } from "./ColorField.constants";
import type { ColorFieldProps } from "./ColorField.types";
import { isInvalid } from "./ColorField.utils";
import { useHexDraft } from "./hooks/useHexDraft";
import styles from "./ColorField.module.scss";

/**
 * Color input: the native picker next to a hex text field that accepts `#abc`, `abc123` or `#aabbcc`.
 *
 * @param props Props of the component, see {@link ColorFieldProps}.
 * @param props.label Visible label of the hex field.
 * @param props.value Color as `#rrggbb`.
 * @param props.onChange Called with every valid color.
 * @param props.hint Help text under the field.
 * @returns The rendered element.
 */
export function ColorField({ label, value, onChange, hint }: ColorFieldProps) {
  const id = useId();
  const { text, change } = useHexDraft(value, onChange);
  const error = isInvalid(text) ? INVALID_MESSAGE : undefined;
  const describedBy = messageId(id, error ?? hint);

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.row}>
        <input type="color" aria-label={PICKER_LABEL} value={value} className={styles.picker} onChange={(event) => onChange(event.target.value)} />
        <input
          id={id}
          className={styles.input}
          value={text}
          spellCheck={false}
          autoComplete="off"
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy}
          onChange={(event) => change(event.target.value)}
        />
      </div>
      {describedBy && <FieldMessage id={describedBy} hint={hint} error={error} />}
    </div>
  );
}
