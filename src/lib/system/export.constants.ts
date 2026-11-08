import type { ExportFormat } from "./system.types";

export const EXPORT_FORMATS: { value: ExportFormat; label: string; file: string; mime: string }[] = [
  { value: "css", label: "CSS", file: "tokens.css", mime: "text/css" },
  { value: "scss", label: "SCSS", file: "_tokens.scss", mime: "text/x-scss" },
  { value: "json", label: "JSON (W3C)", file: "tokens.json", mime: "application/json" },
];

export const DARK_SELECTOR = '[data-theme="dark"]';

export const FILE_HEADER = "Generated with Matiz";
