import { ContrastList } from "@/components/patterns/ContrastList";
import { Badge } from "@/components/ui/Badge";
import { checkContrast, contrastScore } from "@/lib/system/accessibility.utils";

import { MODE_TITLES } from "../AccessibilityPanel.constants";
import type { ThemeReportProps } from "../AccessibilityPanel.types";
import { scoreLabel } from "../AccessibilityPanel.utils";
import styles from "../AccessibilityPanel.module.scss";

/**
 * Contrast report of one theme with its score.
 *
 * @param props Props of the component, see {@link ThemeReportProps}.
 * @param props.system Design system.
 * @param props.mode Theme to report.
 * @returns The rendered element.
 */
export function ThemeReport({ system, mode }: ThemeReportProps) {
  const checks = checkContrast(system.themes[mode]);
  const { passed, total } = contrastScore(checks);

  return (
    <section className={styles.report} aria-label={MODE_TITLES[mode]}>
      <header className={styles.reportHeader}>
        <h2 className={styles.reportTitle}>{MODE_TITLES[mode]}</h2>
        <Badge tone={passed === total ? "success" : "danger"}>{scoreLabel(passed, total)}</Badge>
      </header>
      <ContrastList checks={checks} />
    </section>
  );
}
