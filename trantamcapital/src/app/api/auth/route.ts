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
      const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#F7F8FA;">
<div style="text-align:center;padding:40px;max-width:420px;">
  <div id="spinner" style="border:4px solid #E2E5EC;border-top-color:#E84910;border-radius:50%;width:40px;height:40px;animation:spin 1s linear infinite;margin:0 auto 16px;"></div>
  <h2 id="title" style="color:#2E7D32;margin:0 0 8px;font-size:20px;">Authentication successful</h2>
  <p id="desc" style="color:#5A6377;margin:0;font-size:14px;">Connecting to CMS...</p>
  <p id="status" style="color:#8E99B0;margin:12px 0 0;font-size:12px;"></p>
  <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
</div>
<script>
(function(){
  var token = ${JSON.stringify(data.access_token)};
  var opener = window.opener;
  var status = document.getElementById('status');
  var title = document.getElementById('title');
  var desc = document.getElementById('desc');

  if (!opener) {
    document.getElementById('spinner').style.display = 'none';
    title.textContent = 'Error: no parent window';
    title.style.color = '#C62828';
    desc.textContent = 'Please close this tab and try again.';
    status.textContent = 'window.opener is null';
    return;
  }

  // Phuong phap 1: Goi truc tiep ham __authComplete tren window.opener (cung origin)
  status.textContent = 'Method 1: Direct function call via window.opener...';
  try {
    if (typeof opener.__authComplete === 'function') {
      opener.__authComplete(token);
      status.textContent = 'Method 1: SUCCESS! Token sent via direct call. Closing...';
      setTimeout(function() { window.close(); }, 500);
      return;
    } else {
      status.textContent = 'Method 1: opener.__authComplete not found, trying postMessage...';
    }
  } catch(e) {
    status.textContent = 'Method 1 error: ' + e.message;
  }

  // Phuong phap 2: postMessage protocol
  try {
    opener.postMessage("authorizing:github", "*");
    status.textContent = 'Method 2: postMessage sent. Waiting for echo...';
  } catch(e) {
    status.textContent = 'Method 2 error: ' + e.message;
  }

  // Lang nghe echo tu parent
  function handler(e) {
    if (e.data === "authorizing:github") {
      window.removeEventListener("message", handler);
      try {
        var authData = JSON.stringify({ token: token, provider: "github" });
        opener.postMessage("authorization:github:success:" + authData, "*");
        status.textContent = 'Method 2: SUCCESS! Token sent via postMessage. Closing...';
        setTimeout(function() { window.close(); }, 200);
      } catch(e) {
        status.textContent = 'Method 2 error sending token: ' + e.message;
      }
    }
  }
  window.addEventListener("message", handler);

  // Fallback: huong dan thu cong
  setTimeout(function() {
    document.getElementById('spinner').style.display = 'none';
    title.textContent = 'Cannot connect to CMS';
    title.style.color = '#C62828';
    desc.innerHTML = 'Please close this tab, go back to the CMS page, and <b>reload the page</b>.';
    status.textContent = 'Token obtained: ' + token.substring(0, 10) + '...';
  }, 8000);
})();
<\/script>
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
