"use client";

import { useEffect, useState } from "react";
import { FiArrowRight, FiKey, FiLoader, FiShield } from "react-icons/fi";
import { isAxiosError } from "axios";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { Link, useRouter } from "../../../i18n/navigation";
import { Button } from "../../../components/ui/button";
import AuthVisualPanel from "./AuthVisualPanel";
import { useResetPassword } from "../hooks/useResetPassword";

function ResetPasswordForm() {
  const t = useTranslations("Auth.ResetPassword");
  const router = useRouter();
  const { mutate: submitReset, isPending } = useResetPassword();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const savedEmail = sessionStorage.getItem("pending_password_reset_email");
    if (savedEmail) {
      queueMicrotask(() => setEmail(savedEmail));
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error(t("toasts.passwordMismatch"));
      return;
    }

    submitReset(
      { email: email.trim(), code: code.trim(), newPassword: password },
      {
        onSuccess: () => {
          sessionStorage.removeItem("pending_password_reset_email");
          toast.success(t("toasts.resetSuccess"));
          router.push("/login");
        },
        onError: (error: unknown) => {
          const status = isAxiosError(error) ? error.response?.status : undefined;
          toast.error(
            status === 429
              ? t("toasts.rateLimited")
              : status === 400
                ? t("toasts.invalidCode")
                : t("toasts.resetError"),
          );
        },
      },
    );
  };

  return (
    <main className="min-h-screen bg-[var(--bg-color)] px-3 py-3 mt-20 sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100svh-1.5rem)] max-w-[1440px] overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-[#11101d] shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:min-h-[calc(100svh-3rem)] lg:grid-cols-[1.02fr_0.98fr]">
        <AuthVisualPanel />
        <section className="order-1 flex items-center px-5 py-8 sm:px-10 lg:order-2 lg:px-16 lg:py-10">
          <div className="mx-auto w-full max-w-[520px]">
            <Link
              href="/forgot-password"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--main-text-muted-color)] hover:text-[var(--success-light)]"
            >
              <FiArrowRight size={15} className="rtl:rotate-180" />
              {t("backForgotPassword")}
            </Link>
            <div className="mt-12 text-center lg:text-start">
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[var(--success)]/15 text-[var(--success-light)] lg:mx-0">
                <FiKey size={26} />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--success-light)]">
                {t("eyebrow")}
              </p>
              <h1 className="mt-3 text-4xl font-extrabold text-[var(--main-text-color)] sm:text-5xl">
                {t("title")}
              </h1>
              <p className="mt-4 max-w-md text-sm leading-7 text-[var(--main-text-muted-color)]">
                {t("description")}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <label className="block text-sm font-semibold text-[var(--main-text-color)]">
                {t("email")}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t("emailPlaceholder")}
                  autoComplete="email"
                  className="mt-2 h-12 w-full rounded-2xl border border-[var(--border-color)] bg-[var(--cart-item-background)] px-4 text-sm text-[var(--main-text-color)] outline-none placeholder:text-[var(--main-text-muted-color)] focus:border-[var(--success)]"
                />
              </label>
              <label className="block text-sm font-semibold text-[var(--main-text-color)]">
                {t("code")}
                <input
                  type="text"
                  required
                  minLength={6}
                  maxLength={6}
                  pattern="[0-9]{6}"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={code}
                  onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder={t("codePlaceholder")}
                  className="mt-2 h-12 w-full rounded-2xl border border-[var(--border-color)] bg-[var(--cart-item-background)] px-4 text-sm tracking-[0.35em] text-[var(--main-text-color)] outline-none placeholder:text-[var(--main-text-muted-color)] focus:border-[var(--success)]"
                />
              </label>
              <label className="block text-sm font-semibold text-[var(--main-text-color)]">
                {t("newPassword")}
                <input
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder={t("passwordPlaceholder")}
                  className="mt-2 h-12 w-full rounded-2xl border border-[var(--border-color)] bg-[var(--cart-item-background)] px-4 text-sm text-[var(--main-text-color)] outline-none placeholder:text-[var(--main-text-muted-color)] focus:border-[var(--success)]"
                />
              </label>
              <label className="block text-sm font-semibold text-[var(--main-text-color)]">
                {t("confirmPassword")}
                <input
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder={t("confirmPasswordPlaceholder")}
                  className="mt-2 h-12 w-full rounded-2xl border border-[var(--border-color)] bg-[var(--cart-item-background)] px-4 text-sm text-[var(--main-text-color)] outline-none placeholder:text-[var(--main-text-muted-color)] focus:border-[var(--success)]"
                />
              </label>
              <Button
                type="submit"
                variant="start"
                disabled={isPending}
                className="h-12 w-full text-sm"
              >
                {isPending ? (
                  <span className="inline-flex items-center gap-2">
                    <FiLoader className="animate-spin" />
                    {t("submitting")}
                  </span>
                ) : (
                  t("submit")
                )}
              </Button>
            </form>
            <p className="mt-6 flex items-center justify-center gap-2 text-xs text-[var(--main-text-muted-color)] lg:justify-start">
              <FiShield size={15} className="text-[var(--success-light)]" />
              {t("secure")}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ResetPasswordForm;
