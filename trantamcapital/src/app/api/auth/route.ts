import { NextResponse } from "next/server";

/**
 * Deprecated: GitHub OAuth login is no longer used.
 * Admin login now uses username/password via POST /api/auth/login.
 */
export async function GET() {
  return NextResponse.json(
    {
      error: "GitHub OAuth login is deprecated",
      message: "Use POST /api/auth/login with username and password instead",
    },
    { status: 410 }
  );
}
