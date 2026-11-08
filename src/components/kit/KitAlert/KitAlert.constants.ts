import { CircleAlert, CircleCheck, Info, TriangleAlert } from "@/components/ui/Icon";

import type { KitAlertTone } from "./KitAlert.types";

export const ALERT_ICONS: Record<KitAlertTone, typeof Info> = {
  success: CircleCheck,
  warning: TriangleAlert,
  danger: CircleAlert,
  info: Info,
};
