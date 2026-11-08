import { ChartColumn, Lock, Sparkles, Users } from "@/components/ui/Icon";

export const COPY = {
  product: "Órbita",
  nav: ["Producto", "Precios", "Clientes", "Blog"],
  login: "Entrar",
  start: "Empezar gratis",
  badge: "Nuevo · Planes de equipo",
  title: "Lanza tu próxima idea en días, no en meses",
  lead: "Planea, diseña y entrega con tu equipo en un solo lugar. Sin hojas sueltas ni mensajes perdidos.",
  primary: "Crear proyecto",
  secondary: "Ver demo",
  social: "Más de 2.000 equipos ya trabajan así",
  people: ["Ana Ruiz", "Luis Pérez", "Sara Gómez", "Juan Díaz", "Eva Mora", "Iván Rey"],
};

export const FEATURES = [
  { icon: Sparkles, title: "Plantillas listas", text: "Empieza con flujos probados para producto, diseño y marketing." },
  { icon: Users, title: "Todo el equipo", text: "Comentarios, menciones y tareas en el mismo lugar." },
  { icon: ChartColumn, title: "Avance claro", text: "Tableros que muestran qué falta sin pedir reportes." },
];

export const SIGN_UP = {
  title: "Crea tu cuenta",
  description: "Gratis para equipos de hasta 5 personas.",
  email: "Correo de trabajo",
  emailPlaceholder: "tu@empresa.com",
  password: "Contraseña",
  passwordHint: "Mínimo 8 caracteres.",
  terms: "Acepto los términos y la política de privacidad",
  submit: "Crear cuenta",
  lockIcon: Lock,
};

export const PRICING = {
  name: "Equipo",
  badge: "Popular",
  price: "$12",
  period: "por persona al mes",
  features: ["Proyectos ilimitados", "Historial de 1 año", "Roles y permisos", "Soporte prioritario"],
  action: "Elegir Equipo",
};

export const FAQ = [
  { question: "¿Puedo probarlo sin tarjeta?", answer: "Sí. El plan gratis no vence y no pide datos de pago." },
  { question: "¿Mis datos están seguros?", answer: "Ciframos todo en tránsito y en reposo, con copias diarias." },
  { question: "¿Puedo cancelar cuando quiera?", answer: "Claro. Cancelas en un clic y conservas tus datos 30 días." },
];

export const QUOTE = {
  text: "Pasamos de cinco herramientas a una. El equipo entrega más rápido y con menos reuniones.",
  author: "Carolina Vélez",
  role: "Líder de producto, Nimbo",
};

export const FOOTER = "© 2026 Órbita · Hecho para equipos que crean";
