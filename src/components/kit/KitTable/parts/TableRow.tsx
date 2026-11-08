import { KitAvatar } from "@/components/kit/KitAvatar";
import { KitBadge } from "@/components/kit/KitBadge";
import { Ellipsis, Icon } from "@/components/ui/Icon";

import { ROW_ACTION } from "../KitTable.constants";
import type { TableRowProps } from "../KitTable.types";
import styles from "../KitTable.module.scss";

/**
 * One person of the table.
 *
 * @param props Props of the component, see {@link TableRowProps}.
 * @param props.row Person to show.
 * @returns The rendered element.
 */
export function TableRow({ row }: TableRowProps) {
  return (
    <tr>
      <th scope="row" className={styles.rowHeader}>
        <span className={styles.person}>
          <KitAvatar name={row.name} size="sm" />
          <span className={styles.identity}>
            <span className={styles.name}>{row.name}</span>
            <span className={styles.email}>{row.email}</span>
          </span>
        </span>
      </th>
      <td>{row.role}</td>
      <td>
        <KitBadge tone={row.status.tone} dot>
          {row.status.label}
        </KitBadge>
      </td>
      <td>
        <button type="button" aria-label={`${ROW_ACTION} ${row.name}`} className={styles.more}>
          <Icon icon={Ellipsis} size="small" />
        </button>
      </td>
    </tr>
  );
}
