import type { LucideIcon } from "lucide-react";

export type KitMenuItem = {
  label: string;
  icon: LucideIcon;
  shortcut?: string;
  danger?: boolean;
};

export type KitMenuProps = {
  label: string;
  items: KitMenuItem[];
};
