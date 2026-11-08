import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import type { KitMenuProps } from "./KitMenu.types";
import styles from "./KitMenu.module.scss";

/**
 * Sample dropdown menu, drawn open: items with icons, keyboard shortcuts and a destructive item after a separator.
 *
 * @param props Props of the component, see {@link KitMenuProps}.
 * @param props.label Accessible name of the menu.
 * @param props.items Items of the menu.
 * @returns The rendered element.
 */
export function KitMenu({ label, items }: KitMenuProps) {
  return (
    <div role="menu" aria-label={label} className={styles.menu}>
      {items.map((item) => (
        <button key={item.label} type="button" role="menuitem" className={cx(styles.item, item.danger && styles.danger)}>
          <Icon icon={item.icon} size="small" />
          <span className={styles.label}>{item.label}</span>
          {item.shortcut && <kbd className={styles.shortcut}>{item.shortcut}</kbd>}
        </button>
      ))}
    </div>
  );
}
