import { NextResponse } from "next/server";
import { serverApiClient } from "@/lib/api/server-client";

export async function GET() {
  try {
    const response = await serverApiClient.get("/doctors/specializations");
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ items: [] }, { status: 500 });
  }
}
