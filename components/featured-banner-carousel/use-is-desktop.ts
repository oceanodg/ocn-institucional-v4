"use client";

import * as React from "react";

/** Mesmo breakpoint `sm` do Tailwind, onde as setas passam a ser exibidas. */
const DESKTOP_QUERY = "(min-width: 640px)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(DESKTOP_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

/** No servidor assume desktop; o estado de repouso das duas variantes é idêntico. */
function getServerSnapshot() {
  return true;
}

export function useIsDesktop() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
