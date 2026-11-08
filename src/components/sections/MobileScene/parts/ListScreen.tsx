import { KitAvatar } from "@/components/kit/KitAvatar";
import { KitBadge } from "@/components/kit/KitBadge";
import { KitProgress } from "@/components/kit/KitProgress";
import { KitTabs } from "@/components/kit/KitTabs";
import { Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import { LIST, PHONES, TAB_BAR } from "../MobileScene.constants";
import { Phone } from "./Phone";
import styles from "../MobileScene.module.scss";

/**
 * Project list of the sample app with filters, progress and the bottom tab bar.
 *
 * @returns The rendered element.
 */
export function ListScreen() {
  return (
    <Phone label={PHONES.list}>
      <div className={styles.list}>
        <div className={styles.screenHeader}>
          <h4 className={styles.screenTitle}>{LIST.title}</h4>
          <KitAvatar name={LIST.user} size="sm" status="online" />
        </div>
        <KitTabs label={LIST.tabsLabel} tabs={LIST.tabs} variant="pill" />
        <ul className={styles.projects}>
          {LIST.projects.map((project) => (
            <li key={project.name} className={styles.project}>
              <div className={styles.projectTop}>
                <span>
                  <strong>{project.name}</strong>
                  <span className={styles.muted}>{project.team}</span>
                </span>
                <KitBadge tone={project.status.tone}>{project.status.label}</KitBadge>
              </div>
              <KitProgress label={LIST.progress} value={project.progress} />
            </li>
          ))}
        </ul>
      </div>
      <nav aria-label={TAB_BAR.label} className={styles.tabBar}>
        {TAB_BAR.items.map((item) => (
          <a key={item.label} href="#mobile" aria-current={item.active ? "page" : undefined} className={cx(styles.tabItem, item.active && styles.tabActive)}>
            <Icon icon={item.icon} size="small" />
            {item.label}
          </a>
        ))}
      </nav>
    </Phone>
  );
}
