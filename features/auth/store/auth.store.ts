import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthUser } from "../types/auth.types";

interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  setCredentials: (
    user: AuthUser,
    accessToken: string,
    refreshToken?: string | null,
  ) => void;
  clearCredentials: () => void;
}

export const useStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      setCredentials: (user, accessToken, refreshToken = null) =>
        set({ user, accessToken, refreshToken, isAuthenticated: true }),
      clearCredentials: () =>
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage", // unique name for the storage
    },
  ),
);
