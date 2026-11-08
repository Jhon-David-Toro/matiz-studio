import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import { ALERT_ICONS } from "./KitAlert.constants";
import type { KitAlertProps } from "./KitAlert.types";
import styles from "./KitAlert.module.scss";

/**
 * Sample inline alert with an icon, a title, a message and an optional action. Danger alerts are announced at once.
 *
 * @param props Props of the component, see {@link KitAlertProps}.
 * @param props.tone Meaning of the alert.
 * @param props.title Short title.
 * @param props.children Message.
 * @param props.action Label of a link-styled action.
 * @returns The rendered element.
 */
export function KitAlert({ tone, title, children, action }: KitAlertProps) {
  return (
    <div role={tone === "danger" ? "alert" : "status"} className={cx(styles.alert, styles[tone])}>
      <Icon icon={ALERT_ICONS[tone]} className={styles.icon} />
      <div className={styles.body}>
        <strong className={styles.title}>{title}</strong>
        <span>{children}</span>
        {action && (
          <button type="button" className={styles.action}>
            {action}
          </button>
        )}
      </div>
    </div>
  );
}
