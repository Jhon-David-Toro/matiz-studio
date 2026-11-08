import { KitBadge } from "@/components/kit/KitBadge";
import { KitButton } from "@/components/kit/KitButton";
import { KitCard } from "@/components/kit/KitCard";
import { KitCheck } from "@/components/kit/KitCheck";
import { KitField } from "@/components/kit/KitField";
import { Check, Icon, Mail } from "@/components/ui/Icon";

import { PRICING, SIGN_UP } from "../LandingScene.constants";
import styles from "../LandingScene.module.scss";

/**
 * Sign-up form and the featured pricing plan, side by side.
 *
 * @returns The rendered element.
 */
export function LandingOffer() {
  return (
    <div className={styles.offer}>
      <KitCard title={SIGN_UP.title} description={SIGN_UP.description}>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <KitField label={SIGN_UP.email} type="email" icon={Mail} placeholder={SIGN_UP.emailPlaceholder} />
          <KitField label={SIGN_UP.password} type="password" icon={SIGN_UP.lockIcon} hint={SIGN_UP.passwordHint} />
          <KitCheck label={SIGN_UP.terms} defaultChecked />
          <KitButton type="submit" fullWidth>
            {SIGN_UP.submit}
          </KitButton>
        </form>
      </KitCard>
      <KitCard className={styles.plan} title={PRICING.name} actions={<KitBadge tone="primary" solid>{PRICING.badge}</KitBadge>}>
        <p className={styles.price}>
          <span className={styles.amount}>{PRICING.price}</span> {PRICING.period}
        </p>
        <ul className={styles.planList}>
          {PRICING.features.map((feature) => (
            <li key={feature}>
              <Icon icon={Check} size="small" className={styles.planCheck} />
              {feature}
            </li>
          ))}
        </ul>
        <KitButton variant="accent" fullWidth>
          {PRICING.action}
        </KitButton>
      </KitCard>
    </div>
  );
}
