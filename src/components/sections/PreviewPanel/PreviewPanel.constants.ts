import type { VisionMode } from "@/lib/color/color.types";
import type { ThemeMode } from "@/lib/system/system.types";

export const MODE_GROUP = { label: "Tema de la vista previa", name: "preview-mode" };

export const MODE_OPTIONS: { value: ThemeMode; label: string }[] = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Oscuro" },
];

export const VISION_LABEL = "Simular visión";

export const VISION_OPTIONS: { value: VisionMode; label: string }[] = [
  { value: "normal", label: "Visión típica" },
  { value: "protanopia", label: "Protanopia (rojo)" },
  { value: "deuteranopia", label: "Deuteranopia (verde)" },
  { value: "tritanopia", label: "Tritanopia (azul)" },
  { value: "achromatopsia", label: "Acromatopsia (grises)" },
];

export const VISION_FILTER_PREFIX = "matiz-vision";

export const CANVAS_LABEL = "Vista previa del sistema";

export const COPY = {
  product: "Órbita",
  nav: ["Inicio", "Proyectos", "Equipo"],
  navAction: "Empezar",
  badge: "Nuevo",
  title: "Lanza tu próxima idea en días, no en meses",
  lead: "Planea, diseña y entrega con tu equipo en un solo lugar. Sin hojas sueltas ni mensajes perdidos.",
  primary: "Crear proyecto",
  secondary: "Ver demo",
  link: "Leer la guía",
  formTitle: "Crea tu cuenta",
  email: "Correo",
  emailPlaceholder: "tu@correo.com",
  plan: "Plan",
  plans: ["Gratis", "Equipo", "Empresa"],
  terms: "Acepto los términos",
  submit: "Registrarme",
  statsTitle: "Esta semana",
  stats: [
    { label: "Tareas listas", value: "128", delta: "+12 %" },
    { label: "Entregas", value: "24", delta: "+3" },
  ],
  alerts: [
    { tone: "success", title: "Proyecto publicado", text: "Ya está en línea para tu equipo." },
    { tone: "warning", title: "Pago pendiente", text: "Tu prueba termina en 3 días." },
    { tone: "danger", title: "No se pudo guardar", text: "Revisa tu conexión e inténtalo otra vez." },
    { tone: "info", title: "Nueva función", text: "Ahora puedes comentar en tiempo real." },
  ],
  tags: ["Diseño", "Producto", "Investigación"],
  accent: "Invitar equipo",
} as const;
