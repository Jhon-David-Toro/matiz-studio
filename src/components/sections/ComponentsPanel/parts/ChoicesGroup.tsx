import { KitCheck } from "@/components/kit/KitCheck";
import { KitChip } from "@/components/kit/KitChip";
import { KitRange } from "@/components/kit/KitRange";

import { CHOICES, GROUPS } from "../ComponentsPanel.constants";
import { GallerySection, Specimen } from "./GallerySection";

/**
 * Checkboxes, radio buttons, switches, a slider and filter chips.
 *
 * @returns The rendered element.
 */
export function ChoicesGroup() {
  return (
    <GallerySection {...GROUPS.choices}>
      <Specimen label={CHOICES.checkboxes.label}>
        {CHOICES.checkboxes.items.map((item, index) => (
          <KitCheck key={item} label={item} defaultChecked={index === 0} />
        ))}
        <KitCheck label={CHOICES.disabled} disabled />
      </Specimen>
      <Specimen label={CHOICES.radios.label}>
        {CHOICES.radios.items.map((item, index) => (
          <KitCheck key={item} kind="radio" name={CHOICES.radios.name} label={item} defaultChecked={index === 1} />
        ))}
      </Specimen>
      <Specimen label={CHOICES.switches.label}>
        {CHOICES.switches.items.map((item) => (
          <KitCheck key={item.label} kind="switch" label={item.label} defaultChecked={item.checked} />
        ))}
      </Specimen>
      <Specimen label={CHOICES.range.label}>
        <KitRange label={CHOICES.range.label} defaultValue={70} />
      </Specimen>
      <Specimen label={CHOICES.chips.label} wide>
        {CHOICES.chips.items.map((item, index) => (
          <KitChip key={item} label={item} defaultSelected={index === 1} />
        ))}
      </Specimen>
    </GallerySection>
  );
}
