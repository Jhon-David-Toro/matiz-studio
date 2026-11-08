import type { GallerySectionProps, SpecimenProps } from "../ComponentsPanel.types";
import { cx } from "@/lib/shared/cx";

import styles from "../ComponentsPanel.module.scss";

/**
 * Group of the gallery with its title and description.
 *
 * @param props Props of the component, see {@link GallerySectionProps}.
 * @param props.title Title of the group.
 * @param props.description What the group shows.
 * @param props.children Specimens of the group.
 * @returns The rendered element.
 */
export function GallerySection({ title, description, children }: GallerySectionProps) {
  return (
    <section aria-label={title} className={styles.section}>
      <header className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        <p className={styles.sectionDescription}>{description}</p>
      </header>
      <div className={styles.specimens}>{children}</div>
    </section>
  );
}

/**
 * One specimen of a group: a small label and the components it shows.
 *
 * @param props Props of the component, see {@link SpecimenProps}.
 * @param props.label Name of what is shown.
 * @param props.wide Takes the whole row.
 * @param props.children Components to show.
 * @returns The rendered element.
 */
export function Specimen({ label, wide, children }: SpecimenProps) {
  return (
    <div className={cx(styles.specimen, wide && styles.wide)}>
      <span className={styles.specimenLabel}>{label}</span>
      <div className={styles.specimenBody}>{children}</div>
    </div>
  );
}
