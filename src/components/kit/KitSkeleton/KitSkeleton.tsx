import type { KitSkeletonProps } from "./KitSkeleton.types";
import styles from "./KitSkeleton.module.scss";

/**
 * Sample loading placeholder: an avatar and some lines of text. Hidden from assistive tech.
 *
 * @param props Props of the component, see {@link KitSkeletonProps}.
 * @param props.lines Lines of text to draw.
 * @returns The rendered element.
 */
export function KitSkeleton({ lines = 3 }: KitSkeletonProps) {
  return (
    <div className={styles.skeleton} aria-hidden="true">
      <span className={styles.avatar} />
      <span className={styles.lines}>
        {Array.from({ length: lines }, (_, index) => (
          <span key={index} className={styles.line} />
        ))}
      </span>
    </div>
  );
}
