"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = ["step1", "step2", "step3", "step4"];
const stepNumbers = ["01", "02", "03", "04"];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-24 bg-[#F7F7F7] border-y border-[#E4E4E7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
            Process
          </span>
          <h2 className="text-4xl font-semibold text-[#09090B]">{t("title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-[-50%] h-px bg-[#E4E4E7]" />
              )}
              <div className="text-3xl font-bold text-[#7C3AED]/30 mb-3">
                {stepNumbers[i]}
              </div>
              <h3 className="text-base font-semibold text-[#09090B] mb-2">
                {t(`${step}.title` as any)}
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                {t(`${step}.body` as any)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
