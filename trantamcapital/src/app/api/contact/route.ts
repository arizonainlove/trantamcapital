import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { stripHtml } from "@/lib/sanitize";

const ALLOWED_ORIGINS = [
  "https://www.protradevision.com",
  "https://protradevision.com",
  "http://localhost:3000",
];

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

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const url = origin || referer || "";
  return ALLOWED_ORIGINS.some((allowed) => url.startsWith(allowed));
}

export async function POST(request: Request) {
  try {
    // CSRF check: reject requests from unknown origins
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { name, email, subject, message, consent } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (name.trim().length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]{2,}\.[a-zA-Z]{2,}$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json({ error: "You must agree to the Privacy Policy" }, { status: 400 });
    }

    const safeName = stripHtml(name.trim());
    const safeEmail = stripHtml(email.trim());
    const safeSubject = stripHtml(subject.trim());
    const safeMessage = stripHtml(message.trim());

    await transporter.sendMail({
      from: `"${safeName}" <${process.env.SMTP_USER}>`,
      replyTo: safeEmail,
      to: process.env.CONTACT_TO || "contact@www.protradevision.com",
      subject: `[Contact] ${safeSubject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
