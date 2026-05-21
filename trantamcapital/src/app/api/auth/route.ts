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
      }),
    });

    const data = await tokenRes.json();

    if (data.access_token) {
      // Render a page that uses the Decap CMS postMessage protocol
      // Phase 1: send "authorizing:github" — parent echoes it back
      // Phase 2: send "authorization:github:success:{json}" — parent extracts token
      const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><script>
(function(){
  var token = ${JSON.stringify(data.access_token)};
  var opener = window.opener;
  if (!opener) { document.body.textContent = "Authentication error: no opener"; return; }

  // Phase 1: Send authorizing message to parent
  opener.postMessage("authorizing:github", "*");

  // Phase 2: Listen for echo, then send success with token
  function handler(e) {
    if (e.data === "authorizing:github") {
      window.removeEventListener("message", handler);
      var authData = JSON.stringify({ token: token, provider: "github" });
      opener.postMessage("authorization:github:success:" + authData, "*");
      setTimeout(function() { window.close(); }, 200);
    }
  }
  window.addEventListener("message", handler);

  // Fallback: close after 5s if parent never echoes
  setTimeout(function() { if (!window.closed) window.close(); }, 5000);
})();
<\\/script></body></html>`;
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
