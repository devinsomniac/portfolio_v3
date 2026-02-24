import { NextResponse } from "next/server";
import { spotifyGet } from "@/lib/spotify";

export async function GET() {
  const { status, json } = await spotifyGet("/me/player/currently-playing");

  if (status === 204 || !json?.item) {
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }

  const item = json.item;

  return NextResponse.json({
    isPlaying: Boolean(json.is_playing),
    title: item.name,
    artists: item.artists?.map((a: any) => a.name).join(", "),
    album: item.album?.name,
    albumImageUrl: item.album?.images?.[0]?.url,
    songUrl: item.external_urls?.spotify,
    previewUrl: item.preview_url,
  });
}