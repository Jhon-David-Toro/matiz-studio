import { KitAvatar } from "@/components/kit/KitAvatar";
import { KitCard } from "@/components/kit/KitCard";

import { ACTIVITY } from "../DashboardScene.constants";
import styles from "../DashboardScene.module.scss";

/**
 * Recent activity of the team, with who did what and when.
 *
 * @returns The rendered element.
 */
export function DashboardActivity() {
  return (
    <KitCard title={ACTIVITY.title}>
      <ul className={styles.activity}>
        {ACTIVITY.items.map((item) => (
          <li key={item.who} className={styles.activityItem}>
            <KitAvatar name={item.who} size="sm" />
            <span className={styles.activityText}>
              <span>
                <strong>{item.who}</strong> {item.what}
              </span>
              <span className={styles.when}>{item.when}</span>
            </span>
          </li>
        ))}
      </ul>
    </KitCard>
  );
}
