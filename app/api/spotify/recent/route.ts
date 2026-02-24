import { NextResponse } from "next/server";
import { spotifyGet } from "@/lib/spotify";

export async function GET() {
  const { status, json } = await spotifyGet("/me/player/recently-played?limit=10");

  if (status !== 200) {
    return NextResponse.json({ tracks: [] }, { status: 200 });
  }

  const tracks =
    json?.items?.map((x: any) => ({
      title: x.track?.name,
      artists: x.track?.artists?.map((a: any) => a.name).join(", "),
      albumImageUrl: x.track?.album?.images?.[2]?.url || x.track?.album?.images?.[0]?.url,
      songUrl: x.track?.external_urls?.spotify,
      previewUrl: x.track?.preview_url,
      playedAt: x.played_at,
    })) ?? [];

  return NextResponse.json({ tracks });
}