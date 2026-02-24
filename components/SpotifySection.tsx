"use client";

import { useEffect, useRef, useState } from "react";

type NowPlaying = {
  isPlaying: boolean;
  title?: string;
  artists?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
  previewUrl?: string | null;
};

type RecentTrack = {
  title: string;
  artists: string;
  album: string;
  albumImageUrl?: string;
  songUrl: string;
  previewUrl?: string | null;
  playedAt: string;
};

export default function SpotifySection() {
  const [now, setNow] = useState<NowPlaying>({ isPlaying: false });
  const [recent, setRecent] = useState<RecentTrack[]>([]);
  const [loading, setLoading] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingPreviewUrl, setPlayingPreviewUrl] = useState<string | null>(null);

  async function load() {
    const [nowRes, recentRes] = await Promise.all([
      fetch("/api/spotify/now-playing", { cache: "no-store" }).then((r) => r.json()),
      fetch("/api/spotify/recent", { cache: "no-store" }).then((r) => r.json()),
    ]);

    setNow(nowRes);
    setRecent(recentRes.tracks || []);
    setLoading(false);
  }

  useEffect(() => {
    load();
    const t = setInterval(load, 15000);
    return () => clearInterval(t);
  }, []);

  function togglePreview(previewUrl?: string | null) {
    if (!previewUrl) return;

    if (!audioRef.current) audioRef.current = new Audio();

    // if same preview is playing -> pause
    if (playingPreviewUrl === previewUrl) {
      audioRef.current.pause();
      setPlayingPreviewUrl(null);
      return;
    }

    // play new preview
    audioRef.current.pause();
    audioRef.current.src = previewUrl;
    audioRef.current.play().catch(() => {});
    setPlayingPreviewUrl(previewUrl);

    audioRef.current.onended = () => setPlayingPreviewUrl(null);
  }

  return (
    <section className="rounded-2xl border p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Spotify</h2>
          <p className="text-sm opacity-70">Now playing + recently played</p>
        </div>

        {now.isPlaying ? (
          <span className="text-xs rounded-full border px-3 py-1">Live</span>
        ) : (
          <span className="text-xs rounded-full border px-3 py-1 opacity-70">Offline</span>
        )}
      </div>

      {/* NOW PLAYING */}
      <div className="mt-4">
        {loading ? (
          <div className="text-sm opacity-70">Loading…</div>
        ) : now.isPlaying ? (
          <div className="flex gap-4 rounded-xl border p-4">
            {now.albumImageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={now.albumImageUrl} alt="" className="h-16 w-16 rounded-lg object-cover" />
            ) : (
              <div className="h-16 w-16 rounded-lg border" />
            )}

            <div className="min-w-0 flex-1">
              <div className="font-medium truncate">{now.title}</div>
              <div className="text-sm opacity-80 truncate">{now.artists}</div>
              <div className="text-xs opacity-60 truncate">{now.album}</div>

              <div className="mt-3 flex flex-wrap gap-2">
                {now.previewUrl ? (
                  <button
                    onClick={() => togglePreview(now.previewUrl)}
                    className="text-xs rounded-full border px-3 py-1"
                  >
                    {playingPreviewUrl === now.previewUrl ? "Pause preview" : "Play preview"}
                  </button>
                ) : (
                  <span className="text-xs rounded-full border px-3 py-1 opacity-60">
                    No preview
                  </span>
                )}

                {now.songUrl && (
                  <a
                    href={now.songUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs rounded-full border px-3 py-1 underline"
                  >
                    Open in Spotify
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border p-4 text-sm opacity-80">
            Not playing anything right now.
          </div>
        )}
      </div>

      {/* RECENT */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold opacity-80">Recently played</h3>

        <div className="mt-3 space-y-2">
          {recent.slice(0, 8).map((t, idx) => (
            <div key={idx} className="flex items-center gap-3 rounded-xl border p-3">
              {t.albumImageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.albumImageUrl} alt="" className="h-10 w-10 rounded-md object-cover" />
              ) : (
                <div className="h-10 w-10 rounded-md border" />
              )}

              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium truncate">{t.title}</div>
                <div className="text-xs opacity-70 truncate">{t.artists}</div>
              </div>

              <div className="flex gap-2">
                {t.previewUrl ? (
                  <button
                    onClick={() => togglePreview(t.previewUrl)}
                    className="text-xs rounded-full border px-3 py-1"
                  >
                    {playingPreviewUrl === t.previewUrl ? "Pause" : "Preview"}
                  </button>
                ) : null}

                <a
                  href={t.songUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs rounded-full border px-3 py-1 underline"
                >
                  Spotify
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs opacity-60">
          Note: previews are only available for some tracks; otherwise “Open in Spotify” works.
        </p>
      </div>
    </section>
  );
}