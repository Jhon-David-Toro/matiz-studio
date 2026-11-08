import { KitAccordion } from "@/components/kit/KitAccordion";
import { KitAvatar } from "@/components/kit/KitAvatar";

import { FAQ, FOOTER, QUOTE } from "../LandingScene.constants";
import styles from "../LandingScene.module.scss";

/**
 * Frequent questions, a testimonial and the footer of the landing.
 *
 * @returns The rendered element.
 */
export function LandingFaq() {
  return (
    <>
      <div className={styles.faq}>
        <KitAccordion items={FAQ} />
        <figure className={styles.quote}>
          <blockquote className={styles.quoteText}>“{QUOTE.text}”</blockquote>
          <figcaption className={styles.quoteAuthor}>
            <KitAvatar name={QUOTE.author} />
            <span>
              <strong>{QUOTE.author}</strong>
              <span className={styles.quoteRole}>{QUOTE.role}</span>
            </span>
          </figcaption>
        </figure>
      </div>
      <p className={styles.footer}>{FOOTER}</p>
    </>
  );
}
