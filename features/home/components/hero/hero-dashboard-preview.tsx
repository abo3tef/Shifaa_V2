"use client";

import { motion } from "framer-motion";
import { Activity, Bell, CalendarDays, HeartPulse } from "lucide-react";
import { useTranslations } from "next-intl";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { HEALTH_DATA } from "../../../../data/mockHealthData";
import { MetricCard } from "./metric-card";

export function HeroDashboardPreview() {
  const t = useTranslations("HomePage");

  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-9 w-full max-w-5xl"
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.99, 1.01, 0.99] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-3 -z-10 rounded-[32px] border border-[var(--success)]/15"
      />

      <div className="mx-auto w-full max-w-[700px] rounded-[28px] border border-[var(--border-color)] bg-[var(--cart-item-background)] p-4 text-start shadow-[0_28px_80px_rgba(0,0,0,0.36)] sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-[var(--main-text-muted-color)]">
              {t("dashboard.patient")}
            </p>
            <h2 className="mt-1 text-lg font-bold text-[var(--main-text-color)] sm:text-xl">
              {t("dashboard.patientName")}
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[var(--success)]/20 bg-[var(--success)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--success-light)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--success)] opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-[var(--success)]" />
            </span>
            {t("dashboard.live")}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <MetricCard
            icon={<Activity size={15} />}
            label={t("dashboard.bloodPressure")}
            value="118/76"
          />
          <MetricCard
            icon={<HeartPulse size={15} />}
            label={t("dashboard.heartRate")}
            value="94"
            suffix="bpm"
          />
          <MetricCard
            icon={<HeartPulse size={15} />}
            label={t("dashboard.healthScore")}
            value="92"
            suffix="%"
          />
          <MetricCard
            icon={<Activity size={15} />}
            label={t("dashboard.steps")}
            value="7,842"
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[var(--main-text-color)]">
              {t("dashboard.trend")}
            </p>
            <p className="mt-1 text-xs text-[var(--main-text-muted-color)]">
              {t("dashboard.lastSevenDays")}
            </p>
          </div>
          <span className="rounded-full bg-[var(--success)]/10 px-2.5 py-1 text-xs font-bold text-[var(--success-light)]">
            +18.4%
          </span>
        </div>

        <div className="mt-1 h-32 w-full sm:h-36">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={HEALTH_DATA}
              margin={{ top: 10, right: 4, left: 4, bottom: 0 }}
            >
              <defs>
                <linearGradient id="health-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--success)"
                    stopOpacity={0.35}
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--success)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Tooltip
                cursor={false}
                contentStyle={{
                  background: "var(--cart-item-background)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "10px",
                  color: "var(--main-text-color)",
                  fontSize: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="var(--success)"
                strokeWidth={2.5}
                fill="url(#health-fill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-[var(--border-color)] pt-3 text-xs">
          <span className="text-[var(--main-text-muted-color)]">
            {t("dashboard.status")}
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-[var(--success-light)]">
            <span className="size-1.5 rounded-full bg-[var(--success)]" />
            {t("dashboard.stable")}
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.9 }}
        className="absolute -start-3 bottom-12 hidden w-48 rounded-2xl border border-[var(--border-color)] bg-[#201e3b] p-4 text-start shadow-[0_16px_35px_rgba(0,0,0,0.28)] lg:block"
      >
        <Bell size={16} className="mb-2 text-[var(--success-light)]" />
        <p className="text-[11px] font-bold text-[var(--main-text-color)]">
          {t("dashboard.reminderTitle")}
        </p>
        <p className="mt-1 text-[10px] leading-5 text-[var(--main-text-muted-color)]">
          {t("dashboard.reminderText")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 1.05 }}
        className="absolute -end-3 top-20 hidden w-44 rounded-2xl border border-[var(--border-color)] bg-[#201e3b] p-4 text-start shadow-[0_16px_35px_rgba(0,0,0,0.28)] lg:block"
      >
        <CalendarDays size={16} className="mb-2 text-[var(--success-light)]" />
        <p className="text-[11px] font-bold text-[var(--main-text-color)]">
          {t("dashboard.nextVisit")}
        </p>
        <p className="mt-1 text-[10px] text-[var(--main-text-muted-color)]">
          {t("dashboard.visitTime")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 1.2 }}
        className="absolute -bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[#201e3b] px-4 py-3 text-start shadow-[0_16px_35px_rgba(0,0,0,0.28)] sm:flex"
      >
        <div className="flex size-9 items-center justify-center rounded-xl bg-[var(--success)]/15 text-[var(--success-light)]">
          <HeartPulse size={17} />
        </div>
        <div>
          <p className="text-[10px] text-[var(--main-text-muted-color)]">
            {t("dashboard.aiInsight")}
          </p>
          <p className="text-xs font-bold text-[var(--main-text-color)]">
            {t("dashboard.insightText")}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
