"use client";

import Image from "next/image";
import Link from "next/link";

import { CarouselItem } from "~/components/ui/carousel";

import type { FeaturedBannerItem } from "./types";

type FeaturedBannerSlideProps = {
  banner: FeaturedBannerItem;
  index: number;
  total: number;
  isActive: boolean;
};

export function FeaturedBannerSlide({
  banner,
  index,
  total,
  isActive,
}: FeaturedBannerSlideProps) {
  return (
    <CarouselItem aria-label={`Banner ${index + 1} de ${total}`} className="pl-0">
      <Link
        href={banner.href}
        tabIndex={isActive ? 0 : -1}
        aria-hidden={!isActive}
        className="relative block aspect-video w-full overflow-hidden rounded-[var(--banner-radius)] bg-muted focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <Image
          src={banner.src}
          alt={banner.alt}
          fill
          preload={index === 0}
          className="object-cover"
          sizes="(min-width: 1024px) 900px, 90vw"
        />
      </Link>
    </CarouselItem>
  );
}
