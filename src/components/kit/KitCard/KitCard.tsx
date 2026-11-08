import { cx } from "@/lib/shared/cx";

import type { KitCardProps } from "./KitCard.types";
import styles from "./KitCard.module.scss";

/**
 * Sample card: surface with the generated border, radius and shadow, an optional header, body and footer.
 *
 * @param props Props of the component, see {@link KitCardProps}.
 * @param props.title Heading of the card.
 * @param props.description Sentence under the heading.
 * @param props.actions Elements at the right of the header.
 * @param props.footer Content of the footer.
 * @param props.children Body of the card.
 * @param props.className Extra class name for the root element.
 * @returns The rendered element.
 */
export function KitCard({ title, description, actions, footer, children, className }: KitCardProps) {
  return (
    <section className={cx(styles.card, className)}>
      {title && (
        <header className={styles.header}>
          <div className={styles.heading}>
            <h4 className={styles.title}>{title}</h4>
            {description && <p className={styles.description}>{description}</p>}
          </div>
          {actions}
        </header>
      )}
      {children}
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </section>
  );
}
