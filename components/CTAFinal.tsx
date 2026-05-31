"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useForm, ValidationError } from "@formspree/react";

export default function CTAFinal({
  prefillBuilding,
  headline,
  subheadline,
}: {
  prefillBuilding?: string;
  headline?: string;
  subheadline?: string;
}) {
  const t = useTranslations("cta");
  const [state, handleSubmit] = useForm("mdajvqod");

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white border border-[#E4E4E7] text-[#09090B] placeholder-[#A1A1AA] text-sm focus:outline-none focus:border-[#7C3AED] transition-colors";

  const budgetOptions = [
    { value: "", label: t("budget") },
    { value: "under5k", label: t("budgetOpt1") },
    { value: "5k-10k", label: t("budgetOpt2") },
    { value: "10k-20k", label: t("budgetOpt3") },
    { value: "20k+", label: t("budgetOpt4") },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[560px] mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[#7C3AED] mb-3 block">
            Get started
          </span>
          <h2 className="text-4xl font-semibold text-[#09090B] mb-4">
            {headline ?? t("headline")}
          </h2>
          <p className="text-[#52525B] text-sm">{subheadline ?? t("subheadline")}</p>
        </motion.div>

        {state.succeeded ? (
          <motion.p
            className="text-center text-[#10B981] text-sm font-medium py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {t("success")}
          </motion.p>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
          >
            <div>
              <input
                name="name"
                placeholder={t("name")}
                required
                className={inputClass}
              />
              <ValidationError field="name" errors={state.errors} className="text-[#EF4444] text-xs mt-1" />
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder={t("email")}
                required
                className={inputClass}
              />
              <ValidationError field="email" errors={state.errors} className="text-[#EF4444] text-xs mt-1" />
            </div>

            <div>
              <textarea
                id="building-textarea"
                name="building"
                placeholder={t("building")}
                rows={4}
                required
                defaultValue={prefillBuilding ?? ""}
                className={`${inputClass} resize-none`}
              />
              <ValidationError field="building" errors={state.errors} className="text-[#EF4444] text-xs mt-1" />
            </div>

            <select name="budget" className={`${inputClass} cursor-pointer`}>
              {budgetOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>

            <ValidationError errors={state.errors} className="text-[#EF4444] text-xs text-center" />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-4 rounded-xl font-medium text-white transition-all disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }}
            >
              {state.submitting ? "..." : t("submit")}
            </button>

            {/* Honeypot — hidden from humans, catches bots */}
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <p className="text-center text-xs text-[#71717A]">{t("disclaimer")}</p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
