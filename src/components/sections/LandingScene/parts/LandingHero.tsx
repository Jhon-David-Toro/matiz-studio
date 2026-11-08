import { KitAvatarGroup } from "@/components/kit/KitAvatar";
import { KitBadge } from "@/components/kit/KitBadge";
import { KitButton } from "@/components/kit/KitButton";

import { COPY } from "../LandingScene.constants";
import styles from "../LandingScene.module.scss";

/**
 * Navigation bar of the landing: logo, links and the sign-in and sign-up buttons.
 *
 * @returns The rendered element.
 */
function LandingNav() {
  return (
    <div className={styles.nav}>
      <span className={styles.logo}>
        <span className={styles.logoMark} aria-hidden="true" />
        {COPY.product}
      </span>
      <span className={styles.links}>
        {COPY.nav.map((item) => (
          <a key={item} href="#landing" className={styles.link}>
            {item}
          </a>
        ))}
      </span>
      <span className={styles.navActions}>
        <KitButton variant="ghost" size="sm">
          {COPY.login}
        </KitButton>
        <KitButton size="sm">{COPY.start}</KitButton>
      </span>
    </div>
  );
}

/**
 * Navigation bar and hero of the landing: badge, title, lead, actions and social proof.
 *
 * @returns The rendered element.
 */
export function LandingHero() {
  return (
    <>
      <LandingNav />
      <div className={styles.hero}>
        <KitBadge tone="primary" dot>
          {COPY.badge}
        </KitBadge>
        <h3 className={styles.title}>{COPY.title}</h3>
        <p className={styles.lead}>{COPY.lead}</p>
        <div className={styles.actions}>
          <KitButton size="lg">{COPY.primary}</KitButton>
          <KitButton size="lg" variant="secondary">
            {COPY.secondary}
          </KitButton>
        </div>
        <div className={styles.social}>
          <KitAvatarGroup names={COPY.people} />
          <span>{COPY.social}</span>
        </div>
      </div>
    </>
  );
}
