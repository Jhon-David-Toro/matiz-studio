import { Icon, X } from "@/components/ui/Icon";

import { CLOSE_LABEL } from "./KitToast.constants";
import type { KitToastProps } from "./KitToast.types";
import styles from "./KitToast.module.scss";

/**
 * Sample toast: dark surface, a short message, an action and a close button.
 *
 * @param props Props of the component, see {@link KitToastProps}.
 * @param props.message Text of the toast.
 * @param props.action Label of the action.
 * @returns The rendered element.
 */
export function KitToast({ message, action }: KitToastProps) {
  return (
    <div className={styles.toast}>
      <span className={styles.message}>{message}</span>
      {action && (
        <button type="button" className={styles.action}>
          {action}
        </button>
      )}
      <button type="button" aria-label={CLOSE_LABEL} className={styles.close}>
        <Icon icon={X} size="small" />
      </button>
    </div>
  );
}
