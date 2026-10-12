import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "../api/auth.api";
import type { VerifyEmailRequest } from "../types/auth.types";

export function useVerifyEmail() {
  return useMutation({
    mutationFn: (data: VerifyEmailRequest) => verifyEmail(data),
  });
}
