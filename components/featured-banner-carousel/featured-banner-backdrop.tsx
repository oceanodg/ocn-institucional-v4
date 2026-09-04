"use client";

import Image from "next/image";

import { cn } from "~/lib/utils";

import type { FeaturedBannerItem } from "./types";

type BackdropCardProps = {
  banners: FeaturedBannerItem[];
  visibleIndex: number;
  side: "left" | "right";
  onClick: () => void;
};

/**
 * Cartão estático atrás do palco. Todas as imagens ficam montadas e a troca é
 * instantânea: ela sempre acontece no exato momento em que um cartão do palco
 * cobre (ou deixa de cobrir) este retângulo, então nunca é percebida.
 */
function BackdropCard({
  banners,
  visibleIndex,
  side,
  onClick,
}: BackdropCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "pointer-events-auto absolute top-1/2 aspect-video w-[var(--neighbor-width)] -translate-y-1/2 cursor-pointer overflow-hidden rounded-[var(--banner-radius)] bg-muted",
        side === "left"
          ? "left-[var(--peek-inset)]"
          : "right-[var(--peek-inset)]"
      )}
    >
      {banners.map((banner, index) => (
        <Image
          key={`${banner.src}-${index}`}
          src={banner.src}
          alt=""
          fill
          className={cn(
            "object-cover",
            index === visibleIndex ? "opacity-100" : "opacity-0"
          )}
          sizes="(min-width: 1024px) 900px, 90vw"
        />
      ))}
      <span className="pointer-events-none absolute inset-0 bg-black/45" />
    </div>
  );
}

type FeaturedBannerBackdropProps = {
  banners: FeaturedBannerItem[];
  leftIndex: number;
  rightIndex: number;
  onPrevious: () => void;
  onNext: () => void;
};

export function FeaturedBannerBackdrop({
  banners,
  leftIndex,
  rightIndex,
  onPrevious,
  onNext,
}: FeaturedBannerBackdropProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <BackdropCard
        banners={banners}
        visibleIndex={leftIndex}
        side="left"
        onClick={onPrevious}
      />
      <BackdropCard
        banners={banners}
        visibleIndex={rightIndex}
        side="right"
        onClick={onNext}
      />
    </div>
  );
}
