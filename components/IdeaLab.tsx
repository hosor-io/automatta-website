"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { IDEAS, CATEGORIES, CATEGORY_COLORS } from "@/lib/ideas";

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((idea, i) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
            >
              <Link
                href={`/${locale}/ideas/${idea.slug}`}
                className="group block p-5 rounded-xl bg-white border border-[#E4E4E7] hover:border-[#A1A1AA] hover:scale-[1.01] transition-all duration-200 flex flex-col shadow-sm h-full"
              >
                <span
                  className={`self-start inline-block px-2 py-0.5 rounded-full text-xs font-medium border mb-3 ${
                    CATEGORY_COLORS[idea.category]
                  }`}
                >
                  {idea.category}
                </span>
                <h3 className="text-base font-semibold text-[#09090B] mb-1">{idea.name}</h3>
                <p className="text-sm text-[#52525B] mb-4 flex-1">
                  {locale === "es" ? idea.taglineEs : idea.taglineEn}
                </p>
                <div className="flex items-center justify-between text-xs text-[#71717A] pt-3 border-t border-[#E4E4E7]">
                  <span>{idea.price}</span>
                  <span>{idea.weeks} {t("weeks")}</span>
                </div>
                <span className="mt-3 text-xs text-[#7C3AED] group-hover:text-[#6D28D9] font-medium transition-colors">
                  {t("viewDetails")} →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
