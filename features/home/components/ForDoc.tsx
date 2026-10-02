"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Check,
  LineChart,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { useTranslations } from "next-intl";

function ForDoc() {
  const t = useTranslations("HomePage");
  const audiences = [
    {
      icon: UserRound,
      title: t("ecosystem.patient.title"),
      description: t("ecosystem.patient.description"),
      points: [
        t("ecosystem.patient.pointOne"),
        t("ecosystem.patient.pointTwo"),
        t("ecosystem.patient.pointThree"),
      ],
      accent: "bg-[var(--success)]/15 text-[var(--success-light)]",
    },
    {
      icon: Stethoscope,
      title: t("ecosystem.doctor.title"),
      description: t("ecosystem.doctor.description"),
      points: [
        t("ecosystem.doctor.pointOne"),
        t("ecosystem.doctor.pointTwo"),
        t("ecosystem.doctor.pointThree"),
      ],
      accent: "bg-[#7dd3fc]/12 text-[#7dd3fc]",
    },
    {
      icon: Building2,
      title: t("ecosystem.hospital.title"),
      description: t("ecosystem.hospital.description"),
      points: [
        t("ecosystem.hospital.pointOne"),
        t("ecosystem.hospital.pointTwo"),
        t("ecosystem.hospital.pointThree"),
      ],
      accent: "bg-[#c4b5fd]/12 text-[#c4b5fd]",
    },
  ];

  return (
    <section
      id="ecosystem"
      className="w-full scroll-mt-24 bg-[var(--bg-color)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-[var(--border-color)] bg-[var(--cart-item-background)] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--main-text-muted-color)]">
            {t("ecosystem.eyebrow")}
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-[var(--main-text-color)] sm:text-5xl lg:text-6xl">
            {t("ecosystem.heading")}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.article
                key={audience.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[24px] border border-[var(--border-color)] bg-[var(--cart-item-background)] p-7 shadow-[0_18px_42px_rgba(0,0,0,0.14)] transition-shadow duration-300 hover:shadow-[0_26px_56px_rgba(0,0,0,0.28)]"
              >
                <div
                  className={`flex size-11 items-center justify-center rounded-2xl ${audience.accent}`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-[var(--main-text-color)]">
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--main-text-muted-color)]">
                  {audience.description}
                </p>
                <ul className="mt-7 space-y-3 border-t border-[var(--border-color)] pt-5">
                  {audience.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-xs text-[var(--main-text-muted-color)]"
                    >
                      <span className="flex size-4 items-center justify-center rounded-full bg-[var(--success)]/15 text-[var(--success-light)]">
                        <Check size={10} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 grid items-center gap-8 rounded-[24px] border border-[var(--border-color)] bg-[var(--cart-item-background)] p-7 lg:grid-cols-[1fr_1.2fr] lg:p-9"
        >
          <div>
            <div className="flex items-center gap-2 text-[var(--success-light)]">
              <LineChart size={20} />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.16em]">
                {t("ecosystem.insightLabel")}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-[var(--main-text-color)] sm:text-3xl">
              {t("ecosystem.insightTitle")}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--main-text-muted-color)]">
              {t("ecosystem.insightDescription")}
            </p>
          </div>

          <div className="relative h-28 overflow-hidden rounded-2xl bg-[#101426] px-5 py-4">
            <svg
              viewBox="0 0 520 120"
              className="h-full w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 91 C55 91 60 91 100 89 S170 83 208 65 S265 57 306 53 S358 35 408 39 S460 24 520 18"
                fill="none"
                stroke="var(--success)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M0 91 C55 91 60 91 100 89 S170 83 208 65 S265 57 306 53 S358 35 408 39 S460 24 520 18 V120 H0 Z"
                fill="url(#ecosystem-fill)"
                opacity="0.2"
              />
              <defs>
                <linearGradient id="ecosystem-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="var(--success)" />
                  <stop offset="1" stopColor="var(--success)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute end-5 top-4 rounded-full bg-[var(--success)]/15 px-2 py-1 text-xs font-bold text-[var(--success-light)]">
              +32%
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ForDoc;
