"use client";

import { motion } from "framer-motion";
import { Activity, Send, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

function AiSection() {
  const t = useTranslations("HomePage");

  return (
    <section className="w-full bg-[var(--bg-color)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-5xl overflow-hidden rounded-[34px] border border-[var(--success)]/20 bg-[#062b21] p-5 shadow-[0_28px_80px_rgba(15,169,104,0.12)] sm:p-8 lg:p-12"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--success-light)]/20 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--success-light)]">
            <span className="size-1.5 rounded-full bg-[var(--success-light)]" />
            {t("ai.eyebrow")}
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("ai.heading")}
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="ms-auto max-w-xl rounded-2xl bg-white/10 px-5 py-3 text-end text-sm text-white/90"
          >
            {t("ai.question")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl rounded-2xl bg-white p-5 text-start text-sm leading-7 text-[#17352d] shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="mb-2 flex items-center gap-2 font-bold text-[var(--success)]">
              <Sparkles size={16} />
              {t("ai.summaryTitle")}
            </div>
            {t("ai.summary")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="ms-auto max-w-xl rounded-2xl bg-white/10 px-5 py-3 text-end text-sm text-white/90"
          >
            {t("ai.followUpQuestion")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-xl rounded-2xl bg-white p-5 text-start text-sm leading-7 text-[#17352d] shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="mb-2 flex items-center gap-2 font-bold text-[var(--success)]">
              <Activity size={16} />
              {t("ai.alertTitle")}
            </div>
            {t("ai.alertText")}
          </motion.div>
        </div>

        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2">
          {["medication", "riskAnalysis", "smartAssistant", "followUp"].map(
            (key) => (
              <span
                key={key}
                className="rounded-full border border-white/25 px-3 py-1.5 text-xs font-semibold text-white/85"
              >
                {t(`ai.chips.${key}`)}
              </span>
            ),
          )}
        </div>

        <div className="mx-auto mt-7 flex max-w-2xl items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-xs text-white/60">
          <span className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[var(--success-light)]" />
            {t("ai.privacy")}
          </span>
          <Send size={15} className="text-[var(--success-light)]" />
        </div>
      </motion.div>
    </section>
  );
}

export default AiSection;
