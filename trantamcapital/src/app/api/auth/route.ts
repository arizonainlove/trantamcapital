import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  // Step 2: GitHub redirects back with authorization code
  const code = url.searchParams.get("code");

  if (code) {
    if (!clientId || !clientSecret) {
      return NextResponse.json({ error: "GitHub OAuth not configured on server" }, { status: 500 });
    }

    const redirectUri = `${origin}/api/auth`;

    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
      }),
    });

    const data = await tokenRes.json();

    if (data.access_token) {
      // Render a page that uses the Decap CMS postMessage protocol
      // Phase 1: send "authorizing:github" — parent echoes it back
      // Phase 2: send "authorization:github:success:{json}" — parent extracts token
      const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#F7F8FA;">
<div style="text-align:center;padding:40px;">
  <div style="border:4px solid #E2E5EC;border-top-color:#E84910;border-radius:50%;width:40px;height:40px;animation:spin 1s linear infinite;margin:0 auto 16px;"></div>
  <h2 style="color:#2E7D32;margin:0 0 8px;font-size:20px;">Authentication successful</h2>
  <p style="color:#5A6377;margin:0;font-size:14px;">Connecting to CMS...</p>
  <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
</div>
<script>
(function(){
  var token = ${JSON.stringify(data.access_token)};
  var opener = window.opener;
  if (!opener) { document.body.innerHTML = "<div style='padding:40px;text-align:center;font-family:sans-serif;'><h2 style='color:#C62828;'>Error: no parent window</h2><p style='color:#5A6377;'>Please close this tab and try again.</p></div>"; return; }

  // Phase 1: Send authorizing message to parent
  opener.postMessage("authorizing:github", "*");

  // Phase 2: Listen for echo from parent, then send success with token
  function handler(e) {
    if (e.data === "authorizing:github") {
      window.removeEventListener("message", handler);
      var authData = JSON.stringify({ token: token, provider: "github" });
      opener.postMessage("authorization:github:success:" + authData, "*");
      setTimeout(function() { window.close(); }, 200);
    }
  }
  window.addEventListener("message", handler);

  // Fallback: close after 10s if parent never echoes
  setTimeout(function() { if (!window.closed) window.close(); }, 10000);
})();
<\\/script>
</body>
</html>`;
      return new Response(html, {
        status: 200,
        headers: { "Content-Type": "text/html" },
      });
    }

    return NextResponse.json({ error: "Failed to obtain access token from GitHub" }, { status: 400 });
  }

  // Step 1: Redirect to GitHub authorization
  if (!clientId) {
    return NextResponse.json({ error: "GITHUB_CLIENT_ID not configured" }, { status: 500 });
  }

  const redirectUri = `${origin}/api/auth`;
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo&response_type=code`;

  return new Response(null, {
    status: 302,
    headers: { Location: githubAuthUrl },
  });
}
