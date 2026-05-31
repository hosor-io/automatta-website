export type Idea = {
  id: number;
  name: string;
  category: string;
  taglineEn: string;
  taglineEs: string;
  price: string;
  weeks: string;
  problemEn: string;
  problemEs: string;
  features: string[];
};

export const IDEAS: Idea[] = [
  {
    id: 1,
    name: "StyleGo",
    category: "On-demand",
    taglineEn: "Your stylist, at your door.",
    taglineEs: "Tu estilista, a domicilio.",
    price: "$8,000–$12,000",
    weeks: "6–8",
    problemEn:
      "Booking a beauty service shouldn't mean commuting to a salon. StyleGo connects clients with certified stylists and barbers who come to them.",
    problemEs:
      "Reservar un servicio de belleza no debería significar desplazarse a un salón. StyleGo conecta clientes con estilistas y barberos certificados que van donde estén.",
    features: [
      "Stylist profiles with photos, reviews and specialties",
      "Real-time availability booking",
      "In-app payments",
      "Geolocation to find nearby stylists",
      "Chat between client and stylist",
      "Stylist management dashboard",
    ],
  },
  {
    id: 2,
    name: "FixIt",
    category: "On-demand",
    taglineEn: "Home repairs, on demand.",
    taglineEs: "Reparaciones a domicilio, al instante.",
    price: "$9,000–$14,000",
    weeks: "7–9",
    problemEn:
      "Finding a reliable plumber or electrician shouldn't take days. FixIt connects homeowners with verified technicians available today.",
    problemEs:
      "Encontrar un plomero o electricista confiable no debería tomar días. FixIt conecta propietarios con técnicos verificados disponibles hoy.",
    features: [
      "Service category selection",
      "Technician profiles with ratings and certifications",
      "Real-time tracking",
      "In-app quotes and payments",
      "Job history and receipts",
      "Admin panel for technician management",
    ],
  },
  {
    id: 3,
    name: "PetCare",
    category: "On-demand",
    taglineEn: "Vet and groomer, at your door.",
    taglineEs: "Vet y groomer, a domicilio.",
    price: "$8,000–$11,000",
    weeks: "6–8",
    problemEn:
      "Taking pets to the vet or groomer is stressful. PetCare brings certified professionals to your home.",
    problemEs:
      "Llevar mascotas al veterinario es estresante. PetCare lleva profesionales certificados a tu hogar.",
    features: [
      "Vet and groomer profiles",
      "Appointment booking with pet profiles",
      "Medical history per pet",
      "Real-time GPS tracking",
      "In-app payments",
      "Review and rating system",
    ],
  },
  {
    id: 4,
    name: "MoveIt",
    category: "On-demand",
    taglineEn: "Moving made simple.",
    taglineEs: "Mudanzas sin complicaciones.",
    price: "$10,000–$15,000",
    weeks: "8–10",
    problemEn:
      "Hiring a moving truck shouldn't require phone calls and days of negotiation. MoveIt connects you with available trucks and movers in minutes.",
    problemEs:
      "Contratar un camión de mudanza no debería requerir días de negociación. MoveIt te conecta con camiones y personal disponibles en minutos.",
    features: [
      "Load size estimator",
      "Driver and truck profiles with ratings",
      "Real-time price quote",
      "Live tracking during move",
      "In-app payment and tip",
      "Cargo insurance options",
    ],
  },
  {
    id: 5,
    name: "TableOrder",
    category: "Food & Delivery",
    taglineEn: "Your restaurant, commission-free.",
    taglineEs: "Tu restaurante, sin comisiones.",
    price: "$7,000–$10,000",
    weeks: "5–7",
    problemEn:
      "Third-party delivery apps charge 20–30% per order. TableOrder gives restaurants their own ordering system with zero commissions.",
    problemEs:
      "Las apps de delivery cobran 20–30% por pedido. TableOrder da a los restaurantes su propio sistema sin comisiones.",
    features: [
      "Digital menu with categories and photos",
      "QR code table ordering",
      "Online ordering for pickup and delivery",
      "Real-time kitchen dashboard",
      "Sales reports",
      "Customer loyalty program",
    ],
  },
  {
    id: 6,
    name: "FreshBox",
    category: "Food & Delivery",
    taglineEn: "Farm fresh, weekly.",
    taglineEs: "Del campo a tu puerta, cada semana.",
    price: "$8,000–$11,000",
    weeks: "6–8",
    problemEn:
      "Getting quality fresh produce consistently is hard. FreshBox delivers curated weekly boxes directly from local farms.",
    problemEs:
      "Conseguir productos frescos de calidad es difícil. FreshBox entrega cajas semanales curadas directamente de granjas locales.",
    features: [
      "Subscription plan selector",
      "Weekly customization of box contents",
      "Recurring billing with Stripe",
      "Delivery scheduling and tracking",
      "Producer profiles",
      "Pause or cancel anytime",
    ],
  },
  {
    id: 7,
    name: "PayTrack",
    category: "Fintech",
    taglineEn: "Get paid faster.",
    taglineEs: "Cobra más rápido.",
    price: "$7,000–$10,000",
    weeks: "5–7",
    problemEn:
      "Freelancers and small businesses lose hours managing invoices. PayTrack automates the entire billing cycle.",
    problemEs:
      "Los freelancers pierden horas gestionando facturas. PayTrack automatiza todo el ciclo de facturación.",
    features: [
      "Client and project management",
      "Invoice creation and PDF export",
      "Automated payment reminders",
      "Stripe and PayPal integration",
      "Income and expense dashboard",
      "Tax report generation",
    ],
  },
  {
    id: 8,
    name: "SplitEasy",
    category: "Fintech",
    taglineEn: "No more awkward money talks.",
    taglineEs: "Sin conversaciones incómodas de dinero.",
    price: "$5,000–$8,000",
    weeks: "4–6",
    problemEn:
      "Splitting bills with friends or roommates creates friction. SplitEasy tracks shared expenses and settles balances automatically.",
    problemEs:
      "Dividir gastos con amigos genera fricción. SplitEasy rastrea gastos compartidos y liquida saldos automáticamente.",
    features: [
      "Group and expense creation",
      "Multiple split methods",
      "Balance tracking per person",
      "Settlement suggestions",
      "Push notifications",
      "Export monthly summaries",
    ],
  },
  {
    id: 9,
    name: "StoreDesk",
    category: "Fintech",
    taglineEn: "Your store, fully managed.",
    taglineEs: "Tu tienda, totalmente gestionada.",
    price: "$9,000–$13,000",
    weeks: "7–9",
    problemEn:
      "Small retailers juggle spreadsheets and manual inventory. StoreDesk puts it all in one simple system.",
    problemEs:
      "Los pequeños negocios manejan hojas de cálculo e inventario manual. StoreDesk lo centraliza en un sistema simple.",
    features: [
      "POS with barcode scanning",
      "Real-time inventory management",
      "Sales reports and low stock alerts",
      "Customer purchase history",
      "Multiple payment methods",
      "Multi-user access with roles",
    ],
  },
  {
    id: 10,
    name: "MindSpace",
    category: "Health",
    taglineEn: "Mental health, made accessible.",
    taglineEs: "Salud mental accesible para todos.",
    price: "$10,000–$15,000",
    weeks: "8–10",
    problemEn:
      "Finding a therapist is complicated and slow. MindSpace connects people with licensed therapists for online sessions.",
    problemEs:
      "Encontrar un terapeuta es complicado. MindSpace conecta personas con terapeutas licenciados para sesiones online.",
    features: [
      "Therapist profiles with specialties",
      "Video session booking",
      "Secure in-app messaging",
      "Session notes",
      "Subscription plans",
      "Anonymous mode for first-time users",
    ],
  },
  {
    id: 11,
    name: "FitCoach",
    category: "Health",
    taglineEn: "Your trainer, in your pocket.",
    taglineEs: "Tu entrenador, en tu bolsillo.",
    price: "$8,000–$12,000",
    weeks: "6–8",
    problemEn:
      "Personal training is expensive and hard to access. FitCoach connects users with certified coaches for online sessions.",
    problemEs:
      "El entrenamiento personal es caro. FitCoach conecta usuarios con coaches certificados para sesiones online.",
    features: [
      "Coach profiles with specialties and pricing",
      "Live session scheduling via video",
      "Custom workout plan builder",
      "Progress tracking",
      "In-app messaging",
      "Achievement badges and streaks",
    ],
  },
  {
    id: 12,
    name: "SkillPath",
    category: "Education",
    taglineEn: "Learn from real experts.",
    taglineEs: "Aprende de expertos reales.",
    price: "$9,000–$13,000",
    weeks: "7–9",
    problemEn:
      "Finding a qualified tutor is still done via WhatsApp groups. SkillPath is the marketplace that fixes that.",
    problemEs:
      "Encontrar un tutor calificado todavía se hace por WhatsApp. SkillPath es el marketplace que lo soluciona.",
    features: [
      "Tutor profiles with subjects and ratings",
      "Lesson booking and calendar sync",
      "Live video sessions",
      "Student progress tracking",
      "Review and rating system",
      "Subscription plans",
    ],
  },
];

export const CATEGORIES = ["On-demand", "Food & Delivery", "Fintech", "Health", "Education"];

export const CATEGORY_COLORS: Record<string, string> = {
  "On-demand": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Food & Delivery": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Fintech: "bg-green-500/20 text-green-300 border-green-500/30",
  Health: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Education: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
};
