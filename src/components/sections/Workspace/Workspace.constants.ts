import type { WorkspaceTab } from "./Workspace.types";

export const TABS_LABEL = "Vistas del sistema";

export const ID_PREFIX = "workspace";

export const TABS: { value: WorkspaceTab; label: string }[] = [
  { value: "preview", label: "Vista previa" },
  { value: "tokens", label: "Tokens" },
  { value: "accessibility", label: "Accesibilidad" },
  { value: "export", label: "Exportar" },
];
