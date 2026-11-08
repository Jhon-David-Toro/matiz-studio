import { Icon } from "@/components/ui/Icon";

import { FEATURES } from "../LandingScene.constants";
import styles from "../LandingScene.module.scss";

/**
 * Three features with an icon, a title and a sentence.
 *
 * @returns The rendered element.
 */
export function LandingFeatures() {
  return (
    <ul className={styles.features}>
      {FEATURES.map((feature) => (
        <li key={feature.title} className={styles.feature}>
          <span className={styles.featureIcon}>
            <Icon icon={feature.icon} />
          </span>
          <h4 className={styles.featureTitle}>{feature.title}</h4>
          <p className={styles.featureText}>{feature.text}</p>
        </li>
      ))}
    </ul>
  );
}
