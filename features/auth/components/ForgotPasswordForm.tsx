import { FiArrowRight, FiKey, FiShield } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/navigation";
import { Button } from "../../../components/ui/button";
import AuthVisualPanel from "./AuthVisualPanel";

function ForgotPasswordForm() {
  const t = useTranslations("Auth.ForgotPassword");

  return (
    <main className="min-h-screen bg-[var(--bg-color)] px-3 py-3 mt-20 sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100svh-1.5rem)] max-w-[1440px] overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-[#11101d] shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:min-h-[calc(100svh-3rem)] lg:grid-cols-[1.02fr_0.98fr]">
        <AuthVisualPanel />
        <section className="order-1 flex items-center px-5 py-8 sm:px-10 lg:order-2 lg:px-16 lg:py-10">
          <div className="mx-auto w-full max-w-[520px]">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--main-text-muted-color)] hover:text-[var(--success-light)]"
            >
              <FiArrowRight size={15} className="rtl:rotate-180" />
              {t("backLogin")}
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
            <form className="mt-8 space-y-4">
              <label className="block text-sm font-semibold text-[var(--main-text-color)]">
                {t("email")}
                <input
                  type="email"
                  placeholder={t("placeholder")}
                  autoComplete="email"
                  className="mt-2 h-12 w-full rounded-2xl border border-[var(--border-color)] bg-[var(--cart-item-background)] px-4 text-sm text-[var(--main-text-color)] outline-none placeholder:text-[var(--main-text-muted-color)] focus:border-[var(--success)]"
                />
              </label>
              <Button
                type="button"
                variant="start"
                className="h-12 w-full text-sm"
              >
                {t("submit")}
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

export default ForgotPasswordForm;
