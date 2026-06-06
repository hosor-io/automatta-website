"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageCircle, FileText, Code2, Rocket, type LucideIcon } from "lucide-react";

const STEPS: { key: string; num: string; Icon: LucideIcon }[] = [
  { key: "step1", num: "01", Icon: MessageCircle },
  { key: "step2", num: "02", Icon: FileText },
  { key: "step3", num: "03", Icon: Code2 },
  { key: "step4", num: "04", Icon: Rocket },
];

const Arrow = ({ dir }: { dir: "right" | "down" }) =>
  dir === "right" ? (
    <div className="hidden md:flex items-center justify-center text-[#7C3AED] font-bold text-lg select-none">
      →
    </div>
  ) : (
    <div className="hidden md:flex col-start-3 row-start-1 items-center justify-center text-[#7C3AED] font-bold text-lg select-none self-center">
      ↓
    </div>
  );

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-24 bg-[#F7F7F7] border-y border-[#E4E4E7]">
      <div className="max-w-[900px] mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
            Process
          </span>
          <h2 className="text-4xl font-semibold text-[#09090B]">{t("title")}</h2>
        </motion.div>

        {/* ── Desktop: 2×2 grid with arrows ── */}
        {/*
          Grid columns: card | arrow | card | down-arrow
          We use a 5-column grid: [card] [→] [card] [↓-spacer]
          Row 1: 01, →, 02, ↓
          Row 2: 03, →, 04
        */}
        <div className="hidden md:grid gap-y-4" style={{ gridTemplateColumns: "1fr 40px 1fr 40px" }}>

          {/* Row 1 */}
          <StepCard step={STEPS[0]} title={t("step1.title" as any)} body={t("step1.body" as any)} delay={0} />

          {/* → between 01 and 02 */}
          <div className="flex items-center justify-center text-[#7C3AED] text-xl font-bold select-none">→</div>

          <StepCard step={STEPS[1]} title={t("step2.title" as any)} body={t("step2.body" as any)} delay={0.1} />

          {/* ↓ on far right spanning both rows */}
          <div className="row-span-2 flex items-center justify-center">
            <div className="flex flex-col items-center gap-1 text-[#7C3AED]">
              <div className="w-px flex-1 bg-[#7C3AED]/30" style={{ minHeight: 32 }} />
              <span className="text-xl font-bold select-none leading-none">↓</span>
              <div className="w-px flex-1 bg-[#7C3AED]/30" style={{ minHeight: 32 }} />
            </div>
          </div>

          {/* Gap row */}
          <div />
          <div />
          <div />

          {/* Row 2 */}
          <StepCard step={STEPS[2]} title={t("step3.title" as any)} body={t("step3.body" as any)} delay={0.2} />

          <div className="flex items-center justify-center text-[#7C3AED] text-xl font-bold select-none">→</div>

          <StepCard step={STEPS[3]} title={t("step4.title" as any)} body={t("step4.body" as any)} delay={0.3} />
        </div>

        {/* ── Mobile: single column ── */}
        <div className="md:hidden flex flex-col gap-4">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.key}
              step={step}
              title={t(`${step.key}.title` as any)}
              body={t(`${step.key}.body` as any)}
              delay={i * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function StepCard({
  step,
  title,
  body,
  delay,
}: {
  step: { key: string; num: string; Icon: LucideIcon };
  title: string;
  body: string;
  delay: number;
}) {
  const { num, Icon } = step;
  return (
    <motion.div
      className="group relative bg-white rounded-2xl p-6 shadow-sm cursor-default overflow-hidden"
      style={{ borderLeft: "3px solid #7C3AED" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ backgroundColor: "#FAFAFA", borderColor: "#6D28D9" }}
    >
      {/* Subtle inner glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(124,58,237,0.05) 0%, transparent 60%)" }}
      />

      {/* Top row: number left, icon right */}
      <div className="flex items-start justify-between mb-4">
        <span
          className="text-3xl font-black leading-none"
          style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {num}
        </span>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg, #7C3AED15, #2563EB15)" }}
        >
          <Icon size={18} className="text-[#7C3AED]" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-[#09090B] mb-2">{title}</h3>

      {/* Body */}
      <p className="text-sm text-[#52525B] leading-relaxed">{body}</p>
    </motion.div>
  );
}
