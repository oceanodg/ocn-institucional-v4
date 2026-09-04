"use client";

import * as React from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
} from "~/components/ui/carousel";

import { FeaturedBannerArrows } from "./featured-banner-arrows";
import { FeaturedBannerBackdrop } from "./featured-banner-backdrop";
import { FeaturedBannerCaption } from "./featured-banner-caption";
import { FeaturedBannerDots } from "./featured-banner-dots";
import { FeaturedBannerSlide } from "./featured-banner-slide";
import { carouselLayoutStyle } from "./layout";
import type { FeaturedBannerCarouselProps } from "./types";
import { useBannerAutoplay } from "./use-banner-autoplay";
import { useSelectedIndex } from "./use-selected-index";

export function FeaturedBannerCarousel({
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

  if (total === 0) {
    return null;
  }

  const selectedBanner = banners[selectedIndex] ?? banners[0];
  const previousIndex = (selectedIndex - 1 + total) % total;
  const nextIndex = (selectedIndex + 1) % total;

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
    <div className={className} style={carouselLayoutStyle}>
      <div className="relative">
        {hasMultipleBanners && (
          <FeaturedBannerBackdrop
            banners={banners}
            previousIndex={previousIndex}
            nextIndex={nextIndex}
            onPrevious={selectPrevious}
            onNext={selectNext}
          />
        )}

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
            <FeaturedBannerArrows
              onPrevious={selectPrevious}
              onNext={selectNext}
            />
          )}
        </Carousel>
      </div>

      {hasMultipleBanners && (
        <FeaturedBannerDots
          banners={banners}
          selectedIndex={selectedIndex}
          onSelect={selectBanner}
        />
      )}

      <FeaturedBannerCaption banner={selectedBanner} />
    </div>
  );
}
