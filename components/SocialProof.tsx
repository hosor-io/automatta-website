"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  ShoppingBag, HeartPulse, GraduationCap, Building2,
  Truck, Banknote, UtensilsCrossed, Dumbbell, Leaf, Cpu,
} from "lucide-react";

const industries = [
  { icon: ShoppingBag,      label: "E-Commerce" },
  { icon: HeartPulse,       label: "HealthTech" },
  { icon: GraduationCap,    label: "EdTech" },
  { icon: Building2,        label: "PropTech" },
  { icon: Truck,            label: "Logistics" },
  { icon: Banknote,         label: "Fintech" },
  { icon: UtensilsCrossed,  label: "FoodTech" },
  { icon: Dumbbell,         label: "FitTech" },
  { icon: Leaf,             label: "AgriTech" },
  { icon: Cpu,              label: "AI / SaaS" },
];

// Duplicate for seamless loop
const ticker = [...industries, ...industries];

export default function SocialProof() {
  const t = useTranslations("social");

  const stats = [
    { value: "10+", label: "años de experiencia" },
    { value: "40+", label: "productos entregados" },
    { value: "6 sem", label: "tiempo de entrega promedio" },
    { value: "3", label: "continentes" },
  ];

  return (
    <section className="border-y border-[#E4E4E7] bg-[#F7F7F7] py-12 overflow-hidden">

      {/* ── Stats row ─────────────────────────────── */}
      <motion.div
        className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <span
              className="text-3xl font-bold mb-1"
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {s.value}
            </span>
            <span className="text-xs text-[#71717A] font-medium leading-tight">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[#E4E4E7]" />
          <p className="text-xs text-[#A1A1AA] font-medium uppercase tracking-widest whitespace-nowrap">
            {t("text")}
          </p>
          <div className="flex-1 h-px bg-[#E4E4E7]" />
        </div>
      </div>

      {/* ── Marquee ───────────────────────────────── */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F7F7F7, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F7F7F7, transparent)" }} />

        <motion.div
          className="flex gap-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {ticker.map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#E4E4E7] shadow-sm shrink-0"
            >
              <div className="w-6 h-6 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                <Icon size={13} className="text-[#7C3AED]" />
              </div>
              <span className="text-xs font-semibold text-[#52525B] whitespace-nowrap">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
