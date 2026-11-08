import type { KitStatProps } from "@/components/kit/KitStat";
import type { KitTableRow } from "@/components/kit/KitTable";

export const STATS: KitStatProps[] = [
  { label: "Ingresos", value: "$48.2k", delta: "+12,4 %", trend: "up" },
  { label: "Proyectos activos", value: "36", delta: "+4", trend: "up" },
  { label: "Tiempo de respuesta", value: "2,4 h", delta: "+18 min", trend: "down" },
];

export const TEAM_ROWS: KitTableRow[] = [
  { id: "1", name: "Ana Ruiz", email: "ana@orbita.co", role: "Producto", status: { label: "Activa", tone: "success" } },
  { id: "2", name: "Luis Pérez", email: "luis@orbita.co", role: "Diseño", status: { label: "Activo", tone: "success" } },
  { id: "3", name: "Sara Gómez", email: "sara@orbita.co", role: "Investigación", status: { label: "De vacaciones", tone: "warning" } },
  { id: "4", name: "Juan Díaz", email: "juan@orbita.co", role: "Ingeniería", status: { label: "Invitado", tone: "info" } },
  { id: "5", name: "Eva Mora", email: "eva@orbita.co", role: "Ventas", status: { label: "Suspendida", tone: "danger" } },
];
