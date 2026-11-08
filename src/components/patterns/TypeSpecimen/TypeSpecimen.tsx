import { SAMPLES } from "./TypeSpecimen.constants";
import type { TypeSpecimenProps } from "./TypeSpecimen.types";
import { sampleStyle, styleMetrics } from "./TypeSpecimen.utils";
import styles from "./TypeSpecimen.module.scss";

/**
 * Every text style of the scale, largest first, with a sample in its own font, size and line height.
 *
 * @param props Props of the component, see {@link TypeSpecimenProps}.
 * @param props.styles Text styles of the scale.
 * @param props.fonts Fonts of the system.
 * @returns The rendered element.
 */
export function TypeSpecimen({ styles: typeStyles, fonts }: TypeSpecimenProps) {
  return (
    <ul role="list" className={styles.list}>
      {[...typeStyles].reverse().map((style) => (
        <li key={style.name} className={styles.row}>
          <span className={styles.meta}>
            <span className={styles.name}>{style.name}</span>
            <span className={styles.metrics}>{styleMetrics(style)}</span>
          </span>
          <span className={styles.sample} style={sampleStyle(style, fonts)}>
            {style.role === "heading" ? SAMPLES.heading : SAMPLES.body}
          </span>
        </li>
      ))}
    </ul>
  );
}
