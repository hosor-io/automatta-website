"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  Scissors, Wrench, Heart, Truck, UtensilsCrossed,
  ShoppingBasket, Receipt, Users, Store, Brain,
  Dumbbell, GraduationCap, type LucideIcon,
} from "lucide-react";
import { IDEAS, CATEGORIES } from "@/lib/ideas";

// ── Per-idea icon map ────────────────────────────────────────
const IDEA_ICONS: Record<string, LucideIcon> = {
  stylego:    Scissors,
  fixit:      Wrench,
  petcare:    Heart,
  moveit:     Truck,
  tableorder: UtensilsCrossed,
  freshbox:   ShoppingBasket,
  paytrack:   Receipt,
  spliteasy:  Users,
  storedesk:  Store,
  mindspace:  Brain,
  fitcoach:   Dumbbell,
  skillpath:  GraduationCap,
};

// ── Vibrant category badge styles ────────────────────────────
const BADGE: Record<string, { bg: string; text: string }> = {
  "On-demand":      { bg: "#EDE9FE", text: "#6D28D9" },
  "Food & Delivery":{ bg: "#D1FAE5", text: "#065F46" },
  Fintech:          { bg: "#FEF3C7", text: "#92400E" },
  Health:           { bg: "#FFE4E6", text: "#9F1239" },
  Education:        { bg: "#DBEAFE", text: "#1E40AF" },
};

export default function IdeaLab() {
  const t = useTranslations("ideaLab");
  const locale = useLocale();
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? IDEAS : IDEAS.filter((i) => i.category === filter);

  const filterLabels: Record<string, string> = {
    all: t("filterAll"),
    "On-demand": "On-demand",
    "Food & Delivery": "Food & Delivery",
    Fintech: "Fintech",
    Health: "Health",
    Education: "Education",
  };

  return (
    <section id="idea-lab" className="py-24 bg-[#F7F7F7] border-y border-[#E4E4E7]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
            Idea Lab
          </span>
          <h2 className="text-4xl font-semibold text-[#09090B] mb-4">{t("title")}</h2>
          <p className="text-[#52525B] max-w-2xl mx-auto text-sm leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {["all", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === cat
                  ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                  : "border-[#E4E4E7] bg-white text-[#52525B] hover:border-[#A1A1AA] hover:text-[#09090B]"
              }`}
            >
              {filterLabels[cat]}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((idea, i) => {
            const Icon = IDEA_ICONS[idea.slug] ?? Wrench;
            const badge = BADGE[idea.category] ?? { bg: "#EDE9FE", text: "#6D28D9" };

            return (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: Math.min(i * 0.05, 0.3) }}
                className="h-full"
              >
                <Link
                  href={`/${locale}/ideas/${idea.slug}`}
                  className="group relative block rounded-2xl bg-white border border-[#E4E4E7] hover:border-[#7C3AED]/40 hover:shadow-md hover:scale-[1.01] transition-all duration-200 shadow-sm h-full overflow-hidden flex flex-col"
                  style={{ padding: "1.75rem", minHeight: 220 }}
                >
                  {/* Top row: icon box + category badge */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon box */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }}
                    >
                      <Icon size={15} className="text-white" />
                    </div>

                    {/* Category badge */}
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: badge.bg, color: badge.text }}
                    >
                      {idea.category}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-bold text-[#09090B] mb-1.5">{idea.name}</h3>

                  {/* Tagline */}
                  <p className="text-sm text-[#52525B] flex-1 leading-relaxed">
                    {locale === "es" ? idea.taglineEs : idea.taglineEn}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-[#71717A] pt-4 mt-4 border-t border-[#E4E4E7]">
                    <span className="font-medium text-[#09090B]">{idea.price}</span>
                    <span>{idea.weeks} {t("weeks")}</span>
                  </div>

                  <span className="mt-3 text-xs font-semibold text-[#A1A1AA] group-hover:text-[#7C3AED] transition-colors duration-200">
                    {t("viewDetails")} →
                  </span>

                  {/* Hover gradient overlay at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-b-2xl"
                    style={{ background: "linear-gradient(to top, rgba(124,58,237,0.05), transparent)" }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
