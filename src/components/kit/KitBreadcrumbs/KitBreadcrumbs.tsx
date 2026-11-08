import { ChevronRight, Icon } from "@/components/ui/Icon";

import { NAV_LABEL } from "./KitBreadcrumbs.constants";
import type { KitBreadcrumbsProps } from "./KitBreadcrumbs.types";
import styles from "./KitBreadcrumbs.module.scss";

/**
 * Sample breadcrumbs; the last item is the current page.
 *
 * @param props Props of the component, see {@link KitBreadcrumbsProps}.
 * @param props.items Labels from the root to the current page.
 * @returns The rendered element.
 */
export function KitBreadcrumbs({ items }: KitBreadcrumbsProps) {
  return (
    <nav aria-label={NAV_LABEL}>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={item} className={styles.item}>
            {index > 0 && <Icon icon={ChevronRight} size="small" className={styles.separator} />}
            {index === items.length - 1 ? (
              <span aria-current="page" className={styles.current}>
                {item}
              </span>
            ) : (
              <a href="#breadcrumbs" className={styles.link}>
                {item}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
