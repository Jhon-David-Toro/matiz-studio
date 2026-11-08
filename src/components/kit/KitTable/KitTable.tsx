import { COLUMNS } from "./KitTable.constants";
import type { KitTableProps } from "./KitTable.types";
import { TableRow } from "./parts/TableRow";
import styles from "./KitTable.module.scss";

/**
 * Sample data table of people: avatar and email, role, a status badge and a row menu button.
 *
 * @param props Props of the component, see {@link KitTableProps}.
 * @param props.caption Accessible name of the table.
 * @param props.rows People to list.
 * @returns The rendered element.
 */
export function KitTable({ caption, rows }: KitTableProps) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <caption className={styles.caption}>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">{COLUMNS.name}</th>
            <th scope="col">{COLUMNS.role}</th>
            <th scope="col">{COLUMNS.status}</th>
            <th scope="col">
              <span className={styles.hidden}>{COLUMNS.actions}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
