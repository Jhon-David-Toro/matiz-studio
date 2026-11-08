import type { ComponentPropsWithoutRef } from "react";

export type KitCheckKind = "checkbox" | "radio" | "switch";

export type KitCheckProps = Omit<ComponentPropsWithoutRef<"input">, "type"> & {
  kind?: KitCheckKind;
  label: string;
  description?: string;
};
