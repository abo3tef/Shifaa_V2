import { FaGoogle } from "react-icons/fa6";
import { FiLoader } from "react-icons/fi";
import { Button } from "./button";

function GoogleButton({
  label,
  onClick,
  disabled = false,
}: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      className="group relative h-12 w-full rounded-2xl border-white/15 bg-white/[0.04] text-sm font-semibold text-[var(--main-text-color)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-black/10 active:translate-y-0"
    >
      <span className="absolute start-3 flex size-7 items-center justify-center rounded-lg bg-white shadow-sm transition-transform duration-200 group-hover:scale-105">
        {disabled ? (
          <FiLoader aria-hidden="true" className="animate-spin text-base" />
        ) : (
          <FaGoogle aria-hidden="true" className="text-base text-[#4285f4]" />
        )}
      </span>
      <span>{label}</span>
    </Button>
  );
}

export default GoogleButton;
