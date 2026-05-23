import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ADMIN_HTML_PATH = path.join(process.cwd(), "src", "admin-ui", "index.html");
let adminHtml: string | null = null;

const LOGIN_PAGE = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Access Restricted — TrantamCapital</title>
<style>
body{font-family:'Open Sans',system-ui,sans-serif;background:#F7F8FA;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
.card{background:#fff;border:1px solid #E2E5EC;border-radius:7px;box-shadow:0 4px 16px rgba(0,0,0,0.12);padding:48px 40px;text-align:center;max-width:420px;width:100%}
.logo{font-size:28px;font-weight:700;color:#1A1A2E;margin-bottom:4px}
.subtitle{color:#5A6377;font-size:14px;margin-bottom:24px}
.btn{display:inline-flex;align-items:center;gap:10px;background:#1A1A2E;color:#fff;border:none;padding:12px 32px;border-radius:4px;font-size:16px;font-weight:600;cursor:pointer;height:48px}
.btn:hover{background:#2A3F5A}
.note{margin-top:20px;font-size:12px;color:#8E99B0}
</style></head>
<body>
<div class="card">
  <div class="logo">TrantamCapital</div>
  <div class="subtitle">Content Management System</div>
  <p style="color:#C62828;font-size:13px;margin-bottom:16px">Authentication required</p>
  <button class="btn" onclick="login()">
    <svg viewBox="0 0 16 16" style="width:20px;height:20px;fill:currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
    Login with GitHub
  </button>
  <p class="note">Authorize with GitHub to manage content.<br>Repository: arizonainlove/trantamcapital</p>
</div>
<script>
function login() {
  var w = window.open('/api/auth', 'login', 'width=800,height=700');
  if (!w || w.closed) { alert('Popup was blocked. Please allow popups and try again.'); }
}
window.__authComplete = async function(token) {
  localStorage.setItem('trantam_admin_token', token);
  try {
    var res = await fetch('/api/auth/session', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({token: token}) });
    if (res.ok) window.location.reload();
  } catch(e) {
    setTimeout(function() { window.location.reload(); }, 1500);
  }
};
(async function() {
  var savedToken = localStorage.getItem('trantam_admin_token');
  if (savedToken) {
    try {
      var res = await fetch('/api/auth/session', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({token: savedToken}) });
      if (res.ok) window.location.reload();
    } catch(e) {}
  }
})();
<\/script>
</body>
</html>`;

export async function GET(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;

  if (!token) {
    return new Response(LOGIN_PAGE, {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  }

  try {
    if (!adminHtml) {
      adminHtml = fs.readFileSync(ADMIN_HTML_PATH, "utf-8");
    }
    return new Response(adminHtml, {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  } catch {
    return new Response("Admin interface not found", { status: 500 });
  }
}
