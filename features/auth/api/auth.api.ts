import { apiClient } from "@/lib/api/client";

import type {
  ApiMessageResponse,
  AuthResponse,
  ForgotPasswordRequest,
  LoginRequest,
  RefreshTokenRequest,
  RegisterRequest,
  ResetPasswordRequest,
  SocialAuthRequest,
  VerifyEmailRequest,
  VerifyEmailResponse,
} from "../types/auth.types";

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>("/auth/login", data);
  return response.data;
}

export async function signInWithGoogle(
  data: SocialAuthRequest,
): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>(
    "/auth/social/firebase",
    data,
  );
  return response.data;
}

export async function requestPasswordReset(
  data: ForgotPasswordRequest,
): Promise<ApiMessageResponse> {
  const response = await apiClient.post<ApiMessageResponse>(
    "/auth/forgot-password",
    data,
  );
  return response.data;
}

export async function resetPassword(
  data: ResetPasswordRequest,
): Promise<ApiMessageResponse> {
  const response = await apiClient.post<ApiMessageResponse>(
    "/auth/reset-password",
    data,
  );
  return response.data;
}

export async function refreshAuthSession(
  data: RefreshTokenRequest,
): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>("/auth/refresh", data);
  return response.data;
}

export async function logout(refreshToken: string): Promise<ApiMessageResponse> {
  const response = await apiClient.post<ApiMessageResponse>("/auth/logout", {
    refreshToken,
  });
  return response.data;
}

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

export async function getSpecializations(): Promise<{ items: string[] }> {
  const response = await apiClient.get<{ items: string[] }>(
    "/doctors/specializations",
  );
  return response.data;
}

export async function resendVerificationCode(
  email: string,
): Promise<ApiMessageResponse> {
  const response = await apiClient.post<ApiMessageResponse>(
    "/auth/resend-verification",
    { email },
  );
  return response.data;
}
