import { createHmac, timingSafeEqual } from "crypto";

export interface SessionPayload {
  username: string;
  role: "admin" | "staff";
  name: string;
  rememberMe?: boolean;
}

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("SESSION_SECRET environment variable is required in production");
    }
    console.warn("[session] SESSION_SECRET not set — using insecure fallback for development only");
    return "dev-insecure-fallback-" + process.env.NODE_ENV;
  }
  return secret;
}

export function signSession(payload: SessionPayload): string {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64");
  const hmac = createHmac("sha256", getSecret()).update(data).digest("hex");
  return data + "." + hmac;
}

export function verifySession(token: string): SessionPayload | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [data, hmac] = parts;

  try {
    const expected = createHmac("sha256", getSecret()).update(data).digest("hex");
    if (!timingSafeEqual(Buffer.from(hmac), Buffer.from(expected))) return null;
  } catch {
    return null;
  }

  try {
    const decoded = JSON.parse(Buffer.from(data, "base64").toString("utf-8"));
    if (decoded && typeof decoded.username === "string" && typeof decoded.role === "string") {
      return decoded as SessionPayload;
    }
  } catch {}

  return null;
}
