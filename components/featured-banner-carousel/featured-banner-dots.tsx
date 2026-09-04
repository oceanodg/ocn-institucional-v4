"use client";

import { cn } from "~/lib/utils";

import type { FeaturedBannerItem } from "./types";

type FeaturedBannerDotsProps = {
  banners: FeaturedBannerItem[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

export function FeaturedBannerDots({
  banners,
  selectedIndex,
  onSelect,
}: FeaturedBannerDotsProps) {
  return (
    <div
      className="mt-6 flex items-center justify-center gap-1"
      role="group"
      aria-label="Selecionar banner"
    >
      {banners.map((banner, index) => {
        const isActive = index === selectedIndex;

        return (
          <button
            key={`${banner.href}-dot-${index}`}
            type="button"
            className="flex size-4 cursor-pointer items-center justify-center rounded-full outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            onClick={() => onSelect(index)}
            aria-label={`Exibir banner ${index + 1}: ${banner.title ?? banner.alt}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              aria-hidden="true"
              className={cn(
                "block rounded-full transition-all duration-300",
                isActive
                  ? "size-2 bg-sky-500"
                  : "size-1.5 bg-muted-foreground/25 hover:bg-muted-foreground/40"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
