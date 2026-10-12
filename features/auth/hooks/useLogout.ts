import { useMutation } from "@tanstack/react-query";
import { logout } from "../api/auth.api";
import { useStore } from "../store/auth.store";

export function useLogout() {
  const refreshToken = useStore((state) => state.refreshToken);
  const clearCredentials = useStore((state) => state.clearCredentials);

  return useMutation({
    mutationFn: async () => {
      if (!refreshToken) return;
      await logout(refreshToken);
    },
    onSettled: () => clearCredentials(),
  });
}
