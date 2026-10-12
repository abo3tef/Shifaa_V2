import type { AuthRole } from "@/features/auth/types/auth.types";

export function getDashboardPath(role: AuthRole): string {
  switch (role) {
    case "PATIENT":
      return "/patient/dashboard";
    case "DOCTOR":
      return "/doctor/dashboard";
    default:
      return "/";
  }
}
