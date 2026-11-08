import { TAB_KEYS } from "./Tabs.constants";

/**
 * Id of a tab, so its panel can point at it.
 *
 * @param prefix Prefix shared by the tabs.
 * @param value Value of the tab.
 * @returns The id.
 */
export function tabId(prefix: string, value: string): string {
  return `${prefix}-tab-${value}`;
}

/**
 * Id of the panel the tabs control.
 *
 * @param prefix Prefix shared by the tabs.
 * @returns The id.
 */
export function panelId(prefix: string): string {
  return `${prefix}-panel`;
}

/**
 * Tab a key moves to: arrows wrap around, Home and End jump to the ends.
 *
 * @param key Key that was pressed.
 * @param index Index of the focused tab.
 * @param count Number of tabs.
 * @returns The index to move to, or `undefined` for other keys.
 */
export function nextTabIndex(key: string, index: number, count: number): number | undefined {
  return TAB_KEYS[key]?.(index, count);
}
