/**
 * Schedules `onDismiss` while there is a message on screen.
 *
 * @param message Message on screen; nothing is scheduled without one.
 * @param onDismiss Called when the time is up.
 * @param duration Time on screen, in milliseconds.
 * @returns The cleanup that cancels the timer, or `undefined` when nothing was scheduled.
 */
export function scheduleDismiss(message: string | undefined, onDismiss: () => void, duration: number): (() => void) | undefined {
  if (!message) return undefined;
  const timer = window.setTimeout(onDismiss, duration);
  return () => window.clearTimeout(timer);
}
