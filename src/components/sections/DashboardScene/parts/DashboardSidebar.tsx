import { KitAvatar } from "@/components/kit/KitAvatar";
import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import { NAV, SIDEBAR } from "../DashboardScene.constants";
import styles from "../DashboardScene.module.scss";

/**
 * Sidebar of the dashboard: logo, sections with counters and the signed-in person.
 *
 * @returns The rendered element.
 */
export function DashboardSidebar() {
  return (
    <aside className={styles.sidebar}>
      <span className={styles.logo}>
        <span className={styles.logoMark} aria-hidden="true" />
        {SIDEBAR.product}
      </span>
      <nav aria-label={SIDEBAR.label}>
        <ul className={styles.nav}>
          {NAV.map((entry) => (
            <li key={entry.label}>
              <a href="#dashboard" aria-current={entry.active ? "page" : undefined} className={cx(styles.navLink, entry.active && styles.active)}>
                <Icon icon={entry.icon} size="small" />
                <span className={styles.navLabel}>{entry.label}</span>
                {entry.count && <span className={styles.count}>{entry.count}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.user}>
        <KitAvatar name={SIDEBAR.user} size="sm" status="online" />
        <span className={styles.userText}>
          <strong>{SIDEBAR.user}</strong>
          <span>{SIDEBAR.plan}</span>
        </span>
      </div>
    </aside>
  );
}
