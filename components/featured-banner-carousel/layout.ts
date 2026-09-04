import type { CSSProperties } from "react";

/** Largura do slide ativo em relação ao container (0–1). */
const SLIDE_RATIO = 0.9;
/** Escala dos cartões laterais em relação ao slide ativo. */
const NEIGHBOR_SCALE = 0.85;
/** Distância entre a borda do container e a borda externa do cartão lateral (0–1). */
const PEEK_INSET = 0.005;

/**
 * Deslocamento horizontal (em fração da própria largura) que leva o cartão
 * central, já escalado, exatamente para o retângulo do cartão lateral.
 */
const NEIGHBOR_OFFSET =
  (0.5 - (PEEK_INSET + (SLIDE_RATIO * NEIGHBOR_SCALE) / 2)) / SLIDE_RATIO;

/** Duração da fase em que o cartão central recua para a lateral. */
export const RETREAT_MS = 150; // 350
/** Duração da fase em que o cartão lateral avança para o centro. */
export const ADVANCE_MS = 200; // 400

export const carouselLayoutStyle = {
  "--slide-width": `${SLIDE_RATIO * 100}%`,
  "--neighbor-width": `${SLIDE_RATIO * NEIGHBOR_SCALE * 100}%`,
  "--neighbor-scale": `${NEIGHBOR_SCALE}`,
  "--neighbor-offset": `${NEIGHBOR_OFFSET * 100}%`,
  "--peek-inset": `${PEEK_INSET * 100}%`,
  "--banner-radius": "var(--radius-lg)",
} as CSSProperties;
