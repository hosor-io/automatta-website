"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

const cards = [
  { key: "card1", popular: false },
  { key: "card2", popular: true },
  { key: "card3", popular: false },
];

export default function Pricing() {
  const t = useTranslations("pricing");

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
            Pricing
          </span>
          <h2 className="text-4xl font-semibold text-[#09090B] mb-4">{t("title")}</h2>
          <p className="text-[#52525B] max-w-xl mx-auto text-sm">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {cards.map(({ key, popular }, i) => (
            <motion.div
              key={key}
              className={`p-6 rounded-xl border transition-all duration-200 ${
                popular
                  ? "bg-white border-[#7C3AED] relative shadow-lg shadow-purple-100"
                  : "bg-white border-[#E4E4E7] shadow-sm"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              {popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-[#7C3AED] text-white whitespace-nowrap">
                  ⭐ {t("mostPopular")}
                </span>
              )}

              <h3 className="text-xl font-semibold text-[#09090B] mb-1">
                {t(`${key}.title` as any)}
              </h3>
              <div className="text-3xl font-bold text-[#09090B] mb-2">
                {t(`${key}.price` as any)}
              </div>
              <p className="text-sm text-[#52525B] mb-6">
                {t(`${key}.description` as any)}
              </p>

              <div className="mb-6">
                <p className="text-xs font-medium uppercase tracking-widest text-[#71717A] mb-3">
                  {t("includes")}
                </p>
                <ul className="space-y-2">
                  {(["f1", "f2", "f3", "f4"] as const).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#52525B]">
                      <Check size={14} className="text-[#10B981] shrink-0" />
                      {t(`${key}.${f}` as any)}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className={`w-full py-3 rounded-xl font-medium text-sm transition-all ${
                  popular
                    ? "text-white"
                    : "border border-[#E4E4E7] hover:border-[#A1A1AA] text-[#09090B]"
                }`}
                style={
                  popular
                    ? { background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }
                    : {}
                }
              >
                {key === "card3" ? t("contactUs") : t("getStarted")}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
