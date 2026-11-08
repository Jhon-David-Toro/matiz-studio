import type { KitTone } from "@/lib/kit/kit.types";

export type KitAlertTone = Exclude<KitTone, "neutral" | "primary">;

export type KitAlertProps = {
  tone: KitAlertTone;
  title: string;
  children: React.ReactNode;
  action?: string;
};
