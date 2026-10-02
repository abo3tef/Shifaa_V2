import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-auto overflow-hidden border-t border-[var(--border-color)] bg-[#111827] px-6 pb-0 pt-14 text-[var(--main-text-muted-color)] sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
        <div>
          <Link
            href="/"
            className="text-lg  font-extrabold tracking-[0.16em] text-[var(--main-text-color)]"
          >
            {t("SHIFAA")}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7">{t("description")}</p>
        </div>

        <FooterColumn title={t("platform.title")}>
          <Link href="/for-patients">{t("platform.patients")}</Link>
          <Link href="/for-doctors">{t("platform.doctors")}</Link>
          <Link href="/for-hospitals">{t("platform.hospitals")}</Link>
          <Link href="/artificial-intelligence">{t("platform.ai")}</Link>
        </FooterColumn>

        <FooterColumn title={t("company.title")}>
          <Link href="/about-al-shifaa">{t("company.about")}</Link>
          <Link href="/contact">{t("company.contact")}</Link>
          <Link href="/privacy">{t("company.privacy")}</Link>
          <Link href="/terms">{t("company.terms")}</Link>
        </FooterColumn>

        <FooterColumn title={t("socials.title")}>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </FooterColumn>
      </div>

      <div className="mx-auto mt-12 max-w-6xl overflow-hidden border-t border-[var(--border-color)] pt-6">
        <p className="select-none whitespace-nowrap bg-gradient-to-b from-[#f3f4f6] via-[#7d8491] to-[#111827] bg-clip-text text-center text-[clamp(5rem,18vw,15rem)] font-black leading-[0.72] tracking-[-0.08em] text-transparent">
          {t("SHIFAA")}
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl justify-between border-t border-[var(--border-color)] py-4 text-xs">
        <span>{t("copyright")}</span>
        <span className="text-[var(--success-light)]">{t("tagline")}</span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 text-sm [&>a]:rounded-lg [&>a]:px-2 [&>a]:py-1 [&>a]:transition-colors [&>a:hover]:bg-[var(--success)]/10 [&>a:hover]:text-[var(--success-light)]">
      <h2 className="mb-1 text-sm font-bold text-[var(--main-text-color)]">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default Footer;
