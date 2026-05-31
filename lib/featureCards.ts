import {
  UserCircle, CalendarCheck, CreditCard, MapPin, MessageSquare, LayoutDashboard,
  Wrench, BadgeCheck, Navigation, FileText, Clock, ShieldCheck,
  PawPrint, CalendarDays, Stethoscope, Star, Calculator, Truck,
  Banknote, Shield, UtensilsCrossed, QrCode, ShoppingBag, ChefHat,
  BarChart2, Gift, Package, RefreshCw, Leaf, PauseCircle,
  Users, Bell, Wallet, PieChart, Scale, Download,
  ShoppingCart, BarChart, Video, Lock, ClipboardList, EyeOff,
  Dumbbell, TrendingUp, Trophy, BookOpen, Divide,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureCard = {
  icon: LucideIcon;
  titleEn: string;
  titleEs: string;
  descEn: string;
  descEs: string;
};

export const featureCards: Record<string, FeatureCard[]> = {
  stylego: [
    { icon: UserCircle, titleEn: "Stylist Profiles", titleEs: "Perfiles de Estilistas", descEn: "Browse certified stylists with photos, ratings and specialties", descEs: "Explora estilistas certificados con fotos, reseñas y especialidades" },
    { icon: CalendarCheck, titleEn: "Smart Booking", titleEs: "Reservas Inteligentes", descEn: "Real-time availability with instant confirmation", descEs: "Disponibilidad en tiempo real con confirmación inmediata" },
    { icon: CreditCard, titleEn: "In-app Payments", titleEs: "Pagos en la App", descEn: "Secure checkout with multiple payment options", descEs: "Pago seguro con múltiples opciones de pago" },
    { icon: MapPin, titleEn: "Geolocation", titleEs: "Geolocalización", descEn: "Find stylists within your area in real time", descEs: "Encuentra estilistas en tu zona en tiempo real" },
    { icon: MessageSquare, titleEn: "Client Chat", titleEs: "Chat con Cliente", descEn: "Direct messaging with your stylist before the appointment", descEs: "Mensajería directa con tu estilista antes de la cita" },
    { icon: LayoutDashboard, titleEn: "Stylist Dashboard", titleEs: "Panel del Estilista", descEn: "Full management panel for bookings and earnings", descEs: "Panel completo para gestionar reservas y ganancias" },
  ],
  fixit: [
    { icon: Wrench, titleEn: "Service Categories", titleEs: "Categorías de Servicio", descEn: "Browse plumbers, electricians, painters and more", descEs: "Explora plomeros, electricistas, pintores y más" },
    { icon: BadgeCheck, titleEn: "Verified Technicians", titleEs: "Técnicos Verificados", descEn: "Background-checked pros with certifications", descEs: "Profesionales con antecedentes verificados y certificaciones" },
    { icon: Navigation, titleEn: "Live Tracking", titleEs: "Seguimiento en Vivo", descEn: "Follow your technician on a map in real time", descEs: "Sigue a tu técnico en el mapa en tiempo real" },
    { icon: FileText, titleEn: "In-app Quotes", titleEs: "Cotizaciones en la App", descEn: "Get price estimates before confirming the job", descEs: "Obtén estimados de precio antes de confirmar el trabajo" },
    { icon: Clock, titleEn: "Job History", titleEs: "Historial de Trabajos", descEn: "Full record of past services with receipts", descEs: "Registro completo de servicios anteriores con recibos" },
    { icon: ShieldCheck, titleEn: "Admin Panel", titleEs: "Panel de Administración", descEn: "Manage technician onboarding and performance", descEs: "Gestiona la incorporación y rendimiento de técnicos" },
  ],
  petcare: [
    { icon: PawPrint, titleEn: "Pet Profiles", titleEs: "Perfiles de Mascotas", descEn: "Keep all your pets' info in one place", descEs: "Ten la información de todas tus mascotas en un solo lugar" },
    { icon: CalendarDays, titleEn: "Easy Booking", titleEs: "Reservas Fáciles", descEn: "Schedule vet or grooming visits in seconds", descEs: "Agenda visitas de veterinario o grooming en segundos" },
    { icon: Stethoscope, titleEn: "Medical History", titleEs: "Historial Médico", descEn: "Track vaccines, checkups and treatments per pet", descEs: "Registra vacunas, revisiones y tratamientos por mascota" },
    { icon: MapPin, titleEn: "GPS Tracking", titleEs: "Seguimiento GPS", descEn: "Know exactly where your pet's professional is", descEs: "Sabe exactamente dónde está el profesional de tu mascota" },
    { icon: CreditCard, titleEn: "Cashless Payments", titleEs: "Pagos sin Efectivo", descEn: "Pay securely without handling cash", descEs: "Paga de forma segura sin manejar efectivo" },
    { icon: Star, titleEn: "Ratings & Reviews", titleEs: "Calificaciones", descEn: "Review every service and find the best professionals", descEs: "Califica cada servicio y encuentra los mejores profesionales" },
  ],
  moveit: [
    { icon: Calculator, titleEn: "Load Estimator", titleEs: "Estimador de Carga", descEn: "Estimate your move cost by size and distance", descEs: "Estima el costo de tu mudanza por tamaño y distancia" },
    { icon: Truck, titleEn: "Mover Profiles", titleEs: "Perfiles de Mudanceros", descEn: "Browse trucks and movers with verified ratings", descEs: "Explora camiones y mudanceros con calificaciones verificadas" },
    { icon: FileText, titleEn: "Instant Quotes", titleEs: "Cotizaciones al Instante", descEn: "Get a real-time price before booking", descEs: "Obtén un precio en tiempo real antes de reservar" },
    { icon: Navigation, titleEn: "Live Tracking", titleEs: "Seguimiento en Vivo", descEn: "Follow your belongings on a map", descEs: "Sigue tus pertenencias en el mapa" },
    { icon: Banknote, titleEn: "Easy Payment", titleEs: "Pago Fácil", descEn: "Pay and tip directly in the app", descEs: "Paga y da propina directamente en la app" },
    { icon: Shield, titleEn: "Cargo Insurance", titleEs: "Seguro de Carga", descEn: "Optional protection for valuable items", descEs: "Protección opcional para artículos de valor" },
  ],
  tableorder: [
    { icon: UtensilsCrossed, titleEn: "Digital Menu", titleEs: "Menú Digital", descEn: "Beautiful menus with photos and categories", descEs: "Menús atractivos con fotos y categorías" },
    { icon: QrCode, titleEn: "QR Ordering", titleEs: "Pedidos por QR", descEn: "Customers scan and order from their own phone", descEs: "Los clientes escanean y piden desde su propio teléfono" },
    { icon: ShoppingBag, titleEn: "Pickup & Delivery", titleEs: "Recoger y Domicilio", descEn: "Accept orders for both in-house and delivery", descEs: "Acepta pedidos para consumo en local y a domicilio" },
    { icon: ChefHat, titleEn: "Kitchen Display", titleEs: "Pantalla de Cocina", descEn: "Real-time order queue for kitchen staff", descEs: "Cola de pedidos en tiempo real para el equipo de cocina" },
    { icon: BarChart2, titleEn: "Sales Reports", titleEs: "Reportes de Ventas", descEn: "Daily and weekly revenue at a glance", descEs: "Ingresos diarios y semanales de un vistazo" },
    { icon: Gift, titleEn: "Loyalty Program", titleEs: "Programa de Lealtad", descEn: "Reward repeat customers with points and discounts", descEs: "Premia a clientes frecuentes con puntos y descuentos" },
  ],
  freshbox: [
    { icon: Package, titleEn: "Box Builder", titleEs: "Armador de Caja", descEn: "Choose exactly what goes in your weekly box", descEs: "Elige exactamente qué va en tu caja semanal" },
    { icon: RefreshCw, titleEn: "Subscriptions", titleEs: "Suscripciones", descEn: "Set it and forget it with auto-renewal", descEs: "Configúralo y olvídate con renovación automática" },
    { icon: CreditCard, titleEn: "Stripe Billing", titleEs: "Cobro con Stripe", descEn: "Secure recurring payments powered by Stripe", descEs: "Pagos recurrentes seguros con Stripe" },
    { icon: Truck, titleEn: "Delivery Tracking", titleEs: "Seguimiento de Entrega", descEn: "Know your delivery window down to the hour", descEs: "Conoce tu ventana de entrega con precisión horaria" },
    { icon: Leaf, titleEn: "Producer Profiles", titleEs: "Perfiles de Productores", descEn: "Meet the farms behind your food", descEs: "Conoce las granjas detrás de tu comida" },
    { icon: PauseCircle, titleEn: "Flexible Plans", titleEs: "Planes Flexibles", descEn: "Pause or cancel anytime, no questions asked", descEs: "Pausa o cancela en cualquier momento, sin preguntas" },
  ],
  paytrack: [
    { icon: Users, titleEn: "Client Management", titleEs: "Gestión de Clientes", descEn: "Organize clients and projects in one place", descEs: "Organiza clientes y proyectos en un solo lugar" },
    { icon: FileText, titleEn: "Invoice Builder", titleEs: "Generador de Facturas", descEn: "Create professional invoices in seconds", descEs: "Crea facturas profesionales en segundos" },
    { icon: Bell, titleEn: "Auto-reminders", titleEs: "Recordatorios Automáticos", descEn: "Automatic follow-ups for overdue payments", descEs: "Seguimiento automático para pagos vencidos" },
    { icon: Wallet, titleEn: "Payment Integrations", titleEs: "Integraciones de Pago", descEn: "Connect Stripe, PayPal and bank transfers", descEs: "Conecta Stripe, PayPal y transferencias bancarias" },
    { icon: PieChart, titleEn: "Financial Dashboard", titleEs: "Dashboard Financiero", descEn: "Visual overview of income and expenses", descEs: "Resumen visual de ingresos y gastos" },
    { icon: Download, titleEn: "Tax Reports", titleEs: "Reportes Fiscales", descEn: "Export reports ready for your accountant", descEs: "Exporta reportes listos para tu contador" },
  ],
  spliteasy: [
    { icon: Users, titleEn: "Group Expenses", titleEs: "Gastos de Grupo", descEn: "Create groups for trips, apartments, or events", descEs: "Crea grupos para viajes, apartamentos o eventos" },
    { icon: Divide, titleEn: "Split Options", titleEs: "Opciones de División", descEn: "Equal, percentage, or custom splits", descEs: "División equitativa, por porcentaje o personalizada" },
    { icon: Scale, titleEn: "Balance Tracker", titleEs: "Rastreador de Saldo", descEn: "See who owes what at a glance", descEs: "Ve quién debe qué de un vistazo" },
    { icon: CreditCard, titleEn: "Settlements", titleEs: "Liquidaciones", descEn: "Smart suggestions to minimize transactions", descEs: "Sugerencias inteligentes para minimizar transacciones" },
    { icon: Bell, titleEn: "Notifications", titleEs: "Notificaciones", descEn: "Get notified when expenses are added or paid", descEs: "Recibe alertas cuando se agregan o pagan gastos" },
    { icon: Download, titleEn: "Monthly Export", titleEs: "Exportar Resúmenes", descEn: "Download summaries for your records", descEs: "Descarga resúmenes para tus registros" },
  ],
  storedesk: [
    { icon: ShoppingCart, titleEn: "POS System", titleEs: "Sistema POS", descEn: "Fast checkout with barcode scanning", descEs: "Cobro rápido con escaneo de código de barras" },
    { icon: Package, titleEn: "Inventory Control", titleEs: "Control de Inventario", descEn: "Real-time stock levels with auto-alerts", descEs: "Niveles de stock en tiempo real con alertas automáticas" },
    { icon: BarChart, titleEn: "Sales Analytics", titleEs: "Análisis de Ventas", descEn: "Revenue, top products and trends", descEs: "Ingresos, productos top y tendencias" },
    { icon: UserCircle, titleEn: "Customer History", titleEs: "Historial de Clientes", descEn: "See what every customer has bought", descEs: "Ve qué ha comprado cada cliente" },
    { icon: CreditCard, titleEn: "Payment Methods", titleEs: "Métodos de Pago", descEn: "Cash, card, and digital wallets", descEs: "Efectivo, tarjeta y billeteras digitales" },
    { icon: Users, titleEn: "Team Access", titleEs: "Acceso por Roles", descEn: "Multiple staff roles with permission levels", descEs: "Múltiples roles de personal con niveles de permisos" },
  ],
  mindspace: [
    { icon: UserCircle, titleEn: "Therapist Profiles", titleEs: "Perfiles de Terapeutas", descEn: "Browse licensed professionals by specialty", descEs: "Explora profesionales licenciados por especialidad" },
    { icon: Video, titleEn: "Video Sessions", titleEs: "Sesiones de Video", descEn: "Private one-on-one video therapy", descEs: "Terapia de video individual y privada" },
    { icon: Lock, titleEn: "Secure Messaging", titleEs: "Mensajería Segura", descEn: "Encrypted chat between sessions", descEs: "Chat cifrado entre sesiones" },
    { icon: ClipboardList, titleEn: "Session Notes", titleEs: "Notas de Sesión", descEn: "Private notes visible only to the therapist", descEs: "Notas privadas visibles solo para el terapeuta" },
    { icon: CreditCard, titleEn: "Subscription Plans", titleEs: "Planes de Suscripción", descEn: "Flexible weekly or monthly billing", descEs: "Facturación semanal o mensual flexible" },
    { icon: EyeOff, titleEn: "Anonymous Mode", titleEs: "Modo Anónimo", descEn: "Start your first session without a full profile", descEs: "Inicia tu primera sesión sin un perfil completo" },
  ],
  fitcoach: [
    { icon: UserCircle, titleEn: "Coach Profiles", titleEs: "Perfiles de Coaches", descEn: "Find certified coaches by sport and price", descEs: "Encuentra coaches certificados por deporte y precio" },
    { icon: Video, titleEn: "Live Sessions", titleEs: "Sesiones en Vivo", descEn: "Train face-to-face via high-quality video", descEs: "Entrena cara a cara por video de alta calidad" },
    { icon: Dumbbell, titleEn: "Workout Plans", titleEs: "Planes de Entrenamiento", descEn: "Custom plans designed for your goals", descEs: "Planes personalizados diseñados para tus objetivos" },
    { icon: TrendingUp, titleEn: "Progress Tracking", titleEs: "Seguimiento de Progreso", descEn: "Charts showing weight, reps and performance", descEs: "Gráficas de peso, repeticiones y rendimiento" },
    { icon: MessageSquare, titleEn: "In-app Chat", titleEs: "Chat en la App", descEn: "Message your coach between sessions", descEs: "Escríbele a tu coach entre sesiones" },
    { icon: Trophy, titleEn: "Achievements", titleEs: "Logros", descEn: "Badges and streaks to keep you motivated", descEs: "Insignias y rachas para mantenerte motivado" },
  ],
  skillpath: [
    { icon: UserCircle, titleEn: "Tutor Profiles", titleEs: "Perfiles de Tutores", descEn: "Browse verified tutors by subject and rating", descEs: "Explora tutores verificados por materia y calificación" },
    { icon: CalendarCheck, titleEn: "Lesson Booking", titleEs: "Reserva de Clases", descEn: "Pick a time that fits your schedule", descEs: "Elige un horario que se adapte a tu agenda" },
    { icon: Video, titleEn: "Live Lessons", titleEs: "Clases en Vivo", descEn: "Real-time video sessions with screen sharing", descEs: "Sesiones de video en tiempo real con pantalla compartida" },
    { icon: TrendingUp, titleEn: "Progress Tracking", titleEs: "Seguimiento de Progreso", descEn: "Monitor improvement across subjects", descEs: "Monitorea el avance en todas las materias" },
    { icon: Star, titleEn: "Reviews", titleEs: "Reseñas", descEn: "Honest ratings from verified students", descEs: "Calificaciones honestas de estudiantes verificados" },
    { icon: BookOpen, titleEn: "Subscription Plans", titleEs: "Planes de Suscripción", descEn: "Unlock unlimited lessons at a fixed price", descEs: "Accede a clases ilimitadas a un precio fijo" },
  ],
};
