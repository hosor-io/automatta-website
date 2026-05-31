"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, Clock, DollarSign } from "lucide-react";
import type { Idea } from "@/lib/ideas";
import { CATEGORY_COLORS } from "@/lib/ideas";
import { featureCards } from "@/lib/featureCards";
import { mockups } from "@/lib/mockups";
import MobileFrame from "./MobileFrame";
import CTAFinal from "@/components/CTAFinal";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function IdeaPageTemplate({ idea }: { idea: Idea }) {
  const t = useTranslations("ideaPage");
  const locale = useLocale();
  const isEs = locale === "es";

  const tagline = isEs ? idea.taglineEs : idea.taglineEn;
  const problem = isEs ? idea.problemEs : idea.problemEn;
  const mockupLabels = isEs ? idea.mockupLabels.es : idea.mockupLabels.en;
  const cards = featureCards[idea.slug] ?? [];
  const [Screen1, Screen2, Screen3] = mockups[idea.slug];

  const ctaHeadline = t("ctaHeadline").replace("{name}", idea.name);
  const ctaSubheadline = t("ctaSubheadline");

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Back link */}
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-4">
        <Link
          href={`/${locale}#idea-lab`}
          className="inline-flex items-center gap-2 text-sm text-[#52525B] hover:text-[#7C3AED] transition-colors"
        >
          <ArrowLeft size={16} />
          {t("back")}
        </Link>
      </div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-8 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeUp}
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-5 ${CATEGORY_COLORS[idea.category]}`}
          >
            {idea.category}
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-5xl font-bold text-[#09090B] mb-4 leading-tight">
            {idea.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-[#52525B] mb-8">
            {tagline}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center mb-10">
            <div className="flex items-center gap-2 bg-[#F7F7F7] border border-[#E4E4E7] rounded-xl px-4 py-2.5">
              <DollarSign size={16} className="text-[#7C3AED]" />
              <span className="text-sm text-[#09090B] font-medium">{t("investment")}: {idea.price}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F7F7F7] border border-[#E4E4E7] rounded-xl px-4 py-2.5">
              <Clock size={16} className="text-[#7C3AED]" />
              <span className="text-sm text-[#09090B] font-medium">{t("delivery")}: {idea.weeks} {t("weeks")}</span>
            </div>
          </motion.div>
          <motion.button
            variants={fadeUp}
            onClick={scrollToContact}
            className="px-8 py-4 rounded-xl text-white font-medium text-sm transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }}
          >
            {t("buildThis")} →
          </motion.button>
        </motion.div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#F7F7F7] border-y border-[#E4E4E7]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
              {t("problemTitle")}
            </motion.span>
            <motion.p variants={fadeUp} className="text-2xl text-[#09090B] font-medium max-w-2xl leading-relaxed">
              {problem}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
            {t("mockupsTitle")}
          </motion.span>
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8"
          >
            {([Screen1, Screen2, Screen3] as React.FC[]).map((Screen, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center gap-3">
                <MobileFrame>
                  <Screen />
                </MobileFrame>
                <span className="text-sm text-[#52525B] font-medium text-center">{mockupLabels[i]}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#F7F7F7] border-y border-[#E4E4E7]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
              {t("featuresTitle")}
            </motion.span>
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
            >
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white border border-[#E4E4E7] rounded-2xl p-5 flex gap-4"
                  >
                    <div className="mt-0.5 shrink-0 w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center">
                      <Icon size={18} className="text-[#7C3AED]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#09090B] mb-1">
                        {isEs ? card.titleEs : card.titleEn}
                      </p>
                      <p className="text-xs text-[#71717A] leading-relaxed">
                        {isEs ? card.descEs : card.descEn}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTAFinal
        prefillBuilding={idea.name}
        headline={ctaHeadline}
        subheadline={ctaSubheadline}
      />
    </div>
  );
}
