import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { stripHtml } from "@/lib/sanitize";
import { signSession } from "@/lib/session";
import users from "@/data/admin-users.json";

interface AdminUser {
  username: string;
  passwordHash: string;
  role: "admin" | "staff";
  name: string;
}

export async function POST(request: Request) {
  try {
    const { username, password, rememberMe } = await request.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }

    if (typeof username !== "string" || typeof password !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    if (username.trim().length < 2 || username.trim().length > 50) {
      return NextResponse.json({ error: "Invalid username" }, { status: 400 });
    }

    if (password.length < 6 || password.length > 128) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    // Sanitize username (XSS prevention)
    const safeUsername = stripHtml(username.trim().toLowerCase());

    // Find user (case-insensitive lookup)
    const user = (users as AdminUser[]).find(
      (u) => u.username.toLowerCase() === safeUsername
    );

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Verify password with bcrypt (hash + salt)
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Create session with user info
    const response = NextResponse.json({
      ok: true,
      user: {
        username: user.username,
        name: user.name,
        role: user.role,
      },
    });

    // Encode user info into a signed session cookie
    const sessionPayload = signSession({
      username: user.username,
      role: user.role,
      name: user.name,
      rememberMe: rememberMe === true,
    });

    const maxAge = rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 8; // 30 days or 8 hours

    response.cookies.set("admin_token", sessionPayload, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
