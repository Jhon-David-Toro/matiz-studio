import { useState } from "react";

import { normalizeHex } from "@/lib/color/color.utils";

import type { ColorFieldProps } from "../ColorField.types";
import { syncDraft } from "../ColorField.utils";

/**
 * Text of the hex field: free while typing, and only sent to `onChange` once it is a valid color.
 *
 * @param value Current color.
 * @param onChange Called with each valid color.
 * @returns The text and the handler of the field.
 */
export function useHexDraft(value: string, onChange: ColorFieldProps["onChange"]) {
  const [draft, setDraft] = useState({ source: value, text: value });
  const synced = syncDraft(draft, value);
  if (synced !== draft) setDraft(synced);

  /**
   * Keeps the text and sends it when it is a color.
   *
   * @param text Text typed by the user.
   */
  function change(text: string) {
    const hex = normalizeHex(text);
    setDraft({ source: hex ?? value, text });
    if (hex) onChange(hex);
  }

  return { text: synced.text, change };
}
