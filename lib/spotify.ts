function basicAuth() {
  return Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID!}:${process.env.SPOTIFY_CLIENT_SECRET!}`
  ).toString("base64");
}

export async function getAccessToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth()}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
    cache: "no-store",
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error_description || "Token refresh failed");
  return data.access_token as string;
}

export async function spotifyGet(path: string) {
  const accessToken = await getAccessToken();
  const res = await fetch(`https://api.spotify.com/v1${path}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  if (res.status === 204) return { status: 204, json: null };
  return { status: res.status, json: await res.json() };
}