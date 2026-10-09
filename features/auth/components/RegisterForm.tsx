"use client";

import {
  FiActivity,
  FiArrowRight,
  FiCalendar,
  FiShield,
  FiUser,
} from "react-icons/fi";
import { useTranslations } from "next-intl";
import { PhoneInput } from "react-international-phone";
import { useState } from "react";
import { Link } from "../../../i18n/navigation";
import { Button } from "../../../components/ui/button";
import GoogleButton from "../../../components/ui/google-button";
import Image from "next/image";

function RegisterForm() {
  const t = useTranslations("Auth.Register");
  const [accountType, setAccountType] = useState<"PATIENT" | "DOCTOR">(
    "PATIENT",
  );

  return (
    <main className="min-h-screen bg-[var(--bg-color)] px-3 py-3 mt-20 sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100svh-1.5rem)] max-w-[1440px] overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-[#11101d] shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:min-h-[calc(100svh-3rem)] lg:grid-cols-[1.02fr_0.98fr]">
        <aside className="relative order-2 hidden overflow-hidden bg-[#052e22] p-8 lg:order-1 lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
          <div className="pointer-events-none absolute -end-40 -top-40 size-[34rem] rounded-full bg-[var(--success)]/35 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-44 -start-36 size-[30rem] rounded-full bg-[var(--success-light)]/10 blur-[110px]" />

          <div className="relative z-10 flex items-center gap-2 text-sm font-extrabold tracking-[0.16em] text-white">
            <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 text-[var(--success-light)]">
              <Image
                src="/logo/logo2.png"
                alt="SHIFAA"
                width={24}
                height={24}
              />
            </span>
            SHIFAA
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="mb-8 flex flex-wrap gap-3">
              <TrustStat
                icon={<FiActivity size={16} />}
                label={t("side.healthScore")}
                value="92%"
              />
              <TrustStat
                icon={<FiCalendar size={16} />}
                label={t("side.nextVisit")}
                value={t("side.visitValue")}
              />
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.08] text-white xl:text-6xl">
              {t("side.heading")}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/65">
              {t("side.description")}
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-2 text-xs font-semibold text-white/60">
            <FiShield size={16} className="text-[var(--success-light)]" />
            {t("side.secure")}
          </div>
        </aside>

        <section className="order-1 flex items-center px-5 py-8 sm:px-10 lg:order-2 lg:px-16 lg:py-10">
          <div className="mx-auto w-full max-w-[520px]">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-[var(--main-text-muted-color)] transition-colors hover:text-[var(--success-light)]"
            >
              <FiArrowRight size={15} className="rtl:rotate-180" />
              {t("backHome")}
            </Link>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--success-light)]">
                {t("eyebrow")}
              </p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight text-[var(--main-text-color)] sm:text-5xl">
                {t("title")}
              </h1>
              <p className="mt-3 max-w-md text-sm leading-6 text-[var(--main-text-muted-color)]">
                {t("description")}
              </p>
            </div>

            <form className="mt-8 space-y-4">
              <div className="space-y-2">
                <span className="block text-sm font-semibold text-[var(--main-text-color)]">
                  {t("accountType.label")}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant={accountType === "PATIENT" ? "start" : "outline"}
                    className={`h-12 rounded-2xl text-sm ${accountType === "PATIENT" ? "!text-white" : "!text-black"}`}
                    onClick={() => setAccountType("PATIENT")}
                  >
                    <FiUser size={17} />
                    {t("accountType.patient")}
                  </Button>
                  <Button
                    type="button"
                    variant={accountType === "DOCTOR" ? "start" : "outline"}
                    className={`h-12 rounded-2xl text-sm ${accountType === "DOCTOR" ? "!text-white" : "!text-black"}`}
                    onClick={() => setAccountType("DOCTOR")}
                  >
                    <FiActivity size={17} />
                    {t("accountType.doctor")}
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t("fields.firstName")}>
                  <input
                    type="text"
                    placeholder={t("placeholders.firstName")}
                    autoComplete="given-name"
                  />
                </Field>
                <Field label={t("fields.lastName")}>
                  <input
                    type="text"
                    placeholder={t("placeholders.lastName")}
                    autoComplete="family-name"
                  />
                </Field>
              </div>

              <Field label={t("fields.email")}>
                <input
                  type="email"
                  placeholder={t("placeholders.email")}
                  autoComplete="email"
                />
              </Field>

              <Field label={t("fields.phone")}>
                <PhoneInput
                  defaultCountry="eg"
                  inputProps={{
                    autoComplete: "tel",
                    dir: "ltr",
                    placeholder: t("placeholders.phone"),
                  }}
                  inputClassName="!h-12 !w-full !border-0 !bg-transparent !px-3 !text-sm !text-[var(--main-text-color)] !outline-none"
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-12 !border-0 !border-e !border-[var(--border-color)] !bg-transparent !px-3",
                    dropdownStyleProps: {
                      style: {
                        backgroundColor: "var(--cart-item-background)",
                        border: "1px solid var(--border-color)",
                        color: "var(--main-text-color)",
                        zIndex: 80,
                      },
                      className:
                        "!z-[80] !max-h-64 !overflow-y-auto !rounded-xl !shadow-[0_16px_40px_rgba(0,0,0,0.35)]",
                      listItemClassName:
                        "!text-[var(--main-text-color)] hover:!bg-[var(--success)]/15",
                      listItemSelectedClassName:
                        "!bg-[var(--success)]/20 !text-[var(--success-light)]",
                      listItemFocusedClassName:
                        "!bg-[var(--success)]/15 !text-[var(--success-light)]",
                    },
                  }}
                  className="!h-12 !w-full !rounded-2xl !border !border-[var(--border-color)] !bg-[var(--cart-item-background)] !shadow-none"
                />
              </Field>

              <Field label={t("fields.password")}>
                <input
                  type="password"
                  placeholder={t("placeholders.password")}
                  autoComplete="new-password"
                />
              </Field>

              {accountType === "DOCTOR" && (
                <div className="space-y-4 rounded-2xl p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t("doctorDetails.specialization")}>
                      <input
                        type="text"
                        placeholder={t(
                          "doctorDetails.specializationPlaceholder",
                        )}
                      />
                    </Field>
                    <Field label={t("doctorDetails.yearsOfExperience")}>
                      <input type="number" min="0" placeholder="8" />
                    </Field>
                  </div>
                  {/* <Field label={t("doctorDetails.licenseNumber")}>
                    <input type="text" placeholder="EG-MED-123456" />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t("doctorDetails.hospitalId")}>
                      <input type="number" min="1" placeholder="1" />
                    </Field>
                    <Field label={t("doctorDetails.departmentId")}>
                      <input type="number" min="1" placeholder="2" />
                    </Field>
                  </div> */}
                  <label className="block text-sm font-semibold text-[var(--main-text-color)]">
                    <span>{t("doctorDetails.bio")}</span>
                    <textarea
                      placeholder={t("doctorDetails.bioPlaceholder")}
                      className="mt-2 min-h-24 w-full resize-y rounded-2xl border border-[var(--border-color)] bg-[var(--cart-item-background)] px-4 py-3 text-sm font-normal text-[var(--main-text-color)] outline-none placeholder:text-[var(--main-text-muted-color)] focus:border-[var(--success)]"
                    />
                  </label>
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[var(--main-text-muted-color)]">
                  <span>{t("passwordStrength")}</span>
                  <span className="font-semibold text-[var(--success-light)]">
                    {t("passwordHint")}
                  </span>
                </div>
                <div
                  className="grid grid-cols-4 gap-1.5"
                  aria-label={t("passwordStrength")}
                >
                  <span className="h-1.5 rounded-full bg-[var(--success)]" />
                  <span className="h-1.5 rounded-full bg-[var(--success)]/45" />
                  <span className="h-1.5 rounded-full bg-[var(--border-color)]" />
                  <span className="h-1.5 rounded-full bg-[var(--border-color)]" />
                </div>
              </div>

              <label className="flex items-start gap-3 pt-1 text-xs leading-5 text-[var(--main-text-muted-color)]">
                <input
                  type="checkbox"
                  className="mt-1 size-4 accent-[var(--success)]"
                />
                <span>
                  {t("termsPrefix")}{" "}
                  <a
                    href="#terms"
                    className="font-bold text-[var(--success-light)] hover:underline"
                  >
                    {t("terms")}
                  </a>
                </span>
              </label>

              <Button
                type="button"
                variant="start"
                className="h-12 w-full text-sm"
              >
                {t("submit")}
              </Button>

              <div className="flex items-center gap-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--main-text-muted-color)]">
                <span className="h-px flex-1 bg-[var(--border-color)]" />
                {t("or")}
                <span className="h-px flex-1 bg-[var(--border-color)]" />
              </div>
              <GoogleButton label={t("google")} />
            </form>

            <p className="mt-5 text-center text-xs text-[var(--main-text-muted-color)]">
              {t("hasAccount")}{" "}
              <Link
                href="/login"
                className="font-bold text-[var(--success-light)] hover:underline"
              >
                {t("login")}
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold text-[var(--main-text-color)]">
      <span>{label}</span>
      <div className="mt-2 overflow-visible rounded-2xl border border-[var(--border-color)] bg-[var(--cart-item-background)] transition-colors focus-within:border-[var(--success)] focus-within:shadow-[0_0_0_3px_rgba(15,169,104,0.1)] [&>input]:h-12 [&>input]:w-full [&>input]:border-0 [&>input]:bg-transparent [&>input]:px-4 [&>input]:text-sm [&>input]:text-[var(--main-text-color)] [&>input]:outline-none [&>input]:placeholder:text-[var(--main-text-muted-color)]">
        {children}
      </div>
    </label>
  );
}

function TrustStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-w-52 items-center justify-between gap-7 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white/80 backdrop-blur-sm">
      <span className="flex items-center gap-2 text-xs">
        {icon}
        {label}
      </span>
      <strong className="text-sm text-white">{value}</strong>
    </div>
  );
}

export default RegisterForm;
