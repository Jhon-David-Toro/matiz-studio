import { COPY } from "../PreviewPanel.constants";
import styles from "../PreviewPanel.module.scss";

/**
 * Navigation bar and hero of the sample product: badge, title, lead and the three button styles.
 *
 * @returns The rendered element.
 */
export function PreviewHero() {
  return (
    <>
      <div className={styles.nav}>
        <span className={styles.logo}>
          <span className={styles.logoMark} />
          {COPY.product}
        </span>
        <span className={styles.navLinks}>
          {COPY.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
        <button type="button" className={styles.buttonPrimary}>
          {COPY.navAction}
        </button>
      </div>
      <div className={styles.hero}>
        <span className={styles.badge}>{COPY.badge}</span>
        <h3 className={styles.title}>{COPY.title}</h3>
        <p className={styles.lead}>{COPY.lead}</p>
        <div className={styles.buttons}>
          <button type="button" className={styles.buttonPrimary}>
            {COPY.primary}
          </button>
          <button type="button" className={styles.buttonSecondary}>
            {COPY.secondary}
          </button>
          <a href="#preview" className={styles.link}>
            {COPY.link}
          </a>
        </div>
      </div>
    </>
  );
}
