"use client";

import { useLocale, useTranslations } from "next-intl";
import { FiGlobe } from "react-icons/fi";
import { useState } from "react";
import { usePathname, useRouter } from "../../i18n/navigation";
import { Button } from "../ui/button";
import MedicalLoader from "../ui/medical-loader";

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const [isChanging, setIsChanging] = useState(false);
  const nextLocale = locale === "ar" ? "en" : "ar";

  function changeLanguage() {
    setIsChanging(true);
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <>
      {isChanging && <MedicalLoader overlay label={t("switchingLanguage")} />}
      <Button
        type="button"
        variant="language"
        size="sm"
        onClick={changeLanguage}
        disabled={isChanging}
        aria-label={t("changeLanguage")}
        title={t("changeLanguage")}
      >
        <FiGlobe aria-hidden="true" />
        <span>{nextLocale === "ar" ? "عربي" : "EN"}</span>
      </Button>
    </>
  );
}

export default LanguageSwitcher;
