import { KitAccordion } from "@/components/kit/KitAccordion";
import { KitButton } from "@/components/kit/KitButton";
import { KitCard } from "@/components/kit/KitCard";
import { KitDialog } from "@/components/kit/KitDialog";
import { KitMenu } from "@/components/kit/KitMenu";

import { GROUPS, OVERLAYS } from "../ComponentsPanel.constants";
import { GallerySection, Specimen } from "./GallerySection";

/**
 * A dropdown menu, a confirmation dialog, an accordion and a card.
 *
 * @returns The rendered element.
 */
export function OverlaysGroup() {
  return (
    <GallerySection {...GROUPS.overlays}>
      <Specimen label={OVERLAYS.menu.label}>
        <KitMenu label={OVERLAYS.menu.name} items={OVERLAYS.menu.items} />
      </Specimen>
      <Specimen label={OVERLAYS.dialog.label}>
        <KitDialog {...OVERLAYS.dialog} danger />
      </Specimen>
      <Specimen label={OVERLAYS.accordion.label}>
        <KitAccordion items={OVERLAYS.accordion.items} />
      </Specimen>
      <Specimen label={OVERLAYS.card.label}>
        <KitCard
          title={OVERLAYS.card.title}
          description={OVERLAYS.card.description}
          footer={
            <>
              <KitButton variant="ghost" size="sm">
                {OVERLAYS.card.share}
              </KitButton>
              <KitButton size="sm">{OVERLAYS.card.open}</KitButton>
            </>
          }
        >
          {OVERLAYS.card.body}
        </KitCard>
      </Specimen>
    </GallerySection>
  );
}
