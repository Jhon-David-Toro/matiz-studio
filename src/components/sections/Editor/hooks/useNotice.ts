import { useState } from "react";

import type { NoticeState } from "../Editor.types";

/**
 * Short message shown in the snackbar.
 *
 * @returns The message and the functions that show and hide it.
 */
export function useNotice(): NoticeState {
  const [message, setMessage] = useState<string>();

  return { message, notify: setMessage, dismiss: () => setMessage(undefined) };
}
