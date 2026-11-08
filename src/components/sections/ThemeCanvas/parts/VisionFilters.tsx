import { VISION_MATRICES } from "@/lib/color/color.constants";
import type { VisionMode } from "@/lib/color/color.types";

import { visionFilterId } from "../ThemeCanvas.utils";
import styles from "../ThemeCanvas.module.scss";

/**
 * Hidden SVG with one color-matrix filter per vision mode, used by the canvas through `filter: url(#…)`.
 *
 * @returns The rendered element.
 */
export function VisionFilters() {
  return (
    <svg aria-hidden="true" className={styles.filters}>
      <defs>
        {(Object.entries(VISION_MATRICES) as [Exclude<VisionMode, "normal">, string][]).map(([vision, values]) => (
          <filter key={vision} id={visionFilterId(vision)} colorInterpolationFilters="linearRGB">
            <feColorMatrix type="matrix" values={values} />
          </filter>
        ))}
      </defs>
    </svg>
  );
}
