"use client";

import * as React from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
} from "~/components/ui/carousel";
import { FeaturedBannerArrows } from "./featured-banner-arrows";
import { FeaturedBannerCaption } from "./featured-banner-caption";
import { FeaturedBannerDots } from "./featured-banner-dots";
import { carouselLayoutStyle } from "./layout";
import {
  FeaturedBannerSlide,
  type SlidePosition,
} from "./featured-banner-slide";
import type { FeaturedBannerCarouselProps } from "./types";
import { useBannerAutoplay } from "./use-banner-autoplay";
import { useSelectedIndex } from "./use-selected-index";

function getSlidePosition(
  index: number,
  selectedIndex: number,
  total: number
): SlidePosition {
  if (index === selectedIndex) return "active";
  if (total < 2) return "hidden";
  if (index === (selectedIndex + 1) % total) return "next";
  if (index === (selectedIndex - 1 + total) % total) return "previous";
  return "hidden";
}

export function FeaturedBannerCarousel({
  banners,
  autoplayDelayMs = 4000,
  ariaLabel = "Banners em destaque",
  className,
}: FeaturedBannerCarouselProps) {
  const hasMultipleBanners = banners.length > 1;
  const [api, setApi] = React.useState<CarouselApi>();
  const selectedIndex = useSelectedIndex(api);
  const { autoplay, plugins } = useBannerAutoplay(
    api,
    autoplayDelayMs,
    hasMultipleBanners
  );

  if (banners.length === 0) {
    return null;
  }

  const selectedBanner = banners[selectedIndex] ?? banners[0];

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
      <Carousel
        aria-label={ariaLabel}
        opts={{
          loop: hasMultipleBanners,
          align: "center",
          containScroll: false,
        }}
        plugins={plugins}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent className="ml-0 py-2">
          {banners.map((banner, index) => (
            <FeaturedBannerSlide
              key={`${banner.href}-${index}`}
              banner={banner}
              index={index}
              total={banners.length}
              position={getSlidePosition(index, selectedIndex, banners.length)}
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
