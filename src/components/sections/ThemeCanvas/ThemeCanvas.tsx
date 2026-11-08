import { canvasStyle } from "./ThemeCanvas.utils";
import type { ThemeCanvasProps } from "./ThemeCanvas.types";
import { VisionFilters } from "./parts/VisionFilters";
import styles from "./ThemeCanvas.module.scss";

/**
 * Area that applies a generated system: it sets every token as a custom property (and the vision filter), so whatever
 * it holds is drawn exactly as the export would draw it.
 *
 * @param props Props of the component, see {@link ThemeCanvasProps}.
 * @param props.system Design system to apply.
 * @param props.mode Light or dark.
 * @param props.vision Vision mode to simulate.
 * @param props.label Accessible name of the area.
 * @param props.children Content drawn with the tokens.
 * @returns The rendered element.
 */
export function ThemeCanvas({ system, mode, vision, label, children }: ThemeCanvasProps) {
  return (
    <>
      <VisionFilters />
      <section aria-label={label} data-theme={mode} className={styles.canvas} style={canvasStyle(system, mode, vision)}>
        {children}
      </section>
    </>
  );
}
