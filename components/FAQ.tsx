"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plus, Minus } from "lucide-react";

const QA_KEYS = ["1", "2", "3", "4", "5", "6"] as const;

export default function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#F7F7F7] border-y border-[#E4E4E7]">
      <div className="max-w-[720px] mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
            FAQ
          </span>
          <h2 className="text-4xl font-semibold text-[#09090B]">{t("title")}</h2>
        </motion.div>

        <div className="space-y-3">
          {QA_KEYS.map((n, i) => (
            <motion.div
              key={n}
              className="border border-[#E4E4E7] rounded-xl overflow-hidden bg-white"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#F7F7F7] transition-colors"
                onClick={() => setOpen(open === n ? null : n)}
              >
                <span className="text-sm font-medium text-[#09090B] pr-4">
                  {t(`q${n}` as any)}
                </span>
                {open === n ? (
                  <Minus size={16} className="text-[#7C3AED] shrink-0" />
                ) : (
                  <Plus size={16} className="text-[#71717A] shrink-0" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {open === n && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-[#52525B] leading-relaxed">
                      {t(`a${n}` as any)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
