"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7C3AED 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest border border-[#E4E4E7] text-[#52525B] mb-6 bg-white/80">
            MVP Development · Web & Mobile · AI Automations
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
          style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {t("headline")}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#52525B] max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {t("subheadline")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-4 rounded-xl font-medium text-white transition-all"
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
            }}
          >
            {t("ctaPrimary")}
          </button>
          <button
            onClick={() => scrollTo("idea-lab")}
            className="px-8 py-4 rounded-xl font-medium text-[#09090B] border border-[#E4E4E7] hover:border-[#A1A1AA] transition-colors bg-white"
          >
            {t("ctaSecondary")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
