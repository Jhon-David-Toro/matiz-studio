import type { Scene } from "./PreviewPanel.types";

export const SCENE_GROUP = { label: "Escena", name: "preview-scene" };

export const SCENES: { value: Scene; label: string }[] = [
  { value: "landing", label: "Landing" },
  { value: "dashboard", label: "Dashboard" },
  { value: "mobile", label: "App móvil" },
];

export const CANVAS_LABEL = "Vista previa del sistema";
