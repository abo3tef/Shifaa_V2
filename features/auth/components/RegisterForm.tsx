"use client";

import {
  FiActivity,
  FiArrowRight,
  FiCalendar,
  FiShield,
  FiUser,
  FiLoader,
} from "react-icons/fi";
import { useTranslations } from "next-intl";
import { PhoneInput } from "react-international-phone";
import { useState, useEffect } from "react";
import { Link, useRouter } from "../../../i18n/navigation";
import { Button } from "../../../components/ui/button";
import GoogleButton from "../../../components/ui/google-button";
import Image from "next/image";
import { isAxiosError } from "axios";
import { useRegister } from "../hooks/useRegister";
import { useGoogleSignIn } from "../hooks/useGoogleSignIn";
import { useStore } from "../store/auth.store";
import { getDashboardPath } from "@/features/dashboard/utils/getDashboardPath";
import { getSpecializations } from "../api/auth.api";
import type { RegisterRequest } from "../types/auth.types";
import { toast } from "react-toastify";

function getPasswordStrength(
  pass: string,
  labels: string[],
): { score: number; label: string } {
  if (!pass) return { score: 0, label: "" };
  let score = 0;
  if (pass.length >= 8) score++;
  if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^A-Za-z0-9]/.test(pass)) score++;

  return { score, label: labels[score] || labels[1] };
}

function RegisterForm() {
  const t = useTranslations("Auth.Register");
  const router = useRouter();
  const { mutate: registerUser, isPending } = useRegister();
  const { mutate: googleSignIn, isPending: isGooglePending } =
    useGoogleSignIn();
  const setCredentials = useStore((state) => state.setCredentials);

  const [accountType, setAccountType] = useState<"PATIENT" | "DOCTOR">(
    "PATIENT",
  );
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [isFetchingSpecs, setIsFetchingSpecs] = useState(false);

  // Form Fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Doctor Fields
  const [specialization, setSpecialization] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(1);
  const [licenseNumber, setLicenseNumber] = useState("");
  const [bio, setBio] = useState("");

  const strength = getPasswordStrength(password, [
    t("passwordLevels.veryWeak"),
    t("passwordLevels.weak"),
    t("passwordLevels.medium"),
    t("passwordLevels.strong"),
    t("passwordLevels.veryStrong"),
  ]);

  useEffect(() => {
    if (accountType === "DOCTOR" && specializations.length === 0) {
      getSpecializations()
        .then((data) => {
          setSpecializations(data.items || []);
          if (data.items?.length > 0) setSpecialization(data.items[0]);
        })
        .catch(() => toast.error(t("toasts.specializationsError")))
        .finally(() => setIsFetchingSpecs(false));
    }
  }, [accountType, specializations.length, t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const baseData = {
      email: email.trim(),
      password,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone,
      age: 25,
    };

    let payload: RegisterRequest;

    if (accountType === "DOCTOR") {
      if (!licenseNumber) {
        toast.error(t("toasts.licenseRequired"));
        return;
      }
      payload = {
        ...baseData,
        accountType: "DOCTOR",
        doctor: {
          specialization: specialization.toLowerCase(),
          yearsOfExperience: Number(yearsOfExperience),
          licenseNumber: licenseNumber.trim(),
          bio: bio.trim() || undefined,
        },
      };
    } else {
      payload = {
        ...baseData,
        accountType: "PATIENT",
      };
    }

    registerUser(payload, {
      onSuccess: () => {
        toast.success(t("toasts.registerSuccess"));
        sessionStorage.setItem("pending_verify_email", email);
        router.push("/verify-email");
      },
      onError: (err: unknown) => {
        const msg = isAxiosError<{ message?: string | string[] }>(err)
          ? err.response?.data?.message
          : undefined;
        const message = Array.isArray(msg)
          ? msg.join(", ")
          : msg || t("toasts.registerError");
        toast.error(message);
      },
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(undefined, {
      onSuccess: (data) => {
        setCredentials(data.user, data.accessToken, data.refreshToken);
        router.push(getDashboardPath(data.user.role));
      },
      onError: (error) => {
        const code =
          typeof error === "object" && error && "code" in error
            ? error.code
            : undefined;
        toast.error(
          code === "FIREBASE_CONFIG_MISSING"
            ? t("toasts.googleNotConfigured")
            : code === "auth/popup-closed-by-user"
              ? t("toasts.googlePopupClosed")
              : t("toasts.googleError"),
        );
      },
    });
  };

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

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
                    onClick={() => {
                      setAccountType("DOCTOR");
                      if (specializations.length === 0) {
                        setIsFetchingSpecs(true);
                      }
                    }}
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
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={t("placeholders.firstName")}
                    autoComplete="given-name"
                  />
                </Field>
                <Field label={t("fields.lastName")}>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={t("placeholders.lastName")}
                    autoComplete="family-name"
                  />
                </Field>
              </div>

              <Field label={t("fields.email")}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("placeholders.email")}
                  autoComplete="email"
                />
              </Field>

              <Field label={t("fields.phone")}>
                <PhoneInput
                  defaultCountry="eg"
                  value={phone}
                  onChange={(phoneVal) => setPhone(phoneVal)}
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-12 !border-0 !border-e !border-[var(--border-color)] !bg-transparent !px-3",
                    dropdownStyleProps: {
                      className: "register-country-dropdown",
                      listItemClassName:
                        "!px-3 !py-2.5 !text-sm !text-[var(--main-text-color)] hover:!bg-[var(--success)]/15",
                      listItemSelectedClassName:
                        "!bg-[var(--success)]/20 !text-[var(--success-light)]",
                      listItemFocusedClassName:
                        "!bg-[var(--success)]/15 !text-[var(--success-light)]",
                    },
                  }}
                  inputProps={{
                    autoComplete: "tel",
                    dir: "ltr",
                    placeholder: t("placeholders.phone"),
                  }}
                  inputClassName="!h-12 !w-full !border-0 !bg-transparent !px-3 !text-sm !text-[var(--main-text-color)] !outline-none"
                  className="!h-12 !w-full !rounded-2xl !border !border-[var(--border-color)] !bg-[var(--cart-item-background)] !shadow-none"
                />
              </Field>

              <Field label={t("fields.password")}>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("placeholders.password")}
                  autoComplete="new-password"
                />
              </Field>

              {/* شريط صعوبة كلمة المرور */}
              {password && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[var(--main-text-muted-color)]">
                      {t("passwordStrength")}:
                    </span>
                    <span className="font-semibold text-[var(--success-light)]">
                      {strength.label}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[1, 2, 3, 4].map((step) => (
                      <span
                        key={step}
                        className={`h-1.5 rounded-full transition-colors ${
                          strength.score >= step
                            ? "bg-[var(--success)]"
                            : "bg-[var(--border-color)]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {accountType === "DOCTOR" && (
                <div className="space-y-4 rounded-2xl p-4 border border-[var(--border-color)] bg-[var(--cart-item-background)]/50">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={t("doctorDetails.specialization")}>
                      {isFetchingSpecs ? (
                        <div className="flex h-12 items-center px-4 text-xs text-gray-400">
                          {t("doctorDetails.loadingSpecializations")}
                        </div>
                      ) : (
                        <select
                          value={specialization}
                          onChange={(e) => setSpecialization(e.target.value)}
                          className="h-12 w-full bg-transparent px-4 text-sm outline-none text-[var(--main-text-color)]"
                        >
                          {specializations.map((spec) => (
                            <option
                              key={spec}
                              value={spec}
                              className="bg-[#11101d] text-white"
                            >
                              {spec.toUpperCase()}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>
                    <Field label={t("doctorDetails.yearsOfExperience")}>
                      <input
                        type="number"
                        min="0"
                        required
                        value={yearsOfExperience}
                        onChange={(e) =>
                          setYearsOfExperience(Number(e.target.value))
                        }
                      />
                    </Field>
                  </div>

                  <Field label={t("doctorDetails.licenseNumber")}>
                    <input
                      type="text"
                      required
                      placeholder={t("doctorDetails.licensePlaceholder")}
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                    />
                  </Field>

                  <label className="block text-sm font-semibold text-[var(--main-text-color)]">
                    <span>{t("doctorDetails.bio")}</span>
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder={t("doctorDetails.bioPlaceholder")}
                      className="mt-2 min-h-20 w-full resize-y rounded-2xl border border-[var(--border-color)] bg-[var(--cart-item-background)] px-4 py-3 text-sm text-[var(--main-text-color)] outline-none focus:border-[var(--success)]"
                    />
                  </label>
                </div>
              )}

              <Button
                type="submit"
                variant="start"
                disabled={isPending}
                className="h-12 w-full text-sm disabled:bg-gray-500 flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <FiLoader className="animate-spin size-5" />
                    <span>{t("creatingAccount")}</span>
                  </>
                ) : (
                  t("submit")
                )}
              </Button>

              <div className="flex items-center gap-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--main-text-muted-color)]">
                <span className="h-px flex-1 bg-[var(--border-color)]" />
                {t("or")}
                <span className="h-px flex-1 bg-[var(--border-color)]" />
              </div>
              <GoogleButton
                label={
                  isGooglePending
                    ? t("googleSigningIn")
                    : t("google")
                }
                onClick={handleGoogleSignIn}
                disabled={isGooglePending}
              />
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
      <div className="mt-2 overflow-visible rounded-2xl border border-[var(--border-color)] bg-[var(--cart-item-background)] transition-colors focus-within:border-[var(--success)] [&>input]:h-12 [&>input]:w-full [&>input]:border-0 [&>input]:bg-transparent [&>input]:px-4 [&>input]:text-sm [&>input]:text-[var(--main-text-color)] [&>input]:outline-none">
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
