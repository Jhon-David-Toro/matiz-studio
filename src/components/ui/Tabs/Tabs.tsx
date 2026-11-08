import type { KeyboardEvent } from "react";

import { cx } from "@/lib/shared/cx";

import type { TabsProps } from "./Tabs.types";
import { nextTabIndex, panelId, tabId } from "./Tabs.utils";
import styles from "./Tabs.module.scss";

/**
 * Tab list with roving focus: only the selected tab is in the tab order and the arrow keys, Home and End move
 * between tabs. The consumer renders the panel with the id from `panelId(idPrefix)`.
 *
 * @param props Props of the component, see {@link TabsProps}.
 * @param props.label Accessible name of the list.
 * @param props.idPrefix Prefix of the ids of the tabs and their panel.
 * @param props.tabs Tabs to show.
 * @param props.value Selected tab.
 * @param props.onChange Called with the tab the user picked.
 * @returns The rendered element.
 */
export function Tabs<T extends string>({ label, idPrefix, tabs, value, onChange }: TabsProps<T>) {
  /**
   * Moves the selection and the focus with the keyboard.
   *
   * @param event Key press on a tab.
   * @param index Index of that tab.
   */
  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = nextTabIndex(event.key, index, tabs.length);
    if (next === undefined) return;
    event.preventDefault();
    onChange(tabs[next].value);
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus();
  }

  return (
    <div role="tablist" aria-label={label} className={styles.list}>
      {tabs.map((tab, index) => (
        <button
          key={tab.value}
          id={tabId(idPrefix, tab.value)}
          type="button"
          role="tab"
          aria-selected={tab.value === value}
          aria-controls={panelId(idPrefix)}
          tabIndex={tab.value === value ? 0 : -1}
          className={cx(styles.tab, tab.value === value && styles.selected)}
          onClick={() => onChange(tab.value)}
          onKeyDown={(event) => handleKeyDown(event, index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
