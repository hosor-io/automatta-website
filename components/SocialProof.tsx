"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function SocialProof() {
  const t = useTranslations("social");

  const badges = [
    { emoji: "🌎", text: t("badge1") },
    { emoji: "⚡", text: t("badge2") },
    { emoji: "✓", text: t("badge3") },
  ];

  return (
    <section className="border-y border-[#E4E4E7] bg-[#F7F7F7] py-12">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.p
          className="text-[#71717A] text-sm mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t("text")}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {badges.map((b, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E4E4E7] bg-white text-sm text-[#52525B]"
            >
              <span>{b.emoji}</span>
              {b.text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
