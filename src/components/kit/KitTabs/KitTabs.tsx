"use client";

import { useState } from "react";

import { cx } from "@/lib/shared/cx";

import type { KitTabsProps } from "./KitTabs.types";
import styles from "./KitTabs.module.scss";

/**
 * Sample tabs in two styles: an underline or pills.
 *
 * @param props Props of the component, see {@link KitTabsProps}.
 * @param props.label Accessible name of the list.
 * @param props.tabs Labels of the tabs.
 * @param props.variant `line` (underline) or `pill`.
 * @returns The rendered element.
 */
export function KitTabs({ label, tabs, variant = "line" }: KitTabsProps) {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div role="tablist" aria-label={label} className={cx(styles.tabs, styles[variant])}>
      {tabs.map((tab) => (
        <button key={tab} type="button" role="tab" aria-selected={tab === selected} className={styles.tab} onClick={() => setSelected(tab)}>
          {tab}
        </button>
      ))}
    </div>
  );
}
