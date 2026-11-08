import { Bell, Folder, House, Users } from "@/components/ui/Icon";

export const PHONES = { login: "Pantalla de inicio de sesión", list: "Pantalla de proyectos", settings: "Pantalla de ajustes" };

export const STATUS_BAR = { time: "9:41" };

export const LOGIN = {
  product: "Órbita",
  title: "Hola de nuevo",
  lead: "Entra para seguir con tus proyectos.",
  email: "Correo",
  emailValue: "ana@orbita.co",
  password: "Contraseña",
  forgot: "¿Olvidaste tu contraseña?",
  submit: "Entrar",
  or: "o",
  google: "Continuar con Google",
  signUp: "¿No tienes cuenta? Regístrate",
};

export const LIST = {
  title: "Proyectos",
  user: "Ana Ruiz",
  tabsLabel: "Filtro de proyectos",
  tabs: ["Todos", "Míos", "Archivados"],
  projects: [
    { name: "Rediseño web", team: "Diseño", progress: 72, status: { label: "En curso", tone: "primary" as const } },
    { name: "App de pagos", team: "Ingeniería", progress: 45, status: { label: "En riesgo", tone: "warning" as const } },
    { name: "Campaña Q4", team: "Marketing", progress: 100, status: { label: "Lista", tone: "success" as const } },
  ],
  progress: "Avance",
};

export const TAB_BAR = {
  label: "Navegación de la app",
  items: [
    { label: "Inicio", icon: House },
    { label: "Proyectos", icon: Folder, active: true },
    { label: "Equipo", icon: Users },
    { label: "Avisos", icon: Bell },
  ],
};

export const SETTINGS = {
  title: "Ajustes",
  name: "Ana Ruiz",
  email: "ana@orbita.co",
  section: "Notificaciones",
  toggles: [
    { label: "Correos semanales", description: "Resumen cada lunes", checked: true },
    { label: "Menciones", description: "Cuando alguien te nombra", checked: true },
    { label: "Modo no molestar", description: "De 10 p. m. a 7 a. m.", checked: false },
  ],
  volume: "Volumen de avisos",
  logout: "Cerrar sesión",
  toast: "Cambios guardados",
  undo: "Deshacer",
};
