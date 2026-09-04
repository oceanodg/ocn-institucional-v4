import type { CSSProperties } from "react";

/** Largura do slide ativo em relação ao container (0–1). */
const SLIDE_RATIO = 0.9;
/** Escala dos cartões laterais em relação ao slide ativo. */
const NEIGHBOR_SCALE = 0.85;
/** Distância entre a borda do container e a borda externa do cartão lateral (0–1). */
const PEEK_INSET = 0.005;

export const carouselLayoutStyle = {
  "--slide-width": `${SLIDE_RATIO * 100}%`,
  "--neighbor-width": `${SLIDE_RATIO * NEIGHBOR_SCALE * 100}%`,
  "--peek-inset": `${PEEK_INSET * 100}%`,
  "--banner-radius": "var(--radius-xl)",
} as CSSProperties;
