"use client";

import { FeaturedBannerArrows } from "./featured-banner-arrows";
import { FeaturedBannerFrame } from "./featured-banner-frame";
import { FeaturedBannerStage } from "./featured-banner-stage";
import { ADVANCE_MS, RETREAT_MS } from "./layout";
import type { FeaturedBannerCarouselProps } from "./types";
import { useAutoplay } from "./use-autoplay";
import { type StackTransition, useStackTransition } from "./use-stack-transition";
import { useSwipe } from "./use-swipe";

function wrap(index: number, total: number) {
  return (index + total) % total;
}

/**
 * Índices exibidos nos cartões de fundo em cada fase, escolhidos para que a
 * troca de imagem coincida com o momento em que o cartão do palco cobre ou
 * libera o mesmo retângulo.
 */
function getBackdropIndexes(index: number, total: number, transition: StackTransition | null) {
  const left = wrap(index - 1, total);
  const right = wrap(index + 1, total);

  if (!transition) return { left, right };

  const { from, to, direction, phase } = transition;
  if (phase === "retreat") {
    return direction === "next" ? { left, right: to } : { left: to, right };
  }
  return direction === "next" ? { left: from, right } : { left, right: from };
}

/** Variante desktop: o cartão central recua e o próximo avança para o centro. */
export function FeaturedBannerStackCarousel({
  banners,
  autoplayDelayMs = 4000,
  ariaLabel = "Banners em destaque",
  className,
}: FeaturedBannerCarouselProps) {
  const total = banners.length;
  const hasMultipleBanners = total > 1;

  const { index, transition, goTo, next, previous } = useStackTransition(total, {
    retreatMs: RETREAT_MS,
    advanceMs: ADVANCE_MS,
  });
  const autoplay = useAutoplay(hasMultipleBanners, autoplayDelayMs, next);
  const swipe = useSwipe(selectNext, selectPrevious);

  function selectBanner(target: number) {
    goTo(target);
    autoplay.reset();
  }

  function selectPrevious() {
    previous();
    autoplay.reset();
  }

  function selectNext() {
    next();
    autoplay.reset();
  }

  const backdrop = getBackdropIndexes(index, total, transition);

  return (
    <FeaturedBannerFrame
      className={className}
      banners={banners}
      selectedIndex={index}
      leftIndex={backdrop.left}
      rightIndex={backdrop.right}
      onPrevious={selectPrevious}
      onNext={selectNext}
      onSelectBanner={selectBanner}
      onMouseEnter={autoplay.pause}
      onMouseLeave={autoplay.resume}
      onFocus={autoplay.pause}
      onBlur={autoplay.resume}
      stageProps={swipe}
    >
      <FeaturedBannerStage
        banners={banners}
        index={index}
        transition={transition}
        ariaLabel={ariaLabel}
      >
        {hasMultipleBanners && (
          <FeaturedBannerArrows onPrevious={selectPrevious} onNext={selectNext} />
        )}
      </FeaturedBannerStage>
    </FeaturedBannerFrame>
  );
}
