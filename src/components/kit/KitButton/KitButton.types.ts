import type { LucideIcon } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

export type KitButtonVariant = "primary" | "secondary" | "ghost" | "accent" | "danger";

export type KitButtonSize = "sm" | "md" | "lg";

export type KitButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: KitButtonVariant;
  size?: KitButtonSize;
  icon?: LucideIcon;
  iconOnly?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
};
