"use client";

import { CalendarDays } from "lucide-react";

import type { FeaturedBannerItem } from "./types";

type FeaturedBannerCaptionProps = {
  banner: FeaturedBannerItem;
};

export function FeaturedBannerCaption({ banner }: FeaturedBannerCaptionProps) {
  const title = banner.title ?? banner.alt;
  const hasMeta = Boolean(banner.description || banner.date);

  return (
    <div
      key={banner.href}
      className="mt-4 flex min-h-20 flex-col items-center gap-3 px-4 text-center animate-in fade-in duration-500"
      aria-live="polite"
    >
      <p className="text-balance text-lg font-bold uppercase leading-snug tracking-tight text-gray-800 sm:text-xl">
        {title}
      </p>

      {hasMeta && (
        <div className="flex flex-col items-center gap-1.5 text-sm text-gray-600 sm:gap-2">
          {banner.description && (
            <p className="text-balance">{banner.description}</p>
          )}
          {banner.date && (
            <span className="inline-flex items-center gap-1.5 text-xs">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              {banner.date}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
