import type { CSSProperties } from "react";

import { COLUMNS } from "../TokensPanel.constants";
import type { SemanticTableProps, TokenCellProps } from "../TokensPanel.types";
import styles from "../TokensPanel.module.scss";

/**
 * Cell with the color of a token and the palette step it points at.
 *
 * @param props Props of the component, see {@link TokenCellProps}.
 * @param props.token Semantic token of one theme.
 * @returns The rendered element.
 */
function TokenCell({ token }: TokenCellProps) {
  return (
    <td>
      <span className={styles.tokenValue}>
        <span className={styles.chip} style={{ "--chip": token.hex } as CSSProperties} aria-hidden="true" />
        <span className={styles.ref}>{token.ref}</span>
      </span>
    </td>
  );
}

/**
 * Every semantic token with its value in the light and the dark theme.
 *
 * @param props Props of the component, see {@link SemanticTableProps}.
 * @param props.system Design system.
 * @returns The rendered element.
 */
export function SemanticTable({ system }: SemanticTableProps) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">{COLUMNS.token}</th>
            <th scope="col">{COLUMNS.light}</th>
            <th scope="col">{COLUMNS.dark}</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(system.themes.light).map((token) => (
            <tr key={token.name}>
              <th scope="row" className={styles.tokenName}>
                {token.name}
              </th>
              <TokenCell token={token} />
              <TokenCell token={system.themes.dark[token.name]} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
