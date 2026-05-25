import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Simple in-memory rate limiter.
 * Note: On Vercel serverless, memory is not shared across instances,
 * so this is a best-effort protection, not a hard guarantee.
 */
class RateLimiter {
  private store = new Map<string, { count: number; resetAt: number }>();

  constructor(
    private windowMs: number = 60_000,
    private maxRequests: number = 20,
  ) {}

  check(key: string): { allowed: boolean; retryAfterMs: number } {
    const now = Date.now();
    const entry = this.store.get(key);

    if (!entry || now > entry.resetAt) {
      this.store.set(key, { count: 1, resetAt: now + this.windowMs });
      return { allowed: true, retryAfterMs: 0 };
    }

    entry.count++;
    if (entry.count > this.maxRequests) {
      return { allowed: false, retryAfterMs: entry.resetAt - now };
    }

    return { allowed: true, retryAfterMs: 0 };
  }
}

const authLimiter = new RateLimiter(60_000, 10);       // 10 requests/minute for auth
const contactLimiter = new RateLimiter(60_000, 20);     // 20 requests/minute for contact
const newsletterLimiter = new RateLimiter(60_000, 10);  // 10 requests/minute for newsletter (spam target)
const generalLimiter = new RateLimiter(60_000, 60);     // 60 requests/minute for general

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "127.0.0.1";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = getClientIp(request);

  // Rate limiting by route
  let limiter: RateLimiter | null = null;
  if (pathname === "/api/auth") {
    limiter = authLimiter;
  } else if (pathname === "/api/contact") {
    limiter = contactLimiter;
  } else if (pathname === "/api/newsletter") {
    limiter = newsletterLimiter;
  } else if (pathname.startsWith("/api/")) {
    limiter = generalLimiter;
  }

  if (limiter) {
    const { allowed, retryAfterMs } = limiter.check(ip);
    if (!allowed) {
      const retryAfterSec = Math.ceil(retryAfterMs / 1000);
      return new NextResponse(
        JSON.stringify({ error: `Too many requests. Try again in ${retryAfterSec} seconds.` }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(retryAfterSec),
          },
        },
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
