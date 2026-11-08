import { KitBreadcrumbs } from "@/components/kit/KitBreadcrumbs";
import { KitPagination } from "@/components/kit/KitPagination";
import { KitStepper } from "@/components/kit/KitStepper";
import { KitTabs } from "@/components/kit/KitTabs";

import { GROUPS, NAVIGATION } from "../ComponentsPanel.constants";
import { GallerySection, Specimen } from "./GallerySection";

/**
 * Tabs in both styles, breadcrumbs, pagination and a stepper.
 *
 * @returns The rendered element.
 */
export function NavigationGroup() {
  return (
    <GallerySection {...GROUPS.navigation}>
      <Specimen label={NAVIGATION.tabs.label} wide>
        <KitTabs label={NAVIGATION.tabs.label} tabs={NAVIGATION.tabs.items} />
      </Specimen>
      <Specimen label={NAVIGATION.pills.label}>
        <KitTabs label={NAVIGATION.pills.label} tabs={NAVIGATION.pills.items} variant="pill" />
      </Specimen>
      <Specimen label={NAVIGATION.crumbs.label}>
        <KitBreadcrumbs items={NAVIGATION.crumbs.items} />
      </Specimen>
      <Specimen label={NAVIGATION.pagination.label}>
        <KitPagination pages={5} />
      </Specimen>
      <Specimen label={NAVIGATION.stepper.label} wide>
        <KitStepper steps={NAVIGATION.stepper.items} current={2} />
      </Specimen>
    </GallerySection>
  );
}
