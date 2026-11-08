import { LandingFaq } from "./parts/LandingFaq";
import { LandingFeatures } from "./parts/LandingFeatures";
import { LandingHero } from "./parts/LandingHero";
import { LandingOffer } from "./parts/LandingOffer";
import styles from "./LandingScene.module.scss";

/**
 * Sample marketing page built from the kit: hero, features, sign-up, pricing, questions and a testimonial.
 *
 * @returns The rendered element.
 */
export function LandingScene() {
  return (
    <div id="landing" className={styles.scene}>
      <LandingHero />
      <LandingFeatures />
      <LandingOffer />
      <LandingFaq />
    </div>
  );
}
