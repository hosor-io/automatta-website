"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Rocket, LayoutDashboard, Cpu,
  Smartphone, Check, TrendingUp, MessageSquare, Zap, Send,
} from "lucide-react";

// ── Mini mockup: Mobile app screen ───────────────────────────
function MvpMockup() {
  return (
    <div className="relative mx-auto w-[160px] mb-6">
      {/* Phone frame */}
      <div className="rounded-[20px] border-[5px] border-[#E4E4E7] bg-white overflow-hidden shadow-lg">
        {/* Status bar */}
        <div className="flex justify-between items-center px-3 py-1.5 bg-white text-[8px] text-gray-400 border-b border-gray-50">
          <span className="font-semibold text-gray-600 text-[8px]">9:41</span>
          <span>●●● ▲ ▮▮</span>
        </div>
        {/* Screen */}
        <div className="bg-gradient-to-br from-violet-600 to-blue-500 px-3 py-3">
          <div className="flex items-center gap-1.5 mb-2">
            <Smartphone size={10} className="text-white" />
            <span className="text-white text-[9px] font-bold">StyleGo</span>
          </div>
          <div className="bg-white/20 rounded-lg px-2 py-1.5 mb-2 flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <span className="text-white/80 text-[8px]">Search stylists…</span>
          </div>
        </div>
        <div className="px-3 py-2 space-y-1.5 bg-gray-50">
          {["Sofia M. — Hair & Color", "Carlos R. — Barbershop"].map((name) => (
            <div key={name} className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 shadow-sm">
              <div className="w-5 h-5 rounded-full bg-violet-200 shrink-0" />
              <span className="text-[8px] text-gray-700 font-medium truncate">{name}</span>
            </div>
          ))}
          <button className="w-full mt-1 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 text-white text-[8px] font-bold">
            Book Now →
          </button>
        </div>
      </div>
      {/* Floating badge */}
      <div className="absolute -bottom-2 -right-4 bg-white border border-[#E4E4E7] rounded-xl px-2 py-1 shadow-md flex items-center gap-1">
        <Check size={9} className="text-green-500" />
        <span className="text-[8px] font-bold text-gray-700">Launched</span>
      </div>
    </div>
  );
}

// ── Mini mockup: Dashboard ────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="mb-6 bg-[#F8F5FF] rounded-2xl p-3 border border-violet-100">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <LayoutDashboard size={11} className="text-violet-600" />
          <span className="text-[9px] font-bold text-gray-700">Analytics</span>
        </div>
        <div className="flex gap-1">
          {["#7C3AED","#2563EB","#10B981"].map(c => (
            <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>
      {/* Stat chips */}
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {[{l:"Users",v:"2.4k",t:"text-violet-600"},{l:"Revenue",v:"$12k",t:"text-blue-600"},{l:"Churn",v:"1.2%",t:"text-green-600"}].map(s => (
          <div key={s.l} className="bg-white rounded-lg px-1.5 py-1.5 text-center border border-gray-100">
            <div className={`text-xs font-black ${s.t}`}>{s.v}</div>
            <div className="text-[7px] text-gray-400 font-medium">{s.l}</div>
          </div>
        ))}
      </div>
      {/* Mini bar chart */}
      <div className="bg-white rounded-lg p-2 border border-gray-100">
        <div className="flex items-end gap-0.5 h-8">
          {[40,60,45,80,65,90,75,95,55,100,70,85].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm"
              style={{ height: `${h}%`, background: i === 11 ? "linear-gradient(to top, #7C3AED, #2563EB)" : "#EDE9FE" }} />
          ))}
        </div>
        <div className="flex justify-between text-[7px] text-gray-300 mt-1">
          <span>Jan</span><span>Jun</span><span>Dec</span>
        </div>
      </div>
      <div className="mt-1.5 flex items-center gap-1">
        <TrendingUp size={9} className="text-green-500" />
        <span className="text-[8px] text-green-600 font-semibold">+18% vs last quarter</span>
      </div>
    </div>
  );
}

// ── Mini mockup: AI Chat/Bot ──────────────────────────────────
function AiMockup() {
  const messages = [
    { role: "bot",  text: "Hola 👋 ¿En qué puedo ayudarte hoy?" },
    { role: "user", text: "¿Cuál es el estado de mi pedido #4821?" },
    { role: "bot",  text: "Tu pedido está en camino. Llega el jueves ✅" },
  ];
  return (
    <div className="mb-6 bg-[#F0F4FF] rounded-2xl p-3 border border-blue-100">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-blue-100">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
          <Cpu size={12} className="text-white" />
        </div>
        <div>
          <p className="text-[9px] font-bold text-gray-800">AutoBot AI</p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-[7px] text-gray-400">Online · responding</span>
          </div>
        </div>
        <Zap size={10} className="text-violet-500 ml-auto" />
      </div>
      {/* Messages */}
      <div className="space-y-2 mb-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] px-2.5 py-1.5 rounded-xl text-[8px] font-medium leading-relaxed ${
              m.role === "user"
                ? "bg-gradient-to-r from-violet-600 to-blue-500 text-white rounded-br-none"
                : "bg-white text-gray-700 rounded-bl-none border border-gray-100 shadow-sm"
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      {/* Input */}
      <div className="flex items-center gap-1.5 bg-white rounded-xl px-2 py-1.5 border border-gray-200">
        <MessageSquare size={9} className="text-gray-300" />
        <span className="flex-1 text-[8px] text-gray-300">Escribe un mensaje…</span>
        <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
          <Send size={8} className="text-white" />
        </div>
      </div>
    </div>
  );
}

const cards = [
  { icon: Rocket,          key: "card1", Mockup: MvpMockup },
  { icon: LayoutDashboard, key: "card2", Mockup: DashboardMockup },
  { icon: Cpu,             key: "card3", Mockup: AiMockup },
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      className="py-24 relative"
      style={{ background: "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
            Services
          </span>
          <h2 className="text-4xl font-semibold text-[#09090B]">{t("title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, key, Mockup }, i) => (
            <motion.div
              key={key}
              className="p-6 rounded-2xl bg-white border border-[#E4E4E7] hover:border-[#A1A1AA] hover:shadow-lg hover:scale-[1.01] transition-all duration-200 cursor-default shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Mockup illustration */}
              <Mockup />

              {/* Icon + text */}
              <div className="mt-auto">
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#7C3AED]" />
                </div>
                <h3 className="text-lg font-semibold text-[#09090B] mb-3">
                  {t(`${key}.title` as any)}
                </h3>
                <p className="text-[#52525B] text-sm leading-relaxed">
                  {t(`${key}.body` as any)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
