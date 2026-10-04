import { FaGoogle } from "react-icons/fa6";
import { Button } from "./button";

function GoogleButton({ label }: { label: string }) {
  return (
    <Button
      type="button"
      variant="outline"
      className="h-12 w-full rounded-2xl border-[var(--border-color)] bg-[var(--cart-item-background)] text-sm font-semibold text-[var(--main-text-color)] hover:border-[var(--success)] hover:bg-[var(--success)]/10"
    >
      <FaGoogle className="text-[#4285f4]" />
      {label}
    </Button>
  );
}

export default GoogleButton;
