import axios, {
  type InternalAxiosRequestConfig,
} from "axios";
import type { AuthResponse } from "@/features/auth/types/auth.types";
import { useStore } from "@/features/auth/store/auth.store";

type RetryableRequestConfig = InternalAxiosRequestConfig & {
  _authRetry?: boolean;
};

export const apiClient = axios.create({
  baseURL: "/api",
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const accessToken = useStore.getState().accessToken;
  if (accessToken) {
    config.headers.set("Authorization", `Bearer ${accessToken}`);
  }
  return config;
});

let refreshRequest: Promise<AuthResponse> | null = null;

apiClient.interceptors.response.use(
  (response) => response,
  async (error: unknown) => {
    if (!axios.isAxiosError(error) || error.response?.status !== 401) {
      return Promise.reject(error);
    }

    const request = error.config as RetryableRequestConfig | undefined;
    const { accessToken, refreshToken, setCredentials, clearCredentials } =
      useStore.getState();
    const excludedPaths = [
      "/auth/login",
      "/auth/register",
      "/auth/verify-email",
      "/auth/social/firebase",
      "/auth/refresh",
      "/auth/logout",
      "/auth/resend-verification",
      "/auth/forgot-password",
      "/auth/reset-password",
    ];

    if (
      !request ||
      request._authRetry ||
      !accessToken ||
      !refreshToken ||
      excludedPaths.some((path) => request.url?.includes(path))
    ) {
      return Promise.reject(error);
    }

    request._authRetry = true;

    try {
      refreshRequest ??= axios
        .post<AuthResponse>("/api/auth/refresh", { refreshToken })
        .then(({ data }) => data)
        .finally(() => {
          refreshRequest = null;
        });

      const refreshed = await refreshRequest;
      setCredentials(
        refreshed.user,
        refreshed.accessToken,
        refreshed.refreshToken,
      );
      request.headers.set("Authorization", `Bearer ${refreshed.accessToken}`);
      return apiClient(request);
    } catch (refreshError) {
      clearCredentials();
      return Promise.reject(refreshError);
    }
  },
);
