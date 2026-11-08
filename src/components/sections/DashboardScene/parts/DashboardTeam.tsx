import { KitButton } from "@/components/kit/KitButton";
import { KitCard } from "@/components/kit/KitCard";
import { KitPagination } from "@/components/kit/KitPagination";
import { KitTable } from "@/components/kit/KitTable";
import { Plus } from "@/components/ui/Icon";
import { TEAM_ROWS } from "@/lib/kit/kit.samples.constants";

import { TEAM } from "../DashboardScene.constants";

/**
 * Team table with an invite action and pagination.
 *
 * @returns The rendered element.
 */
export function DashboardTeam() {
  return (
    <KitCard
      title={TEAM.title}
      description={TEAM.description}
      actions={
        <KitButton variant="secondary" size="sm" icon={Plus}>
          {TEAM.invite}
        </KitButton>
      }
      footer={<KitPagination pages={3} />}
    >
      <KitTable caption={TEAM.caption} rows={TEAM_ROWS} />
    </KitCard>
  );
}
