import { Icon, Sparkles } from "@/components/ui/Icon";

import { INTRO, MODES } from "./AccessibilityPanel.constants";
import type { AccessibilityPanelProps } from "./AccessibilityPanel.types";
import { ThemeReport } from "./parts/ThemeReport";
import styles from "./AccessibilityPanel.module.scss";

/**
 * Contrast of every pair of tokens in the light and dark themes, against WCAG 2.2.
 *
 * @param props Props of the component, see {@link AccessibilityPanelProps}.
 * @param props.system Design system.
 * @returns The rendered element.
 */
export function AccessibilityPanel({ system }: AccessibilityPanelProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.intro}>
        <Icon icon={Sparkles} tone="brand" />
        <div>
          <p className={styles.introTitle}>{INTRO.title}</p>
          <p className={styles.introText}>{INTRO.text}</p>
        </div>
      </div>
      <div className={styles.reports}>
        {MODES.map((mode) => (
          <ThemeReport key={mode} system={system} mode={mode} />
        ))}
      </div>
    </div>
  );
}
