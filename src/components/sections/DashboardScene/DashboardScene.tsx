import { KitStat } from "@/components/kit/KitStat";
import { STATS } from "@/lib/kit/kit.samples.constants";

import { DashboardActivity } from "./parts/DashboardActivity";
import { DashboardChart } from "./parts/DashboardChart";
import { DashboardHeader } from "./parts/DashboardHeader";
import { DashboardSidebar } from "./parts/DashboardSidebar";
import { DashboardTeam } from "./parts/DashboardTeam";
import styles from "./DashboardScene.module.scss";

/**
 * Sample product dashboard built from the kit: sidebar, header, metrics, chart, activity and the team table.
 *
 * @returns The rendered element.
 */
export function DashboardScene() {
  return (
    <div id="dashboard" className={styles.scene}>
      <DashboardSidebar />
      <div className={styles.main}>
        <DashboardHeader />
        <div className={styles.stats}>
          {STATS.map((stat) => (
            <KitStat key={stat.label} {...stat} />
          ))}
        </div>
        <div className={styles.columns}>
          <DashboardChart />
          <DashboardActivity />
        </div>
        <DashboardTeam />
      </div>
    </div>
  );
}
