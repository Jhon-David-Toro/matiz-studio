import { Icon, Inbox } from "@/components/ui/Icon";

import type { KitEmptyProps } from "./KitEmpty.types";
import styles from "./KitEmpty.module.scss";

/**
 * Sample empty state: icon, title, message and an optional action.
 *
 * @param props Props of the component, see {@link KitEmptyProps}.
 * @param props.title Short title.
 * @param props.message What to do next.
 * @param props.action Button under the message.
 * @returns The rendered element.
 */
export function KitEmpty({ title, message, action }: KitEmptyProps) {
  return (
    <div className={styles.empty}>
      <span className={styles.badge}>
        <Icon icon={Inbox} />
      </span>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.message}>{message}</p>
      {action}
    </div>
  );
}
