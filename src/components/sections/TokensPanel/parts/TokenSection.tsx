import type { TokenSectionProps } from "../TokensPanel.types";
import styles from "../TokensPanel.module.scss";

/**
 * Titled block of the tokens page.
 *
 * @param props Props of the component, see {@link TokenSectionProps}.
 * @param props.title Title of the block.
 * @param props.description Sentence under the title.
 * @param props.children Content of the block.
 * @returns The rendered element.
 */
export function TokenSection({ title, description, children }: TokenSectionProps) {
  return (
    <section className={styles.section} aria-label={title}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {description && <p className={styles.sectionDescription}>{description}</p>}
      </header>
      {children}
    </section>
  );
}
