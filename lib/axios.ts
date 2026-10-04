// lib/axios.ts
import axios from "axios";
import { useAuthStore } from "@/features/auth/store/use-auth-store";

export const api = axios.create({
  baseURL: "https://artsoraback.tech/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the access token in the Authorization header
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
