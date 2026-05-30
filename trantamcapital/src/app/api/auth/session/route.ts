import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySession, signSession } from "@/lib/session";

/**
 * GET /api/auth/session
 * Returns the current session user info (used by admin SPA on load).
 */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    const user = verifySession(token);
    if (!user) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    // Sliding expiration: refresh signed cookie on every session check
    const freshToken = signSession(user);
    const response = NextResponse.json({ user });
    const maxAge = user.rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 8;
    response.cookies.set("admin_token", freshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge,
      path: "/",
    });
    return response;
  } catch {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}

/**
 * POST /api/auth/session
 * Legacy: accepts a token and sets session cookie (kept for backward compatibility).
 */
export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    if (!token || typeof token !== "string") {
      return NextResponse.json({ error: "Token required" }, { status: 400 });
    }

    const user = verifySession(token);
    if (!user) {
      return NextResponse.json({ error: "Invalid session" }, { status: 400 });
    }

    const freshToken = signSession(user);
    const response = NextResponse.json({ ok: true });
    response.cookies.set("admin_token", freshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8,
      path: "/",
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

/**
 * DELETE /api/auth/session
 * Clears the admin session cookie (called on logout).
 */
export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set("admin_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
  return response;
}
