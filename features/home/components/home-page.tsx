import { useTranslations } from "next-intl";

export function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
