"use client";

import { useState } from "react";

import { ChevronLeft, ChevronRight, Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import { LABELS } from "./KitPagination.constants";
import type { KitPaginationProps } from "./KitPagination.types";
import { clampPage } from "./KitPagination.utils";
import styles from "./KitPagination.module.scss";

/**
 * Sample pagination with previous and next buttons and the page numbers.
 *
 * @param props Props of the component, see {@link KitPaginationProps}.
 * @param props.pages Number of pages.
 * @returns The rendered element.
 */
export function KitPagination({ pages }: KitPaginationProps) {
  const [page, setPage] = useState(1);

  return (
    <nav aria-label={LABELS.nav} className={styles.pagination}>
      <button type="button" aria-label={LABELS.previous} className={styles.page} disabled={page === 1} onClick={() => setPage(clampPage(page - 1, pages))}>
        <Icon icon={ChevronLeft} size="small" />
      </button>
      {Array.from({ length: pages }, (_, index) => index + 1).map((number) => (
        <button
          key={number}
          type="button"
          aria-label={`${LABELS.page} ${number}`}
          aria-current={number === page ? "page" : undefined}
          className={cx(styles.page, number === page && styles.current)}
          onClick={() => setPage(number)}
        >
          {number}
        </button>
      ))}
      <button type="button" aria-label={LABELS.next} className={styles.page} disabled={page === pages} onClick={() => setPage(clampPage(page + 1, pages))}>
        <Icon icon={ChevronRight} size="small" />
      </button>
    </nav>
  );
}
