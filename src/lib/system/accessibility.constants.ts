import type { ContrastPair } from "./system.types";

export const CONTRAST_PAIRS: ContrastPair[] = [
  { id: "text", label: "Texto sobre fondo", foreground: "text", background: "background", min: 4.5 },
  { id: "text-muted", label: "Texto secundario sobre superficie", foreground: "text-muted", background: "surface", min: 4.5 },
  { id: "button", label: "Botón primario", foreground: "on-primary", background: "primary", min: 4.5 },
  { id: "link", label: "Enlace sobre superficie", foreground: "primary-text", background: "surface", min: 4.5 },
  { id: "soft", label: "Etiqueta suave", foreground: "on-primary-soft", background: "primary-soft", min: 4.5 },
  { id: "accent", label: "Botón de acento", foreground: "on-accent", background: "accent", min: 4.5 },
  { id: "border", label: "Borde de campo", foreground: "border-strong", background: "surface", min: 3 },
  { id: "focus", label: "Anillo de foco", foreground: "focus", background: "background", min: 3 },
  { id: "success", label: "Texto de éxito", foreground: "success", background: "surface", min: 4.5 },
  { id: "warning", label: "Texto de advertencia", foreground: "warning", background: "surface", min: 4.5 },
  { id: "danger", label: "Texto de peligro", foreground: "danger", background: "surface", min: 4.5 },
  { id: "info", label: "Texto informativo", foreground: "info", background: "surface", min: 4.5 },
];
