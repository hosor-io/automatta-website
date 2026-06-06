"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TrendingUp, CheckCircle, Zap, Star, ArrowRight, BarChart3, Smartphone } from "lucide-react";

// ── Mini UI cards shown in the hero ──────────────────────────
function DashboardCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#E4E4E7] shadow-xl p-4 w-[260px]">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-[10px] text-[#71717A] font-medium uppercase tracking-wider">Revenue MTD</p>
          <p className="text-xl font-bold text-[#09090B]">$48,200</p>
        </div>
        <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
          <TrendingUp size={10} className="text-green-600" />
          <span className="text-[10px] font-semibold text-green-600">+24%</span>
        </div>
      </div>
      <div className="flex items-end gap-1 h-10">
        {[40, 55, 35, 70, 60, 85, 75, 90, 65, 100, 80, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i === 11 ? "linear-gradient(to top, #7C3AED, #2563EB)" : "#EDE9FE",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MobileAppCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#E4E4E7] shadow-xl p-3 w-[180px]">
      <div className="bg-gradient-to-br from-violet-600 to-blue-500 rounded-xl p-3 mb-2">
        <Smartphone size={14} className="text-white mb-1" />
        <p className="text-white text-[11px] font-bold">StyleGo</p>
        <p className="text-violet-200 text-[9px]">4.9 ★ · On-demand</p>
      </div>
      <div className="space-y-1.5">
        {["Sofia M. · Hair & Color", "Carlos R. · Barbershop"].map((name) => (
          <div key={name} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-violet-100 shrink-0" />
            <p className="text-[9px] text-[#52525B] truncate">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusCard() {
  const items = [
    { label: "Discovery call", done: true },
    { label: "Proposal sent", done: true },
    { label: "Development", done: true },
    { label: "Launch 🚀", done: false },
  ];
  return (
    <div className="bg-white rounded-2xl border border-[#E4E4E7] shadow-xl p-4 w-[220px]">
      <p className="text-[10px] font-semibold text-[#09090B] uppercase tracking-wider mb-3">Project Status</p>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-violet-600" : "border-2 border-dashed border-[#D4D4D8]"}`}>
              {item.done && <CheckCircle size={10} className="text-white" />}
            </div>
            <span className={`text-[11px] font-medium ${item.done ? "text-[#09090B]" : "text-[#A1A1AA]"}`}>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 bg-violet-50 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
        <Zap size={10} className="text-violet-600" />
        <span className="text-[10px] text-violet-700 font-semibold">Week 6 of 6</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("hero");

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(circle, #7C3AED 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial fade */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, white 100%)" }} />
      {/* Gradient orb left */}
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* ── LEFT: Copy ─────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest border border-[#E4E4E7] text-[#52525B] mb-6 bg-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                MVP Development · Web & Mobile · AI Automations
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6"
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("headline")}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#52525B] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("subheadline")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => scrollTo("contact")}
                className="group px-8 py-4 rounded-xl font-medium text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }}
              >
                {t("ctaPrimary")}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("idea-lab")}
                className="px-8 py-4 rounded-xl font-medium text-[#09090B] border border-[#E4E4E7] hover:border-[#A1A1AA] transition-colors bg-white"
              >
                {t("ctaSecondary")}
              </button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex -space-x-2">
                {["bg-violet-500","bg-blue-500","bg-pink-500","bg-green-500"].map((bg, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full ${bg} border-2 border-white flex items-center justify-center`}>
                    <Star size={10} className="text-white fill-white" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#71717A]">
                <span className="font-semibold text-[#09090B]">10+ años</span> entregando productos reales
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Floating UI Cards ────────────────── */}
          <div className="flex-1 relative flex justify-center items-center min-h-[420px] lg:min-h-[500px]">
            {/* Dashboard card — top left */}
            <motion.div
              className="absolute top-0 left-0 lg:-left-4"
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ filter: "drop-shadow(0 20px 40px rgba(124,58,237,0.12))" }}
            >
              <DashboardCard />
            </motion.div>

            {/* Status card — center right */}
            <motion.div
              className="absolute top-16 right-0 lg:-right-4"
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{ filter: "drop-shadow(0 20px 40px rgba(37,99,235,0.12))" }}
            >
              <StatusCard />
            </motion.div>

            {/* Mobile app card — bottom center */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{ filter: "drop-shadow(0 20px 40px rgba(124,58,237,0.15))" }}
            >
              <MobileAppCard />
            </motion.div>

            {/* Floating metric badge */}
            <motion.div
              className="absolute bottom-28 right-4 bg-white border border-[#E4E4E7] rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <BarChart3 size={14} className="text-violet-600" />
              <div>
                <p className="text-[10px] text-[#71717A]">Avg. delivery</p>
                <p className="text-xs font-bold text-[#09090B]">6 weeks</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
