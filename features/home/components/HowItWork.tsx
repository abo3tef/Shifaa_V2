"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Activity, Brain, ClipboardPlus, Stethoscope } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

function HowItWork() {
  const t = useTranslations("HomePage");
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Convert the section scroll progress into the currently visible care step.
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActiveStep(Math.min(3, Math.floor(progress * 4)));
  });

  const steps = [
    {
      number: "01",
      title: t("howItWorks.steps.profile.title"),
      description: t("howItWorks.steps.profile.description"),
      detail: t("howItWorks.steps.profile.detail"),
      icon: ClipboardPlus,
      color: "text-[var(--success-light)]",
    },
    {
      number: "02",
      title: t("howItWorks.steps.doctor.title"),
      description: t("howItWorks.steps.doctor.description"),
      detail: t("howItWorks.steps.doctor.detail"),
      icon: Stethoscope,
      color: "text-[#7dd3fc]",
    },
    {
      number: "03",
      title: t("howItWorks.steps.progress.title"),
      description: t("howItWorks.steps.progress.description"),
      detail: t("howItWorks.steps.progress.detail"),
      icon: Activity,
      color: "text-[#c4b5fd]",
    },
    {
      number: "04",
      title: t("howItWorks.steps.insights.title"),
      description: t("howItWorks.steps.insights.description"),
      detail: t("howItWorks.steps.insights.detail"),
      icon: Brain,
      color: "text-[#f0abfc]",
    },
  ];
  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] w-full bg-[#080d16]"
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden px-5 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--cart-item-background)] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--main-text-muted-color)]"
            >
              <span className="size-1.5 rounded-full bg-[var(--success)]" />
              {t("howItWorks.eyebrow")}
            </motion.span>

            <div className="mt-8 border-s border-[var(--border-color)]">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <motion.div
                    key={step.number}
                    animate={{ opacity: isActive ? 1 : 0.28 }}
                    transition={{ duration: 0.35 }}
                    className={`relative border-s-2 py-5 ps-5 transition-colors duration-300 ${isActive ? "border-[var(--success)]" : "border-transparent"}`}
                  >
                    <span
                      className={`font-mono text-xs tracking-[0.18em] ${isActive ? "text-[var(--success-light)]" : "text-[var(--main-text-muted-color)]"}`}
                    >
                      {step.number}
                    </span>
                    <h2 className="mt-3 text-2xl font-extrabold text-[var(--main-text-color)] sm:text-3xl">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--main-text-muted-color)]">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            layout
            className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-[#121c32] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:min-h-[470px] sm:p-8"
          >
            <div className="absolute -end-20 -top-20 size-64 rounded-full bg-[var(--success)]/10 blur-[90px]" />
            <div className="relative flex h-full min-h-[320px] flex-col justify-center gap-4 sm:min-h-[400px]">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-7"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl bg-black/20 ${active.color}`}
                  >
                    <ActiveIcon size={24} />
                  </span>
                  <span className="font-mono text-xs tracking-[0.18em] text-[var(--main-text-muted-color)]">
                    {active.number} / 04
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--main-text-muted-color)]">
                    {t("howItWorks.previewLabel")}
                  </p>
                  <h3 className="mt-3 text-3xl font-extrabold text-[var(--main-text-color)] sm:text-5xl">
                    {active.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-[var(--dark-panel-muted)]">
                    {active.detail}
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    t("howItWorks.preview.record"),
                    t("howItWorks.preview.secure"),
                    t("howItWorks.preview.updated"),
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/15 px-4 py-3 text-sm font-semibold text-[var(--main-text-color)]"
                    >
                      <span
                        className={`size-2 rounded-full ${index === activeStep ? "bg-[var(--success)]" : "bg-[#4b5563]"}`}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
