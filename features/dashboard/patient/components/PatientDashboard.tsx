import { useTranslations } from "next-intl";

export function PatientDashboard() {
  const t = useTranslations("Dashboard");

  return (
    <main
      aria-label={t("patientLabel")}
      className="min-h-[calc(100svh-10rem)] flex-1"
    />
  );
}
