import { CANVAS_LABEL } from "../PreviewPanel.constants";
import type { PreviewCanvasProps } from "../PreviewPanel.types";
import { canvasStyle } from "../PreviewPanel.utils";
import { PreviewFeedback } from "./PreviewFeedback";
import { PreviewForm } from "./PreviewForm";
import { PreviewHero } from "./PreviewHero";
import styles from "../PreviewPanel.module.scss";

/**
 * Sample product drawn only with the generated tokens, which the canvas sets as custom properties.
 *
 * @param props Props of the component, see {@link PreviewCanvasProps}.
 * @param props.system Design system to draw with.
 * @param props.mode Light or dark.
 * @param props.vision Vision mode to simulate.
 * @returns The rendered element.
 */
export function PreviewCanvas({ system, mode, vision }: PreviewCanvasProps) {
  return (
    <section id="preview" aria-label={CANVAS_LABEL} data-theme={mode} className={styles.canvas} style={canvasStyle(system, mode, vision)}>
      <PreviewHero />
      <div className={styles.grid}>
        <PreviewForm />
        <PreviewFeedback />
      </div>
    </section>
  );
}
