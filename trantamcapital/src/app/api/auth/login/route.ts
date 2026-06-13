import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { stripHtml } from "@/lib/sanitize";
import { signSession } from "@/lib/session";
import { checkBruteForce, recordFailedAttempt, resetAttempts } from "@/lib/brute-force";
import users from "@/data/admin-users.json";

interface AdminUser {
  username: string;
  passwordHash: string;
  role: "admin" | "staff";
  name: string;
}

function getClientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "127.0.0.1";
}

export async function POST(request: Request) {
  try {
    const { username, password, rememberMe } = await request.json();
    const ip = getClientIp(request);
    const safeUsername = typeof username === "string" ? stripHtml(username.trim().toLowerCase()) : "";

    // Validate input
    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }

    if (typeof username !== "string" || typeof password !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    if (safeUsername.length < 2 || safeUsername.length > 50) {
      return NextResponse.json({ error: "Invalid username" }, { status: 400 });
    }

    if (password.length < 6 || password.length > 128) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    // Brute force check before credential validation
    const { blocked, retryAfterMinutes } = checkBruteForce(safeUsername, ip);
    if (blocked) {
      return NextResponse.json({
        error: `Too many failed attempts. Try again in ${retryAfterMinutes} minute${retryAfterMinutes > 1 ? "s" : ""}.`,
        retryAfterMinutes,
      }, {
        status: 429,
        headers: { "Retry-After": String(retryAfterMinutes * 60) },
      });
    }

    // Find user (case-insensitive lookup)
    const user = (users as AdminUser[]).find(
      (u) => u.username.toLowerCase() === safeUsername
    );

    if (!user) {
      const { retryAfterMinutes: lockoutMin } = recordFailedAttempt(safeUsername, ip);
      if (lockoutMin > 0) {
        return NextResponse.json({
          error: `Too many failed attempts. Try again in ${lockoutMin} minute${lockoutMin > 1 ? "s" : ""}.`,
          retryAfterMinutes: lockoutMin,
        }, {
          status: 429,
          headers: { "Retry-After": String(lockoutMin * 60) },
        });
      }
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Verify password with bcrypt (hash + salt)
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      const { retryAfterMinutes: lockoutMin } = recordFailedAttempt(safeUsername, ip);
      if (lockoutMin > 0) {
        return NextResponse.json({
          error: `Too many failed attempts. Try again in ${lockoutMin} minute${lockoutMin > 1 ? "s" : ""}.`,
          retryAfterMinutes: lockoutMin,
        }, {
          status: 429,
          headers: { "Retry-After": String(lockoutMin * 60) },
        });
      }
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Successful login — reset brute force counters
    resetAttempts(safeUsername, ip);

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
