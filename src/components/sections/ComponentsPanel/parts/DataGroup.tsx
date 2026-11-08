import { KitAvatar, KitAvatarGroup } from "@/components/kit/KitAvatar";
import { KitButton } from "@/components/kit/KitButton";
import { KitEmpty } from "@/components/kit/KitEmpty";
import { KitStat } from "@/components/kit/KitStat";
import { KitTable } from "@/components/kit/KitTable";
import { STATS, TEAM_ROWS } from "@/lib/kit/kit.samples.constants";

import { DATA, GROUPS } from "../ComponentsPanel.constants";
import styles from "../ComponentsPanel.module.scss";
import { GallerySection, Specimen } from "./GallerySection";

/**
 * Metrics, avatars, a data table and an empty state.
 *
 * @returns The rendered element.
 */
export function DataGroup() {
  return (
    <GallerySection {...GROUPS.data}>
      <Specimen label={DATA.stats.label} wide>
        <div className={styles.stats}>
          {STATS.map((stat) => (
            <KitStat key={stat.label} {...stat} />
          ))}
        </div>
      </Specimen>
      <Specimen label={DATA.avatars.label}>
        <KitAvatar name={DATA.avatars.people[0]} size="lg" status="online" />
        <KitAvatar name={DATA.avatars.people[1]} status="away" />
        <KitAvatar name={DATA.avatars.people[2]} size="sm" />
        <KitAvatarGroup names={DATA.avatars.people} />
      </Specimen>
      <Specimen label={DATA.empty.label}>
        <KitEmpty title={DATA.empty.title} message={DATA.empty.message} action={<KitButton size="sm">{DATA.empty.action}</KitButton>} />
      </Specimen>
      <Specimen label={DATA.table.label} wide>
        <KitTable caption={DATA.table.caption} rows={TEAM_ROWS.slice(0, 4)} />
      </Specimen>
    </GallerySection>
  );
}
