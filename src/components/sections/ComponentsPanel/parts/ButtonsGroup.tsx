import { KitButton, type KitButtonSize, type KitButtonVariant } from "@/components/kit/KitButton";
import { Copy, Pencil, Share2 } from "@/components/ui/Icon";

import { BUTTONS, GROUPS } from "../ComponentsPanel.constants";
import { GallerySection, Specimen } from "./GallerySection";

/**
 * Every button variant, size, icon use and state.
 *
 * @returns The rendered element.
 */
export function ButtonsGroup() {
  return (
    <GallerySection {...GROUPS.buttons}>
      <Specimen label={BUTTONS.variants.label} wide>
        {(Object.entries(BUTTONS.variants.items) as [KitButtonVariant, string][]).map(([variant, label]) => (
          <KitButton key={variant} variant={variant}>
            {label}
          </KitButton>
        ))}
      </Specimen>
      <Specimen label={BUTTONS.sizes.label}>
        {(Object.entries(BUTTONS.sizes.items) as [KitButtonSize, string][]).map(([size, label]) => (
          <KitButton key={size} size={size}>
            {label}
          </KitButton>
        ))}
      </Specimen>
      <Specimen label={BUTTONS.icons.label}>
        <KitButton icon={Copy}>{BUTTONS.icons.copy}</KitButton>
        <KitButton variant="secondary" icon={Share2} iconOnly>
          {BUTTONS.icons.share}
        </KitButton>
        <KitButton variant="ghost" icon={Pencil} iconOnly>
          {BUTTONS.icons.edit}
        </KitButton>
      </Specimen>
      <Specimen label={BUTTONS.states.label}>
        <KitButton disabled>{BUTTONS.states.disabled}</KitButton>
        <KitButton variant="secondary" loading>
          {BUTTONS.states.loading}
        </KitButton>
      </Specimen>
    </GallerySection>
  );
}
