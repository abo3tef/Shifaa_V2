import type { ReactNode } from "react";

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  suffix?: string;
}

export function MetricCard({ icon, label, value, suffix }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-[var(--border-color)] bg-[#1d1b35] p-3">
      <div className="flex items-center gap-1.5 text-[var(--main-text-muted-color)]">
        {icon}
        <span className="text-[10px]">{label}</span>
      </div>
      <p className="mt-2 text-lg font-bold text-[var(--main-text-color)]">
        {value}
        {suffix && (
          <span className="ms-1 text-[10px] font-normal text-[var(--main-text-muted-color)]">
            {suffix}
          </span>
        )}
      </p>
    </div>
  );
}
