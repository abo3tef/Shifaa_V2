"use client";

import { Link } from "@/i18n/navigation";
import { useStore } from "@/features/auth/store/auth.store";
import { useTranslations } from "next-intl";
import {
  FiActivity,
  FiBell,
  FiCalendar,
  FiChevronLeft,
  FiClipboard,
  FiHome,
  FiMessageCircle,
  FiPlus,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

const statCards = [
  {
    key: "todayPatients",
    value: "12",
    detail: "patientsDetail",
    points: "0,32 38,17 75,26 112,8 151,20 188,29 226,16",
  },
  {
    key: "earlyAlerts",
    value: "3",
    detail: "alertsDetail",
    points: "0,32 38,24 75,32 112,10 151,26 188,19 226,19",
  },
  {
    key: "remoteVisits",
    value: "4",
    detail: "remoteDetail",
    points: "0,32 38,23 75,14 112,24 151,8 188,16 226,16",
  },
  {
    key: "adherence",
    value: "87%",
    detail: "adherenceDetail",
    points: "0,32 38,27 75,30 112,18 151,14 188,9 226,5",
  },
];

const appointments = [
  { name: "Sarah Ahmed", detail: "sarahDetail", time: "10:30", status: "low" },
  { name: "Khaled Ali", detail: "khaledDetail", time: "11:15", status: "high" },
  {
    name: "Mona Hassan",
    detail: "monaDetail",
    time: "12:00",
    status: "medium",
  },
];

const alerts = [
  { key: "alertOne", severity: "high" },
  { key: "alertTwo", severity: "medium" },
  { key: "alertThree", severity: "low" },
];

const weekly = [
  { day: "sun", value: 52 },
  { day: "mon", value: 76 },
  { day: "tue", value: 100 },
  { day: "wed", value: 84 },
  { day: "thu", value: 100 },
  { day: "fri", value: 70 },
  { day: "sat", value: 92 },
];

export function PatientDashboard() {
  const t = useTranslations("Dashboard.patient");
  const user = useStore((state) => state.user);
  const firstName = user?.fullName?.trim().split(/\s+/)[0] || t("fallbackName");

  return (
    <main
      aria-label={t("label")}
      dir="auto"
      className="min-h-screen bg-[#0e0d18] text-[var(--main-text-color)]"
    >
      <div className="flex min-h-screen">
        <aside className="hidden w-[248px] shrink-0 flex-col border-e border-[var(--border-color)] bg-[#171628] px-4 py-6 lg:flex">
          <Link
            href="/"
            className="flex items-center justify-between px-3 text-xl font-extrabold"
          >
            <span>{t("brand")}</span>
            <span className="grid size-8 place-items-center rounded-xl bg-[var(--success)] text-white">
              <FiPlus />
            </span>
          </Link>
          <nav className="mt-8 space-y-2" aria-label={t("navigation")}>
            {[
              { href: "#overview", icon: FiHome, label: "overview" },
              {
                href: "#appointments",
                icon: FiCalendar,
                label: "appointmentsNav",
              },
              { href: "#alerts", icon: FiBell, label: "alertsNav" },
              { href: "#records", icon: FiClipboard, label: "recordsNav" },
            ].map(({ href, icon: Icon, label }, index) => (
              <a
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${index === 0 ? "bg-[#24213f] font-bold text-[var(--success)]" : "text-[var(--main-text-muted-color)] hover:bg-[#201e36]"}`}
              >
                <Icon size={17} />
                {t(label)}
                {index === 0 && (
                  <span className="ms-auto size-2 rounded-full bg-[var(--success)]" />
                )}
              </a>
            ))}
          </nav>
          <div className="mt-auto rounded-2xl bg-[#0e0d18] p-4">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-[var(--success)] to-emerald-200 font-bold text-white">
                {firstName.charAt(0)}
              </span>
              <span className="min-w-0">
                <b className="block truncate text-sm">{firstName}</b>
                <small className="text-[var(--main-text-muted-color)]">
                  {t("patientRole")}
                </small>
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-[var(--main-text-muted-color)]">
              <FiShield className="text-[var(--success-light)]" />
              {t("privacyNote")}
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1 px-4 pb-8 pt-6 sm:px-6 lg:px-8">
          <section id="overview" className="mx-auto max-w-[1500px]">
            <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="order-2 lg:order-1 flex gap-2">
                <button className="rounded-full border border-[var(--border-color)] px-5 py-2.5 text-sm font-semibold hover:border-[var(--success)]">
                  {t("allPatients")}
                </button>
                <a
                  href="#appointments"
                  className="rounded-full bg-[var(--success)] px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-600"
                >
                  {t("bookAppointment")}
                </a>
              </div>
              <div className="order-1 w-full text-end lg:order-2 lg:w-auto">
                <p className="text-sm text-[var(--main-text-muted-color)]">
                  {t("welcome")}
                </p>
                <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">
                  {t("greeting", { name: firstName })}
                </h1>
                <p className="mt-1 text-sm text-[var(--main-text-muted-color)]">
                  {t("summary")}
                </p>
              </div>
            </header>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {statCards.map((stat) => (
                <article
                  key={stat.key}
                  className="rounded-3xl border border-[var(--border-color)] bg-[#171628] p-4 sm:p-5"
                >
                  <p className="text-sm text-[var(--main-text-muted-color)]">
                    {t(stat.key)}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <strong className="text-3xl font-extrabold">
                      {stat.value}
                    </strong>
                    <span className="text-xs text-[var(--main-text-muted-color)]">
                      {t(stat.detail)}
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 226 36"
                    preserveAspectRatio="none"
                    className="mt-3 h-8 w-full"
                    aria-hidden="true"
                  >
                    <polyline
                      points={stat.points}
                      fill="none"
                      stroke="var(--success)"
                      strokeWidth="2"
                    />
                  </svg>
                </article>
              ))}
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,1fr)]">
              <section
                id="records"
                className="rounded-3xl border border-[var(--border-color)] bg-[#171628] p-4 sm:p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold">{t("healthProfile")}</h2>
                    <p className="mt-1 text-sm text-[var(--main-text-muted-color)]">
                      {t("profileDetails")}
                    </p>
                  </div>
                  <button className="rounded-full bg-[var(--success)] px-4 py-2 text-sm font-bold text-white">
                    <FiMessageCircle className="me-2 inline" />
                    {t("contactCareTeam")}
                  </button>
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {[
                    ["pulse", "72"],
                    ["bloodPressure", "118/76"],
                    ["glucose", "94"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-[#0e0d18] p-4">
                      <p className="text-sm text-[var(--main-text-muted-color)]">
                        {t(label)}
                      </p>
                      <p className="mt-1 text-2xl font-extrabold">
                        {value}
                        <span className="ms-1 text-xs font-medium text-[var(--main-text-muted-color)]">
                          {label === "pulse"
                            ? t("bpm")
                            : label === "glucose"
                              ? t("mgdl")
                              : ""}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-2xl bg-[#24213f] p-4">
                  <p className="font-bold text-[var(--success-light)]">
                    {t("healthSummaryTitle")}
                  </p>
                  <p className="mt-1 text-sm leading-6">
                    {t("healthSummaryText")}
                  </p>
                </div>
                <div className="mt-2 rounded-2xl bg-[#382b21] p-4">
                  <p className="font-bold text-amber-400">{t("riskTitle")}</p>
                  <p className="mt-1 text-sm leading-6">{t("riskText")}</p>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-2 font-bold">{t("timeline")}</h3>
                    {[
                      ["a1c", "march"],
                      ["followup", "january"],
                      ["diagnosis", "october"],
                    ].map(([event, date]) => (
                      <div
                        key={event}
                        className="flex items-center justify-between border-b border-[var(--border-color)] py-3 text-sm"
                      >
                        <span>
                          <i className="me-2 inline-block size-2 rounded-full bg-[var(--success)]" />
                          {t(event)}
                        </span>
                        <span className="text-xs text-[var(--main-text-muted-color)]">
                          {t(date)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold">{t("medications")}</h3>
                    {[
                      ["metformin", "twiceDaily"],
                      ["atorvastatin", "atNight"],
                    ].map(([medicine, frequency]) => (
                      <div
                        key={medicine}
                        className="flex items-center justify-between border-b border-[var(--border-color)] py-3 text-sm"
                      >
                        <span>{t(medicine)}</span>
                        <span className="text-xs text-[var(--main-text-muted-color)]">
                          {t(frequency)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section
                id="appointments"
                className="rounded-3xl border border-[var(--border-color)] bg-[#171628] p-4 sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    {t("todayAppointments")}
                  </h2>
                  <span className="text-xs text-[var(--main-text-muted-color)]">
                    {t("tapForDetails")}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  {appointments.map((item) => (
                    <article
                      key={item.name}
                      className="flex items-center gap-3 rounded-2xl bg-[#0e0d18] p-3"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--success)] to-emerald-200 font-bold text-white">
                        {item.name[0]}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold">
                          {t(
                            item.name === "Sarah Ahmed"
                              ? "sarah"
                              : item.name === "Khaled Ali"
                                ? "khaled"
                                : "mona",
                          )}
                        </p>
                        <p className="truncate text-xs text-[var(--main-text-muted-color)]">
                          {item.time} · {t(item.detail)}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${item.status === "high" ? "bg-rose-500/15 text-rose-400" : item.status === "medium" ? "bg-amber-500/15 text-amber-400" : "bg-[var(--success)]/15 text-[var(--success-light)]"}`}
                      >
                        {t(item.status)}
                      </span>
                    </article>
                  ))}
                </div>
                <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
                  <div className="rounded-2xl border border-[var(--border-color)] p-4">
                    <div className="flex justify-between">
                      <h3 className="font-bold">{t("weeklyPerformance")}</h3>
                      <span className="text-xs text-[var(--main-text-muted-color)]">
                        {t("appointmentsLabel")}
                      </span>
                    </div>
                    <div className="mt-4 flex h-28 items-end justify-between gap-2">
                      {weekly.map(({ day, value }, index) => (
                        <div
                          key={day}
                          className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                        >
                          <div
                            className={`w-full rounded-t-lg ${index === 3 ? "bg-[var(--success)]" : "bg-emerald-200"}`}
                            style={{ height: `${value}%` }}
                          />
                          <span className="text-[10px] text-[var(--main-text-muted-color)]">
                            {t(day)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 rounded-2xl border border-[var(--border-color)] p-4">
                    <div
                      className="grid size-24 place-items-center rounded-full"
                      style={{
                        background:
                          "conic-gradient(var(--success) 0 87%, #26243d 87% 100%)",
                      }}
                    >
                      <div className="grid size-[74px] place-items-center rounded-full bg-[#171628] text-xl font-extrabold">
                        87%
                      </div>
                    </div>
                    <p className="max-w-36 text-sm leading-6 text-[var(--main-text-muted-color)]">
                      {t("adherenceCaption")}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <section
              id="alerts"
              className="mt-4 rounded-3xl border border-[var(--border-color)] bg-[#171628] p-4 sm:p-5"
            >
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-bold">{t("earlyAlerts")}</h2>
                <span className="text-xs text-[var(--main-text-muted-color)]">
                  {t("aiAnalysis")}
                </span>
              </div>
              <div className="divide-y divide-[var(--border-color)]">
                {alerts.map((alert) => (
                  <div
                    key={alert.key}
                    className="flex flex-wrap items-center justify-between gap-3 py-3"
                  >
                    <p className="text-sm">{t(alert.key)}</p>
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${alert.severity === "high" ? "bg-rose-500/15 text-rose-400" : alert.severity === "medium" ? "bg-amber-500/15 text-amber-400" : "bg-[var(--success)]/15 text-[var(--success-light)]"}`}
                      >
                        {t(alert.severity)}
                      </span>
                      <button className="rounded-full border border-[var(--border-color)] px-4 py-1.5 text-xs font-semibold hover:border-[var(--success)]">
                        {t("review")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <div className="mt-4 flex items-center justify-end gap-2 text-xs text-[var(--main-text-muted-color)]">
              <FiTrendingUp className="text-[var(--success)]" />
              {t("sampleDataNote")}
              <FiChevronLeft className="rtl:rotate-0 ltr:rotate-180" />
              <FiActivity className="sr-only" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
