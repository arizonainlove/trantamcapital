import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ADMIN_HTML_PATH = path.join(process.cwd(), "src", "admin-ui", "index.html");

export async function GET(_request: NextRequest) {
  try {
    const adminHtml = fs.readFileSync(ADMIN_HTML_PATH, "utf-8");
    return new Response(adminHtml, {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  } catch {
    return new Response("Admin interface not found", { status: 500 });
  }
}
