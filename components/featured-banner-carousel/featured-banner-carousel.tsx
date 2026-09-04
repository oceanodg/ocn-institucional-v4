"use client";

import * as React from "react";

import { FeaturedBannerArrows } from "./featured-banner-arrows";
import { FeaturedBannerBackdrop } from "./featured-banner-backdrop";
import { FeaturedBannerCaption } from "./featured-banner-caption";
import { FeaturedBannerDots } from "./featured-banner-dots";
import { FeaturedBannerStage } from "./featured-banner-stage";
import { ADVANCE_MS, carouselLayoutStyle, RETREAT_MS } from "./layout";
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

export function FeaturedBannerCarousel({
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

  if (total === 0) {
    return null;
  }

  const backdrop = getBackdropIndexes(index, total, transition);

  return (
    <div
      className={className}
      style={carouselLayoutStyle}
      onMouseEnter={autoplay.pause}
      onMouseLeave={autoplay.resume}
      onFocus={autoplay.pause}
      onBlur={autoplay.resume}
    >
      <div className="relative" {...swipe}>
        {hasMultipleBanners && (
          <FeaturedBannerBackdrop
            banners={banners}
            leftIndex={backdrop.left}
            rightIndex={backdrop.right}
            onPrevious={selectPrevious}
            onNext={selectNext}
          />
        )}

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
      </div>

      {hasMultipleBanners && (
        <FeaturedBannerDots banners={banners} selectedIndex={index} onSelect={selectBanner} />
      )}

      <FeaturedBannerCaption banner={banners[index]} />
    </div>
  );
}
