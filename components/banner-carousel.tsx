"use client";

import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Button } from "~/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";

export type BannerCarouselItem = {
  src: string;
  alt: string;
  href: string;
};

export type BannerCarouselProps = {
  banners: BannerCarouselItem[];
  autoplayDelayMs?: number;
  ariaLabel?: string;
};

export function BannerCarousel({
  banners,
  autoplayDelayMs = 3000,
  ariaLabel = "Banners em destaque",
}: BannerCarouselProps) {
  const hasMultipleBanners = banners.length > 1;
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: autoplayDelayMs,
        playOnInit: hasMultipleBanners,
        stopOnFocusIn: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [autoplayDelayMs, hasMultipleBanners]
  );

  const plugins = React.useMemo(
    () => (hasMultipleBanners ? [autoplay] : []),
    [autoplay, hasMultipleBanners]
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const updateSelectedIndex = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    updateSelectedIndex();
    api.on("select", updateSelectedIndex);
    api.on("reInit", updateSelectedIndex);

    return () => {
      api.off("select", updateSelectedIndex);
      api.off("reInit", updateSelectedIndex);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api || !hasMultipleBanners) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        autoplay.stop();
      }
    };

    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    if (reducedMotionQuery.matches) {
      autoplay.stop();
    }

    return () => {
      reducedMotionQuery.removeEventListener(
        "change",
        handleReducedMotionChange
      );
    };
  }, [api, autoplay, hasMultipleBanners]);

  if (banners.length === 0) {
    return null;
  }

  function selectBanner(index: number) {
    api?.scrollTo(index);
    autoplay.reset();
  }

  function selectPreviousBanner() {
    api?.scrollPrev();
    autoplay.reset();
  }

  function selectNextBanner() {
    api?.scrollNext();
    autoplay.reset();
  }

  return (
    <Carousel
      aria-label={ariaLabel}
      opts={{ loop: hasMultipleBanners }}
      plugins={plugins}
      setApi={setApi}
    >
      <CarouselContent className="ml-0">
        {banners.map((banner, index) => (
          <CarouselItem
            key={`${banner.href}-${index}`}
            aria-label={`Banner ${index + 1} de ${banners.length}`}
            className="pl-0"
          >
            <Link
              href={banner.href}
              className="relative block aspect-video w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                preload={index === 0}
                className="object-cover"
                sizes="(min-width: 1024px) 960px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      {hasMultipleBanners && (
        <div
          className="mt-3 flex items-center justify-center gap-1"
          role="group"
          aria-label="Controles dos banners"
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="cursor-pointer"
            onClick={selectPreviousBanner}
            aria-label="Banner anterior"
          >
            <ChevronLeft data-icon="inline-start" />
          </Button>

          {banners.map((banner, index) => (
            <Button
              key={`${banner.href}-control-${index}`}
              type="button"
              variant="ghost"
              size="icon"
              className="cursor-pointer"
              onClick={() => selectBanner(index)}
              aria-label={`Exibir banner ${index + 1}: ${banner.alt}`}
              aria-current={index === selectedIndex ? "true" : undefined}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "size-2 rounded-full bg-muted-foreground/40 transition-colors",
                  index === selectedIndex && "bg-foreground"
                )}
              />
            </Button>
          ))}

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="cursor-pointer"
            onClick={selectNextBanner}
            aria-label="Próximo banner"
          >
            <ChevronRight data-icon="inline-start" />
          </Button>
        </div>
      )}
    </Carousel>
  );
}
