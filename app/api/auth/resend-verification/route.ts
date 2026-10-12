import { NextResponse } from "next/server";
import { serverApiClient } from "@/lib/api/server-client";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await serverApiClient.post(
      "/auth/resend-verification",
      body,
    );
    return NextResponse.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data || {
          message: "failed to resend verification code",
        },
        { status: error.response?.status || 500 },
      );
    }
    return NextResponse.json(
      { message: "failed to resend verification code" },
      { status: 500 },
    );
  }
}
