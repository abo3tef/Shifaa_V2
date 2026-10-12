import { NextResponse } from "next/server";
import { serverApiClient } from "@/lib/api/server-client";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Send the registration data to the server API
    const response = await serverApiClient.post("/auth/register", body);

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        error.response?.data || { message: "Error occurred while registering" },
        { status: error.response?.status || 500 },
      );
    }
    return NextResponse.json(
      { message: "Unexpected error occurred on the server" },
      { status: 500 },
    );
  }
}
