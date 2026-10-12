import { useMutation } from "@tanstack/react-query";
import { signInWithGoogle } from "../api/auth.api";
import { getGoogleIdToken } from "../lib/firebase";

export function useGoogleSignIn() {
  return useMutation({
    mutationFn: async () => {
      const idToken = await getGoogleIdToken();
      return signInWithGoogle({ idToken });
    },
  });
}
