"use client";

import type { ReactNode } from "react";

import { FeaturedBannerStageCard, type Slot } from "./featured-banner-stage-card";
import { ADVANCE_MS, RETREAT_MS } from "./layout";
import type { FeaturedBannerItem } from "./types";
import type { StackTransition } from "./use-stack-transition";

type FeaturedBannerStageProps = {
  banners: FeaturedBannerItem[];
  index: number;
  transition: StackTransition | null;
  ariaLabel: string;
  children?: ReactNode;
};

/** Slot lateral para onde o cartão central recua (ou de onde o próximo vem). */
function sideSlot(direction: StackTransition["direction"], phase: StackTransition["phase"]): Slot {
  if (phase === "retreat") return direction === "next" ? "left" : "right";
  return direction === "next" ? "right" : "left";
}

export function FeaturedBannerStage({
  banners,
  index,
  transition,
  ariaLabel,
  children,
}: FeaturedBannerStageProps) {
  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      className="relative z-10 mx-auto aspect-video w-[var(--slide-width)]"
    >
      {!transition && (
        <FeaturedBannerStageCard
          key={`idle-${index}`}
          banner={banners[index]}
          slot="center"
          durationMs={0}
          interactive
          preload={index === 0}
        />
      )}

      {transition?.phase === "retreat" && (
        <FeaturedBannerStageCard
          key={`retreat-${transition.from}`}
          banner={banners[transition.from]}
          slot={sideSlot(transition.direction, "retreat")}
          enterFrom="center"
          durationMs={RETREAT_MS}
          interactive={false}
        />
      )}

      {transition?.phase === "advance" && (
        <FeaturedBannerStageCard
          key={`advance-${transition.to}`}
          banner={banners[transition.to]}
          slot="center"
          enterFrom={sideSlot(transition.direction, "advance")}
          durationMs={ADVANCE_MS}
          interactive={false}
        />
      )}

      {children}
    </div>
  );
}
