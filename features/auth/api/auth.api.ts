import { apiClient } from "@/lib/api/client";

import type {
  ApiMessageResponse,
  RegisterRequest,
  VerifyEmailRequest,
  VerifyEmailResponse,
} from "../types/auth.types";

export async function register(
  data: RegisterRequest,
): Promise<ApiMessageResponse> {
  const response = await apiClient.post<ApiMessageResponse>(
    "/auth/register",
    data,
  );

  return response.data;
}

export async function verifyEmail(
  data: VerifyEmailRequest,
): Promise<VerifyEmailResponse> {
  const response = await apiClient.post<VerifyEmailResponse>(
    "/auth/verify-email",
    data,
  );

  return response.data;
}
