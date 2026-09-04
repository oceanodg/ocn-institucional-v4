"use client";

import Image from "next/image";

import { cn } from "~/lib/utils";

import type { FeaturedBannerItem } from "./types";

type BackdropCardProps = {
  banners: FeaturedBannerItem[];
  visibleIndex: number;
  side: "left" | "right";
  fade: boolean;
  onClick: () => void;
};

/**
 * Cartão estático atrás do palco. Todas as imagens ficam montadas e a troca é
 * feita por opacidade — instantânea (variante empilhada, em que a troca sempre
 * ocorre coberta por um cartão do palco) ou com crossfade (variante deslizante).
 */
function BackdropCard({
  banners,
  visibleIndex,
  side,
  fade,
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
            fade && "transition-opacity duration-500 ease-out",
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
  fade?: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export function FeaturedBannerBackdrop({
  banners,
  leftIndex,
  rightIndex,
  fade = false,
  onPrevious,
  onNext,
}: FeaturedBannerBackdropProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <BackdropCard
        banners={banners}
        visibleIndex={leftIndex}
        side="left"
        fade={fade}
        onClick={onPrevious}
      />
      <BackdropCard
        banners={banners}
        visibleIndex={rightIndex}
        side="right"
        fade={fade}
        onClick={onNext}
      />
    </div>
  );
}
