import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth.api";
import type { RegisterRequest } from "../types/auth.types";

export function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
  });
}
