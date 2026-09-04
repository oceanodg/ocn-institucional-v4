import type { CSSProperties } from "react";

/** Largura do slide ativo em relação ao container (0–1). */
const SLIDE_RATIO = 0.9;
/** Escala aplicada aos slides vizinhos. */
const NEIGHBOR_SCALE = 0.85;
/** Distância entre a borda do container e a borda externa do slide vizinho (0–1). */
const PEEK_INSET = 0.005;

/**
 * Deslocamento (em fração da própria largura) necessário para que a borda
 * externa do slide vizinho, já escalado, fique em `PEEK_INSET` do container.
 */
const NEIGHBOR_SHIFT =
  (PEEK_INSET - (1 - 2 * SLIDE_RATIO) / 2 + (NEIGHBOR_SCALE * SLIDE_RATIO) / 2) /
  SLIDE_RATIO;

export const carouselLayoutStyle = {
  "--slide-width": `${SLIDE_RATIO * 100}%`,
  "--neighbor-scale": `${NEIGHBOR_SCALE}`,
  "--neighbor-shift": `${NEIGHBOR_SHIFT * 100}%`,
  "--banner-radius": "var(--radius-xl)",
} as CSSProperties;
