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
      // Send token to parent CMS window via postMessage and close popup
      const html = `<!DOCTYPE html>
<html><body><script>
(function() {
  var token = ${JSON.stringify(data.access_token)};
  var targetOrigin = ${JSON.stringify(origin)};
  if (window.opener) {
    window.opener.postMessage({ token: token, provider: "github" }, targetOrigin);
    window.close();
  } else {
    window.location.replace(targetOrigin + "/admin#access_token=" + token + "&token_type=bearer");
  }
})();
<\/script></body></html>`;
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
