import { NextResponse } from "next/server";
import axios from "axios";
import { serverApiClient } from "@/lib/api/server-client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await serverApiClient.post("/auth/login", body);

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data || { message: "Unable to sign in" },
        { status: error.response?.status || 500 },
      );
    }

    return NextResponse.json(
      { message: "Unexpected error occurred on the server" },
      { status: 500 },
    );
  }
}
