import { ThemeCanvas } from "@/components/sections/ThemeCanvas";

import { CANVAS_LABEL, INTRO } from "./ComponentsPanel.constants";
import type { ComponentsPanelProps } from "./ComponentsPanel.types";
import { ButtonsGroup } from "./parts/ButtonsGroup";
import { ChoicesGroup } from "./parts/ChoicesGroup";
import { DataGroup } from "./parts/DataGroup";
import { FeedbackGroup } from "./parts/FeedbackGroup";
import { FieldsGroup } from "./parts/FieldsGroup";
import { NavigationGroup } from "./parts/NavigationGroup";
import { OverlaysGroup } from "./parts/OverlaysGroup";
import styles from "./ComponentsPanel.module.scss";

/**
 * Gallery of every sample component, grouped by purpose and drawn with the generated system.
 *
 * @param props Props of the component, see {@link ComponentsPanelProps}.
 * @param props.system Design system to draw with.
 * @param props.mode Light or dark.
 * @param props.vision Vision mode to simulate.
 * @returns The rendered element.
 */
export function ComponentsPanel({ system, mode, vision }: ComponentsPanelProps) {
  return (
    <ThemeCanvas system={system} mode={mode} vision={vision} label={CANVAS_LABEL}>
      <div className={styles.gallery}>
        <header className={styles.intro}>
          <h2 className={styles.title}>{INTRO.title}</h2>
          <p className={styles.text}>{INTRO.text}</p>
        </header>
        <ButtonsGroup />
        <FieldsGroup />
        <ChoicesGroup />
        <NavigationGroup />
        <FeedbackGroup />
        <DataGroup />
        <OverlaysGroup />
      </div>
    </ThemeCanvas>
  );
}
