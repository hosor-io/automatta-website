"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { X, Check, Clock, DollarSign } from "lucide-react";
import { IDEAS, CATEGORIES, CATEGORY_COLORS, type Idea } from "@/lib/ideas";

function IdeaModal({
  idea,
  onClose,
  onBuild,
}: {
  idea: Idea;
  onClose: () => void;
  onBuild: (name: string) => void;
}) {
  const t = useTranslations("ideaLab");
  const locale = useLocale();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          className="relative z-10 bg-white border border-[#E4E4E7] rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#A1A1AA] hover:text-[#09090B] transition-colors"
          >
            <X size={18} />
          </button>

          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3 ${
              CATEGORY_COLORS[idea.category]
            }`}
          >
            {idea.category}
          </span>
          <h3 className="text-2xl font-bold text-[#09090B] mb-1">{idea.name}</h3>
          <p className="text-[#52525B] text-sm mb-5">
            {locale === "es" ? idea.taglineEs : idea.taglineEn}
          </p>

          <div className="flex gap-4 mb-5">
            <div className="flex items-center gap-2 text-sm text-[#52525B]">
              <DollarSign size={14} className="text-[#7C3AED]" />
              <span>
                {t("investment")}: <strong className="text-[#09090B]">{idea.price}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#52525B]">
              <Clock size={14} className="text-[#7C3AED]" />
              <span>
                {t("delivery")}: <strong className="text-[#09090B]">{idea.weeks} {t("weeks")}</strong>
              </span>
            </div>
          </div>

          <div className="mb-5">
            <h4 className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3">
              {t("problemTitle")}
            </h4>
            <p className="text-sm text-[#52525B] leading-relaxed">
              {locale === "es" ? idea.problemEs : idea.problemEn}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3">
              {t("featuresTitle")}
            </h4>
            <ul className="space-y-2">
              {(locale === "es" ? idea.featuresEs : idea.featuresEn).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#52525B]">
                  <Check size={14} className="text-[#10B981] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => {
              onBuild(idea.name);
              onClose();
            }}
            className="w-full py-3 rounded-xl font-medium text-white transition-all"
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
            }}
          >
            {t("buildThis")}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function IdeaLab() {
  const t = useTranslations("ideaLab");
  const locale = useLocale();
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Idea | null>(null);

  const filtered =
    filter === "all" ? IDEAS : IDEAS.filter((i) => i.category === filter);

  const handleBuild = (name: string) => {
    const el = document.getElementById("contact");
    const textarea = document.getElementById("building-textarea") as HTMLTextAreaElement;
    if (textarea) textarea.value = name;
    el?.scrollIntoView({ behavior: "smooth" });
  };

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
              className="p-5 rounded-xl bg-white border border-[#E4E4E7] hover:border-[#A1A1AA] hover:scale-[1.01] transition-all duration-200 cursor-pointer flex flex-col shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
              onClick={() => setSelected(idea)}
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
              <button className="mt-3 text-xs text-[#7C3AED] hover:text-[#6D28D9] font-medium text-left transition-colors">
                {t("viewDetails")} →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <IdeaModal
          idea={selected}
          onClose={() => setSelected(null)}
          onBuild={handleBuild}
        />
      )}
    </section>
  );
}
