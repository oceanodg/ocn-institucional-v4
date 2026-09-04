"use client";

import * as React from "react";

const SWIPE_THRESHOLD_PX = 40;

export function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void) {
  const startX = React.useRef<number | null>(null);

  const onTouchStart = React.useCallback((event: React.TouchEvent) => {
    startX.current = event.touches[0]?.clientX ?? null;
  }, []);

  const onTouchEnd = React.useCallback(
    (event: React.TouchEvent) => {
      if (startX.current === null) return;
      const endX = event.changedTouches[0]?.clientX ?? startX.current;
      const delta = endX - startX.current;
      startX.current = null;

      if (delta <= -SWIPE_THRESHOLD_PX) onSwipeLeft();
      if (delta >= SWIPE_THRESHOLD_PX) onSwipeRight();
    },
    [onSwipeLeft, onSwipeRight]
  );

  return { onTouchStart, onTouchEnd };
}
