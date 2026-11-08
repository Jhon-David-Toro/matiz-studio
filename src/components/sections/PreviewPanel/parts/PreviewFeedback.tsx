import { cx } from "@/lib/shared/cx";

import { COPY } from "../PreviewPanel.constants";
import styles from "../PreviewPanel.module.scss";

/**
 * Stats, status alerts, tags and the accent button of the sample product.
 *
 * @returns The rendered element.
 */
export function PreviewFeedback() {
  return (
    <div className={styles.stack}>
      <div className={styles.card}>
        <h4 className={styles.cardTitle}>{COPY.statsTitle}</h4>
        <div className={styles.stats}>
          {COPY.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.delta}>{stat.delta}</span>
            </div>
          ))}
        </div>
        <div className={styles.tags}>
          {COPY.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <button type="button" className={styles.buttonAccent}>
          {COPY.accent}
        </button>
      </div>
      {COPY.alerts.map((alert) => (
        <div key={alert.tone} className={cx(styles.alert, styles[alert.tone])}>
          <strong className={styles.alertTitle}>{alert.title}</strong>
          <span className={styles.alertText}>{alert.text}</span>
        </div>
      ))}
    </div>
  );
}
