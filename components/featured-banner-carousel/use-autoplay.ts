"use client";

import * as React from "react";

export function useAutoplay(enabled: boolean, delayMs: number, tick: () => void) {
  const [paused, setPaused] = React.useState(false);
  const [cycle, setCycle] = React.useState(0);

  React.useEffect(() => {
    if (!enabled || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(tick, delayMs);
    return () => window.clearInterval(timer);
  }, [enabled, paused, delayMs, tick, cycle]);

  const pause = React.useCallback(() => setPaused(true), []);
  const resume = React.useCallback(() => setPaused(false), []);
  /** Reinicia a contagem (após interação manual). */
  const reset = React.useCallback(() => setCycle((value) => value + 1), []);

  return { pause, resume, reset };
}
