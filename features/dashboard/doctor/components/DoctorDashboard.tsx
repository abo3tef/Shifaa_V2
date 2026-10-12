import { useTranslations } from "next-intl";

export function DoctorDashboard() {
  const t = useTranslations("Dashboard");

  return (
    <main
      aria-label={t("doctorLabel")}
      className="min-h-[calc(100svh-10rem)] flex-1"
    />
  );
}
