import type { LucideIcon } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

export type KitFieldKind = "input" | "textarea" | "select";

export type KitFieldProps = {
  label: string;
  kind?: KitFieldKind;
  hint?: string;
  error?: string;
  icon?: LucideIcon;
  options?: string[];
  className?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "id" | "className"> &
  Pick<ComponentPropsWithoutRef<"textarea">, "rows">;

export type FieldControlProps = Omit<KitFieldProps, "label" | "hint" | "error" | "className"> & {
  id: string;
  describedBy?: string;
  invalid: boolean;
};
