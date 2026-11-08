import type { LucideIcon } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

export type IconButtonProps = Omit<ComponentPropsWithRef<"button">, "children"> & {
  icon: LucideIcon;
  label: string;
  tone?: "default" | "danger";
};
