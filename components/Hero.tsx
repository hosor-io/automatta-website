"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Star, Check, TrendingUp, MapPin, Search, ShoppingBag, Bell } from "lucide-react";

// ─── Realistic phone frame ───────────────────────────────────
function Phone({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{
        width: 200,
        ...style,
      }}
    >
      {/* Outer shell */}
      <div
        className="relative rounded-[36px] overflow-hidden"
        style={{
          background: "#111",
          padding: "10px 8px",
          boxShadow: "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset",
        }}
      >
        {/* Side buttons (decorative) */}
        <div className="absolute right-[-3px] top-20 w-[3px] h-8 bg-[#333] rounded-l-sm" />
        <div className="absolute left-[-3px] top-16 w-[3px] h-6 bg-[#333] rounded-r-sm" />
        <div className="absolute left-[-3px] top-24 w-[3px] h-6 bg-[#333] rounded-r-sm" />

        {/* Screen */}
        <div className="rounded-[28px] overflow-hidden bg-white" style={{ height: 400 }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-2 pb-1 bg-white">
            <span className="text-[10px] font-bold text-gray-800">9:41</span>
            <div className="w-16 h-4 bg-black rounded-full" /> {/* Dynamic island */}
            <div className="flex items-center gap-1 text-gray-800">
              <div className="flex gap-[2px] items-end">
                {[3,5,7,9].map(h=><div key={h} className="w-[3px] bg-current rounded-sm" style={{height:h}}/>)}
              </div>
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none" className="text-gray-800">
                <path d="M5.5 2C7.2 2 8.7 2.7 9.8 3.8L11 2.6C9.6 1.3 7.6.5 5.5.5S1.4 1.3 0 2.6L1.2 3.8C2.3 2.7 3.8 2 5.5 2z" fill="currentColor"/>
                <path d="M5.5 5c1 0 1.9.4 2.6 1l1.2-1.2C8.2 3.7 6.9 3 5.5 3S2.8 3.7 1.7 4.8L2.9 6c.7-.6 1.6-1 2.6-1z" fill="currentColor"/>
                <circle cx="5.5" cy="8" r="1.2" fill="currentColor"/>
              </svg>
              <div className="flex items-center">
                <div className="w-5 h-2.5 rounded-sm border border-gray-500 relative">
                  <div className="absolute inset-[2px] right-[3px] bg-gray-800 rounded-[1px]" />
                  <div className="absolute -right-[3px] top-[3px] w-[2px] h-1 bg-gray-500 rounded-r-sm" />
                </div>
              </div>
            </div>
          </div>
          {/* App content */}
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── App 1: Booking / On-demand ──────────────────────────────
function BookingApp() {
  return (
    <div className="flex flex-col bg-white h-full">
      {/* Gradient header */}
      <div style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }} className="px-4 pt-2 pb-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-white/70 text-[9px]">Good morning</p>
            <p className="text-white font-bold text-sm">Hernan 👋</p>
          </div>
          <div className="relative">
            <Bell size={16} className="text-white" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-400" />
          </div>
        </div>
        <div className="bg-white/20 rounded-xl flex items-center gap-2 px-3 py-2">
          <Search size={11} className="text-white/70" />
          <span className="text-white/60 text-[10px]">Hair, nails, massage…</span>
        </div>
      </div>

      {/* Cards overlap */}
      <div className="flex-1 bg-gray-50 px-3 -mt-3 pt-4 space-y-2 overflow-hidden">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Nearby stylists</p>
        {[
          { name: "Sofia M.", spec: "Hair & Color", r: "4.9", d: "0.8 km", price: "$35", bg: "bg-violet-500" },
          { name: "Carlos R.", spec: "Barbershop",  r: "4.8", d: "1.2 km", price: "$25", bg: "bg-blue-500" },
          { name: "Ana L.",    spec: "Nail Art",    r: "4.7", d: "2.1 km", price: "$28", bg: "bg-pink-500" },
        ].map(s => (
          <div key={s.name} className="bg-white rounded-xl p-2.5 flex items-center gap-2 shadow-sm border border-gray-100">
            <div className={`w-8 h-8 rounded-full ${s.bg} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{s.name[0]}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-gray-900">{s.name}</p>
              <p className="text-[9px] text-gray-400">{s.spec} · {s.d}</p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-[9px]">★</span>
                <span className="text-[9px] text-gray-500">{s.r}</span>
              </div>
            </div>
            <span className="text-[11px] font-black text-violet-600">{s.price}</span>
          </div>
        ))}
        <button className="w-full py-2.5 rounded-xl text-white text-[10px] font-bold" style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}>
          Book Now →
        </button>
      </div>
    </div>
  );
}

// ─── App 2: Analytics / SaaS dashboard ───────────────────────
function DashboardApp() {
  return (
    <div className="flex flex-col bg-white h-full">
      <div className="px-4 pt-2 pb-3 border-b border-gray-100">
        <p className="text-[9px] text-gray-400">Welcome back</p>
        <p className="text-sm font-bold text-gray-900">Dashboard</p>
      </div>
      <div className="flex-1 px-3 py-2 overflow-hidden space-y-2">
        {/* Revenue card */}
        <div className="rounded-2xl p-3" style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }}>
          <p className="text-white/70 text-[9px] mb-0.5">Revenue MTD</p>
          <p className="text-white text-lg font-black">$48,200</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp size={9} className="text-green-300" />
            <span className="text-green-300 text-[9px] font-semibold">+24% vs last month</span>
          </div>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-1.5">
          {[{l:"Users",v:"2.4k",c:"text-violet-600"},{l:"Orders",v:"184",c:"text-blue-600"},{l:"Churn",v:"1.2%",c:"text-green-600"}].map(s=>(
            <div key={s.l} className="bg-gray-50 rounded-xl p-2 text-center border border-gray-100">
              <p className={`text-xs font-black ${s.c}`}>{s.v}</p>
              <p className="text-[8px] text-gray-400">{s.l}</p>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-100">
          <p className="text-[9px] font-bold text-gray-500 mb-1.5">Weekly Sales</p>
          <div className="flex items-end gap-1 h-12">
            {[35,55,40,70,55,85,100].map((h,i)=>(
              <div key={i} className="flex-1 rounded-sm" style={{height:`${h}%`,background:i===6?"linear-gradient(to top,#7C3AED,#2563EB)":"#EDE9FE"}}/>
            ))}
          </div>
          <div className="flex justify-between text-[7px] text-gray-300 mt-1">
            {["M","T","W","T","F","S","S"].map(d=><span key={d}>{d}</span>)}
          </div>
        </div>
        {/* Top items */}
        <div className="space-y-1">
          {[{n:"Product A",v:"$8,400"},{n:"Product B",v:"$5,200"}].map(p=>(
            <div key={p.n} className="flex justify-between items-center bg-gray-50 rounded-lg px-2.5 py-1.5 border border-gray-100">
              <span className="text-[9px] text-gray-700 font-medium">{p.n}</span>
              <span className="text-[9px] font-black text-violet-600">{p.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── App 3: Food / E-commerce ─────────────────────────────────
function FoodApp() {
  return (
    <div className="flex flex-col bg-white h-full">
      <div style={{ background: "linear-gradient(135deg, #F97316 0%, #EF4444 100%)" }} className="px-4 pt-2 pb-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-white/70 text-[9px]">Deliver to</p>
            <div className="flex items-center gap-1">
              <MapPin size={10} className="text-white" />
              <p className="text-white font-bold text-xs">San José, CR</p>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <ShoppingBag size={13} className="text-white" />
          </div>
        </div>
        <div className="bg-white/20 rounded-xl flex items-center gap-2 px-3 py-2">
          <Search size={11} className="text-white/70" />
          <span className="text-white/60 text-[10px]">Search restaurants…</span>
        </div>
      </div>
      <div className="flex-1 bg-gray-50 px-3 -mt-3 pt-3 overflow-hidden space-y-2">
        {/* Category chips */}
        <div className="flex gap-1.5 overflow-hidden">
          {["🍕 Pizza","🍔 Burgers","🌮 Tacos"].map((c,i)=>(
            <span key={c} className={`px-2.5 py-1 rounded-full text-[9px] font-bold shrink-0 ${i===0?"bg-orange-500 text-white":"bg-white text-gray-600 border border-gray-200"}`}>{c}</span>
          ))}
        </div>
        {/* Restaurant cards */}
        {[
          {name:"La Trattoria",cat:"Italian · $$",r:"4.8",time:"20 min",emoji:"🍝"},
          {name:"Burger House",cat:"Burgers · $",r:"4.6",time:"15 min",emoji:"🍔"},
        ].map(r=>(
          <div key={r.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="h-14 flex items-center justify-center text-3xl" style={{background:"linear-gradient(135deg,#FEF3C7,#FDE68A)"}}>
              {r.emoji}
            </div>
            <div className="px-3 py-2">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold text-gray-900">{r.name}</p>
                <div className="flex items-center gap-0.5">
                  <Star size={8} className="text-yellow-400 fill-yellow-400"/>
                  <span className="text-[9px] font-semibold text-gray-600">{r.r}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-gray-400">{r.cat}</span>
                <span className="text-[9px] text-orange-500 font-semibold">{r.time}</span>
              </div>
            </div>
          </div>
        ))}
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
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: "radial-gradient(circle, #7C3AED 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      {/* Radial fade */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, white 100%)" }} />
      {/* Left orb */}
      <div className="absolute -left-60 top-1/3 w-[600px] h-[600px] rounded-full opacity-8 pointer-events-none" style={{ background: "radial-gradient(circle, #7C3AED33, transparent 70%)" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-28 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* ── LEFT: Copy ─────────────────────────── */}
          <div className="flex-1 text-center lg:text-left lg:pr-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest border border-[#E4E4E7] text-[#52525B] mb-6 bg-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                MVP · Web & Mobile · AI Automations
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("headline")}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#52525B] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("subheadline")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
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
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            >
              <div className="flex -space-x-2">
                {["bg-violet-500","bg-blue-500","bg-pink-500","bg-green-500"].map((bg, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full ${bg} border-2 border-white flex items-center justify-center`}>
                    <Star size={10} className="text-white fill-white" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-[#71717A]">
                <Check size={14} className="text-green-500" />
                <span><span className="font-semibold text-[#09090B]">40+</span> products shipped</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: 3 Stacked Phones ─────────────── */}
          <div className="flex-1 flex justify-center items-center" style={{ perspective: 1200, minHeight: 500 }}>
            <div className="relative" style={{ width: 340, height: 480 }}>

              {/* Phone LEFT — back */}
              <motion.div
                className="absolute"
                style={{ left: -20, top: 40, zIndex: 1, transformOrigin: "center center" }}
                initial={{ opacity: 0, x: -40, rotateY: 12 }}
                animate={{ opacity: 1, x: 0, rotateY: 12 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Phone style={{ transform: "rotateY(12deg) scale(0.85)", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.2))" }}>
                  <DashboardApp />
                </Phone>
              </motion.div>

              {/* Phone RIGHT — back */}
              <motion.div
                className="absolute"
                style={{ right: -20, top: 40, zIndex: 1 }}
                initial={{ opacity: 0, x: 40, rotateY: -12 }}
                animate={{ opacity: 1, x: 0, rotateY: -12 }}
                transition={{ duration: 0.8, delay: 0.65 }}
              >
                <Phone style={{ transform: "rotateY(-12deg) scale(0.85)", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.2))" }}>
                  <FoodApp />
                </Phone>
              </motion.div>

              {/* Phone CENTER — front */}
              <motion.div
                className="absolute"
                style={{ left: "50%", top: 0, transform: "translateX(-50%)", zIndex: 2 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                <Phone style={{ filter: "drop-shadow(0 40px 80px rgba(124,58,237,0.3))" }}>
                  <BookingApp />
                </Phone>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
