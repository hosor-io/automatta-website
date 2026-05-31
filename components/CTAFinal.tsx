"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  building: string;
  budget: string;
};

export default function CTAFinal({ prefillBuilding, headline, subheadline }: { prefillBuilding?: string; headline?: string; subheadline?: string }) {
  const t = useTranslations("cta");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ defaultValues: { building: prefillBuilding ?? "" } });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
          <h2 className="text-4xl font-semibold text-[#09090B] mb-4">{headline ?? t("headline")}</h2>
          <p className="text-[#52525B] text-sm">{subheadline ?? t("subheadline")}</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
        >
          <input
            {...register("name", { required: true })}
            placeholder={t("name")}
            className={`${inputClass} ${errors.name ? "border-[#EF4444]" : ""}`}
          />
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            type="email"
            placeholder={t("email")}
            className={`${inputClass} ${errors.email ? "border-[#EF4444]" : ""}`}
          />
          <textarea
            id="building-textarea"
            {...register("building", { required: true })}
            placeholder={t("building")}
            rows={4}
            className={`${inputClass} resize-none ${errors.building ? "border-[#EF4444]" : ""}`}
          />
          <select
            {...register("budget")}
            className={`${inputClass} cursor-pointer`}
          >
            {budgetOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>

          {status === "success" && (
            <p className="text-[#10B981] text-sm text-center">{t("success")}</p>
          )}
          {status === "error" && (
            <p className="text-[#EF4444] text-sm text-center">{t("error")}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-xl font-medium text-white transition-all disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)" }}
          >
            {status === "loading" ? "..." : t("submit")}
          </button>

          <p className="text-center text-xs text-[#71717A]">{t("disclaimer")}</p>
        </motion.form>
      </div>
    </section>
  );
}
