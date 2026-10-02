"use client";

import { useLocale, useTranslations } from "next-intl";
import { FiGlobe } from "react-icons/fi";
import { usePathname, useRouter } from "../../i18n/navigation";
import { Button } from "../ui/button";

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const nextLocale = locale === "ar" ? "en" : "ar";

  function changeLanguage() {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <Button
      type="button"
      variant="language"
      size="sm"
      onClick={changeLanguage}
      aria-label={t("changeLanguage")}
      title={t("changeLanguage")}
    >
      <FiGlobe aria-hidden="true" />
      <span>{nextLocale === "ar" ? "عربي" : "EN"}</span>
    </Button>
  );
}

export default LanguageSwitcher;
