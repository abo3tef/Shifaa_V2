import { api } from "@/lib/axios";
import { VerifyEmailPayload } from "../types";

export const verifyEmailApi = async (payload: VerifyEmailPayload) => {
  const response = await api.post("/auth/verify-email", payload);
  return response.data; // Return the response data directly
};
