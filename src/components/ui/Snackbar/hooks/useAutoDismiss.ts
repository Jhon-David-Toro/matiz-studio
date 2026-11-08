import { useEffect } from "react";

import type { UseAutoDismissParams } from "../Snackbar.types";
import { scheduleDismiss } from "../Snackbar.utils";

/**
 * Hides the snackbar on its own after `duration`; a new message starts the count again.
 *
 * @param params Options, see {@link UseAutoDismissParams}.
 * @param params.message Message on screen.
 * @param params.onDismiss Called when the time is up.
 * @param params.duration Time on screen, in milliseconds.
 */
export function useAutoDismiss({ message, onDismiss, duration }: UseAutoDismissParams) {
  useEffect(() => scheduleDismiss(message, onDismiss, duration), [message, onDismiss, duration]);
}
