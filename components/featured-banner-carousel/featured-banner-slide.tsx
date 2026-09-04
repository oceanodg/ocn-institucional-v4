"use client";

import Image from "next/image";
import Link from "next/link";

import { CarouselItem } from "~/components/ui/carousel";
import { cn } from "~/lib/utils";

import type { FeaturedBannerItem } from "./types";

export type SlidePosition = "active" | "previous" | "next" | "hidden";

type FeaturedBannerSlideProps = {
  banner: FeaturedBannerItem;
  index: number;
  total: number;
  position: SlidePosition;
};

const positionClassName: Record<SlidePosition, string> = {
  active: "scale-100 translate-x-0",
  previous: "scale-[var(--neighbor-scale)] translate-x-[var(--neighbor-shift)]",
  next: "scale-[var(--neighbor-scale)] translate-x-[calc(-1*var(--neighbor-shift))]",
  hidden: "scale-[var(--neighbor-scale)] translate-x-0",
};

export function FeaturedBannerSlide({
  banner,
  index,
  total,
  position,
}: FeaturedBannerSlideProps) {
  const isActive = position === "active";

  return (
    <CarouselItem
      aria-label={`Banner ${index + 1} de ${total}`}
      className={cn(
        "relative basis-[var(--slide-width)] pl-0",
        isActive ? "z-10" : "z-0"
      )}
    >
      <div
        className={cn(
          "transition-transform duration-500 ease-out will-change-transform",
          positionClassName[position]
        )}
      >
        <Link
          href={banner.href}
          tabIndex={isActive ? 0 : -1}
          aria-hidden={!isActive}
          className={cn(
            "relative block aspect-video w-full overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
            isActive
              ? "rounded-[var(--banner-radius)]"
              : "rounded-[calc(var(--banner-radius)/var(--neighbor-scale))]"
          )}
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            preload={index === 0}
            className="object-cover"
            sizes="(min-width: 1024px) 900px, 86vw"
          />
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 bg-black/45 transition-opacity duration-500",
              isActive ? "opacity-0" : "opacity-100"
            )}
          />
        </Link>
      </div>
    </CarouselItem>
  );
}
