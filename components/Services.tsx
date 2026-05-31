"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Rocket, LayoutDashboard, Cpu } from "lucide-react";

const cards = [
  { icon: Rocket, key: "card1" },
  { icon: LayoutDashboard, key: "card2" },
  { icon: Cpu, key: "card3" },
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 max-w-[1200px] mx-auto px-6">
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
        {cards.map(({ icon: Icon, key }, i) => (
          <motion.div
            key={key}
            className="p-6 rounded-xl bg-white border border-[#E4E4E7] hover:border-[#A1A1AA] hover:scale-[1.01] transition-all duration-200 cursor-default shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4">
              <Icon size={20} className="text-[#7C3AED]" />
            </div>
            <h3 className="text-lg font-semibold text-[#09090B] mb-3">
              {t(`${key}.title` as any)}
            </h3>
            <p className="text-[#52525B] text-sm leading-relaxed">
              {t(`${key}.body` as any)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
