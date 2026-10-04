import { api } from "@/lib/axios";
import { RegisterPayload } from "../types";

export const registerApi = async (payload: RegisterPayload) => {
  const response = await api.post("/auth/register", payload);
  return response.data;
};
