"use client";

import * as React from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
} from "~/components/ui/carousel";

import { FeaturedBannerArrows } from "./featured-banner-arrows";
import { FeaturedBannerFrame } from "./featured-banner-frame";
import { FeaturedBannerSlide } from "./featured-banner-slide";
import type { FeaturedBannerCarouselProps } from "./types";
import { useBannerAutoplay } from "./use-banner-autoplay";
import { useSelectedIndex } from "./use-selected-index";

/** Variante mobile: deslize horizontal (Embla) numa janela central, com arrasto. */
export function FeaturedBannerSlideCarousel({
  banners,
  autoplayDelayMs = 4000,
  ariaLabel = "Banners em destaque",
  className,
}: FeaturedBannerCarouselProps) {
  const total = banners.length;
  const hasMultipleBanners = total > 1;
  const [api, setApi] = React.useState<CarouselApi>();
  const selectedIndex = useSelectedIndex(api);
  const { autoplay, plugins } = useBannerAutoplay(
    api,
    autoplayDelayMs,
    hasMultipleBanners
  );

  function selectBanner(index: number) {
    api?.scrollTo(index);
    autoplay.reset();
  }

  function selectPrevious() {
    api?.scrollPrev();
    autoplay.reset();
  }

  function selectNext() {
    api?.scrollNext();
    autoplay.reset();
  }

  return (
    <FeaturedBannerFrame
      className={className}
      banners={banners}
      selectedIndex={selectedIndex}
      leftIndex={(selectedIndex - 1 + total) % total}
      rightIndex={(selectedIndex + 1) % total}
      backdropFade
      onPrevious={selectPrevious}
      onNext={selectNext}
      onSelectBanner={selectBanner}
    >
      <Carousel
        aria-label={ariaLabel}
        opts={{ loop: hasMultipleBanners, duration: 30 }}
        plugins={plugins}
        setApi={setApi}
        className="relative z-10 mx-auto w-[var(--slide-width)]"
      >
        <CarouselContent className="ml-0">
          {banners.map((banner, index) => (
            <FeaturedBannerSlide
              key={`${banner.href}-${index}`}
              banner={banner}
              index={index}
              total={total}
              isActive={index === selectedIndex}
            />
          ))}
        </CarouselContent>

        {hasMultipleBanners && (
          <FeaturedBannerArrows onPrevious={selectPrevious} onNext={selectNext} />
        )}
      </Carousel>
    </FeaturedBannerFrame>
  );
}
