import type { Swatch } from "@/lib/system/system.types";

import { ANCHOR_LABEL, COPY_PREFIX } from "./PaletteStrip.constants";

/**
 * Accessible name of a swatch button.
 *
 * @param paletteLabel Name of the palette.
 * @param swatch Swatch the button copies.
 * @returns The name, e.g. "Copiar Primario 500, #5b3cff, tu color".
 */
export function swatchLabel(paletteLabel: string, swatch: Swatch): string {
  const anchor = swatch.anchor ? `, ${ANCHOR_LABEL.toLowerCase()}` : "";
  return `${COPY_PREFIX} ${paletteLabel} ${swatch.step}, ${swatch.hex}${anchor}`;
}
