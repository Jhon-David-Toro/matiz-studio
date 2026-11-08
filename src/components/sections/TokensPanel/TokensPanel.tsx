import { PaletteStrip } from "@/components/patterns/PaletteStrip";
import { dimensionItems, ScaleList, shadowItems } from "@/components/patterns/ScaleList";
import { TypeSpecimen } from "@/components/patterns/TypeSpecimen";

import { FONT_ROLES, SECTIONS } from "./TokensPanel.constants";
import type { TokensPanelProps } from "./TokensPanel.types";
import { SemanticTable } from "./parts/SemanticTable";
import { TokenSection } from "./parts/TokenSection";
import styles from "./TokensPanel.module.scss";

/**
 * Every token of the system: palettes, semantic colors, type, spacing, radii and shadows.
 *
 * @param props Props of the component, see {@link TokensPanelProps}.
 * @param props.system Design system.
 * @param props.onCopy Called with a color to copy.
 * @returns The rendered element.
 */
export function TokensPanel({ system, onCopy }: TokensPanelProps) {
  return (
    <div className={styles.panel}>
      <TokenSection {...SECTIONS.palettes}>
        <div className={styles.palettes}>
          {system.palettes.map((palette) => (
            <PaletteStrip key={palette.name} palette={palette} onCopy={onCopy} />
          ))}
        </div>
      </TokenSection>
      <TokenSection {...SECTIONS.semantic}>
        <SemanticTable system={system} />
      </TokenSection>
      <TokenSection {...SECTIONS.type}>
        <dl className={styles.fonts}>
          {(Object.keys(FONT_ROLES) as (keyof typeof FONT_ROLES)[]).map((role) => (
            <div key={role} className={styles.font}>
              <dt>{FONT_ROLES[role]}</dt>
              <dd>{system.fonts[role].name}</dd>
            </div>
          ))}
        </dl>
        <TypeSpecimen styles={system.type} fonts={system.fonts} />
      </TokenSection>
      <div className={styles.columns}>
        <TokenSection {...SECTIONS.spacing}>
          <ScaleList kind="space" items={dimensionItems(system.spacing)} />
        </TokenSection>
        <TokenSection {...SECTIONS.radius}>
          <ScaleList kind="radius" items={dimensionItems(system.radius)} />
        </TokenSection>
        <TokenSection {...SECTIONS.shadows}>
          <ScaleList kind="shadow" items={shadowItems(system.shadows)} />
        </TokenSection>
      </div>
    </div>
  );
}
