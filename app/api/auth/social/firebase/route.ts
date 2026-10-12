import { NextResponse } from "next/server";
import axios from "axios";
import { serverApiClient } from "@/lib/api/server-client";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (
      !body ||
      typeof body !== "object" ||
      !("idToken" in body) ||
      typeof body.idToken !== "string" ||
      !body.idToken
    ) {
      return NextResponse.json(
        { message: "A Firebase ID token is required" },
        { status: 400 },
      );
    }

    const response = await serverApiClient.post(
      "/auth/social/firebase",
      body,
    );

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data || { message: "Unable to sign in with Google" },
        { status: error.response?.status || 500 },
      );
    }

    return NextResponse.json(
      { message: "Unexpected error occurred on the server" },
      { status: 500 },
    );
  }
}
