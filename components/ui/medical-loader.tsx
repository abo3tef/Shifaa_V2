import { FiActivity } from "react-icons/fi";

function MedicalLoader({
  overlay = false,
  label = "Loading your care journey...",
}: {
  overlay?: boolean;
  label?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`${overlay ? "fixed inset-0 z-[100]" : "min-h-[45svh]"} flex items-center justify-center bg-[var(--bg-color)]/95 px-6 backdrop-blur-sm`}
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="relative flex size-20 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-[var(--success)]/20" />
          <span className="absolute inset-1 rounded-full border-2 border-transparent border-t-[var(--success)] border-e-[var(--success-light)] animate-spin" />
          <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--success)]/15 text-[var(--success-light)] shadow-[0_0_30px_rgba(15,169,104,0.2)]">
            <FiActivity
              size={26}
              className="animate-pulse"
              aria-hidden="true"
            />
          </span>
        </div>
        <div>
          <p className="text-sm font-bold text-[var(--main-text-color)]">
            SHIFAA
          </p>
          <p className="mt-1 text-xs text-[var(--main-text-muted-color)]">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MedicalLoader;
