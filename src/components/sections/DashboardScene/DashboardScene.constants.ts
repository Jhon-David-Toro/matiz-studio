import { ChartColumn, Folder, House, Inbox, Settings, Users } from "@/components/ui/Icon";

import type { ChartBar, NavEntry } from "./DashboardScene.types";

export const SIDEBAR = {
  product: "Órbita",
  label: "Secciones",
  user: "Ana Ruiz",
  plan: "Plan Equipo",
};

export const NAV: NavEntry[] = [
  { label: "Inicio", icon: House, active: true },
  { label: "Proyectos", icon: Folder, count: 12 },
  { label: "Bandeja", icon: Inbox, count: 3 },
  { label: "Reportes", icon: ChartColumn },
  { label: "Equipo", icon: Users },
  { label: "Ajustes", icon: Settings },
];

export const HEADER = {
  crumbs: ["Órbita", "Inicio"],
  title: "Buenos días, Ana",
  search: "Buscar",
  searchPlaceholder: "Proyectos, personas…",
  notifications: "Notificaciones",
  newProject: "Nuevo proyecto",
  tabsLabel: "Periodo",
  tabs: ["Esta semana", "Este mes", "Este año"],
};


export const CHART = {
  title: "Entregas por mes",
  description: "Comparado con el año pasado",
  current: "2026",
  previous: "2025",
  label: "Entregas por mes: este año contra el anterior",
};

export const BARS: ChartBar[] = [
  { month: "Ene", current: 42, previous: 30 },
  { month: "Feb", current: 55, previous: 38 },
  { month: "Mar", current: 48, previous: 45 },
  { month: "Abr", current: 70, previous: 50 },
  { month: "May", current: 64, previous: 52 },
  { month: "Jun", current: 82, previous: 60 },
  { month: "Jul", current: 76, previous: 58 },
  { month: "Ago", current: 90, previous: 66 },
];

export const ACTIVITY = {
  title: "Actividad",
  items: [
    { who: "Luis Pérez", what: "subió 3 archivos a Rediseño web", when: "hace 5 min" },
    { who: "Sara Gómez", what: "completó Investigación de usuarios", when: "hace 1 h" },
    { who: "Juan Díaz", what: "comentó en Campaña de lanzamiento", when: "hace 3 h" },
    { who: "Eva Mora", what: "te asignó Revisar contrato", when: "ayer" },
  ],
};

export const TEAM = {
  title: "Equipo",
  description: "6 personas · 2 invitaciones pendientes",
  invite: "Invitar",
  caption: "Personas del equipo",
};
