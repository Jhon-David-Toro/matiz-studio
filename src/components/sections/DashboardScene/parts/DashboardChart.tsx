import { KitCard } from "@/components/kit/KitCard";

import { BARS, CHART } from "../DashboardScene.constants";
import { barStyle } from "../DashboardScene.utils";
import styles from "../DashboardScene.module.scss";

/**
 * Bar chart of deliveries per month, this year (primary) against last year (accent), drawn with plain elements.
 *
 * @returns The rendered element.
 */
export function DashboardChart() {
  return (
    <KitCard
      title={CHART.title}
      description={CHART.description}
      actions={
        <span className={styles.legend}>
          <span className={styles.legendCurrent}>{CHART.current}</span>
          <span className={styles.legendPrevious}>{CHART.previous}</span>
        </span>
      }
    >
      <div role="img" aria-label={CHART.label} className={styles.chart}>
        {BARS.map((bar) => (
          <div key={bar.month} className={styles.column}>
            <div className={styles.bars}>
              <span className={styles.barPrevious} style={barStyle(bar.previous)} />
              <span className={styles.barCurrent} style={barStyle(bar.current)} />
            </div>
            <span className={styles.month}>{bar.month}</span>
          </div>
        ))}
      </div>
    </KitCard>
  );
}
