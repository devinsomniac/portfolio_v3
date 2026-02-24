"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type NowPlaying = {
  isPlaying: boolean;
  title?: string;
  artists?: string;
  albumImageUrl?: string;
  songUrl?: string;
  previewUrl?: string | null;
};

type RecentTrack = {
  title: string;
  artists: string;
  albumImageUrl?: string;
  songUrl: string;
  previewUrl?: string | null;
  playedAt: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// Stable “Spotify-like” card colors (teal/blue/purple etc.)
const ROW_COLORS = [
  "bg-teal-900/60",
  "bg-sky-900/60",
  "bg-indigo-900/60",
  "bg-purple-900/60",
  "bg-emerald-900/60",
  "bg-cyan-900/60",
];

function hashToIndex(str: string, mod: number) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % mod;
}

export default function SpotifySection() {
  const [now, setNow] = useState<NowPlaying>({ isPlaying: false });
  const [recent, setRecent] = useState<RecentTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingPreviewUrl, setPlayingPreviewUrl] = useState<string | null>(null);

  async function safeJson(res: Response) {
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      const text = await res.text();
      throw new Error(`Expected JSON but got ${contentType}. ${text.slice(0, 80)}`);
    }
    return res.json();
  }

  async function load() {
    setErrorMsg(null);
    try {
      const [nowR, recentR] = await Promise.all([
        fetch("/api/spotify/now-playing", { cache: "no-store" }),
        fetch("/api/spotify/recent", { cache: "no-store" }),
      ]);

      if (!nowR.ok) throw new Error(`now-playing failed (${nowR.status})`);
      if (!recentR.ok) throw new Error(`recent failed (${recentR.status})`);

      const nowRes = (await safeJson(nowR)) as NowPlaying;
      const recentRes = (await safeJson(recentR)) as { tracks?: RecentTrack[] };

      setNow(nowRes);
      setRecent(Array.isArray(recentRes.tracks) ? recentRes.tracks : []);
    } catch (e: any) {
      setErrorMsg(e?.message || "Failed to load Spotify data");
      setNow({ isPlaying: false });
      setRecent([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    const t = setInterval(load, 15000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function stopAudio() {
    if (audioRef.current) audioRef.current.pause();
    setPlayingPreviewUrl(null);
  }

  function togglePreview(previewUrl?: string | null) {
    if (!previewUrl) return;

    if (!audioRef.current) audioRef.current = new Audio();

    if (playingPreviewUrl === previewUrl) {
      audioRef.current.pause();
      setPlayingPreviewUrl(null);
      return;
    }

    audioRef.current.pause();
    audioRef.current.src = previewUrl;

    audioRef.current
      .play()
      .then(() => setPlayingPreviewUrl(previewUrl))
      .catch(() => setPlayingPreviewUrl(null));

    audioRef.current.onended = () => setPlayingPreviewUrl(null);
  }

  const hero = useMemo(() => {
    // Prefer live now-playing; else most recent
    if (now.isPlaying && now.title) return now;
    const r0 = recent[0];
    if (!r0) return null;
    return {
      isPlaying: false,
      title: r0.title,
      artists: r0.artists,
      albumImageUrl: r0.albumImageUrl,
      songUrl: r0.songUrl,
      previewUrl: r0.previewUrl,
    } satisfies NowPlaying;
  }, [now, recent]);

  return (
    <section className="w-full">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Recently Played</h2>
          <p className="text-sm opacity-70">Live from Spotify</p>
        </div>
      </div>

      {errorMsg && (
        <div className="mb-4 rounded-2xl border p-4 text-sm">
          <div className="font-medium">Couldn’t load Spotify data</div>
          <div className="opacity-80 mt-1">{errorMsg}</div>
          <button
            onClick={() => {
              setLoading(true);
              load();
            }}
            className="mt-3 text-xs rounded-full border px-3 py-1"
          >
            Retry
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT BIG CARD */}
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border bg-red-900/55">
            <div className="absolute inset-0 opacity-60">
              <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-black/20 blur-3xl" />
            </div>

            <div className="relative p-6">
              {loading ? (
                <div className="h-64 rounded-2xl border bg-white/5 animate-pulse" />
              ) : !hero ? (
                <div className="rounded-2xl border p-4 text-sm opacity-80 bg-black/10">
                  No tracks available yet.
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between">
                    <div className="text-xs rounded-full border px-3 py-1 bg-black/20">
                      {now.isPlaying ? "Now Playing" : "Recently Played"}
                    </div>
                    <div className="text-xs opacity-80">Spotify</div>
                  </div>

                  <div className="mt-6 flex gap-5">
                    {hero.albumImageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={hero.albumImageUrl}
                        alt=""
                        className="h-40 w-40 rounded-2xl object-cover border bg-black/10"
                      />
                    ) : (
                      <div className="h-40 w-40 rounded-2xl border bg-black/10" />
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="text-2xl font-semibold leading-tight">
                        {hero.title}
                      </div>
                      <div className="mt-1 text-sm opacity-90">{hero.artists}</div>

                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        {hero.previewUrl ? (
                          <button
                            onClick={() => togglePreview(hero.previewUrl)}
                            className="text-xs rounded-full border px-3 py-2 bg-black/20 hover:bg-black/30 transition"
                          >
                            {playingPreviewUrl === hero.previewUrl ? "Pause" : "Preview"}
                          </button>
                        ) : (
                          <span className="text-xs rounded-full border px-3 py-2 bg-black/10 opacity-80">
                            No preview
                          </span>
                        )}

                        {hero.songUrl && (
                          <a
                            href={hero.songUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs rounded-full border px-3 py-2 bg-black/15 hover:bg-black/25 transition"
                          >
                            Save / Open on Spotify
                          </a>
                        )}

                        {playingPreviewUrl && (
                          <button
                            onClick={stopAudio}
                            className="text-xs rounded-full border px-3 py-2 bg-black/10 hover:bg-black/20 transition"
                          >
                            Stop
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    {hero.previewUrl ? (
                      <button
                        onClick={() => togglePreview(hero.previewUrl)}
                        className="h-14 w-14 rounded-full border flex items-center justify-center bg-black/20 hover:bg-black/30 transition"
                        aria-label="Play preview"
                      >
                        ▶
                      </button>
                    ) : hero.songUrl ? (
                      <a
                        href={hero.songUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="h-14 w-14 rounded-full border flex items-center justify-center bg-black/20 hover:bg-black/30 transition"
                        aria-label="Open in Spotify"
                      >
                        ▶
                      </a>
                    ) : (
                      <div className="h-14 w-14 rounded-full border flex items-center justify-center opacity-60">
                        ▶
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT LIST */}
        <div className="lg:col-span-7">
          <div className="space-y-3">
            {loading ? (
              <>
                <div className="h-16 rounded-2xl border bg-white/5 animate-pulse" />
                <div className="h-16 rounded-2xl border bg-white/5 animate-pulse" />
                <div className="h-16 rounded-2xl border bg-white/5 animate-pulse" />
                <div className="h-16 rounded-2xl border bg-white/5 animate-pulse" />
              </>
            ) : recent.length === 0 ? (
              <div className="rounded-2xl border p-4 text-sm opacity-80">
                No recently played tracks found.
              </div>
            ) : (
              recent.slice(0, 6).map((t, idx) => {
                const colorClass =
                  ROW_COLORS[hashToIndex(`${t.title}-${t.artists}`, ROW_COLORS.length)];
                const isPreviewPlaying = playingPreviewUrl === t.previewUrl;

                return (
                  <div
                    key={`${t.playedAt}-${idx}`}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border p-3",
                      colorClass
                    )}
                  >
                    {t.albumImageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={t.albumImageUrl}
                        alt=""
                        className="h-12 w-12 rounded-xl object-cover border bg-black/10"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-xl border bg-black/10" />
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="font-medium truncate">{t.title}</div>
                      <div className="text-xs opacity-80 truncate">{t.artists}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      {t.previewUrl ? (
                        <button
                          onClick={() => togglePreview(t.previewUrl)}
                          className="text-xs rounded-full border px-3 py-2 bg-black/20 hover:bg-black/30 transition"
                        >
                          {isPreviewPlaying ? "Pause" : "Preview"}
                        </button>
                      ) : (
                        <a
                          href={t.songUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs rounded-full border px-3 py-2 bg-black/20 hover:bg-black/30 transition"
                        >
                          Open
                        </a>
                      )}

                      <button
                        onClick={() => (t.previewUrl ? togglePreview(t.previewUrl) : null)}
                        className={cn(
                          "h-10 w-10 rounded-full border flex items-center justify-center transition",
                          t.previewUrl
                            ? "bg-black/25 hover:bg-black/35"
                            : "bg-black/15 opacity-70 cursor-not-allowed"
                        )}
                        title={t.previewUrl ? "Play preview" : "No preview available"}
                        aria-label="Play preview"
                      >
                        ▶
                      </button>

                      {/* Optional: keep a tiny Spotify link icon behaviour */}
                      <a
                        href={t.songUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs opacity-80 hover:opacity-100 underline ml-1"
                      >
                        Spotify
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <p className="mt-3 text-xs opacity-60">
            Inline playback uses Spotify preview clips (only available for some tracks). Full songs open in Spotify.
          </p>
        </div>
      </div>
    </section>
  );
}