"use client";

import type { ComponentProps, ReactNode } from "react";

import { FeaturedBannerBackdrop } from "./featured-banner-backdrop";
import { FeaturedBannerCaption } from "./featured-banner-caption";
import { FeaturedBannerDots } from "./featured-banner-dots";
import { carouselLayoutStyle } from "./layout";
import type { FeaturedBannerItem } from "./types";

type FeaturedBannerFrameProps = Omit<ComponentProps<"div">, "style" | "onSelect"> & {
  banners: FeaturedBannerItem[];
  selectedIndex: number;
  leftIndex: number;
  rightIndex: number;
  backdropFade?: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSelectBanner: (index: number) => void;
  stageProps?: ComponentProps<"div">;
};

/** Moldura comum às variantes: fundo, palco (children), dots e legenda. */
export function FeaturedBannerFrame({
  banners,
  selectedIndex,
  leftIndex,
  rightIndex,
  backdropFade = false,
  onPrevious,
  onNext,
  onSelectBanner,
  stageProps,
  children,
  ...wrapperProps
}: FeaturedBannerFrameProps) {
  const hasMultipleBanners = banners.length > 1;

  return (
    <div style={carouselLayoutStyle} {...wrapperProps}>
      <div className="relative" {...stageProps}>
        {hasMultipleBanners && (
          <FeaturedBannerBackdrop
            banners={banners}
            leftIndex={leftIndex}
            rightIndex={rightIndex}
            fade={backdropFade}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        )}
        {children}
      </div>

      {hasMultipleBanners && (
        <FeaturedBannerDots
          banners={banners}
          selectedIndex={selectedIndex}
          onSelect={onSelectBanner}
        />
      )}

      <FeaturedBannerCaption banner={banners[selectedIndex]} />
    </div>
  );
}
