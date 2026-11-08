import type { KitAccordionProps } from "./KitAccordion.types";
import styles from "./KitAccordion.module.scss";

/**
 * Sample accordion of questions on native `<details>`, so it opens with the keyboard without any script.
 *
 * @param props Props of the component, see {@link KitAccordionProps}.
 * @param props.items Questions and answers.
 * @returns The rendered element.
 */
export function KitAccordion({ items }: KitAccordionProps) {
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <details key={item.question} className={styles.item} open={index === 0}>
          <summary className={styles.summary}>{item.question}</summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
