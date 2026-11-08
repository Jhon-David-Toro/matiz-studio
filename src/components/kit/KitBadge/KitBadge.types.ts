import type { KitTone } from "@/lib/kit/kit.types";

export type KitBadgeProps = {
  tone?: KitTone;
  solid?: boolean;
  dot?: boolean;
  children: React.ReactNode;
};
