import type { CSSProperties } from "react";

import { Badge } from "@/components/ui/Badge";
import { WCAG_LABELS } from "@/lib/color/color.constants";

import { MINIMUM_PREFIX, SAMPLE_TEXT } from "../ContrastList.constants";
import type { ContrastRowProps } from "../ContrastList.types";
import { formatRatio } from "../ContrastList.utils";
import styles from "../ContrastList.module.scss";

/**
 * One pair of tokens: a sample of the text on its background, the tokens, the ratio and the level it reaches.
 *
 * @param props Props of the component, see {@link ContrastRowProps}.
 * @param props.check Result of the check.
 * @returns The rendered element.
 */
export function ContrastRow({ check }: ContrastRowProps) {
  const style = { "--fg": check.foregroundHex, "--bg": check.backgroundHex } as CSSProperties;

  return (
    <li className={styles.row}>
      <span className={styles.sample} style={style} aria-hidden="true">
        {SAMPLE_TEXT}
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{check.label}</span>
        <span className={styles.tokens}>
          {check.foreground} / {check.background} · {MINIMUM_PREFIX} {check.min}:1
        </span>
      </span>
      <span className={styles.ratio}>{formatRatio(check.ratio)}</span>
      <Badge tone={check.passes ? "success" : "danger"}>{WCAG_LABELS[check.level]}</Badge>
    </li>
  );
}
