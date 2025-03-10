import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { updateSession } from "@/app/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  try {
    // Your middleware logic here
    return await updateSession(request);
  } catch (error) {
    console.error("Middleware error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
