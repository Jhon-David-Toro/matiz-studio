import { normalizeHex } from "@/lib/color/color.utils";

import type { HexDraft } from "./ColorField.types";

/**
 * Keeps the typed text when the color changes because of it, and replaces it when the color changes from outside
 * (a preset or the picker).
 *
 * @param draft Text being typed and the color it was typed for.
 * @param value Current color.
 * @returns The same draft when nothing changes; otherwise the new one.
 */
export function syncDraft(draft: HexDraft, value: string): HexDraft {
  if (draft.source === value) return draft;
  return { source: value, text: normalizeHex(draft.text) === value ? draft.text : value };
}

/**
 * Whether the typed text is not a color yet and should show an error.
 *
 * @param text Typed text.
 * @returns True when the text is not a hex color.
 */
export function isInvalid(text: string): boolean {
  return normalizeHex(text) === undefined;
}
