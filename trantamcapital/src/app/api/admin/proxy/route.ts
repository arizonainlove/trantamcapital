import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const GITHUB_API = "https://api.github.com";

interface SessionUser {
  username: string;
  role: "admin" | "staff";
  name: string;
  rememberMe?: boolean;
}

function decodeSession(token: string): SessionUser | null {
  try {
    const decoded = JSON.parse(Buffer.from(token, "base64").toString("utf-8"));
    if (decoded && typeof decoded.username === "string" && typeof decoded.role === "string") {
      return decoded as SessionUser;
    }
    return null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    // Check session
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = decodeSession(token);
    if (!user) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 });
    }

    // Parse request
    const { method, path, body } = await request.json();

    if (!path || typeof path !== "string") {
      return NextResponse.json({ error: "Path required" }, { status: 400 });
    }

    // Validate path to prevent abuse
    const owner = process.env.GITHUB_OWNER || "arizonainlove";
    const repo = process.env.GITHUB_REPO || "trantamcapital";
    if (!path.startsWith(`/repos/${owner}/${repo}/`)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Role-based restrictions
    if (user.role === "staff") {
      // Staff cannot delete files
      if (method === "DELETE") {
        return NextResponse.json({ error: "Staff cannot delete content" }, { status: 403 });
      }
      // Staff cannot modify menu
      if (path.includes("menu.json")) {
        return NextResponse.json({ error: "Staff cannot modify menu" }, { status: 403 });
      }
    }

    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      return NextResponse.json({ error: "GitHub token not configured on server" }, { status: 500 });
    }

    const allowedMethods = ["GET", "PUT", "DELETE"];
    if (!allowedMethods.includes(method)) {
      return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
    }

    const fetchOptions: RequestInit = {
      method,
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
    };

    if (body && (method === "PUT" || method === "DELETE")) {
      fetchOptions.body = JSON.stringify(body);
    }

    const githubRes = await fetch(`${GITHUB_API}${path}`, fetchOptions);
    const data = await githubRes.json();

    if (!githubRes.ok) {
      return NextResponse.json(
        { error: data.message || `GitHub API error: ${githubRes.status}` },
        { status: githubRes.status }
      );
    }

    // Sliding expiration: refresh cookie on successful request
    const response = NextResponse.json(data);
    const maxAge = user.rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 8;
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge,
      path: "/",
    });
    return response;
  } catch (err) {
    console.error("Admin proxy error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
