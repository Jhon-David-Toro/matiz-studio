import { FONT_PAIRINGS, HARMONY_OPTIONS, TYPE_RATIOS } from "@/lib/system/system.constants";
import type { SystemConfig } from "@/lib/system/system.types";
import { encodeConfig } from "@/lib/system/url.utils";

import type { SelectOption } from "@/components/ui/SelectField";

/**
 * Whether two configurations describe the same system.
 *
 * @param first One configuration.
 * @param second The other one.
 * @returns True when they would generate the same tokens.
 */
export function sameConfig(first: SystemConfig, second: SystemConfig): boolean {
  return encodeConfig(first) === encodeConfig(second);
}

/**
 * Options of the selects of the panel.
 *
 * @returns The harmony, font pairing and type ratio options.
 */
export function selectOptions(): Record<"harmony" | "pairing" | "ratio", SelectOption[]> {
  return {
    harmony: HARMONY_OPTIONS,
    pairing: FONT_PAIRINGS.map((pairing) => ({ value: pairing.id, label: pairing.label })),
    ratio: TYPE_RATIOS.map((ratio) => ({ value: String(ratio.value), label: ratio.label })),
  };
}
