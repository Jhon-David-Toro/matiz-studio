"use client";

import { useState } from "react";

import { Check, Icon } from "@/components/ui/Icon";
import { cx } from "@/lib/shared/cx";

import type { KitChipProps } from "./KitChip.types";
import styles from "./KitChip.module.scss";

/**
 * Sample filter chip that toggles on and off.
 *
 * @param props Props of the component, see {@link KitChipProps}.
 * @param props.label Text of the chip.
 * @param props.defaultSelected Whether it starts selected.
 * @returns The rendered element.
 */
export function KitChip({ label, defaultSelected = false }: KitChipProps) {
  const [selected, setSelected] = useState(defaultSelected);

  return (
    <button type="button" aria-pressed={selected} className={cx(styles.chip, selected && styles.selected)} onClick={() => setSelected(!selected)}>
      {selected && <Icon icon={Check} size="small" />}
      {label}
    </button>
  );
}
