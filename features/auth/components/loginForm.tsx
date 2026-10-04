import { FiActivity, FiArrowRight, FiCalendar, FiShield } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import { Button } from "../../../components/ui/button";
import GoogleButton from "../../../components/ui/google-button";
import Image from "next/image";

function LoginForm() {
  const t = useTranslations("Auth.Login");

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
              <Field label={t("fields.email")}>
                <input
                  type="email"
                  placeholder={t("placeholders.email")}
                  autoComplete="email"
                />
              </Field>
              <Field label={t("fields.password")}>
                <input
                  type="password"
                  placeholder={t("placeholders.password")}
                  autoComplete="current-password"
                />
              </Field>

              <div className="flex items-center justify-between gap-4 text-xs">
                <label className="flex items-center gap-2 text-[var(--main-text-muted-color)]">
                  <input
                    type="checkbox"
                    className="size-4 accent-[var(--success)]"
                  />
                  {t("remember")}
                </label>
                <Link
                  href="/forgot-password"
                  className="font-semibold text-[var(--success-light)] hover:underline"
                >
                  {t("forgotPassword")}
                </Link>
              </div>

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
              {t("noAccount")}{" "}
              <Link
                href="/register"
                className="font-bold text-[var(--success-light)] hover:underline"
              >
                {t("register")}
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

export default LoginForm;
