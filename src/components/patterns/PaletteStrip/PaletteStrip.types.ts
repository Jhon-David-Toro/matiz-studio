import type { Palette, Swatch } from "@/lib/system/system.types";

export type PaletteStripProps = {
  palette: Palette;
  onCopy: (hex: string) => void;
};

export type SwatchButtonProps = {
  paletteLabel: string;
  swatch: Swatch;
  onCopy: (hex: string) => void;
};
