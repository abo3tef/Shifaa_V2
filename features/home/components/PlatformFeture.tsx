"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BellRing,
  CalendarClock,
  FileHeart,
  Pill,
  Video,
} from "lucide-react";
import { useTranslations } from "next-intl";

function PlatformFeture() {
  const t = useTranslations("HomePage");

  const featureCards = [
    {
      icon: Video,
      title: t("features.telemedicine.title"),
      description: t("features.telemedicine.description"),
      content: (
        <>
          <div className="rounded-xl bg-[var(--bg-color)]/40 px-4 py-3 text-xs font-semibold">
            {t("features.telemedicine.prompt")}
          </div>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-[var(--success)] px-4 py-3 text-xs font-bold text-white">
            <span>{t("features.telemedicine.action")}</span>
            <Video size={15} />
          </div>
        </>
      ),
    },
    {
      icon: Activity,
      title: t("features.monitoring.title"),
      description: t("features.monitoring.description"),
      content: (
        <div className="mt-4 flex h-16 items-end gap-1.5">
          {[32, 48, 38, 64, 46, 70, 54, 78, 62, 84, 72].map((height, index) => (
            <motion.span
              key={index}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className="flex-1 rounded-t-full bg-[var(--success)]/80"
            />
          ))}
        </div>
      ),
    },
    {
      icon: Pill,
      title: t("features.medication.title"),
      description: t("features.medication.description"),
      content: (
        <div className="mt-5">
          <div className="flex items-end justify-between">
            <span className="text-xs text-[var(--main-text-muted-color)]">
              {t("features.medication.progress")}
            </span>
            <strong className="text-3xl text-[var(--main-text-color)]">
              92%
            </strong>
          </div>
          <div className="mt-3 h-2 rounded-full bg-[var(--bg-color)]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "92%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full rounded-full bg-[var(--success)]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="w-full scroll-mt-24 bg-[#151a22] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center text-4xl font-extrabold leading-tight text-[var(--main-text-color)] sm:text-5xl lg:text-6xl"
        >
          {t("features.heading")}
        </motion.h2>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <FeatureCard
            className="md:col-span-8"
            icon={<FileHeart size={20} />}
            title={t("features.records.title")}
            description={t("features.records.description")}
          >
            <div className="mt-8 space-y-1 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-color)]/40 px-5 py-3">
              {[
                [t("features.records.rowOne"), t("features.records.dateOne")],
                [t("features.records.rowTwo"), t("features.records.dateTwo")],
                [
                  t("features.records.rowThree"),
                  t("features.records.dateThree"),
                ],
              ].map(([label, date]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-[var(--border-color)] py-3 text-xs last:border-0"
                >
                  <span className="flex items-center gap-2 font-semibold text-[var(--main-text-color)]">
                    <span className="size-2 rounded-full bg-[var(--success)]" />
                    {label}
                  </span>
                  <span className="text-[var(--main-text-muted-color)]">
                    {date}
                  </span>
                </div>
              ))}
            </div>
          </FeatureCard>

          <FeatureCard
            className="bg-[var(--success)] text-white md:col-span-4"
            icon={<CalendarClock size={20} />}
            title={t("features.appointments.title")}
            description={t("features.appointments.description")}
            green
          >
            <div className="mt-8 space-y-3">
              <Appointment label={t("features.appointments.first")} />
              <Appointment label={t("features.appointments.second")} />
            </div>
          </FeatureCard>

          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <FeatureCard
                key={card.title}
                className="md:col-span-4"
                icon={<Icon size={20} />}
                title={card.title}
                description={card.description}
              >
                {card.content}
              </FeatureCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  className = "",
  icon,
  title,
  description,
  children,
  green = false,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
  green?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -7 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`min-h-64 rounded-[24px] border border-[var(--border-color)] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_54px_rgba(0,0,0,0.24)] ${green ? "border-transparent" : "bg-[var(--cart-item-background)]"} ${className}`}
    >
      <div
        className={`flex size-10 items-center justify-center rounded-xl ${green ? "bg-white/15" : "bg-[var(--success)]/12 text-[var(--success-light)]"}`}
      >
        {icon}
      </div>
      <h3
        className={`mt-5 text-xl font-extrabold ${green ? "text-white" : "text-[var(--main-text-color)]"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-sm leading-6 ${green ? "text-white/80" : "text-[var(--main-text-muted-color)]"}`}
      >
        {description}
      </p>
      {children}
    </motion.article>
  );
}

function Appointment({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/15 px-4 py-3 text-xs font-semibold">
      <span>{label}</span>
      <BellRing size={14} />
    </div>
  );
}

export default PlatformFeture;
