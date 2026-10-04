import { FiActivity, FiCalendar, FiShield } from "react-icons/fi";
import { useTranslations } from "next-intl";
import Image from "next/image";

function AuthVisualPanel() {
  const t = useTranslations("Auth.Register.side");

  return (
    <aside className="relative order-2 hidden overflow-hidden bg-[#052e22] p-8 lg:order-1 lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
      <div className="pointer-events-none absolute -end-40 -top-40 size-[34rem] rounded-full bg-[var(--success)]/35 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-44 -start-36 size-[30rem] rounded-full bg-[var(--success-light)]/10 blur-[110px]" />
      <div className="relative z-10 flex items-center gap-2 text-sm font-extrabold tracking-[0.16em] text-white">
        <Image src="/logo/logo2.png" alt="SHIFAA" width={24} height={24} />
        SHIFAA
      </div>
      <div className="relative z-10 max-w-xl">
        <div className="mb-8 flex flex-wrap gap-3">
          <div className="flex min-w-52 items-center justify-between gap-7 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white/80">
            <span className="flex items-center gap-2 text-xs">
              <FiActivity size={16} />
              {t("healthScore")}
            </span>
            <strong className="text-sm text-white">92%</strong>
          </div>
          <div className="flex min-w-52 items-center justify-between gap-7 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white/80">
            <span className="flex items-center gap-2 text-xs">
              <FiCalendar size={16} />
              {t("nextVisit")}
            </span>
            <strong className="text-sm text-white">{t("visitValue")}</strong>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold leading-[1.08] text-white xl:text-6xl">
          {t("heading")}
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-7 text-white/65">
          {t("description")}
        </p>
      </div>
      <div className="relative z-10 flex items-center gap-2 text-xs font-semibold text-white/60">
        <FiShield size={16} className="text-[var(--success-light)]" />
        {t("secure")}
      </div>
    </aside>
  );
}

export default AuthVisualPanel;
