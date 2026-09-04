"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import type { CarouselApi } from "~/components/ui/carousel";

export function useBannerAutoplay(
  api: CarouselApi | undefined,
  delayMs: number,
  enabled: boolean
) {
  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: delayMs,
        playOnInit: enabled,
        stopOnFocusIn: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [delayMs, enabled]
  );

  const plugins = React.useMemo(
    () => (enabled ? [autoplay] : []),
    [autoplay, enabled]
  );

  React.useEffect(() => {
    if (!api || !enabled) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) autoplay.stop();
    };

    reducedMotionQuery.addEventListener("change", handleChange);
    if (reducedMotionQuery.matches) autoplay.stop();

    return () => reducedMotionQuery.removeEventListener("change", handleChange);
  }, [api, autoplay, enabled]);

  return { autoplay, plugins };
}
