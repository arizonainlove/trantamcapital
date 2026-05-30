import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

const ALLOWED_ORIGINS = [
  "https://www.protradevision.com",
  "https://protradevision.com",
  "http://localhost:3000",
];

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const url = origin || referer || "";
  try {
    const parsed = new URL(url);
    return ALLOWED_ORIGINS.some((allowed) => {
      const allowedParsed = new URL(allowed);
      return parsed.origin === allowedParsed.origin;
    });
  } catch {
    return false;
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.zoho.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    // CSRF check: reject requests from unknown origins
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { email } = body;

    if (!email?.trim() || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    console.log("[Newsletter] Sending notification for:", email.trim());

    await transporter.sendMail({
      from: `"Newsletter" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "contact@www.protradevision.com",
      subject: "[Newsletter] New subscriber",
      html: `
        <h3>New Newsletter Subscription</h3>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `,
    });

    console.log("[Newsletter] Email sent successfully for:", email.trim());
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Newsletter] SMTP error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
