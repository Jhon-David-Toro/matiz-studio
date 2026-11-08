import { Copy, Pencil, Share2, Trash } from "@/components/ui/Icon";

export const CANVAS_LABEL = "Galería de componentes";

export const INTRO = {
  title: "Componentes",
  text: "Cada pieza está dibujada solo con los tokens generados. Cambia un control y todos se actualizan.",
};

export const GROUPS = {
  buttons: { title: "Botones", description: "Cinco variantes, tres tamaños, íconos y estados." },
  fields: { title: "Campos", description: "Texto, ícono, ayuda, error, deshabilitado, lista y área de texto." },
  choices: { title: "Selección", description: "Casillas, opciones, interruptores, deslizador y chips." },
  navigation: { title: "Navegación", description: "Pestañas, ruta, paginación y pasos." },
  feedback: { title: "Estados y avisos", description: "Alertas, aviso flotante, progreso, carga, insignias y ayudas." },
  data: { title: "Datos", description: "Métricas, avatares, tabla y estado vacío." },
  overlays: { title: "Capas y contenido", description: "Menú, diálogo, acordeón y tarjeta." },
};

export const BUTTONS = {
  variants: { label: "Variantes", items: { primary: "Primario", secondary: "Secundario", ghost: "Fantasma", accent: "Acento", danger: "Peligro" } },
  sizes: { label: "Tamaños", items: { sm: "Pequeño", md: "Mediano", lg: "Grande" } },
  icons: { label: "Con ícono", copy: "Copiar", share: "Compartir", edit: "Editar" },
  states: { label: "Estados", disabled: "Deshabilitado", loading: "Guardando" },
};

export const FIELDS = {
  text: { label: "Nombre", placeholder: "Ana Ruiz" },
  icon: { label: "Buscar", placeholder: "Proyectos, personas…", hint: "Escribe al menos 3 letras." },
  error: { label: "Correo", value: "ana@", error: "Escribe un correo válido." },
  disabled: { label: "Usuario", value: "ana.ruiz" },
  select: { label: "País", options: ["Colombia", "México", "Argentina", "España"] },
  textarea: { label: "Mensaje", placeholder: "Cuéntanos tu idea…" },
};

export const CHOICES = {
  checkboxes: { label: "Casillas", items: ["Diseño", "Producto", "Ingeniería"] },
  radios: { label: "Opciones", name: "billing", items: ["Mensual", "Anual (−20 %)"] },
  switches: { label: "Interruptores", items: [{ label: "Modo oscuro", checked: true }, { label: "Sonidos", checked: false }] },
  range: { label: "Brillo" },
  chips: { label: "Chips", items: ["Todos", "Activos", "Pausados", "Archivados"] },
  disabled: "Deshabilitada",
};

export const NAVIGATION = {
  tabs: { label: "Pestañas", items: ["Resumen", "Actividad", "Archivos", "Ajustes"] },
  pills: { label: "Pestañas de píldora", items: ["Día", "Semana", "Mes"] },
  crumbs: { label: "Ruta", items: ["Inicio", "Proyectos", "Rediseño web"] },
  pagination: { label: "Paginación" },
  stepper: { label: "Pasos", items: ["Cuenta", "Equipo", "Pago", "Listo"] },
};

export const FEEDBACK = {
  alerts: [
    { tone: "success" as const, title: "Proyecto publicado", text: "Ya está en línea para tu equipo." },
    { tone: "warning" as const, title: "Tu prueba termina pronto", text: "Te quedan 3 días.", action: "Ver planes" },
    { tone: "danger" as const, title: "No se pudo guardar", text: "Revisa tu conexión e inténtalo otra vez." },
    { tone: "info" as const, title: "Nueva función", text: "Ahora puedes comentar en tiempo real." },
  ],
  toast: { label: "Aviso flotante", message: "Proyecto archivado", action: "Deshacer" },
  progress: { label: "Progreso", value: "Subiendo archivos", loading: "Cargando datos" },
  skeleton: { label: "Cargando contenido" },
  badges: { label: "Insignias", items: ["neutral", "primary", "success", "warning", "danger", "info"] as const, names: { neutral: "Borrador", primary: "Nuevo", success: "Activo", warning: "Pendiente", danger: "Vencido", info: "Beta" } },
  tooltip: { label: "Ayuda emergente", tip: "Copiar enlace", trigger: "Pasa el cursor" },
};

export const DATA = {
  stats: { label: "Métricas" },
  avatars: { label: "Avatares", people: ["Ana Ruiz", "Luis Pérez", "Sara Gómez", "Juan Díaz", "Eva Mora", "Iván Rey", "Lía Soto"] },
  table: { label: "Tabla", caption: "Personas del proyecto" },
  empty: { label: "Estado vacío", title: "Sin archivos todavía", message: "Arrastra archivos aquí o súbelos desde tu equipo.", action: "Subir archivo" },
};

export const OVERLAYS = {
  menu: {
    label: "Menú",
    name: "Acciones del proyecto",
    items: [
      { label: "Editar", icon: Pencil, shortcut: "E" },
      { label: "Duplicar", icon: Copy, shortcut: "D" },
      { label: "Compartir", icon: Share2, shortcut: "S" },
      { label: "Eliminar", icon: Trash, danger: true },
    ],
  },
  dialog: { label: "Diálogo", title: "¿Eliminar proyecto?", description: "Se borrarán sus 24 tareas y archivos. Esto no se puede deshacer.", confirm: "Eliminar", cancel: "Cancelar" },
  accordion: {
    label: "Acordeón",
    items: [
      { question: "¿Cómo invito a mi equipo?", answer: "Desde Equipo › Invitar, con su correo." },
      { question: "¿Puedo exportar mis datos?", answer: "Sí, en CSV o JSON cuando quieras." },
    ],
  },
  card: { label: "Tarjeta", title: "Rediseño web", description: "Diseño · vence el 20 nov", body: "Nueva página de inicio, precios y blog con el sistema actualizado.", open: "Abrir", share: "Compartir" },
};
