import { cx } from "@/lib/shared/cx";

import type { FieldMessageProps } from "../TextField.types";
import styles from "../TextField.module.scss";

/**
 * Hint or error under a field; the error wins and is announced.
 *
 * @param props Props of the component, see {@link FieldMessageProps}.
 * @param props.id Id the field points at with `aria-describedby`.
 * @param props.hint Help text.
 * @param props.error Error text.
 * @returns The rendered element, or nothing without a message.
 */
export function FieldMessage({ id, hint, error }: FieldMessageProps) {
  const message = error ?? hint;
  if (!message) return null;

  return (
    <p id={id} className={cx(styles.message, error && styles.error)} role={error ? "alert" : undefined}>
      {message}
    </p>
  );
}
