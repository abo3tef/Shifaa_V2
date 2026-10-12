import { NextResponse } from "next/server";
import { serverApiClient } from "@/lib/api/server-client";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await serverApiClient.post("/auth/verify-email", body);

    // Send the verification data to the server API
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data || { message: "Failed to verify email" },
        { status: error.response?.status || 500 },
      );
    }
    return NextResponse.json(
      { message: "Unexpected error occurred on the server" },
      { status: 500 },
    );
  }
}
