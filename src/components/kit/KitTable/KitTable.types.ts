import type { KitTone } from "@/lib/kit/kit.types";

export type KitTableRow = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: { label: string; tone: KitTone };
};

export type KitTableProps = {
  caption: string;
  rows: KitTableRow[];
};

export type TableRowProps = {
  row: KitTableRow;
};
