import "server-only";
import axios from "axios";

const baseURL = process.env.AUTH_API_BASE_URL;

if (!baseURL) {
  throw new Error("AUTH_API_BASE_URL is not configured.");
}

export const serverApiClient = axios.create({
  baseURL,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});
