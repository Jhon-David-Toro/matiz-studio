import type { LucideIcon } from "lucide-react";

export type NavEntry = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  count?: number;
};

export type ChartBar = {
  month: string;
  current: number;
  previous: number;
};
