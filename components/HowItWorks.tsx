"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageCircle, FileText, Code2, Rocket, type LucideIcon } from "lucide-react";

const STEPS = [
  { key: "step1", num: "01", Icon: MessageCircle, side: "left"  },
  { key: "step2", num: "02", Icon: FileText,      side: "right" },
  { key: "step3", num: "03", Icon: Code2,         side: "left"  },
  { key: "step4", num: "04", Icon: Rocket,        side: "right" },
] as const;

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });

  // Line draws from 0 → 1 as user scrolls through section
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 bg-[#F7F7F7] border-y border-[#E4E4E7]">
      <div className="max-w-[900px] mx-auto px-6">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
            Process
          </span>
          <h2 className="text-4xl font-semibold text-[#09090B]">{t("title")}</h2>
        </motion.div>

        {/* ── Timeline ───────────────────────────────── */}
        <div ref={containerRef} className="relative">

          {/* ── Center vertical line (desktop) ── */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
            style={{ width: 2, zIndex: 0 }}
          >
            {/* Track (background dashes) */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "repeating-linear-gradient(to bottom, #D4D4D8 0px, #D4D4D8 6px, transparent 6px, transparent 14px)",
              }}
            />
            {/* Animated fill */}
            <motion.div
              className="absolute top-0 left-0 w-full origin-top"
              style={{
                scaleY: lineScaleY,
                backgroundImage: "repeating-linear-gradient(to bottom, #7C3AED 0px, #7C3AED 6px, transparent 6px, transparent 14px)",
                height: "100%",
              }}
            />
          </div>

          {/* ── Left timeline line (mobile) ── */}
          <div
            className="md:hidden absolute left-5 top-0 bottom-0"
            style={{ width: 2, zIndex: 0 }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "repeating-linear-gradient(to bottom, #D4D4D8 0px, #D4D4D8 6px, transparent 6px, transparent 14px)",
              }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full origin-top"
              style={{
                scaleY: lineScaleY,
                backgroundImage: "repeating-linear-gradient(to bottom, #7C3AED 0px, #7C3AED 6px, transparent 6px, transparent 14px)",
                height: "100%",
              }}
            />
          </div>

          {/* ── Steps ── */}
          <div className="flex flex-col gap-12 md:gap-16">
            {STEPS.map(({ key, num, Icon, side }, i) => {
              const isLeft = side === "left";
              return (
                <motion.div
                  key={key}
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* ── Node on center line (desktop) ── */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10 shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
                      boxShadow: "0 0 0 4px #F7F7F7, 0 0 0 6px #7C3AED33",
                    }}
                  >
                    <span className="text-white text-[11px] font-black">{num}</span>
                  </div>

                  {/* ── Node on left line (mobile) ── */}
                  <div
                    className="md:hidden flex absolute left-5 -translate-x-1/2 w-8 h-8 rounded-full items-center justify-center z-10 shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
                      boxShadow: "0 0 0 3px #F7F7F7, 0 0 0 5px #7C3AED33",
                    }}
                  >
                    <span className="text-white text-[10px] font-black">{num}</span>
                  </div>

                  {/* ── Card grid (desktop zigzag) ── */}
                  <div className="w-full hidden md:grid grid-cols-2 gap-0">
                    {/* Left slot */}
                    <div className={`pr-12 ${isLeft ? "block" : ""}`}>
                      {isLeft && <StepCard num={num} Icon={Icon} title={t(`${key}.title` as any)} body={t(`${key}.body` as any)} align="right" />}
                    </div>
                    {/* Right slot */}
                    <div className={`pl-12 ${!isLeft ? "block" : ""}`}>
                      {!isLeft && <StepCard num={num} Icon={Icon} title={t(`${key}.title` as any)} body={t(`${key}.body` as any)} align="left" />}
                    </div>
                  </div>

                  {/* ── Card (mobile) ── */}
                  <div className="md:hidden pl-14 w-full">
                    <StepCard num={num} Icon={Icon} title={t(`${key}.title` as any)} body={t(`${key}.body` as any)} align="left" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  num,
  Icon,
  title,
  body,
  align,
}: {
  num: string;
  Icon: LucideIcon;
  title: string;
  body: string;
  align: "left" | "right";
}) {
  return (
    <motion.div
      className="group relative rounded-2xl border border-[#E4E4E7] bg-white p-6 cursor-default shadow-sm"
      whileHover={{ scale: 1.02, borderColor: "#7C3AED" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{ textAlign: align }}
    >
      {/* Subtle top-left glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
      />

      {/* Step number */}
      <span
        className="block text-4xl font-black mb-3 leading-none"
        style={{
          background: "linear-gradient(135deg, #7C3AED33 0%, #2563EB22 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {num}
      </span>

      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${align === "right" ? "ml-auto" : ""}`}
        style={{ background: "linear-gradient(135deg, #7C3AED1A 0%, #2563EB1A 100%)" }}
      >
        <Icon size={20} className="text-[#7C3AED]" />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-[#09090B] mb-2">{title}</h3>

      {/* Body */}
      <p className="text-sm text-[#52525B] leading-relaxed">{body}</p>
    </motion.div>
  );
}
