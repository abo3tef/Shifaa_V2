import { useMutation } from "@tanstack/react-query";
import { requestPasswordReset } from "../api/auth.api";
import type { ForgotPasswordRequest } from "../types/auth.types";

export function useForgotPassword() {
  return useMutation({
    mutationFn: (data: ForgotPasswordRequest) => requestPasswordReset(data),
  });
}
