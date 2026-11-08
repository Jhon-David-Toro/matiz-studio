"use client";

import { DEFAULT_DURATION } from "./Snackbar.constants";
import type { SnackbarProps } from "./Snackbar.types";
import { useAutoDismiss } from "./hooks/useAutoDismiss";
import styles from "./Snackbar.module.scss";

/**
 * Short message at the bottom of the screen with an optional action, such as "Deshacer". The live region is always
 * rendered so screen readers announce every new message.
 *
 * @param props Props of the component, see {@link SnackbarProps}.
 * @param props.message Message to show; hidden without one.
 * @param props.actionLabel Label of the action button.
 * @param props.onAction Called when the action is pressed; the snackbar closes too.
 * @param props.onDismiss Called to hide the snackbar.
 * @param props.duration Time on screen, in milliseconds.
 * @returns The rendered element.
 */
export function Snackbar({ message, actionLabel, onAction, onDismiss, duration = DEFAULT_DURATION }: SnackbarProps) {
  useAutoDismiss({ message, onDismiss, duration });

  /** Runs the action and hides the message. */
  function handleAction() {
    onAction?.();
    onDismiss();
  }

  return (
    <div role="status" className={styles.region}>
      {message && (
        <div className={styles.snackbar}>
          <span className={styles.message}>{message}</span>
          {actionLabel && (
            <button type="button" className={styles.action} onClick={handleAction}>
              {actionLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
