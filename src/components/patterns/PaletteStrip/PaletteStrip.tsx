import type { CSSProperties } from "react";

import { readableOn } from "@/lib/color/contrast.utils";
import { cx } from "@/lib/shared/cx";

import { ANCHOR_LABEL } from "./PaletteStrip.constants";
import type { PaletteStripProps, SwatchButtonProps } from "./PaletteStrip.types";
import { swatchLabel } from "./PaletteStrip.utils";
import styles from "./PaletteStrip.module.scss";

/**
 * One swatch of the strip; pressing it copies its color.
 *
 * @param props Props of the component, see {@link SwatchButtonProps}.
 * @param props.paletteLabel Name of the palette.
 * @param props.swatch Swatch to show.
 * @param props.onCopy Called with the color to copy.
 * @returns The rendered element.
 */
function SwatchButton({ paletteLabel, swatch, onCopy }: SwatchButtonProps) {
  const style = { "--swatch": swatch.hex, "--swatch-ink": readableOn(swatch.hex) } as CSSProperties;

  return (
    <li className={styles.item}>
      <button type="button" className={cx(styles.swatch, swatch.anchor && styles.anchor)} style={style} aria-label={swatchLabel(paletteLabel, swatch)} onClick={() => onCopy(swatch.hex)}>
        <span className={styles.step}>{swatch.step}</span>
        <span className={styles.hex}>{swatch.hex}</span>
        {swatch.anchor && <span className={styles.marker}>{ANCHOR_LABEL}</span>}
      </button>
    </li>
  );
}

/**
 * Eleven swatches of a palette in a row, from 50 to 950. The exact brand color is marked.
 *
 * @param props Props of the component, see {@link PaletteStripProps}.
 * @param props.palette Palette to show.
 * @param props.onCopy Called with the color of the pressed swatch.
 * @returns The rendered element.
 */
export function PaletteStrip({ palette, onCopy }: PaletteStripProps) {
  return (
    <section className={styles.strip} aria-label={palette.label}>
      <h3 className={styles.title}>{palette.label}</h3>
      <ul role="list" className={styles.list}>
        {palette.swatches.map((swatch) => (
          <SwatchButton key={swatch.step} paletteLabel={palette.label} swatch={swatch} onCopy={onCopy} />
        ))}
      </ul>
    </section>
  );
}
