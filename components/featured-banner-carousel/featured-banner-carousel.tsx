"use client";

import { FeaturedBannerSlideCarousel } from "./featured-banner-slide-carousel";
import { FeaturedBannerStackCarousel } from "./featured-banner-stack-carousel";
import type { FeaturedBannerCarouselProps } from "./types";
import { useIsDesktop } from "./use-is-desktop";

/**
 * Desktop (≥ sm): transição empilhada — o centro recua, o próximo avança.
 * Mobile (< sm): deslize horizontal com arrasto.
 * O estado de repouso das duas variantes é idêntico.
 */
export function FeaturedBannerCarousel(props: FeaturedBannerCarouselProps) {
  const isDesktop = useIsDesktop();

  if (props.banners.length === 0) {
    return null;
  }

  return isDesktop ? (
    <FeaturedBannerStackCarousel {...props} />
  ) : (
    <FeaturedBannerSlideCarousel {...props} />
  );
}
