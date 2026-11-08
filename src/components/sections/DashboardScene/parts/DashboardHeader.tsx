import { KitBreadcrumbs } from "@/components/kit/KitBreadcrumbs";
import { KitButton } from "@/components/kit/KitButton";
import { KitField } from "@/components/kit/KitField";
import { KitTabs } from "@/components/kit/KitTabs";
import { KitTooltip } from "@/components/kit/KitTooltip";
import { Bell, Plus, Search } from "@/components/ui/Icon";

import { HEADER } from "../DashboardScene.constants";
import styles from "../DashboardScene.module.scss";

/**
 * Top of the dashboard: breadcrumbs, greeting, search, notifications, the main action and the period tabs.
 *
 * @returns The rendered element.
 */
export function DashboardHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.heading}>
          <KitBreadcrumbs items={HEADER.crumbs} />
          <h3 className={styles.title}>{HEADER.title}</h3>
        </div>
        <div className={styles.headerActions}>
          <KitField label={HEADER.search} icon={Search} placeholder={HEADER.searchPlaceholder} className={styles.search} />
          <KitTooltip tip={HEADER.notifications}>
            <KitButton variant="secondary" icon={Bell} iconOnly>
              {HEADER.notifications}
            </KitButton>
          </KitTooltip>
          <KitButton icon={Plus}>{HEADER.newProject}</KitButton>
        </div>
      </div>
      <KitTabs label={HEADER.tabsLabel} tabs={HEADER.tabs} />
    </header>
  );
}
