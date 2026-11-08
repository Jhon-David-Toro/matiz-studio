import type { LucideIcon } from "lucide-react";

export type IconSize = "small" | "medium" | "large";

export type IconTone = "inherit" | "secondary" | "success" | "danger" | "brand";

export type IconProps = {
  icon: LucideIcon;
  size?: IconSize;
  tone?: IconTone;
  label?: string;
  className?: string;
};
