import type { ThemeMode } from "@/lib/system/system.types";

export const INTRO = {
  title: "Accesible por defecto",
  text: "Matiz no solo mide el contraste: elige el paso de cada token para que pase WCAG 2.2 AA. Texto a 4.5:1, bordes y foco a 3:1. Si cambias el color de marca, los tokens se reacomodan solos.",
};

export const MODE_TITLES: Record<ThemeMode, string> = {
  light: "Tema claro",
  dark: "Tema oscuro",
};

export const MODES: ThemeMode[] = ["light", "dark"];
