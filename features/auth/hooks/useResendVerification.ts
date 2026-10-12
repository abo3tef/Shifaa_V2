import { useMutation } from "@tanstack/react-query";
import { resendVerificationCode } from "../api/auth.api";

export function useResendVerification() {
  return useMutation({
    mutationFn: (email: string) => resendVerificationCode(email),
  });
}
