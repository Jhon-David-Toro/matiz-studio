import { KitAlert } from "@/components/kit/KitAlert";
import { KitBadge } from "@/components/kit/KitBadge";
import { KitButton } from "@/components/kit/KitButton";
import { KitProgress } from "@/components/kit/KitProgress";
import { KitSkeleton } from "@/components/kit/KitSkeleton";
import { KitToast } from "@/components/kit/KitToast";
import { KitTooltip } from "@/components/kit/KitTooltip";

import { FEEDBACK, GROUPS } from "../ComponentsPanel.constants";
import styles from "../ComponentsPanel.module.scss";
import { GallerySection, Specimen } from "./GallerySection";

/**
 * The four alert tones.
 *
 * @returns The rendered element.
 */
function Alerts() {
  return (
    <div className={styles.alerts}>
      {FEEDBACK.alerts.map((alert) => (
        <KitAlert key={alert.tone} tone={alert.tone} title={alert.title} action={alert.action}>
          {alert.text}
        </KitAlert>
      ))}
    </div>
  );
}

/**
 * Every badge tone, soft and solid.
 *
 * @returns The rendered element.
 */
function Badges() {
  return (
    <Specimen label={FEEDBACK.badges.label}>
      {FEEDBACK.badges.items.map((tone) => (
        <KitBadge key={tone} tone={tone}>
          {FEEDBACK.badges.names[tone]}
        </KitBadge>
      ))}
      {FEEDBACK.badges.items.map((tone) => (
        <KitBadge key={`${tone}-solid`} tone={tone} solid>
          {FEEDBACK.badges.names[tone]}
        </KitBadge>
      ))}
    </Specimen>
  );
}

/**
 * Alerts, a toast, progress, a spinner, a skeleton, badges and a tooltip.
 *
 * @returns The rendered element.
 */
export function FeedbackGroup() {
  return (
    <GallerySection {...GROUPS.feedback}>
      <Alerts />
      <Specimen label={FEEDBACK.toast.label}>
        <KitToast message={FEEDBACK.toast.message} action={FEEDBACK.toast.action} />
      </Specimen>
      <Specimen label={FEEDBACK.progress.label}>
        <KitProgress label={FEEDBACK.progress.value} value={64} />
        <KitProgress label={FEEDBACK.progress.loading} />
      </Specimen>
      <Specimen label={FEEDBACK.skeleton.label}>
        <KitSkeleton />
      </Specimen>
      <Badges />
      <Specimen label={FEEDBACK.tooltip.label}>
        <span className={styles.tooltipDemo}>
          <KitTooltip tip={FEEDBACK.tooltip.tip}>
            <KitButton variant="secondary" size="sm">
              {FEEDBACK.tooltip.trigger}
            </KitButton>
          </KitTooltip>
        </span>
      </Specimen>
    </GallerySection>
  );
}
