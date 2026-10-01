"use client";

import { ChevronDown, ChevronUp, LoaderCircle, Pause, Play, SkipBack, SkipForward, X } from "lucide-react";
import Link from "next/link";
import { useId, useLayoutEffect, useRef, useState, type CSSProperties } from "react";

import {
  AUDIO_PLAYBACK_RATES,
  useAudioPlayback,
  type AudioTrack,
} from "~/components/audio/audio-playback-provider";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { cn } from "~/lib/utils";

function formatTime(seconds: number) {
  const value = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
}

function PlaybackButton({ track, playlist, inline = false }: {
  track: AudioTrack;
  playlist?: readonly AudioTrack[];
  inline?: boolean;
}) {
  const playback = useAudioPlayback();
  const active = playback.track?.id === track.id && playback.track.src === track.src;
  const playing = active && (playback.isPlaying || playback.isLoading);
  const Icon = active && playback.isLoading ? LoaderCircle : playing ? Pause : Play;
  const label = active && playback.error ? "Tentar novamente" : playing ? "Pausar" : "Ouvir lição";

  return (
    <Button
      type="button"
      size={inline ? "default" : "icon"}
      className={cn("audio-player-play", inline && "is-inline")}
      aria-label={`${label}: ${track.title}`}
      data-audio-track={inline ? track.id : undefined}
      onClick={() => playback.toggleTrack(track, playlist)}
    >
      <Icon
        data-icon="inline-start"
        strokeWidth={1.8}
        aria-hidden="true"
        className={active && playback.isLoading ? "audio-player-spinner" : undefined}
      />
      {inline ? <span>{label}</span> : null}
    </Button>
  );
}

function TrackNavigationButton({ direction }: { direction: "previous" | "next" }) {
  const playback = useAudioPlayback();
  const previous = direction === "previous";
  const track = previous ? playback.previousTrack : playback.nextTrack;
  const label = previous ? "Áudio anterior" : "Próximo áudio";
  const Icon = previous ? SkipBack : SkipForward;

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      className="audio-player-navigation"
      aria-label={track ? `${label}: ${track.title}` : label}
      title={track ? `${label}: ${track.title}` : label}
      disabled={!track}
      onClick={previous ? playback.playPrevious : playback.playNext}
    >
      <Icon data-icon="inline-start" strokeWidth={1.8} aria-hidden="true" />
    </Button>
  );
}

function PlaybackSpeed() {
  const { playbackRate, setPlaybackRate } = useAudioPlayback();

  return (
    <div className="audio-player-speed">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="audio-player-speed-trigger"
            aria-label={`Velocidade de reprodução: ${playbackRate}x`}
          >
            <span>{playbackRate}x</span>
            <ChevronDown data-icon="inline-end" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" align="end" sideOffset={8}>
          <DropdownMenuLabel>Velocidade de reprodução</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={String(playbackRate)}
            onValueChange={(value) => setPlaybackRate(Number(value))}
          >
            {AUDIO_PLAYBACK_RATES.map((rate) => (
              <DropdownMenuRadioItem key={rate} value={String(rate)}>
                {rate}x
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function AudioPlayer({ track, playlist }: { track: AudioTrack; playlist?: readonly AudioTrack[] }) {
  const playback = useAudioPlayback();
  const active = playback.track?.id === track.id && playback.track.src === track.src;
  const currentTime = active ? playback.currentTime : 0;
  const duration = (active ? playback.duration : 0) || track.durationSeconds || 0;
  return (
    <div className="audio-player-inline" role="group" aria-label={`Narração de ${track.title}`}>
      <div className="audio-player-inline-controls">
        <PlaybackButton track={track} playlist={playlist} inline />
        <span className={cn(
          "audio-player-inline-status",
          (!active || (!playback.error && !playback.isLoading)) && "is-timing",
        )}>
          {active && playback.error ? playback.error
            : active && playback.isLoading ? "Carregando áudio…"
              : `${formatTime(currentTime).padStart(5, "0")} / ${formatTime(duration)}`}
        </span>
      </div>
    </div>
  );
}

export function FloatingAudioPlayer() {
  const playback = useAudioPlayback();
  const barRef = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);
  const [mobileMinimized, setMobileMinimized] = useState(false);
  const controlsId = useId();
  const compactTitleId = useId();

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const measure = () => setHeight(bar.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(bar);
    return () => observer.disconnect();
  }, [mobileMinimized]);

  if (!playback.track) return null;
  const track = playback.track;
  const { currentTime, duration } = playback;
  const progress = duration > 0 ? Math.min(100, currentTime / duration * 100) : 0;
  const status = playback.error ?? (playback.isLoading ? "Carregando áudio…" : null);
  const hasPlaylist = playback.playlist.length > 1;

  return (
    <>
      <div className="audio-player-spacer" style={{ height }} aria-hidden="true" />
      <aside className="audio-player-dock" ref={barRef} aria-label="Player de áudio">
        <div
          className="audio-player-container audio-player-dock-inner"
          data-has-playlist={hasPlaylist}
          data-mobile-minimized={mobileMinimized}
        >
          <div className="audio-player-playback-controls">
            {hasPlaylist ? <TrackNavigationButton direction="previous" /> : null}
            <PlaybackButton track={track} />
            {hasPlaylist ? <TrackNavigationButton direction="next" /> : null}
          </div>
          <Link
            href={track.href}
            className="audio-player-track"
            title={track.title}
            onNavigate={(event) => {
              const destination = new URL(track.href, window.location.href);
              if (destination.href !== window.location.href || !destination.hash) return;
              const lesson = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
              if (lesson) {
                event.preventDefault();
                lesson.scrollIntoView({ block: "start" });
              }
            }}
          >
            <span className="audio-player-collection truncate" title={status ?? undefined}>
              {status ? (
                <span role={playback.error ? "alert" : "status"}>{status}</span>
              ) : track.collectionTitle ?? "Narração"}
            </span>
            <span className="audio-player-title truncate">{track.title}</span>
          </Link>
          <div id={controlsId} className="audio-player-progress">
            <span className="audio-player-time">{formatTime(currentTime)}</span>
            <input
              className="audio-player-seek"
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(currentTime, duration)}
              disabled={!duration || !!playback.error}
              aria-label="Posição do áudio"
              aria-valuetext={`${formatTime(currentTime)} de ${formatTime(duration)}`}
              style={{ "--audio-progress": `${progress}%` } as CSSProperties}
              onChange={(event) => playback.seek(Number(event.currentTarget.value))}
            />
            <span className="audio-player-time">{formatTime(duration)}</span>
          </div>
          <PlaybackSpeed key={mobileMinimized ? "minimized" : "complete"} />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="audio-player-mobile-toggle"
            aria-label={mobileMinimized ? "Expandir player de áudio" : "Minimizar player de áudio"}
            aria-expanded={!mobileMinimized}
            aria-controls={controlsId}
            aria-describedby={mobileMinimized ? compactTitleId : undefined}
            title={mobileMinimized ? "Expandir player" : "Minimizar player"}
            onClick={() => setMobileMinimized(!mobileMinimized)}
          >
            {mobileMinimized ? (
              <span className="audio-player-container audio-player-compact-inner">
                <ChevronUp data-icon="inline-start" strokeWidth={1.8} aria-hidden="true" />
                <span className="audio-player-compact-summary">
                  <span id={compactTitleId} className="audio-player-title truncate">
                    {`${track.collectionTitle ?? "Narração"} · ${track.title}`}
                  </span>
                  <span
                    className="audio-player-compact-progress"
                    aria-hidden="true"
                    style={{ "--audio-progress": `${progress}%` } as CSSProperties}
                  />
                  {status ? <span className="sr-only" role={playback.error ? "alert" : "status"}>{status}</span> : null}
                </span>
              </span>
            ) : <ChevronDown data-icon="inline-start" strokeWidth={1.8} aria-hidden="true" />}
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="audio-player-close"
            aria-label="Fechar player de áudio"
            onClick={() => {
              playback.close();
              const inlineButton = document.querySelector<HTMLButtonElement>(
                `[data-audio-track="${CSS.escape(track.id)}"]`,
              );
              (inlineButton ?? document.querySelector<HTMLElement>('nav a[href="/"]'))
                ?.focus({ preventScroll: true });
            }}
          >
            <X data-icon="inline-start" strokeWidth={1.5} aria-hidden="true" />
          </Button>
        </div>
      </aside>
    </>
  );
}
