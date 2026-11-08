import type { VisionMode } from "@/lib/color/color.types";
import type { ThemeMode } from "@/lib/system/system.types";

export const MODE_GROUP = { label: "Tema", name: "canvas-mode" };

export const MODE_OPTIONS: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Oscuro" },
];

export const VISION_LABEL = "Simular visión";

export const VISION_OPTIONS: { value: VisionMode; label: string }[] = [
  { value: "normal", label: "Visión típica" },
  { value: "protanopia", label: "Protanopia (rojo)" },
  { value: "deuteranopia", label: "Deuteranopia (verde)" },
  { value: "tritanopia", label: "Tritanopia (azul)" },
  { value: "achromatopsia", label: "Acromatopsia (grises)" },
];

export const VISION_FILTER_PREFIX = "matiz-vision";
