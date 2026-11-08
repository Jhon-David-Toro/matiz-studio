import type { ContrastListProps } from "./ContrastList.types";
import { ContrastRow } from "./parts/ContrastRow";
import styles from "./ContrastList.module.scss";

/**
 * Contrast of every pair of tokens that is read together.
 *
 * @param props Props of the component, see {@link ContrastListProps}.
 * @param props.checks Results of the checks.
 * @returns The rendered element.
 */
export function ContrastList({ checks }: ContrastListProps) {
  return (
    <ul role="list" className={styles.list}>
      {checks.map((check) => (
        <ContrastRow key={check.id} check={check} />
      ))}
    </ul>
  );
}
