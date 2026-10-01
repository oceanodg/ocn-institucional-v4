"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { FloatingAudioPlayer } from "~/components/audio/audio-player";

export type AudioTrack = {
  id: string;
  src: string;
  durationSeconds?: number;
  title: string;
  collectionTitle?: string;
  href: string;
};

export const AUDIO_PLAYBACK_RATES = [1, 1.25, 1.5, 1.75, 2, 3] as const;

type AudioPlaybackValue = {
  track: AudioTrack | null;
  playlist: readonly AudioTrack[];
  previousTrack: AudioTrack | null;
  nextTrack: AudioTrack | null;
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
  currentTime: number;
  duration: number;
  playbackRate: number;
  toggleTrack: (track: AudioTrack, playlist?: readonly AudioTrack[]) => void;
  playPrevious: () => void;
  playNext: () => void;
  setPlaybackRate: (rate: number) => void;
  seek: (time: number) => void;
  close: () => void;
};

const AudioPlaybackContext = createContext<AudioPlaybackValue | null>(null);

export function useAudioPlayback() {
  const context = useContext(AudioPlaybackContext);
  if (!context) {
    throw new Error("AudioPlayer must be inside AudioPlaybackProvider");
  }
  return context;
}

export function AudioPlaybackProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const trackRef = useRef<AudioTrack | null>(null);
  const playlistRef = useRef<readonly AudioTrack[]>([]);
  const playRequestRef = useRef(0);
  const wantsPlaybackRef = useRef(false);
  const rateRef = useRef(1);
  const loadingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [track, setTrack] = useState<AudioTrack | null>(null);
  const [playlist, setPlaylist] = useState<readonly AudioTrack[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, updatePlaybackRate] = useState(1);

  const updateLoading = useCallback((loading: boolean) => {
    if (!loading) {
      if (loadingTimerRef.current !== null) clearTimeout(loadingTimerRef.current);
      loadingTimerRef.current = null;
      setIsLoading(false);
    } else if (loadingTimerRef.current === null) {
      // Avoid flashing loading controls for brief, normal playback transitions.
      loadingTimerRef.current = setTimeout(() => {
        loadingTimerRef.current = null;
        setIsLoading(true);
      }, 200);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      playRequestRef.current += 1;
      wantsPlaybackRef.current = false;
      if (loadingTimerRef.current !== null) clearTimeout(loadingTimerRef.current);
      loadingTimerRef.current = null;
      audio?.pause();
    };
  }, []);

  const startTrack = useCallback((nextTrack: AudioTrack) => {
    const audio = audioRef.current;
    if (!audio) return;

    const sameTrack = trackRef.current?.id === nextTrack.id
      && trackRef.current.src === nextTrack.src;

    const request = ++playRequestRef.current;
    wantsPlaybackRef.current = true;
    setError(null);
    // Resuming buffered audio does not require another loading state.
    updateLoading(!sameTrack || !!audio.error || audio.readyState < audio.HAVE_FUTURE_DATA);

    if (!sameTrack || audio.error) {
      audio.pause();
      trackRef.current = nextTrack;
      setTrack(nextTrack);
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      audio.src = nextTrack.src;
      audio.load();
    } else if (audio.ended) {
      audio.currentTime = 0;
      setCurrentTime(0);
    }

    audio.playbackRate = rateRef.current;
    audio.preservesPitch = true;

    void audio.play().catch((failure: unknown) => {
      // A pause, close or new selection can cancel an earlier play request.
      if (request !== playRequestRef.current || !wantsPlaybackRef.current) return;
      wantsPlaybackRef.current = false;
      setIsPlaying(false);
      updateLoading(false);
      setError(failure instanceof DOMException && failure.name === "NotAllowedError"
        ? "Toque em play para iniciar o áudio."
        : "Não foi possível reproduzir o áudio. Tente novamente.");
    });
  }, [updateLoading]);

  const toggleTrack = useCallback((nextTrack: AudioTrack, nextPlaylist?: readonly AudioTrack[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    const sameTrack = trackRef.current?.id === nextTrack.id
      && trackRef.current.src === nextTrack.src;

    // The dock can pause/resume without replacing the selected page's playlist.
    if (nextPlaylist || !sameTrack) {
      const tracks = nextPlaylist?.some((item) => item.id === nextTrack.id && item.src === nextTrack.src)
        ? nextPlaylist : [nextTrack];
      playlistRef.current = tracks;
      setPlaylist(tracks);
    }

    if (sameTrack && !audio.paused) {
      playRequestRef.current += 1;
      wantsPlaybackRef.current = false;
      audio.pause();
      setIsPlaying(false);
      updateLoading(false);
      return;
    }

    startTrack(nextTrack);
  }, [startTrack, updateLoading]);

  const playAdjacentTrack = useCallback((direction: -1 | 1) => {
    const current = trackRef.current;
    const tracks = playlistRef.current;
    const index = tracks.findIndex((item) => item.id === current?.id && item.src === current.src);
    const adjacent = index >= 0 ? tracks[index + direction] : undefined;
    if (adjacent) startTrack(adjacent);
  }, [startTrack]);

  const playPrevious = useCallback(() => playAdjacentTrack(-1), [playAdjacentTrack]);
  const playNext = useCallback(() => playAdjacentTrack(1), [playAdjacentTrack]);

  const setPlaybackRate = useCallback((rate: number) => {
    if (!AUDIO_PLAYBACK_RATES.some((option) => option === rate)) return;
    rateRef.current = rate;
    if (audioRef.current) audioRef.current.playbackRate = rate;
    updatePlaybackRate(rate);
  }, []);

  const seek = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(time) || !Number.isFinite(audio.duration)) return;
    audio.currentTime = Math.max(0, Math.min(time, audio.duration));
    setCurrentTime(audio.currentTime);
  }, []);

  const close = useCallback(() => {
    const audio = audioRef.current;
    playRequestRef.current += 1;
    wantsPlaybackRef.current = false;
    trackRef.current = null;
    playlistRef.current = [];
    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }
    setTrack(null);
    setPlaylist([]);
    setIsPlaying(false);
    updateLoading(false);
    setError(null);
    setCurrentTime(0);
    setDuration(0);
  }, [updateLoading]);

  const value = useMemo(() => {
    const index = playlist.findIndex((item) => item.id === track?.id && item.src === track.src);
    return {
      track, playlist,
      previousTrack: index > 0 ? playlist[index - 1] : null,
      nextTrack: index >= 0 ? playlist[index + 1] ?? null : null,
      isPlaying, isLoading, error, currentTime, duration, playbackRate,
      toggleTrack, playPrevious, playNext, setPlaybackRate, seek, close,
    };
  }, [track, playlist, isPlaying, isLoading, error, currentTime, duration, playbackRate,
    toggleTrack, playPrevious, playNext, setPlaybackRate, seek, close]);

  const updateDuration = () => {
    const audio = audioRef.current;
    if (trackRef.current && audio && Number.isFinite(audio.duration)) {
      setDuration(audio.duration);
    }
  };

  return (
    <AudioPlaybackContext.Provider value={value}>
      <div className="audio-playback-shell">
        {children}
        <audio
          ref={audioRef}
          preload="none"
          hidden
          onLoadedMetadata={updateDuration}
          onDurationChange={updateDuration}
          onTimeUpdate={(event) => {
            if (trackRef.current) setCurrentTime(event.currentTarget.currentTime);
          }}
          onPlay={(event) => {
            if (!wantsPlaybackRef.current) {
              event.currentTarget.pause();
              return;
            }
            setIsPlaying(true);
          }}
          onPlaying={() => {
            updateLoading(false);
            setError(null);
          }}
          onPause={(event) => {
            // A queued pause from the previous track must not clear new playback.
            if (!event.currentTarget.paused) return;
            setIsPlaying(false);
            updateLoading(false);
          }}
          onWaiting={() => {
            if (wantsPlaybackRef.current) updateLoading(true);
          }}
          onEnded={(event) => {
            if (!event.currentTarget.ended) return;
            wantsPlaybackRef.current = false;
            setIsPlaying(false);
            updateLoading(false);
          }}
          onError={(event) => {
            if (!trackRef.current || !event.currentTarget.error) return;
            wantsPlaybackRef.current = false;
            setIsPlaying(false);
            updateLoading(false);
            setError("Não foi possível carregar o áudio. Tente novamente.");
          }}
        />
        {track ? <FloatingAudioPlayer /> : null}
      </div>
    </AudioPlaybackContext.Provider>
  );
}
